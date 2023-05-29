import Card from './Card';

export default function Cards(props) {
   console.log(props)
   return <div>
      {props.characters.map(card => {
            return  <Card key={card.id} name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            image={card.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />})}
   </div>;
}
