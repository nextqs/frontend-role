# Etapa 1: Construção
FROM node:16-alpine AS build

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila a aplicação Angular
RUN npm run build --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copia os arquivos compilados do Angular para o diretório padrão do Nginx
COPY --from=build /app/dist/<nome-do-seu-projeto> /usr/share/nginx/html

# Exposição da porta 80 para servir a aplicação
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
