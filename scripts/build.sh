pnpm fetch
pnpm install -r --offline

# backend
docker-compose -f docker-compose.server.yaml stop && docker-compose -f docker-compose.server.yaml up --build -d --remove-orphans

# frontend
pnpm build:frontend
cd ./packages/frontend
tar zcf todo-frontend.tar.gz ./dist
mv ./todo-frontend.tar.gz ../../todo-frontend.tar.gz

# remove <none> images
if [ -n "$(docker images -q -f dangling=true)" ]; 
then docker rmi $(docker images -q -f dangling=true); 
fi