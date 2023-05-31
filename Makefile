local: 
	docker-compose stop && docker-compose up --build -d --remove-orphans
build-server:
	docker-compose -f docker-compose.server.yaml stop && docker-compose -f docker-compose.server.yaml up --build -d --remove-orphans
  