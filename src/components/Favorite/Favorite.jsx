import { useContext} from 'react';
import './Favorite.css';
import { NewsContext } from '../../contexts/NewsContext';




function Favorite(){

    const { favorites, removeFavorite} =
        useContext(NewsContext);

    const handleRemoveFavorite = (title) => {
        removeFavorite(title)
    }

    return (
        <div className="favorite">
            <h1 className="title-favorite">Favorite</h1>
            {favorites.length === 0 ? (
                <p className="no-art">Niciun articol favorit!</p>
            ) : (
                <div className="fav-card">
                    {favorites.map((article) => (
                        <li className="li-card" key={article.title}>
                            <button
                                className="remove-btn"
                                onClick={() =>
                                    handleRemoveFavorite(article.title)
                                }
                            >
                                X
                            </button>
                            <h3 className="title-fav">{article.title}</h3>
                            <img
                                className="img-fav"
                                src={article.urlToImage}
                                alt={article.title}
                            />
                        
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorite;