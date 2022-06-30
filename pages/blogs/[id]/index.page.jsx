import React from 'react'
import Post from './post'
import Latset from '~/components/latest'
import http from '~/http'
import { FormatBlog, FormatListBlog } from '~/domain/blog'
import Head from 'next/head'
import Style from './style.module.scss'
// import Comments from "../../components/comment";
import { inject, observer } from 'mobx-react'
import { SITE_NAME } from '~/utils'
import { GiscusComment } from '~/components/GiscusComment'
import { Request } from '~/http/request'

@inject('userStore', 'productStore')
@observer
class Blog extends React.Component {
  render () {
    const { data, url, userStore } = this.props
    if (!data) {
      return null
    }
    return (
      <div className={Style.detail_container}>
        <Head>
          <title>
            {data.name} - {SITE_NAME}
          </title>
          <meta name='keywords' content={(data?.tags || []).join(',')} />
          <meta property='og:title' content={`${data.name} - ${SITE_NAME}`} />
          <meta property='og:url' content={url} />
        </Head>
        <div className={Style.content}>
          <Post data={data} currentUser={userStore.currentUser} />
          <section className={Style.comments}>
            <GiscusComment />
          </section>
        </div>
        <Latset />
      </div>
    )
  }
}

export async function getStaticProps (context) {
  const id = context.params.id
  const res = await http({
    method: 'post',
    url: `/graphql/checkless`,
    data: {
      query: `{
        Article(id: "${id}") {
          id
          name
          content
          description
          isDeleted
          createTime
          updateTime
          likeCount
          viewCount
          operatorID
          tags
        }
      }
      `
    }
  })
  const data = FormatBlog(res.data.Article)
  return {
    props: { data, id }
  }
}

export async function getStaticPaths () {
  const res = await Request.getArticleList({
    pageNo: 0,
    pageSize: 9999
  })

  const blogs = res.data['Article'].data.map(dt => FormatListBlog(dt))
  const paths = blogs.map(blog => ({
    params: { id: blog.id }
  }))

  return {
    paths: paths,
    fallback: true // false or 'blocking'
  }
}

export default Blog
