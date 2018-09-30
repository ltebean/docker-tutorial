make image:
```
cd /user-server
docker build -t user-service .
```

run an image:
```
docker run -p 8081:8081 user-service
```

run in background:
```
docker run -p 8081:8081 -d user-service
```

inspect containers:
```
docker ps
```


stop container:
```
docker container stop <container id>
```

init docker swarm:
```
docker swarm init
```

inspect docker swarm nodes:
```
docker node ls
```

run docker stack in swarm:
```
docker stack deploy -c docker_compose.yml <stack name>
```

inspect service:

```
docker service ls
```

scale service:
```
docker service scale user-service=<instance count>
```

stop stack:
```
docker stack rm <stack name>
```

create machine:
```
docker-machine create \
  --driver generic \
  --generic-ip-address=<ip>  \
  --generic-ssh-key ~/.ssh/id_rsa \
 <machine-name>

```

list machines:
```
docker-machine ls
```

run command in a machine:
```
docker-machine ssh <machine-name> "command"
```

copy image to a machine 
```
docker save user-service | (eval $(docker-machine env <machine-name>) && docker load)
```

