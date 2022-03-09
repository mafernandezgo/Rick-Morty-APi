import React, { useState, useEffect, setShow } from 'react';
import axios from 'axios';
import Characters from '../components/organisms/Character/Character';
// import CardHome from './../components/molecules/CardHome/CardHome';
import Header from '../components/molecules/Header/Header';
import './Home.scss';
import CharactersMoreInfo from '../components/organisms/CharacterMoreInfo/CharacterMoreInfo';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character'
})

function Home() {  
  const [data, setData] = useState([])
  
  useEffect (() => {
    api.get('/').then((res) => {
      setData(res.data.results)
    })
  }, [])

  return (
    <div className="p-home">
      <Header />
      <div>
        <h1>Personajes de Rick and Morty</h1>
        <Characters data = {data}/>
      </div> 
    </div>
  );
}

export default Home;
