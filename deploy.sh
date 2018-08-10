echo "zypher.tech" > app/CNAME
git branch
git branch -D gh-pages
git push origin --delete gh-pages

git add app && git commit -m "Initial dist subtree commit"

git branch gh-pages
git subtree push --prefix app origin gh-pages
