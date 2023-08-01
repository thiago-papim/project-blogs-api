# Blogs API

Feito por [Thiago Papim](https://www.linkedin.com/in/thiago-papim/)


## Sobre o Projeto 📝
 
O Blogs API é um avançado sistema de gerenciamento de posts e usuários! 📖 Nele, os usuários podem realizar diversas ações, como criar, ler, atualizar e deletar posts, tudo isso com a segurança de um sistema de login, onde somente o usuário que criou o post tem permissão para deletá-lo ou atualizá-lo.<br>

O projeto foi cuidadosamente desenvolvido para aprofundar o conhecimento em Sequelize, aproveitando o melhor das ferramentas disponíveis. Com essa poderosa API, os usuários podem expressar suas ideias e compartilhar suas histórias de forma interativa e amigável.<br>

Além disso, o sistema possui uma interface intuitiva que torna a navegação e o gerenciamento dos posts uma experiência prazerosa. Com o uso eficiente das tecnologias mencionadas, o Blogs API garante uma performance sólida e estável, permitindo o crescimento contínuo do número de usuários e posts sem comprometer a qualidade e a segurança.<br>

Seja você um blogueiro experiente ou alguém que está iniciando no mundo dos blogs, o Blogs API é a ferramenta ideal para expressar suas ideias, conectar-se com outros usuários e compartilhar conhecimento com o mundo! 🚀

## Ferramentas e Habilidades utilizadas ⚙️
- Node.js
- MySQL
- Sequelize
- Express
- Docker
- Arquitetura de software MSC

 ## Como Executar o Projeto ✅
> 👀 Necessário ter o docker e o docker-compose instalados em sua máquina.
<details><summary><strong>Passo a passo</strong></summary><br/>


1. Clone o repositório
```
git clone git@github.com:thiago-papim/project-blogs-api.git
```
2. Subir os containers<br>
Iremos subir 2 containers no total, sendo eles backend e database
```
docker-compose up -d --build 
```
3. Acessar o container do backend
```
docker exec -it blogs_api bash
```
4. Criar e popular o banco de dados<br>
```
npm run predev
```
5. Criar e popular o banco de dados<br>
```
npm run seed
```
6. Criar e popular o banco de dados<br>
```
npm run dev
```

Com isso estará funcionando.

</details>

 ## Endpoints 🔽
<h2>Login</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/login` | `POST` | Realizar login de um usuário já cadastrado |

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "email": "teste@gmail.com",
  "password": "123456"
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>
O resposta da requisição tem que ser um token com status 200:<br>
Exemplo de retorno:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWxzIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMzg1MzAzfQ.iVsAT1dlUMQsexBEi-t8qPqAzD0wi-tME0nVWR80BS0"
}
```
</details>

<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso nenhum dos campos email ou password sejam preenchidos:

```
{
	"message": "Some required fields are missing"
}
```

Caso tenha email ou senha inválidos:

```
{
	"message": "Invalid fields"
}
```
</details>

</details>

<!-- TOKEN -->

<h2>Autenticação de Token</h2>
<details><summary><strong>Funcionamento</strong></summary><br/>

`Realizando um login com sucesso, será gerado um token. Esse token será a autenticação em algumas rotas que estarão marcadas.`

Basta na requisição colocar na chave Authorization o Bearer juntamente ao token: 

Exemplo com chave fictícia:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWxzIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMzg1MzAzfQ.iVsAT1dlUMQsexBEi-t8qPqAzD0wi-tME0nVWR80BS0
```
<details><summary><strong>Caso não tenha a chave Authorization ou não tenha um token declarado</strong></summary><br/>
Tem status o 401 e a resposta da requisição:

```
{
	"message": "Token not found"
}
```
</details>

<details><summary><strong>Caso o token seja inválido</strong></summary><br/>
Tem status o 401 e a resposta da requisição:

```
{
	"message": "Token must be a valid token"
}
```

</details>

</details>

<!-- USERS -->

<h2>User</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/user` | `POST` | Cadastrar novo usuário |

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "displayName": "Thiago Papim",
  "email": "teste@gmail.com"
  "password": "123456",
  "image": "https://avatars.githubusercontent.com/t/6799558?s=16&v=4.png"
}
```
  `A IMAGEM NÃO É OBRIGATÓRIA`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem que ser um token com status 201.<br>
Exemplo de retorno:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWxzIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkwMzg1MzAzfQ.iVsAT1dlUMQsexBEi-t8qPqAzD0wi-tME0nVWR80BS0"
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso displayName seja menor que 8 caracteres:

```
{
	"message": "\"displayName\" length must be at least 8 characters long"
}
```

Caso tenha email esteja em formato inválido:

```
{
	"message": "\"email\" must be a valid email"
}
```
Caso password seja menor que 6 caracteres:

```
{
	"message": "\"password\" length must be at least 6 characters long"
}
```

Caso email já tenha sido cadastrado:

```
{
	"message": "User already registered"
}
```
</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/user` | `GET` | Gerar lista de usuários |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 200.<br>
Exemplo de retorno:

```
[
	{
		"id": 1,
		"displayName": "Lewis Hamilton",
		"email": "lewishamilton@gmail.com",
		"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
	},
	{
		"id": 2,
		"displayName": "Michael Schumacher",
		"email": "MichaelSchumacher@gmail.com",
		"image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
	},
    ...
]
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/user/:id` | `GET` | Listar usuário pelo id |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 200.<br>
Exemplo de retorno:

```
[
	{
		"id": 1,
		"displayName": "Lewis Hamilton",
		"email": "lewishamilton@gmail.com",
		"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
	},
	{
		"id": 2,
		"displayName": "Michael Schumacher",
		"email": "MichaelSchumacher@gmail.com",
		"image": "https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg"
	},
    ...
]
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/user/me` | `DELETE` | Deletar usuário logado |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 204.<br>
Não tem retorno

</details>


</details>

<!-- CATEGORIES -->

<h2>Categories</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/categories` | `POST` | Cadastrar nova categoria |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "name": "typeScript"
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 201.
<br>
Exemplo de retorno:

```
{
	"id": 3,
	"name": "typeScript"
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso nao tenha a chave name:

```
{
	"message": "\"name\" is required"
}
```

</details>

##


| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/categories` | `GET` | Gerar lista das categorias |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição status 200.
<br>
Exemplo de retorno:

```
[
	{
		"id": 1,
		"name": "Inovação"
	},
	{
		"id": 2,
		"name": "Escola"
	},
	{
		"id": 3,
		"name": "typeScript"
	}
]
```

</details>

</details>

<!-- POST -->

<h2>Posts</h2>
<details><summary><strong>Rotas</strong></summary><br/>

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post` | `POST` | Cadastrar novo post |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 201.
<br>
Exemplo de retorno:

```
{
	"id": 3,
	"title": "Latest updates, August 1st",
	"content": "The whole text for the blog post goes here in this key",
	"userId": 6,
	"published": "2023-07-28T16:00:26.000Z",
	"updated": "2023-07-28T16:00:26.000Z"
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Caso nao tenha as chaves necessárias no corpo da requisição:

```
{
	"message": "Some required fields are missing"
}
```

</details>

##


| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post` | `GET` | Gerar lista dos posts |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 200.
<br>
Exemplo de retorno:

```
[
	{
		"id": 1,
		"title": "Post do Ano",
		"content": "Melhor post do ano",
		"userId": 1,
		"published": "2011-08-01T19:58:00.000Z",
		"updated": "2011-08-01T19:58:51.000Z",
		"user": {
			"id": 1,
			"displayName": "Lewis Hamilton",
			"email": "lewishamilton@gmail.com",
			"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
		},
		"categories": [
			{
				"id": 1,
				"name": "Inovação"
			}
		]
	},
      ...
]
```
</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post/:id` | `GET` | Listar post pelo id |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem um status 200.<br>
Exemplo de retorno:

```
{
	"id": 1,
	"title": "Post do Ano",
	"content": "Melhor post do ano",
	"userId": 1,
	"published": "2011-08-01T19:58:00.000Z",
	"updated": "2011-08-01T19:58:51.000Z",
	"user": {
		"id": 1,
		"displayName": "Lewis Hamilton",
		"email": "lewishamilton@gmail.com",
		"image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
	},
	"categories": [
		{
			"id": 1,
			"name": "Inovação"
		}
	]
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post/:id` | `PUT` | Alterar post pelo id |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

O corpo da requisição tem que ter a seguinte estrutura:

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição status 200.<br>
Exemplo de retorno:

```
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "published": "2022-05-18T18:00:01.000Z",
  "updated": "2022-05-18T18:07:32.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    }
  ]
}
```

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Somente o user que criou o post pode editá-lo, caso contrário retorna:

```
{
	"message": "Unauthorized user"
}
```

Caso nao tenha as chaves necessárias no corpo da requisição:

```
{
	"message": "Some required fields are missing"
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post/:id` | `DELETE` | Alterar post pelo id |

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 204 e sem retorno.

</details>
<details><summary><strong>Em caso de falha</strong></summary><br/>
Somente o user que criou o post pode deletá-lo, caso contrário retorna:

```
{
	"message": "Unauthorized user"
}
```

Caso nao tenha as chaves necessárias no corpo da requisição:

```
{
	"message": "Some required fields are missing"
}
```

</details>

##

| Endpoint | Método | Funcionalidade |
|---|---|---|
| `/post/search?1=valorBuscado` | `GET` | Buscar post através de query |

A query de busca é referente ao title ou content do post.

`IMPORTANTE: NECESSÁRIO USO DO TOKEN DE AUTENTICAÇÃO`

<details><summary><strong>Em caso de sucesso</strong></summary><br/>

O resposta da requisição tem status 200 e com a lista de posts filtrados.

</details>

</details>


