# Arquitetura

## Estado atual

O projeto é um backend Node.js com Express e TypeScript. `src/server.ts` configura o Express, ativa o middleware JSON, registra `GET /` e inicia o servidor. A aplicação ainda não tem camadas de persistência, autenticação ou módulos de negócio implementados.

## Organização

- `src/server.ts`: ponto de entrada do servidor HTTP.
- `src/modules/`: pastas reservadas aos domínios do produto. Atualmente contêm apenas arquivos `.gitkeep`.
- `dist/`: saída gerada pelo compilador TypeScript; não deve ser editada manualmente nem versionada.
- `tsconfig.json`: configuração de compilação e verificação de tipos.
- `docs/`: documentação técnica e de produto.

## Responsabilidades do backend

O backend atual responde à rota raiz. A estrutura modular foi preparada para receber os domínios comerciais e integrações, mas a criação dessas funcionalidades ocorrerá em etapas futuras. Não há conexão com banco de dados, autenticação, regras de autorização ou integração externa implementadas.

## Visão futura

A arquitetura aprovada prevê Express e TypeScript no backend, Supabase com PostgreSQL e Prisma para persistência, e Next.js com React e TypeScript para o frontend futuro. As pastas planejadas representam domínios como empresas, usuários, catálogo, estoque, clientes, compras, interesses, campanhas, conversas, vendas, transferência para atendimento humano, IA e WhatsApp.

O produto será multiempresa: cada empresa terá seus próprios dados comerciais e o isolamento entre empresas é um requisito. O mecanismo de autenticação, autorização, segregação no banco e políticas de acesso ainda precisa ser projetado e implementado; não se deve considerar esse isolamento já garantido pela estrutura atual.

Consulte [Dados e banco de dados](DATABASE.md) para entidades planejadas e [Decisões arquiteturais](DECISIONS.md) para tecnologias aprovadas.
