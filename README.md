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

1. **PHP** (versão 7.3 ou superior)
2. **Composer** (gerenciador de dependências PHP)
3. **Laravel** (framework PHP)
4. **Node.js** e **npm** (para rodar o frontend React)

## 🚀 Como executar o projeto

Siga os passos abaixo para rodar a aplicação localmente:

### Clone o repositório

```bash

git clone https://github.com/TaiOli/PrevisaoTempo.git

```
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

### Substitua o valor pela chave de API que você obteve do OpenWeather.

   Ele ficará no seguinte formato:

```php

const CHAVE_API_OPENWEATHER = 'SUA_CHAVE_API';

```

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

Isso iniciará o servidor de desenvolvimento React. Por padrão, ele estará disponível em http://localhost:3000.


## Desenvolvedora

Tais Oliveira

