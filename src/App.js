import "./App.css";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/Navbar";
import {useState} from "react";
import axios from "axios";


function App() {
  const [characters, setCharacters] = useState([]);

  function searchHandler(id) {
    // setCharacters([...characters, example]);
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));
    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App">
      <NavBar onSearch={searchHandler} random={randomHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
