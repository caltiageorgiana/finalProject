import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import Pagination from "../Pagination/Pagination";
import { NewsContext } from "../../contexts/NewsContext";
import "./ArticlesList.css";

function ArticlesList(props) {
    const { articlesList } = props;
    const [currentPage, setCurrentPage] = useState(0);
    const { selectArticle } = useContext(NewsContext);

    if (!Array.isArray(articlesList)) {
        return <p>Niciun articol aici.</p>;
    }

    const itemsPerPage = 9;
    const totalItems = articlesList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = currentPage * itemsPerPage;
    const endItem = startItem + itemsPerPage;
    const itemsToShow = articlesList.slice(startItem, endItem);

    const handlePageChange = ({ selected }) => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        setCurrentPage(selected);
    };

    const handleArticleSelection = (article) => {
        selectArticle(article);
    };

    return (
        <div className="articles-list">
            {itemsToShow.map((article) => (
                <Link to={`/article-details`} key={article.articleUrl}
                    onClick={() => handleArticleSelection(article)}>
                    <ArticlesCard oneArticle={article} />
                </Link>
            ))}

            <Pagination
                pageCount={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default ArticlesList;
