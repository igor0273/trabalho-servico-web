# Empresa e Funcionário API

API para gerenciar informações de empresas e seus funcionários, permitindo operações de criação, consulta, atualização e exclusão de dados.

## Descrição

Esta API foi projetada para facilitar o gerenciamento de informações de **empresas** e **funcionários**. Ela fornece endpoints para realizar operações básicas de CRUD (Criar, Ler, Atualizar, Deletar) para cada entidade, com respostas bem definidas e validações dos dados.

## Sumário

- [Introdução](#introdução)
- [Endpoints](#endpoints)
- [Esquemas de Dados](#esquemas-de-dados)
- [Exemplos de Respostas](#exemplos-de-respostas)

## Introdução

- **API Versão**: 1.0.0
- **Servidor Local (Padrão)**: `http://localhost:3002`


## Uso
A API está estruturada para gerenciar duas entidades principais: Empresa e Funcionário. Cada entidade tem seu próprio conjunto de endpoints para manipulação dos dados.

## Endpoints
### Empresa
 GET /empresa: Retorna todas as empresas.
 POST /empresa: Adiciona uma nova empresa.
 PUT /empresa: Atualiza uma empresa existente.
 GET /empresa/{codigo}: Retorna uma empresa específica pelo codigo.
 DELETE /empresa/{codigo}: Remove uma empresa pelo codigo.
### Funcionário
GET /funcionario: Retorna todos os funcionários.
POST /funcionario: Adiciona um novo funcionário.
PUT /funcionario: Atualiza um funcionário existente.
GET /funcionario/{id}: Retorna um funcionário específico pelo id.
DELETE /funcionario/{id}: Exclui um funcionário pelo id.

