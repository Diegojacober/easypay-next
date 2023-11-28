
# EasyPay (Next)

Parte web(front-end) do projeto integrador do 2º semestre do SENAI "Roberto Mange".



## Pastas

- /public - Arquivos publicos que podem ser acessados sem questões de segurança.
- /src - Source da nossa aplicação, todo o conteudo está aqui dentro.
- /src/components - Todos componentes que podem ser utilizados 1 ou mais vezes estão aqui dentro para que possam ser reutilizados.
- /src/pages - Páginas da nossa aplicação, o roteamento dessas páginas é criado automaticamente pelo Next.JS.
- /src/queries/transfer - Queries ou seja requisições que utilizaremos com o react query e faremos a camada de cache da nossa aplicação relacionadas a transferencias de contas.
- /src/services - servicos externos que temos que configurar para a aplicação, neste caso o axios e o react query.
- /src/store - pasta que contem os arquivos para o gerenciamento de estado da aplicação, criado com zustand. 
- src/styles - Estilos gerais da aplicação, configuração de css para paginas e também do styled-componentes
## Funcionalidades

- Cadastrar conta
- Logar na conta
- Exibir transferências em tempo real
- Exibir dólar no dia de hoje
- Atualizar imagem do usuário
- Visualizar dados do usuário cadastrado


## Stack utilizada

[**Front-end:**](https://github.com/Diegojacober/easypay-next) Nexts.JS, React Query, Zustand, Styled-components

[**Back-end:**](https://github.com/Diegojacober/easypay-aws) Django Rest Framework

[**Devops**](http://3.149.244.237/api/docs/): Docker, Nginx, AWS EC2


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Diegojacober/easypay-next.git
```

Entre no diretório do projeto

```bash
  cd easypay-next
```

Instale as dependências

```bash
  npm install
```

Configure a API, entre no arquivo src/services/api.ts e coloque:
```
const api = axios.create({
  baseURL: "http://3.149.244.237/api",
});

``` 

Inicie o servidor

```bash
  npm run dev
```

