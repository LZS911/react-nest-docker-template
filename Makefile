local: 
	docker-compose stop && docker-compose -f docker-compose.yaml up --build -d --remove-orphans && docker rmi $(docker images -f "dangling=true" -q)

build-server:
	docker-compose -f docker-compose.server.yaml stop && docker-compose -f docker-compose.server.yaml up --build -d --remove-orphans
  