#!/bin/bash
npm run export
git --git-dir=../tangzx.github.io/.git reset --hard
git --git-dir=../tangzx.github.io/.git checkout gh-pages
cp -R out/ ../tangzx.github.io
git --git-dir=../tangzx.github.io/.git add .
git --git-dir=../tangzx.github.io/.git commit -m"提交"
git --git-dir=../tangzx.github.io/.git push

