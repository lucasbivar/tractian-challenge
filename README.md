<div align="center">
    <img style="background-color: #181842; padding: 10px" src="https://blog.tractian.com/wp-content/uploads/Capa-tractian.png" width="100%" />
    <br/>
    <h1>
        <b>TRACTIAN CHALLENGE</b><br>
    </h1>
    <h4>
        Desafio Técnico do Processo Seletivo de Front-End Software Engineer
    </h4> 
    
</div>

---

<h2 id="conteudos">Conteúdos</h2>

[➜ Sobre o projeto](#sobre-o-projeto)<br>
[➜ Interface](#interfaces)<br>
[➜ Como rodar na sua máquina](#como-rodar-na-sua-máquina)<br>

---

## Sobre o projeto

<sup>[Voltar ao topo](#conteudos)</sup><br>

Vídeo gravado demonstrando à aplicação: https://www.loom.com/share/0c4940c3992449b9bd005586482e9d88?sid=b052f734-53f2-4e84-a772-1be0c6f832e6

O objetivo do desafio técnico é construir um Front-End responsivo mostrando todos os dados possíveis da [Fake API](https://github.com/tractian/fake-api), utilizando React, Highcharts e TypeScript.

Para ver o funcionamento do Front-End não é necessário rodar o código na sua máquina, uma vez que o mesmo já está hospedado (Se tiver interesse em rodar, siga o [tutorial](#como-rodar-na-sua-máquina) no fim do README). Link do resultado final do desafio já hospedado:

- Front-end: 
  - https://tractian-challenge-lucasbivar.vercel.app/

---

### ➡ Tecnologias Utilizadas no Front-End
-   [x] TypeScript
-   [x] Vite
-   [x] ReactJS
-   [x] React Router
-   [x] Chakra UI
-   [x] Highcharts
-   [x] Axios (HTTP Client)
-   [x] React Query
-   [x] Framer Motion
-   [x] ESLint
-   [x] Prettier
-   [x] Vercel - Deploy

---

### ➡ Funcionalidades
A aplicação possui as seguintes funcionalidades:

- [x] Visualizar informações sobre **Ativos**, **Ordens de Serviço** e **Unidades** na tela de **Overview**
- [x] Listar, Buscar, Criar, Editar, Apagar e Visualizar o perfil individual das **Companhias**
- [x] Listar, Buscar, Criar, Editar, Apagar e Visualizar o perfil individual das **Unidades**
- [x] Listar, Buscar, Criar, Editar, Apagar e Visualizar o perfil individual dos **Ativos**
- [x] Listar, Buscar, Criar, Editar, Apagar e Visualizar as **Ordens de Serviço**
- [x] Listar, Buscar, Criar, Editar e Apagar **Usuários**

---

## Interfaces

<sup>[Voltar ao topo](#conteudos)</sup><br>

### Overview
![](https://i.imgur.com/DhKwwFV.png)

### Companies
![](https://i.imgur.com/kqUR5J2.png)

### Company Profile
![](https://i.imgur.com/ulZIepe.png)

### Units
![](https://i.imgur.com/SIVAP3m.png)

### Unit Profile
![](https://i.imgur.com/SobyXeR.png)

### Assets
![](https://i.imgur.com/dT3VJ4L.png)

### Asset Profile
![](https://i.imgur.com/GXHtUCq.png)

### Work Orders
![](https://i.imgur.com/pJEpoU7.png)

### Users
![](https://i.imgur.com/7DKX9g7.png)

---

## Como rodar na sua máquina


<sup>[Voltar ao topo](#conteudos)</sup><br>

Para testar essa aplicação na sua máquina você precisa atender aos requisitos:

- Clonar o repositório do Front (necessário ter o git instalado)
  - No terminal, digitar:
    ```bash 
    # Clonando repositório
    $ git clone https://github.com/lucasbivar/tractian-challenge.git 

    # Entrando na pasta do projeto
    $ cd tractian-challenge
    ```

- Instalar dependências do projeto (necessário ter o yarn):
  - No terminal da pasta raiz do projeto, digitar:
    ```bash 
    $ yarn install
    ```

- Criar um arquivo `.env` na raiz do projeto contendo a estrutura abaixo:
  ```env
  VITE_APP_API_URL="https://my-json-server.typicode.com/tractian/fake-api"
  ```

- Executar o Front-end:
  - No terminal da pasta raiz do projeto, digitar:
    ```bash
    $ yarn run dev
    ```

  - O Front-end será executado na porta 5173 por padrão, para abrir você pode utilizar a seguinte URL:
    - http://localhost:5173/

---

<div>
  <sub>Made with 💙 by <a href="https://github.com/lucasbivar">Lucas Bivar</a></sub>
</div>