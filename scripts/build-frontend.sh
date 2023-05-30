# pnpm fetch
# pnpm install -r --offline
pnpm build:frontend
cd ./packages/frontend
tar zcf todo-frontend.tar.gz ./dist
mv ./todo-frontend.tar.gz ../../todo-frontend.tar.gz