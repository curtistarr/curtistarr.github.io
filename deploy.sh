#!/bin/zsh

set -e
yarn run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/tarrcurtis/tarrcurtis.github.io.git main:gh-pages
