# Regras de negócio

Este documento registra requisitos já estabelecidos. As regras listadas ainda não estão implementadas no backend.

## Multiempresa e propriedade dos dados

- A plataforma atenderá várias empresas.
- Cada empresa terá seus próprios produtos, estoque, clientes, compras, interesses, campanhas e conversas.
- Os dados de uma empresa não podem ser expostos nem usados no contexto de outra empresa. O isolamento rigoroso entre empresas é obrigatório.

## Atendimento com IA

- A IA não pode inventar preços, quantidades em estoque ou disponibilidade de produtos.
- As respostas devem respeitar os dados comerciais disponíveis; a implementação ainda precisa definir como agir quando esses dados estiverem ausentes ou desatualizados.

## Transferência para atendimento humano

- Deve existir transferência da conversa para atendimento humano.
- Quando uma pessoa assumir o atendimento, as respostas automáticas da IA devem ser interrompidas para aquela conversa enquanto o humano estiver no controle.
- O mecanismo de retomada da automação após o atendimento humano ainda não foi definido.

## Regras ainda não especificadas

Políticas de preços e descontos, fluxo de compras e vendas, gestão de estoque, papéis de usuários e critérios para transferir uma conversa não estão definidos neste estágio. Não devem ser presumidos como funcionalidades existentes.
