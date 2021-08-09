# TesteBRQ

- A API permite cadastrar, listar, editar e deletar um usuário.
- O script para criar o banco está na pasta Back com o nome `base.sql`

---

## Métodos disponíveis:

### Criar usuário
Método: `POST`
Enpoint: `localhost:5000/api/usuarios`
Retorno: `Retorna o objeto criado`
JSON:
```json
{
  "id": 25,
  "nome": "Kevin Durant",
  "cpf": "37211415771",
  "email": "durant@nba.com",
  "telefone": "970770825",
  "sexo": 1,
  "dataNascimento": "1980-01-01T00:00:00"
}
```
---

### Listar usuário
Método: `GET`
Endpoint: `localhost:5000/api/usuarios`
Retorno: `Retorna uma listagem com todos os usuários`
JSON:
```json
[
  {
    "id": 24,
    "nome": "Lebron James",
    "cpf": "37211495771",
    "email": "lebron@nba.com",
    "telefone": "970770825",
    "sexo": 1,
    "dataNascimento": "1980-01-01T00:00:00"
  },
  {
    "id": 25,
    "nome": "Kevin Durant",
    "cpf": "37211415771",
    "email": "durant@nba.com",
    "telefone": "970770825",
    "sexo": 1,
    "dataNascimento": "1980-01-01T00:00:00"
  }
]
```
---

### Editar usuário
Método: `PUT`
Endpoint: `localhost:5000/api/usuarios/{idUsuario}`
Retorno:: `204 NO CONTENT`

---

### Excluir usuário
Método: `DELETE`
Endpoint: `localhost:5000/api/usuarios/{idUsuario}`
Retorno: `204 NO CONTENT`