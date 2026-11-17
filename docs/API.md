# API

## Convenções atuais

A API usa Express. A rota documentada abaixo é a única implementada neste estágio. Não há autenticação, versionamento de rotas nem contrato de erro geral definidos.

## `GET /`

Verifica a resposta básica do servidor.

- **Método e caminho:** `GET /`
- **Autenticação:** nenhuma.
- **Status:** `200 OK`
- **Corpo JSON:**

```json
{
  "status": "ok",
  "message": "API is running"
}
```

O middleware `express.json()` está configurado globalmente para leitura de corpos JSON em futuras rotas; atualmente não há endpoints que recebam corpo.

## Exemplos

```sh
curl -i http://localhost:3000/
```

A porta padrão é `3000` e pode ser alterada pela variável `PORT`. Nenhuma outra rota ou comportamento deve ser presumido a partir das pastas de módulos planejadas.
