import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then (response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => 
      character.id !== parseInt(id));

      setCharacters(filteredCharacters)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr/>
         <Cards characters={characters} onClose={onClose}/>
         <hr/>
      </div>
   );
}

export default App;
