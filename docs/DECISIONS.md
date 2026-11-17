# Decisões arquiteturais

Este registro separa decisões aprovadas do estado implementado. Decisões não significam que as funcionalidades correspondentes já existam.

## Tecnologias aprovadas

| Área | Decisão | Situação |
| --- | --- | --- |
| Backend | Node.js, Express e TypeScript | Backend inicial migrado para TypeScript; endpoint básico implementado. |
| Banco de dados | Supabase e PostgreSQL, com Prisma como ORM | Aprovado para uso futuro; ainda não configurado. |
| Frontend | Next.js, React e TypeScript | Aprovado para etapa futura; não implementado. |
| Versionamento | Git e GitHub | Aprovado; o projeto possui repositório Git. |
| Assistência de desenvolvimento | GitHub Copilot | Aprovado. |

## Decisões de implementação atuais

- Manter o backend modular sob `src/modules/`, sem antecipar implementação de módulos vazios.
- Compilar TypeScript de `src/` para `dist/`; arquivos gerados não devem ser versionados.
- Usar `tsx watch` no desenvolvimento e `tsc` para compilar.
- Preservar o endpoint raiz existente e sua resposta durante a migração.

## Requisitos de produto estabelecidos

- A plataforma será SaaS multiempresa; cada empresa terá seus próprios dados comerciais e deve haver isolamento rigoroso entre empresas.
- A IA não pode inventar preços, quantidades ou disponibilidade.
- Ao assumir uma conversa, o atendimento humano deve interromper as respostas automáticas da IA enquanto estiver no controle.

O detalhamento desses requisitos está em [Regras de negócio](BUSINESS_RULES.md). A implementação de autenticação, isolamento e integração ainda é futura.

## Manutenção das decisões e documentação

Novas decisões ou mudanças nas decisões devem ser registradas aqui. Alterações de funcionalidades, arquitetura, API ou banco de dados devem atualizar também a documentação correspondente junto com o código.
