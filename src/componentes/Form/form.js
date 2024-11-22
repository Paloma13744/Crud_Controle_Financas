import React, { useState } from 'react';
import './form.scss';

const Form = ({ handleAdd }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    const gerarId = () => Math.round(Math.random() * 1000); // Gerar Ids

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        }
        if (amount <= 0) {
            alert("O valor precisa ser um número positivo!");
            return;
        }

        const transacao = {
            id: gerarId(),
            desc: desc,
            amount: parseFloat(amount),  // Certifique-se de que o valor é um número
            expense: isExpense,  // Saída
        };

        handleAdd(transacao);

        setDesc("");   // Limpa descrição
        setAmount("");   // Limpa o valor

        console.log({ desc, amount: parseFloat(amount), isExpense });
        alert("Salvo com sucesso!");
    };

    return (
        <div className="form">
            <div className="container">

                {/* Campo de descrição */}
                <div className="inputContent">
                    <label className="label" htmlFor="desc">Descrição:</label>
                    <input
                        id="desc"
                        className="input"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Digite a descrição"
                    />
                </div>

                {/* Campo de valor */}
                <div className="inputContent">
                    <label className="label" htmlFor="amount">Valor:</label>
                    <input
                        id="amount"
                        className="input"
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Digite o valor"
                    />
                </div>

                {/* Opções de entrada ou saída */}
                <div className="radioGroup">
                    <div>
                        <input
                            className="input"
                            type="radio"
                            id="rIncome"
                            name="transactionType"
                            defaultChecked={!isExpense}
                            onChange={() => setIsExpense(false)}
                        />
                        <label className="label" htmlFor="rIncome">Entrada</label>
                    </div>

                    <div>
                        <input
                            className="input"
                            type="radio"
                            id="rExpenses"
                            name="transactionType"
                            defaultChecked={isExpense}
                            onChange={() => setIsExpense(true)}
                        />
                        <label className="label" htmlFor="rExpenses">Saída</label>
                    </div>
                </div>

                {/* Botão de salvar */}
                <button className="button" onClick={handleSave}>
                    Salvar
                </button>
            </div>
        </div>
    );
};

export default Form;
