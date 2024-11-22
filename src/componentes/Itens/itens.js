import React from 'react';
import PropTypes from 'prop-types';
import './itens.scss';

const Itens = ({ title, Icons , value}) => {
  return (
    <div className="itens">
      <div className="container">
        <div className="header">
          <div className="headertitulo">{title}</div>
          <Icons />
        </div>
        <div className="total">{value}</div>
      </div>
    </div>
  );
};

// Validar as props
Itens.propTypes = {
  title: PropTypes.string.isRequired,  // title deve ser uma string e obrigatório
  Icons: PropTypes.elementType.isRequired,  // Icons deve ser um componente React
};

export default Itens;
