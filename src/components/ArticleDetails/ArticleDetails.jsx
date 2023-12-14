import React, { useState, useEffect, useContext } from "react";
import './ArticleDetails.css';
import { NewsContext } from "../../contexts/NewsContext";
import axios from 'axios';

function ArticleDetails() {
    const { selectedArticle, selectFavorite } = useContext(NewsContext);
    const [articleContent, setArticleContent] = useState('');
    const [showAddedToFavorite, setShowAddedToFavorite] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proxyUrl = `http://localhost:5000/fetch-article?url=${selectedArticle.url}`;
                const response = await axios.get(proxyUrl);
                const articleContent = response.data;
                setArticleContent(articleContent);
            } catch (error) {
                setArticleContent('Error fetching or parsing article!');
            }
        };

        if (selectedArticle) {
            fetchData();
        }
    }, [selectedArticle, articleContent]);

    const handleAddToFavorite = () => {
        if (selectedArticle) {
            selectFavorite(selectedArticle);
            setShowAddedToFavorite(true);
            setTimeout(() => {
                setShowAddedToFavorite(false);
            }, 3000)
        }
    };


    return (
        <div className="article-details">
            <div>
                {selectedArticle && (
                    <div>
                        <h3 className="details-title">
                            {selectedArticle.title}
                        </h3>
                        <img
                            className="details-image"
                            src={selectedArticle.urlToImage}
                            alt="img"
                        />
                        <button
                            className="fav-button-article"
                            onClick={handleAddToFavorite}
                        >
                            {" "}
                            Adaugă la <i className="fa-solid fa-star"></i>
                        </button>

                        {showAddedToFavorite && (
                            <p className="added-to-favorite-message">
                                Articolul a fost adăugat la favorite!
                            </p>
                        )}

                        <p className="details-content">{articleContent}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ArticleDetails




