# add keys
ssh-add -K ~/.ssh/fca

# abort on errors
set -e

# build
rm -rf dist
cp ./README.md ./public/README.md
npm run build
cp ./dist/icons/apple-touch-icon-180x180.png ./dist/apple-touch-icon-180x180.png
cp ./dist/icons/maskable-icon-512x512.png ./dist/maskable-icon-512x512.png

# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'page.mydomain.com' > CNAME

# setup git
git init
git config user.email "192922111+FCA-Official@users.noreply.github.com"
git config user.name "FCA Official"
git add -A
git commit -m 'deploy'

# deploy to github
git push -f git@fca:fca-official/fca-official.github.io.git main:gh-pages

cd -