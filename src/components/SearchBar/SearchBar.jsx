import styles from './SearchBar.module.css'

export default function SearchBar() {
   return (
      <div className={styles.buscador}>
         <input type='search'placeholder='Ingrese el personaje que busca.' />
         <button onClick={() => alert("buscar elemento")} >Buscar Personaje</button>
      </div>
   );
}
