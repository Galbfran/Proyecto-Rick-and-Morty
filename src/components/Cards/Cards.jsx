import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   
   return <div className={styles.container}>
      {props.characters.map(card => {
            return  <Card  key={card.id} name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            image={card.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />})}
   </div>;
}
