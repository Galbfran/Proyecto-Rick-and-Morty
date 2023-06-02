import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
   const {character, onClose} = props;
   
   return (

      <div className={styles.contenedor}>
         <div>
            <button className={styles.boton} onClick={() => {onClose(character.id)}}>X</button>
            <img className={styles.imagen} src={character.image} alt='imagen rick y morty' />
            <Link to={`/detail/${character.id}`}>
            <h2>{character.name}</h2>
            </Link>

         </div>
         <ul className={styles.lista}>
            <li>Estado: {character.status}</li>
            <li>Especie: {character.species}</li>
            <li>Genero: {character.gender}</li>
            <li>Origen: {character.origin.name}</li>
            
         </ul>
      </div>
   );
}

export default Card;