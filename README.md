# Sistema de Chamados

CRUD de chamados (projeto de Programação Web/Mobile II).

- **backend/**: API REST com Node, Express, Sequelize e PostgreSQL (Swagger em `/api-docs`)
- **frontend/**: interface em React + Vite

## Como rodar

### Backend (porta 3000)
```bash
cd backend
npm install
# criar o arquivo .env com: DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, PORT
npm run dev
```
A tabela `chamado` é criada automaticamente.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Rotas da API

| Método | Rota             | Ação              |
|--------|------------------|-------------------|
| GET    | `/chamados`      | Listar            |
| GET    | `/chamados/:id`  | Buscar um         |
| POST   | `/chamados`      | Cadastrar         |
| PUT    | `/chamados/:id`  | Atualizar         |
| DELETE | `/chamados/:id`  | Excluir           |
