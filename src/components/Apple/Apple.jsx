import { useContext } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import { NewsContext } from '../../contexts/NewsContext';
import './Apple.css';

function Apple() {

    const { appleArticles } = useContext(NewsContext);

    return (
        <div className="apple">
            <h1 className='title-article'>Apple</h1>
            <ArticlesList articlesList={appleArticles} />
        </div>
    )
}

export default Apple;