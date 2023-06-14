import { useEffect, useState } from 'react'
import Amigo from './components/amigos'
import './App.css'

function App() {
  const [amigos, setAmigos] = useState([])
  const [dig, setDig] = useState('')
  const [rend, setRend] = useState([])

  const del = (amigo) => {
    setAmigos(amigos.filter((am) => am.nome != amigo))
    console.log(amigos)
  }

  const like = (amigo) => {
    let temp = amigos.filter((am) => am.nome == amigo)
    temp = temp[0]
    temp.fav = true
    setAmigos([...amigos.filter((am) => am.nome != amigo), temp])
    console.log(amigos)
  }
  
  const dislike = (amigo) => {
    let temp = amigos.filter((am) => am.nome == amigo)
    temp = temp[0]
    temp.fav = false
    setAmigos([...amigos.filter((am) => am.nome != amigo), temp])
    console.log(amigos)
  }

  const add = (amigo) => {
    let amigoObj = {}
    amigoObj.nome = amigo
    amigoObj.fav = false
    setAmigos([...amigos, amigoObj])
    setDig('')
    console.log(amigos)
  }

  const organizar = () => {
    console.log("organizado: ", amigos.sort((a,b) => Number(b.fav) - Number(a.fav)))
  }

  const renderiz = () => {
    setRend([amigos.map((amigo, index) => {
      return <Amigo nome = {amigo.nome} fav={amigo.fav} del={(a) => del(a)} like={(a) => like(a)} dislike={(a) => dislike(a)} key = {index}/>
    })])
  }
 
  useEffect(() => {organizar(), renderiz()},[amigos])

  return (
    <>
      <input type='text' onKeyDown={(k) => {k.key == 'Enter' && add(dig)}} onChange={(e) => setDig(e.target.value)} value={dig}></input>
      {rend}
    </>
  )
}

export default App
