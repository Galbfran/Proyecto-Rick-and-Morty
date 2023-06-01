import styles from './Card.module.css'

const Card = (props) => {
   const {character, onClose} = props;
   
   return (

      <div className={styles.contenedor}>
         <div>
            <button className={styles.boton} onClick={() => {onClose(character.id)}}>X</button>
            <img className={styles.imagen} src={character.image} alt='imagen rick y morty' />
            <h2>{character.name}</h2>
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