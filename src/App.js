import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from './componentes/Header/header';
import Info from './componentes/Info/info';
import Form from './componentes/Form/form';

const App = () => {
  const data = localStorage.getItem("transacao");
  const [transacaoList, setTransacaoList] = useState(
    data ? JSON.parse(data) : [] // Sem erro: isso é necessário para inicializar corretamente o estado
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transacaoList
      .filter((item) => item.expense)
      .map((transacao) => Number(transacao.amount)); // Corrigido: "amount" (possível erro de digitação)

    const amountIncome = transacaoList
      .filter((item) => !item.expense)
      .map((transacao) => Number(transacao.amount)); // Corrigido: "amount" (possível erro de digitação)

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`);
  }, [transacaoList]);

  const handleAdd = (transacao) => {  // Adiciona novas transações
    const newArrayTransacao = [...transacaoList,transacao];
    setTransacaoList(newArrayTransacao);

    localStorage.setItem("Transações" ,JSON.stringify(newArrayTransacao));


  };

  return (
    <div>
      <Header />
      <Info income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd}/>
    </div>
  );
};

export default App;
