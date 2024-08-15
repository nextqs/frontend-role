# Desafio Frontend - Angular

## Descrição do Desafio

Neste desafio, você deverá desenvolver uma aplicação Angular para exibir uma lista com 10 citações de personagens da série "The Simpsons" utilizando a [The Simpsons API](https://thesimpsonsquoteapi.glitch.me/). O objetivo é avaliar suas habilidades em consumir uma API, manipular dados e desenvolver uma interface de usuário funcional e responsiva.

## Requisitos

1. **Listagem de Citações:**
   - Crie uma página inicial que exiba uma lista com 10 citações diferentes de personagens de "The Simpsons".
   - Para cada citação, exiba as seguintes informações:
     - **Nome do Personagem**
     - **Imagem do Personagem**
     - **Texto da Citação**

2. **Requisição à API:**
   - Utilize a rota `/quotes` da API para buscar as citações. Exemplo de chamada para obter 10 citações: 
     ```
     https://thesimpsonsquoteapi.glitch.me/quotes?count=10
     ```
   - Certifique-se de que a aplicação realiza uma nova chamada à API cada vez que a página é carregada, garantindo que as citações sejam sempre atualizadas.

3. **Responsividade:**
   - Certifique-se de que a aplicação seja totalmente responsiva, proporcionando uma boa experiência tanto em dispositivos móveis quanto em desktops.

### Requisitos Extras (Opcional)

- **Atualizar Citações:**
  - Implemente um botão que permita ao usuário atualizar a lista de citações, fazendo uma nova chamada à API e exibindo um novo conjunto de 10 citações.

- **Favoritos:**
  - Permita que o usuário adicione citações à uma lista de favoritos, armazenada localmente no navegador.

## Instruções de Configuração

1. **Fork do Repositório:**
   - Faça um fork deste repositório para sua conta no GitHub.

2. **Clone o Repositório:**
   - Clone o repositório para sua máquina local utilizando o comando:
     ```bash
     git clone https://github.com/seu-usuario/seu-repositorio.git
     ```

3. **Instale as Dependências:**
   - Navegue até o diretório do projeto e execute:
     ```bash
     npm install
     ```

4. **Inicie o Servidor de Desenvolvimento:**
   - Inicie o servidor de desenvolvimento Angular com o comando:
     ```bash
     ng serve
     ```
   - Acesse a aplicação no navegador em `http://localhost:4200`.

## Entrega

1. **Branch e Pull Request:**
   - Crie uma nova branch com o nome `desafio/<seu-nome>` (exemplo: `desafio/jose-silva`).
   - Após concluir o desafio, envie um Pull Request para o repositório original.

2. **Prazo de Entrega:**
   - O desafio deve ser entregue até [data limite].

3. **Envio Final:**
   - Envie um e-mail para [seu email] com o link do Pull Request.

## Critérios de Avaliação

- **Funcionalidade:** A aplicação atende aos requisitos funcionais especificados?
- **Qualidade do Código:** O código é bem estruturado, organizado e segue boas práticas?
- **Componentização:** A aplicação está devidamente modularizada em componentes Angular?
- **Estilização:** A interface é agradável, bem estilizada e responsiva?
