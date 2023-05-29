pnpm fetch
pnpm install -r --offline
pnpm build:frontend
tar zcf todo-frontend.tar.gz ./packages/frontend/dist