import styles from './Card.module.css'

const Card =(props)=> {

   return (

      <div className={styles.contenedor}>
         <div>
         <button className={styles.boton} onClick={props.onClose}>X</button>
         <img className={styles.imagen} src={props.image} alt='imagen rick y morty' />
         <h2>{props.name}</h2>
         </div>
         <ul className={styles.lista}>
            <li>Estado: {props.status}</li>
            <li>Especie: {props.species}</li>
            <li>Genero: {props.gender}</li>
            <li>Origen: {props.origin}</li>
            
         </ul>
      </div>
   );
}

export default Card;