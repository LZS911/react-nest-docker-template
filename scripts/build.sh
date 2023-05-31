# pnpm fetch
# pnpm install -r --offline

# backend
docker-compose -f docker-compose.server.yaml stop && docker-compose -f docker-compose.server.yaml up --build -d --remove-orphans

# frontend
pnpm build:frontend
cd ./packages/frontend
tar zcf todo-frontend.tar.gz ./dist
mv ./todo-frontend.tar.gz ../../todo-frontend.tar.gz