import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const imcCalculado = peso / (altura * altura);
    setImc(imcCalculado.toFixed(2));

    if (peso <= 0 && altura <= 0) {
      setResultado('Erro');
      setMensagem('Peso e altura devem ser maiores que zero.');
      return;
    } else if (peso <= 0) {
      setResultado('Erro');
      setMensagem('Peso deve ser maior que zero.');
      return;
    } else if (altura <= 0) {
      setResultado('Erro');
      setMensagem('Altura deve ser maior que zero.');
      return;
    } 

    if (imcCalculado < 18.5) {
      setResultado('Abaixo do peso');
      setMensagem('Você está abaixo do peso ideal. É importante procurar um nutricionista para avaliar sua alimentação e investigar possíveis causas. Inclua alimentos nutritivos e ricos em calorias saudáveis na sua rotina.');
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      setResultado('Peso normal');
      setMensagem('Parabéns! Você está com o peso ideal. Mantenha uma alimentação equilibrada, pratique atividades físicas regularmente e faça exames médicos periódicos.');
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      setResultado('Sobrepeso');
      setMensagem('Você está com sobrepeso. É recomendado rever seus hábitos alimentares e aumentar a prática de exercícios físicos. Um nutricionista pode ajudar a criar um plano alimentar adequado.');
    } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
      setResultado('Obesidade 1');
      setMensagem('Você está com obesidade grau 1. É importante buscar orientação médica para prevenir problemas como diabetes e hipertensão. Mudanças na alimentação e rotina de exercícios são essenciais.');
    } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
      setResultado('Obesidade 2');
      setMensagem('Você está com obesidade grau 2. O acompanhamento médico é essencial neste estágio, pois há riscos mais altos para a saúde. Um plano multidisciplinar com médico, nutricionista e educador físico pode ajudar.');
    } else if(imcCalculado >= 40){
      setResultado('Obesidade 3');
      setMensagem('Você está com obesidade grau 3 (obesidade mórbida). Este é um caso grave que requer acompanhamento médico imediato. Procure um profissional de saúde para avaliação e tratamento personalizado.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div>
        <label>Altura (metros):</label>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p><strong>Classificação:</strong> {resultado}</p>
          <div className="mensagem-box">
            <p><strong>Recomendações:</strong></p>
            <p>{mensagem}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;