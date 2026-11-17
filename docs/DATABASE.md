# Dados e banco de dados

## Estado atual

O banco de dados ainda não foi implementado. O projeto não possui schema Prisma, migrations, cliente de banco, conexão com Supabase ou tabelas PostgreSQL. As entidades abaixo são um inventário inicial derivado dos domínios planejados, não um modelo de dados aprovado em detalhe.

## Entidades planejadas

| Domínio | Entidades ou conceitos iniciais |
| --- | --- |
| Empresas e usuários | Empresa, usuário |
| Catálogo e estoque | Produto, categoria, saldo ou movimentação de estoque |
| Relacionamento comercial | Cliente, compra, interesse |
| Comunicação e marketing | Campanha, conversa |
| Operação de vendas | Venda, transferência para atendimento humano |

Os nomes e relacionamentos definitivos, cardinalidades, campos, estados e regras de retenção ainda precisam ser especificados. IA e WhatsApp são domínios de integração previstos; não há decisão de que correspondam a tabelas específicas.

## Multiempresa e isolamento

Cada empresa deverá ter seus próprios produtos, estoque, clientes, compras, interesses, campanhas e conversas. O isolamento de dados entre empresas é um requisito obrigatório, registrado em [Regras de negócio](BUSINESS_RULES.md).

O desenho futuro deverá definir como cada registro será associado à empresa e como consultas, autorização e políticas do banco impedirão acesso cruzado. A estratégia concreta, inclusive o uso de chaves de empresa e políticas do PostgreSQL/Supabase, ainda não foi decidida nem implementada. Nenhum isolamento pode ser inferido do estado atual.

## Próximos passos de dados

Quando o trabalho de persistência for aprovado, definir o modelo relacional, as relações multiempresa, as restrições e as migrations Prisma; depois, configurar Supabase/PostgreSQL e validar o isolamento com testes. Esses passos são futuros e não fazem parte do estado atual.
