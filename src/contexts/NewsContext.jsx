import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [amazonArticles, setAmazonArticles] = useState([]);
    const [appleArticles, setAppleArticles] = useState([]);
    const [teslaArticles, setTeslaArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const amazonResponse = await fetch(
                    "https://newsapi.org/v2/everything?q=amazon&apiKey=33f73c73267f4878b3c4f5825b0e8fca"
                );
                const appleResponse = await fetch(
                    "https://newsapi.org/v2/everything?q=apple&apiKey=33f73c73267f4878b3c4f5825b0e8fca"
                );
                const teslaResponse = await fetch(
                    "https://newsapi.org/v2/everything?q=tesla&apiKey=33f73c73267f4878b3c4f5825b0e8fca"
                );

                if (!amazonResponse.ok || !appleResponse.ok || !teslaResponse.ok) {
                    throw new Error('Network response was not ok');
                }

                const amazonData = await amazonResponse.json();
                const appleData = await appleResponse.json();
                const teslaData = await teslaResponse.json();

                setAmazonArticles(amazonData.articles);
                setAppleArticles(appleData.articles);
                setTeslaArticles(teslaData.articles);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchNews();
    }, []);

    const selectArticle = (article) => {
        setSelectedArticle(article);
    };

    const addFavorite = (article) => {
        setFavorites([...favorites, article]);
    };

    const removeFavorite = (articleTitle) => {
        const newFavorites = favorites.filter((favorite) => favorite.title !== articleTitle);
        setFavorites(newFavorites);
    };

    const selectFavorite = (article) => {
        const favoriteExists = favorites.some((favorite) => favorite.title === article.title);

        if (favoriteExists) {
            removeFavorite(article.title);
        } else {
            addFavorite(article);
        }
    };

    const favoritesCount = () => {
        return favorites.length;
    };

    return (
        <NewsContext.Provider
            value={{
                amazonArticles,
                appleArticles,
                teslaArticles,
                selectedArticle,
                selectArticle,
                selectFavorite,
                favorites,
                removeFavorite, favoritesCount
            }}
        >
            {props.children}
        </NewsContext.Provider>
    );


    
};

export default NewsContextProvider;


// apiKey = a35142c3568a49aaa3c33c33ae62699d;
// https://newsapi.org/v2/everything?q=amazon&sortBy=popularity&apiKey=33f73c73267f4878b3c4f5825b0e8fca