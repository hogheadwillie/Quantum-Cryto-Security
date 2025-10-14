.PHONY: up down build logs test
up:
	docker compose up -d --build

down:
	docker compose down -v

build:
	docker compose build

logs:
	docker compose logs -f --tail=100

test:
	pytest -q
