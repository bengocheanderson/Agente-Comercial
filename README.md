# Agente Comercial

Plataforma SaaS multiempresa planejada para agentes comerciais com inteligência artificial, atendimento pelo WhatsApp e gestão comercial. O backend está sendo estruturado para crescer de forma modular.

## Estado atual

O backend disponibiliza `GET /`, que retorna `200` e `{"status":"ok","message":"API is running"}`. As pastas de módulos existem como estrutura inicial, mas ainda não implementam as funcionalidades de negócio. Banco de dados, autenticação, integração com WhatsApp e frontend ainda não foram implementados.

## Tecnologias

- Backend: Node.js, Express e TypeScript.
- Dados planejados: Supabase, PostgreSQL e Prisma.
- Frontend futuro: Next.js, React e TypeScript.
- Versionamento: Git e GitHub.
- Assistência de desenvolvimento: GitHub Copilot.

## Pré-requisitos

- Node.js `>=22 <23`.
- npm compatível com a versão instalada do Node.js.

## Executar localmente

Na raiz do projeto:

```sh
npm ci
npm run dev
```

O servidor usa a variável `PORT` quando definida; caso contrário, usa a porta `3000`. O arquivo `.env.example` contém um exemplo. Copie-o para `.env` se desejar configurar variáveis localmente; `.env` não deve ser versionado.

Teste `GET /` em outro terminal:

```sh
curl -i http://localhost:3000/
```

## Compilar e executar

```sh
npm run build
npm start
```

A compilação TypeScript é gerada em `dist/`, que não deve ser versionada.

## Documentação técnica

- [Arquitetura](docs/ARCHITECTURE.md)
- [Regras de negócio](docs/BUSINESS_RULES.md)
- [Dados e banco de dados](docs/DATABASE.md)
- [API](docs/API.md)
- [Desenvolvimento e contribuição](docs/DEVELOPMENT.md)
- [Roadmap](docs/ROADMAP.md)
- [Decisões arquiteturais](docs/DECISIONS.md)

Mudanças futuras em funcionalidades, arquitetura, API ou banco de dados devem atualizar o documento correspondente junto com a implementação.
