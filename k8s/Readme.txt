
### Start Api Nest (Abrir um terminal)
```sh
kubectl apply -f api-deployment.yaml,api-service.yaml
kubectl expose -f api-deployment.yaml
kubectl port-forward service/api-service 3000
```

### Start App React (Abrir outro terminal)

```sh
kubectl apply -f app-deployment.yaml,app-service.yaml
kubectl expose -f app-deployment.yaml
kubectl port-forward service/app-service 3001:3000
```

Acessar http://localhost:3001