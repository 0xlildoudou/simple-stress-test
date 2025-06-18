# Simple Stress Test

## Tech
* Test App: Basic API with Hono
* Stress App: Grafana k6

## Usage

Setup API test container
```shell
docker compose up -d
```

Start k6 stress test
```shell
URL=http://127.0.0.1:3000 k6 run K6/k6.js
```
