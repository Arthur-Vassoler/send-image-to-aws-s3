# Projeto de Envio de Imagem para AWS S3

Este projeto tem como objetivo fornecer uma solução simples para o envio de imagens para o serviço de armazenamento de objetos da AWS, o S3. Com essa solução, é possível fazer o upload de imagens para um bucket específico na sua conta AWS de maneira fácil e rápida.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [AWS CLI](https://aws.amazon.com/cli/)

Também é necessário possuir uma conta AWS e configurar suas credenciais. Você pode encontrar mais informações sobre como configurar as credenciais da AWS [aqui](https://docs.aws.amazon.com/pt_br/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html).

## Instalação

1. Clone o repositório:
    --        
    git clone https://github.com/seu-usuario/nome-do-repositorio.git


### Instale as dependências do projeto:

    npm install

Configure as variáveis de ambiente necessárias. Para isso, crie um arquivo .env na raiz do projeto e adicione as seguintes informações:

### AWS

    AWS_ACCESS_KEY_ID=SUA_ACCESS_KEY_ID_AQUI
    AWS_SECRET_ACCESS_KEY=SUA_SECRET_ACCESS_KEY_AQUI
    BUCKET_AWS=NOME_DO_BUCKET_AQUI
    REGION_AWS=REGIAO_DO_BUCKET

Certifique-se de substituir SUA_ACCESS_KEY_ID_AQUI, SUA_SECRET_ACCESS_KEY_AQUI e NOME_DO_BUCKET_AQUI pelos valores correspondentes de sua conta AWS e do bucket que deseja utilizar.
Uso

### Database

    DB_USER=USUARIO_DO_BANCO_DE_DADOS
    DB_NAME=NOME_DO_BANCO_DE_DADOS
    DB_PASSWORD=SENHA_DO_BANCO_DE_DADOS
    DB_PORT=PORTA_DO_BANCO_DE_DADOS

### Servidor Node

    PORT=PORTA_DO_SERVIDOR_NODE

Após o .env ajustado execute o comando:

### Para o Docker execute:

    docker-compose up

Assim com o PostgreSQL configurado e rodando e com o Servidor Node configurado e rodando:

Para fazer o upload de uma imagem para o S3, basta fazer um Request POST em:

    /send

    Obs:
    Enviando as fotos no request com a key: ' images '.
    Pode ser enviado uma ou mais photos ao mesmo tempo.

Após a conclusão do upload, a imagem estará disponível no bucket configurado.

O caminho das fotos são salvas na tabela 'photo' do Postgres configurado no Docker.

Para deletar uma foto faça um request POST em:

    /send/:filename

Assim a foto é deletada no S3 e no Banco de Dados.

---

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Contato

Se tiver alguma dúvida ou sugestão sobre este projeto, não hesite em entrar em contato através do meu email:
a.h.vassoler@gmail.com

## Author

- [@arthurvassoler](https://www.github.com/Arthur-Vassoler)