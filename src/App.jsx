import { useState } from 'react'
import './App.css'
import im2 from './assets/im2.png'
import logo from './assets/logo.png'
import x from './assets/img4.png'
import r from './assets/img3.png'
import y from './assets/img5.png'
export default function App() {

  return (
    <>
    <main>
      <div className="logo">
        <img src={logo} /> </div>
      <div className="texto">
        <p>Salto Hiperespacial do Evento de Personagem</p>
        <h1>Uma Caçada Pela Noite </h1>
        <p>Após a atualização da verção 4.1 até 21/04/2026 às 15:00 
          (horário  do servidor) </p>
        <button>Ver evento</button>
      </div>
      <div className="eventos">
          <img src={im2} />
        <p>Roaming de Dados Cósmicos 18/04</p>
        <p>E então sorriaram as massas 16/04</p>
      </div>
      <div className="jog">
        <button>Obiter jogo</button>
      </div>
      <div className="canto">
        <div className="icons">
        <img src={x} />
        <img src={r} />
        <img src={y} />
        </div>
      </div>
    </main>
    </>
  )
}