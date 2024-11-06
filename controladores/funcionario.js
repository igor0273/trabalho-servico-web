const { pool } = require('../config');
const { request, response } = require('express');

const getFuncionario = (request, response) => {
    pool.query('SELECT * from funcionario order by codigo desc',
        (error, results) => {
            if (error) {
                return response.status(400).json({
                    status: error,
                    message: 'Erro ao consultar funcionario: ' + error
                })
            }
            response.status(200).json(results.rows);
        })
}

const addFuncionario = (request, response) => {
    const { cpf, nome, rg,empresa } = request.body;
    console.log(empresa)
    pool.query('insert into funcionario (cpf, nome,rg,empresa) values ($1,$2,$3,$4) returning codigo, cpf,nome,rg,empresa',
        [cpf,nome, rg,parseInt(empresa)],
        (error, results) => {
            if (error) {
                return response.status(400).json({
                    status: error,
                    message: "Erro ao adicionar um funcionario " + error
                })
            }
            response.status(200).json(results.rows[0])
        })
}

const updateFuncionario = (request, response) => {
    const { codigo, nome, cpf, rg } = request.body;

    pool.query('UPDATE funcionario SET nome=$1, cpf=$2, rg=$3 where codigo = $4 returning codigo,nome,cpf,rg',
        [nome, cpf, rg, codigo],
        (error, results) => {
            if (error) {
                return response.status(400).json({
                    status: error,
                    message: 'Erro ao alterar o funcionario: ' + error
                })
            }
            response.status(200).json({
                status: 'success', message: "Funcionario alterado!",
                objeto: results.rows[0]
            });
        })
}

const deleteFuncionario = (request, response) => {
    const codigo = parseInt(request.params.id);
    console.log(request.params)
    pool.query('DELETE FROM funcionario WHERE codigo = $1',
        [codigo],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(400).json({
                    status: 'error',
                    message: 'Erro ao remover o funcionario:  ' + error
                })
            }

            response.status(200).json({
                status: 'success', message: 'Funcionario Removido'
            });
        })
}


const getFuncionarioPorCodigo = (request, response) => {
    const codigo = parseInt(request.params.id);
    console.log(codigo)
    pool.query('SELECT * FROM funcionario WHERE codigo=$1',
        [codigo],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(400).json({
                    status: 'error',
                    message: 'Erro ao recuperar o funcionario!'
                });
            }
            response.status(200).json(results.rows[0]);
        }
    )
}

module.exports = {getFuncionario,addFuncionario,updateFuncionario,deleteFuncionario,getFuncionarioPorCodigo}
