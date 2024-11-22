import React from 'react';
import PropTypes from 'prop-types';
import './itens.scss';

const Itens = ({ title, Icons }) => {
  return (
    <div className="itens">
      <div className="container">
        <div className="header">
          <div className="headertitulo">{title}</div>
          <Icons />
        </div>
        <div className="total">1000</div>
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
