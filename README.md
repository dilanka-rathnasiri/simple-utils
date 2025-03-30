# Simple Utils

A simple set of utils for day-to-day use

Tools:

1) Simple Web Server
2) SSE Server

---

## 1) Simple Web Server

* A simple web server written in node.js
* This image is only for testing
* The server port can be passed as an environment variable
* If the server port isn't specified, 3000 will be used as the server port

#### Pull Docker Image

```shell
docker pull dilankarathnasiri/simple-web-server:latest
```

#### Run Docker Image

```shell
docker run -p {{server port}}:{{server port}} --name {{docker container name}} --env SERVER_PORT={{server port}} dilankarathnasiri/simple-web-server:latest
```

e.g.,

```shell
docker run -p 5000:5000 --name web-server-container --env SERVER_PORT=5000 dilankarathnasiri/simple-web-server:latest
```

---

## 2) SSE Server

* A simple server sent events server written in node.js
* Tech stack: Node.js | Typescript | Express.js

#### Start In Development Mode

```shell
npm run dev
```

#### Compile The Typescript Code

```shell
npm run build
```

#### Start The SSE Server

```shell
npm start
```
