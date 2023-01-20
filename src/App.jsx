import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Blockimgs from './components/Blockimgs'
import Card from './components/Card'
import data from './data'
console.log(data, "data")
export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Blockimgs />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}







