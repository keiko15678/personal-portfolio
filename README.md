# personal-portfolio

## Stack

- Typescript via 'nuxt-property-decorators'
- NuxtJS
- Sass
- Docker

## CI/CD Supports

- Github Actions via pushes to master branch (gh-page route not configured, however)
- Dockerhub https://hub.docker.com/layers/132999844/keiko15678/ire/app/images/sha256-982a88f47fa74285782b4bcaad06c8fe5a1756dd8d5531856d6489f74d4e9d8c?context=explore
- Heroku via Dockerhub https://personal-portfolio-irene.herokuapp.com/
- Azure via Azure Container Registry & Azure App Service, static files stored and retrieved via Azure Storage Account https://personal-portfolio.azurewebsites.net/
- Automatic deployments from Github Repo to ACR & automatic pulls from ACR to ASE.
- Forward Proxy for outgoing Http requests (WebSocket also supported).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

## Containerization & Deployment

```bash
# deploy to Heroku via Dockerhub
$ npm run heroku

# deploy to Azure App Service via Azure Container Registy
$ npm run azure

# deploy only files in the '/static' folder to Azure Blob Storage
$ npm run azure:blob

# deploy only the '/static/data.json' file to Azure Blob Storage (updates data without rebuilding the app)
$ npm run azure:data
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
