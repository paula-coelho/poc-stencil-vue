# POC Stenciljs - Wrapper Vue

Este é um exemplo de um formulário simples em Vue.js que utiliza os componentes criados em Stenciljs para o [Padrão Digital de Governo](https://www.gov.br/ds/home).

O objetivo desta POC é experimentar, validar e entender possíveis desafios ao integrar esses componentes com o framework Vue.js e como superá-los.

- Repositório disponível em: [govbr-ds-wc-lerna]
<https://gitlab.com/govbr-ds/experimentos/govbr-ds-wc-lerna>

- Documentação: [Componentes](https://gitlab.com/govbr-ds/experimentos/govbr-ds-wc-lerna/-/tree/main/apps/site/docs/components)

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório para sua máquina local:

```terminal
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências:

```terminal
npm install
```

ou

```terminal
yarn install
```

3. Inicie o servidor de desenvolvimento:

```terminal
npm run dev
```

4. Abra seu navegador e visite `http://localhost:5173/` para visualizar o formulário.

## Componentes Utilizados

O formulário utiliza os seguintes componentes Vue:

- br-button: Botões para diferentes ênfases e tamanhos.
- br-input: Campos de entrada de texto com suporte para diferentes tipos.
- br-checkbox: Caixas de seleção para opções múltiplas.
- br-list: Lista para exibir itens com opções selecionáveis.
- br-textarea: Área de texto para entrada de texto longo.

### Funcionalidades

- Envio de Dados do Formulário: Após o preenchimento correto do formulário, os dados são enviados e exibidos na parte inferior da página.
- As regras de validação foram implementadas diretamente nos métodos do componente Vue.
- Exibição das Mensagens de Erro: As mensagens de erro são exibidas condicionalmente com base no estado de validação dos campos, verificadas diretamente nos métodos do componente Vue.

Este é apenas um exemplo básico de como criar e manipular um formulário em Vue.js. Sinta-se à vontade para modificar e expandir conforme necessário para atender às suas necessidades específicas.
