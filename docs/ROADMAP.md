# Roadmap

Os estados descrevem o que existe hoje, não uma previsão de datas.

## Implementado

- Backend inicial Node.js e Express, agora migrado para TypeScript.
- Endpoint `GET /` com resposta `200` e JSON de estado básico.
- Estrutura de pastas reservada aos módulos comerciais.
- Documentação técnica inicial em português.

## Em desenvolvimento

- Nenhuma funcionalidade de negócio está marcada como em desenvolvimento neste momento.

## Planejado

- Definir e implementar módulos comerciais, incluindo empresas, usuários, produtos, categorias, estoque, clientes, compras, interesses, campanhas, conversas e vendas.
- Projetar autenticação e autorização e garantir isolamento rigoroso dos dados por empresa.
- Integrar Supabase/PostgreSQL e Prisma após definição e validação do modelo de dados.
- Implementar atendimento pelo WhatsApp e transferência para atendimento humano, interrompendo respostas automáticas enquanto o humano estiver no controle.
- Integrar IA com regras que impeçam inventar preços, quantidades ou disponibilidade.
- Criar o frontend futuro com Next.js, React e TypeScript.
- Adicionar testes automatizados para rotas, regras comerciais, persistência e isolamento multiempresa.

Os detalhes de dados, API e regras ainda não implementados estão nos documentos [Dados e banco de dados](DATABASE.md), [API](API.md) e [Regras de negócio](BUSINESS_RULES.md).
