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

3. **Botão de Atualização (Refresh):**
   - Implemente um botão que permita ao usuário atualizar a lista de citações, fazendo uma nova chamada à API e exibindo um novo conjunto de 10 citações.

4. **Responsividade:**
   - Certifique-se de que a aplicação seja totalmente responsiva, proporcionando uma boa experiência tanto em dispositivos móveis quanto em desktops.

5. **Testes Unitários e de Aceitação:**
   - **Testes Unitários:** Implemente testes unitários para os componentes, serviços, e outras funcionalidades essenciais da aplicação, garantindo que o código esteja coberto por testes automatizados.
   - **Testes de Aceitação:** Implemente testes de aceitação para verificar se a aplicação atende aos requisitos funcionais definidos, testando a interação entre diferentes componentes e a integração com a API.

   - Utilize ferramentas como **Jasmine** e **Karma** (já configuradas em projetos Angular) para os testes unitários.
   - Para testes de aceitação, você pode utilizar **Protractor** ou **Cypress** (opcional).

## Instruções de Configuração e Execução

1. **Clone o Repositório:**
   - Clone o repositório para sua máquina local utilizando o comando:
     ```bash
     git clone https://github.com/seu-usuario/seu-repositorio.git
     ```

2. **Instale as Dependências:**
   - Navegue até o diretório do projeto e execute:
     ```bash
     npm install
     ```

3. **Inicie o Servidor de Desenvolvimento:**
   - Inicie o servidor de desenvolvimento Angular com o comando:
     ```bash
     ng serve
     ```
   - Acesse a aplicação no navegador em `http://localhost:4200`.

4. **Executar Testes:**
   - Para rodar os testes unitários, utilize:
     ```bash
     ng test
     ```
   - Para rodar os testes de aceitação (caso tenha implementado), utilize:
     ```bash
     ng e2e
     ```

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
- **Testes:** A aplicação possui uma cobertura adequada de testes unitários e de aceitação?
- **Uso do Git:** O uso do Git (commits, branches, PR) está organizado e segue boas práticas?

---
