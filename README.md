<pre>
/compoxport
|-- /apps
|   |-- /compoxport-client        # Angular app
|   |   |-- package.json          # Angular package.json
|   |   |-- Dockerfile-client-dev # Dev Dockerfile for Angular
|   |   |-- Dockerfile-client-prod# Prod Dockerfile for Angular
|   |   |-- src                   # Angular source code
|   |-- /compoxport-server        # NestJS app
|       |-- package.json          # NestJS package.json
|       |-- Dockerfile-server-dev # Dev Dockerfile for NestJS
|       |-- Dockerfile-server-prod# Prod Dockerfile for NestJS
|       |-- src                   # NestJS source code
|-- /docker                       # Centralized Dockerfile folder
|   |-- Dockerfile-client-dev     # (Alternate option: Dockerfile in centralized folder)
|   |-- Dockerfile-client-prod    # (Alternate option: Dockerfile in centralized folder)
|   |-- Dockerfile-server-dev     # (Alternate option: Dockerfile in centralized folder)
|   |-- Dockerfile-server-prod    # (Alternate option: Dockerfile in centralized folder)
|-- docker-compose.dev.yml        # Docker Compose for Development
|-- docker-compose.prod.yml       # Docker Compose for Production
|-- package.json                  # Monorepo root package.json with npm workspaces
|-- .dockerignore                 # Docker ignore file
|-- .env                          # Environment file for development
|-- .env.prod                     # Environment file for production

</pre>