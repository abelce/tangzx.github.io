import React from "react";
import Viewer from "viewerjs";
import Style from "./style.scss";
import { imagePath } from "../../utils";

class Images extends React.Component {
  images = null;
  componentDidMount() {
    this.images = new Viewer(document.getElementById("images"), {
      url(image) {
        // return imagePath(image.src.replace(/\?imageView2.*/, '?imageView2/2/h/900/interlace/1/q/90'));
        return imagePath(image.src);
      },
    });
  }

  componentWillUnmount() {
    this.images && this.images.destroy();
  }

  handleSwitch = (index) => {
    const container = document.querySelector("#canvas > ol");
    const images = document.querySelectorAll("#canvas > ol li");
    const width = [...images].slice(0, index).reduce((total, item) => {
      return total + item.scrollWidth;
    }, 0);
    container.scrollLeft = width;
  };

  render() {
    const { images } = this.props;
    return (
      <div className={Style.images}>
        <div id="canvas" className={Style.canvas}>
          <ol id="images">
            {images.map((image, index) => (
              <li key={index} id={`t_${index}`}>
                <img src={`${imagePath(image.src)}`} />
              </li>
            ))}
          </ol>
        </div>
        <div className={Style.thumbnails}>
          {images.map((image, index) => (
            <div key={index} className={Style.thumbnail} onClick={() => this.handleSwitch(index)}>
              <a href={`#t_${index}`}>
                <img src={`${imagePath(image.src)}`} lazy={"true"} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Images;
