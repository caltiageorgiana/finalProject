import { useContext } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import { NewsContext } from '../../contexts/NewsContext';
import './Amazon.css';

function Amazon() {
    const { amazonArticles } = useContext(NewsContext);
    

    return (
        <div className="amazon">
            <h1 className="title-article">Amazon</h1>
            <ArticlesList articlesList={amazonArticles}/>
        </div>
    );
}

export default Amazon;