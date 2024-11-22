import React from 'react';
import './info.scss';
import Itens from '../Itens/itens';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const info = () => {
  return (
    <div className='info'>
      <div className='container'>
        <Itens title='Entradas:' Icons={FaRegArrowAltCircleUp} />
        <Itens title='Saídas:' Icons={FaRegArrowAltCircleDown} />
        <Itens title='Saldo disponível:' Icons={FaDollarSign} />
      </div>
    </div>
  );
};

export default info;
