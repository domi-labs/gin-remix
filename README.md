# Gin Remix / GoTypeScript

Dev Server Template for prototyping/MVPs with [Go](https://go.dev/) as server [React Router/React](https://reactrouter.com/) as ui/client


# Requirements

1. [Docker](https://www.docker.com/)


# Getting Started

```bash
docker-compose up --build
```

> First build might take some time, but after that it should be fairly quick

- Visit [localhost:5173](http://localhost:5173) to access the ui
- Visit [localhost:8080](http://localhost:8080) for gin server


# Features

1. hot-reloading* on both gin server via [air](https://github.com/air-verse/air) and react app via [react-router](https://reactrouter.com/)
2. Minimal overhead


# TODO


- [x] Add gin server
- [ ] Add DB server
- [ ] Add redis server
- [ ] SSE (Server Side Events Setup)