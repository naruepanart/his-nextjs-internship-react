# HIS

## Getting Started

```
npm install && npm run dev
```
```
http://localhost:3000
```

or 

```
docker build -t react-docker-app .
docker run -p 3000:3000 react-docker-app
```

Stop and remove all containers
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

Remove all images
```
docker rmi $(docker images -a -q)
```

