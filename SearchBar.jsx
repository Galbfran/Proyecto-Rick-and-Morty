import styles from './SearchBar.module.css'
import {useState} from 'react'


export default function SearchBar({onSearch}) {
   const [character, setCharacter ] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.buscador}>
         <input type='search' placeholder='Ingrese el personaje que busca.' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)} >Buscar Personaje</button>
      </div>
   );
}
