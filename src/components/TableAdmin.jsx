import React from 'react';
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa"

const TableAdmin = () => {
  const contatos = [
    { nome: 'João', unidade: 'Rio de Janeiro', ramal: '1234', telefones: '(11) 1234-5678', email: 'joao@ntendencia.com' },
    { nome: 'Maria', unidade: 'Juiz de Fora', ramal: '5678', telefones: '(22) 5678-9012', email: 'maria@ntendencia.com' },
    { nome: 'Pedro', unidade: 'São Paulo', ramal: '9012', telefones: '(33) 9012-3456', email: 'pedro@ntendencia.com' }
  ];

  return (
    <table >
      <thead>
        <tr>
          <th className='th-name'>Nome</th>
          <th>Unidade</th>
          <th className='th-ramal'>Ramal</th>
          <th>Telefones</th>
          <th className='th-email'>Email</th>
        </tr>
      </thead>
      <tbody>
        {contatos.map((contato, index) => (
          <tr key={index} >
            <td>{contato.nome}</td>
            <td>{contato.unidade}</td>
            <td>{contato.ramal}</td>
            <td>{contato.telefones}</td>
            <td>{contato.email}</td>
            <td><FaPencilAlt /></td>
            <td><FaTrashAlt /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAdmin;
