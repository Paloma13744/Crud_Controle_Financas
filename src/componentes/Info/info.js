import React from 'react';
import './info.scss';
import Itens from '../Itens/itens';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const info = ({income,expense,total}) => {
  return (
    <div className='info'>
      <div className='container'>
        <Itens title='Entradas:' Icons={FaRegArrowAltCircleUp} value={income} />
        <Itens title='Saídas:' Icons={FaRegArrowAltCircleDown} value={expense} />
        <Itens title='Saldo disponível:' Icons={FaDollarSign} value={total} />
      </div>
    </div>
  );
};

export default info;
