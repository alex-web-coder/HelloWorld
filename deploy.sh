#!/bin/bash

echo "🚀 Building HelloWorld project with base href /HelloWorld/ ..."

ng build --base-href "https://alex-web-coder.github.io/HelloWorld/"

if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

echo "📦 Deploying to GitHub Pages at https://alex-web-coder.github.io/HelloWorld/ ..."

npx angular-cli-ghpages --dir=dist/helloworld/browser

if [ $? -ne 0 ]; then
  echo "❌ Deploy failed"
  exit 1
fi

echo "✅ Deployed successfully!"