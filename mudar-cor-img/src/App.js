import React from "react"
import logo from './logo.svg';
import Imagem from "./component/index";
import './App.css';
function mudarCor(){
  const img= document.querySelector('img')
  img.style.filter='grayscale(100%)'
}

function corNormal(){
  const img= document.querySelector('img')
  img.style.filter='grayscale(0%)'
}
function App() {
  return (
    <div>
     <Imagem img='https://th.bing.com/th/id/OIP.OyG70fnxappWFwegQ886pAHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.7&pid=1.7'/>
     <span>clique em um dos botões e obtenha a cor da imagem do modo que desejar </span>
     <hr />
     <button onClick={mudarCor} className="btn1">Branco e Preto</button>
     <button onClick={corNormal} className="btn2">Cor original</button>
    </div>
  );
}

export default App;
