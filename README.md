# Projeto Previsão do Tempo

## Descrição

A aplicação **Previsão do Tempo** permite consultar as condições climáticas de uma cidade, fornecendo informações detalhadas como:
- Temperatura
- Descrição do clima
- Umidade
- Velocidade do vento
- Chance de chuva

O sistema é composto por dois principais componentes:

- **Backend**: Desenvolvido em **Laravel (PHP)**, responsável pela lógica de processamento e integração com a API do OpenWeather.
- **Frontend**: Criado em **React**, que exibe as informações de maneira interativa, incluindo imagens representativas do clima atual.

## 📋 Pré-requisitos

Para rodar a aplicação, você precisa ter as seguintes dependências instaladas em seu ambiente de desenvolvimento:

1. **PHP** (versão 7.3 ou superior) ![PHP](https://img.shields.io/badge/PHP-Active-brightgreen.svg)
2. **Composer** (gerenciador de dependências PHP) ![Composer](https://img.shields.io/badge/Composer-Active-brightgreen.svg)
3. **Laravel** (framework PHP) ![Laravel](https://img.shields.io/badge/Laravel-Active-brightgreen.svg)
4. **Node.js** e **npm** (para rodar o frontend React) ![Node.js](https://img.shields.io/badge/Node.js-Active-brightgreen.svg) ![NPM](https://img.shields.io/badge/NPM-Active-brightgreen.svg)
5. **Bootstrap** (para o layout e design responsivo) ![Bootstrap](https://img.shields.io/badge/Bootstrap-Active-brightgreen.svg)

## 🚀 Como executar o projeto

Siga os passos abaixo para rodar a aplicação localmente:

### Clone o repositório

```bash

git clone https://github.com/TaiOli/PrevisaoTempo.git

```
O repositório esta dividido em dois diretórios: clima-api (backend) e clima-frontend (frontend)

### Acesse  diretório backend clima-api e instale a dependência

```bash

composer install

```

### Acesse o diretório do frontend clima-frontend

```bash

npm install

```

##  Configuração da API OpenWeather

Para que o sistema funcione corretamente, você precisará configurar a chave de API do OpenWeather. Siga os passos abaixo para obter e configurar a chave corretamente.

### Passo 1: Obter a Chave da API

1. Acesse o site do OpenWeather: [https://openweathermap.org/api](https://openweathermap.org/api).
2. Crie uma conta e faça login.
3. Gere uma chave de API para o serviço.
4. Após gerar a chave, copie a chave de API, pois você precisará dela para configurar o sistema.

### Passo 2: Configurar a Chave da API no Código

A chave da API está atualmente **hardcoded** (inserida diretamente) no código-fonte. Para configurar a chave no seu projeto, siga as instruções abaixo:

1. Abra o arquivo `app/Models/Clima.php`.
2. Encontre a constante `CHAVE_API_OPENWEATHER`.

### Passo 3: Substitua o valor pela chave de API que você obteve do OpenWeather.

   Ele ficará no seguinte formato:

```php

const CHAVE_API_OPENWEATHER = 'SUA_CHAVE_API';

```

**Importante!** Para melhorar a segurança e proteger informações, a chave da API do OpenWeather, é recomendado armazená-la no arquivo .env, em vez de deixá-la no código-fonte. Dessa forma, você pode garantir que essa chave não seja compartilhada em repositórios públicos.
Além disso, ao usar o .env, você pode adicionar o arquivo ao .gitignore, o que impede que ele seja versionado no controle de versão, mantendo suas credenciais privadas.

## Rodando o projeto localmente

### Gere uma chave de aplicação

```bash

php artisan key:generate

```

### Inicie o servidor local:

```bash

php artisan serve

```

### Inicie o servidor de desenvolvimento do React:

```bash

 npm start

```

Ao executar o comando php artisan irá iniciar o servidor backend, que estará disponível por padrão em http://localhost:8000.
Quando executar o comando npm start no frontend, o React iniciará no http://localhost:3000.


## Desenvolvedora

Tais Oliveira

