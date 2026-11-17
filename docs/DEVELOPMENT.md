# Desenvolvimento

## Ambiente

- Node.js `>=22 <23`.
- npm.
- Git para versionamento.

O arquivo `.env.example` documenta a variável `PORT`. Para configuração local, use um arquivo `.env`, que é ignorado pelo Git e não deve conter valores versionados.

## Instalação e execução

Na raiz do projeto:

```sh
npm ci
npm run dev
```

O script de desenvolvimento usa `tsx watch` para executar o servidor TypeScript e reiniciá-lo após alterações em arquivos acompanhados.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Executa o backend em modo de desenvolvimento. |
| `npm run build` | Verifica e compila os arquivos TypeScript para `dist/`. |
| `npm start` | Executa a versão compilada em `dist/`; requer `npm run build` antes. |

Ainda não há script ou suíte de testes automatizados configurados. Até que sejam adicionados, valide alterações no servidor compilando o projeto e conferindo `GET /` conforme [API](API.md).

## Orientações para contribuir

- Mantenha a implementação alinhada às tecnologias e decisões registradas em [Decisões arquiteturais](DECISIONS.md).
- Não adicione credenciais, arquivos `.env` ou dados reais de clientes ao repositório.
- Não trate pastas de módulos planejados como funcionalidades já implementadas.
- Toda alteração de funcionalidade deve atualizar as regras de negócio e o roadmap quando pertinente; alterações de arquitetura, API ou banco de dados devem atualizar seus documentos correspondentes na mesma mudança.
- Respeite o requisito de isolamento entre empresas; não introduza acesso a dados sem definir e validar o escopo da empresa.
