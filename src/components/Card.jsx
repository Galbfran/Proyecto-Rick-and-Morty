const Card =(props)=> {
   console.log(props)
   return (

      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.especie}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='imagen rick y morty' />
      </div>
   );
}

export default Card;