
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({onSearch, random}) {
    return (
      <div >
        <SearchBar onSearch={onSearch} />
        <button className="random" onClick={random}>
          ADD RANDOM
        </button>
      </div>
    );
  }