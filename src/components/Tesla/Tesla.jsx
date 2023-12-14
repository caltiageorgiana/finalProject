import { useContext } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList';
import { NewsContext } from '../../contexts/NewsContext';
import './Tesla.css';

function Tesla() {
    const { teslaArticles } = useContext(NewsContext);


    return (
        <div className="tesla">
            <h1 className='title-article'>Tesla</h1>
            <ArticlesList articlesList={teslaArticles} />
        </div>
    );
}

export default Tesla;