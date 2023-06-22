import React from 'react';
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa"

const TableAdmin = ({setDeleteModalOpen}) => {
  const contatos = [
    { nome: 'Capitu', unidade: 'Rio de Janeiro', ramal: '1234', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Maria joaquina', unidade: 'Juiz de Fora', ramal: '5678', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Pedro bala', unidade: 'Rio de Janeiro', ramal: '9012', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Quincas Borba', unidade: 'São Paulo', ramal: '9012', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Policarpo Quaresma', unidade: 'São Paulo', ramal: '9012', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Tio Phil', unidade: 'São Paulo', ramal: '9012', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' },
    { nome: 'Pirulito', unidade: 'São Paulo', ramal: '9012', telefones: '(32) 98856-0098 / (32) 98877-0987 ', email: 'email@ntendencia.com' }
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
            <td className='td-name'>{contato.nome}</td>
            <td>{contato.unidade}</td>
            <td className='td-ramal'>{contato.ramal}</td>
            <td>{contato.telefones}</td>
            <td className='td-email'>{contato.email}</td>
            <td><FaPencilAlt className='td-icon td-pencil'/></td>
            <td><FaTrashAlt className='td-icon td-trash' onClick={() => setDeleteModalOpen(true)}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAdmin;
