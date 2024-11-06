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
 - GET /empresa: Retorna todas as empresas.
 - POST /empresa: Adiciona uma nova empresa.
 - PUT /empresa: Atualiza uma empresa existente.
 - GET /empresa/{codigo}: Retorna uma empresa específica pelo codigo.
 - DELETE /empresa/{codigo}: Remove uma empresa pelo codigo.
### Funcionário
- GET /funcionario: Retorna todos os funcionários.
- POST /funcionario: Adiciona um novo funcionário.
- PUT /funcionario: Atualiza um funcionário existente.
- GET /funcionario/{id}: Retorna um funcionário específico pelo id.
- DELETE /funcionario/{id}: Exclui um funcionário pelo id.

## Esquemas de Dados

### Empresa

A entidade **Empresa** representa os dados das empresas cadastradas.

#### Estrutura de Dados

| Campo         | Tipo     | Obrigatório | Descrição                      |
|---------------|----------|-------------|--------------------------------|
| `codigo`      | integer  | Sim         | Código único da empresa        |
| `cnpj`        | string   | Sim         | CNPJ da empresa                |
| `nome`        | string   | Sim         | Nome comercial da empresa      |
| `razaosocial` | string   | Sim         | Razão social da empresa        |
| `sigla`       | string   | Sim         | Sigla ou abreviação da empresa |

#### Exemplo de Objeto JSON
```json
{
  "codigo": 1,
  "cnpj": "12345678000199",
  "nome": "Empresa XYZ",
  "razaosocial": "Empresa XYZ Ltda.",
  "sigla": "XYZ"
}
```
### Funcionario

A entidade **Funcionario** representa os dados dos funcionarios cadastradas.

#### Estrutura de Dados

| Campo         | Tipo     | Obrigatório | Descrição                      |
|---------------|----------|-------------|--------------------------------|
| `codigo`      | integer  | Sim         | Código único do funcionario    |
| `cpf`         | string   | Sim         | CPF do Funcionario             |
| `nome`        | string   | Sim         | Nome completo do funcionário   |
| `rg`          | string   | Sim         | RG do funcionário              |
| `empresa`     | integer  | Sim         |Código da empresa do funcionário|

#### Exemplo de Objeto JSON
```json
{
  "codigo": 1,
  "cpf": "12345678900",
  "nome": "João Silva",
  "rg": "12345678974",
  "empresa": 1
}
```

## Testes no Postman

Os testes da API foram realizados no [Postman](https://www.postman.com/), para garantir o funcionamento correto de cada endpoint e a validade das respostas retornadas. Abaixo está um resumo dos testes executados para cada endpoint, incluindo os cenários de sucesso e erro.

### Testes Realizados

#### 1. Endpoints de Empresa

- **GET /empresa**: Retorna todas as empresas cadastradas.
  - **Resposta 200** (Sucesso): Uma lista de objetos `Empresa`, representando todas as empresas.
  - **Resposta 400** (Erro): Mensagem indicando falha ao consultar as empresas.

- **POST /empresa**: Adiciona uma nova empresa.
  - **Entrada**: Um objeto JSON no formato `NovaEmpresa`, contendo `cnpj`, `nome`, `razaosocial` e `sigla`.
  - **Resposta 200** (Sucesso): Objeto `EmpresaResposta` com uma mensagem de sucesso e os dados da empresa criada.
  - **Resposta 400** (Erro): Mensagem indicando falha na inserção, geralmente devido a dados inválidos ou campos ausentes.

- **PUT /empresa**: Atualiza uma empresa existente.
  - **Entrada**: Um objeto JSON no formato `EmpresaAtualizar`, com os dados completos da empresa que será atualizada.
  - **Resposta 200** (Sucesso): Objeto `EmpresaResposta` com a mensagem de sucesso e os dados atualizados da empresa.
  - **Resposta 400** (Erro): Mensagem indicando falha na atualização, normalmente devido a dados inválidos ou campos obrigatórios ausentes.

- **GET /empresa/{codigo}**: Retorna uma empresa pelo `codigo`.
  - **Resposta 200** (Sucesso): Objeto `Empresa` com os dados da empresa encontrada.
  - **Resposta 400** (Erro): Mensagem de erro indicando falha ao encontrar a empresa ou um `codigo` inválido.

- **DELETE /empresa/{codigo}**: Exclui uma empresa pelo `codigo`.
  - **Resposta 200** (Sucesso): Mensagem de confirmação da exclusão.
  - **Resposta 400** (Erro): Mensagem indicando falha ao excluir, geralmente por um `codigo` inexistente.

#### 2. Endpoints de Funcionário

- **GET /funcionario**: Retorna todos os funcionários cadastrados.
  - **Resposta 200** (Sucesso): Uma lista de objetos `Funcionario`, representando todos os funcionários.
  - **Resposta 400** (Erro): Mensagem indicando falha ao consultar os funcionários.

- **POST /funcionario**: Adiciona um novo funcionário.
  - **Entrada**: Um objeto JSON no formato `NovoFuncionario`, contendo `cpf`, `nome`, `rg` e `empresa`.
  - **Resposta 200** (Sucesso): Objeto `FuncionarioResposta` com a mensagem de sucesso e os dados do funcionário criado.
  - **Resposta 400** (Erro): Mensagem indicando falha na inserção, geralmente devido a dados inválidos ou campos ausentes.

- **PUT /funcionario**: Atualiza um funcionário existente.
  - **Entrada**: Um objeto JSON no formato `FuncionarioAtualizar`, com os dados completos do funcionário que será atualizado.
  - **Resposta 200** (Sucesso): Objeto `FuncionarioResposta` com a mensagem de sucesso e os dados atualizados do funcionário.
  - **Resposta 400** (Erro): Mensagem indicando falha na atualização, normalmente por dados inválidos ou campos obrigatórios ausentes.

- **GET /funcionario/{id}**: Retorna um funcionário pelo `id`.
  - **Resposta 200** (Sucesso): Objeto `Funcionario` com os dados do funcionário encontrado.
  - **Resposta 400** (Erro): Mensagem de erro indicando falha ao encontrar o funcionário ou um `id` inválido.

- **DELETE /funcionario/{id}**: Exclui um funcionário pelo `id`.
  - **Resposta 200** (Sucesso): Mensagem de confirmação da exclusão.
  - **Resposta 400** (Erro): Mensagem indicando falha ao excluir, geralmente por um `id` inexistente.

### Respostas de Exemplo

#### Sucesso (200)
```json
{
  "status": "ok",
  "message": "Operação realizada com sucesso",
  "objeto": {
    "codigo": 1,
    "cnpj": "12345678000199",
    "nome": "Empresa XYZ",
    "razaosocial": "Empresa XYZ Ltda.",
    "sigla": "XYZ"
  }
}
```

#### Erro(400)
```json
{
    "status": "error",
    "message": "Erro ao recuperar o funcionario!"
}
```


