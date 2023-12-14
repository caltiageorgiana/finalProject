import './ArticlesCard.css';



function ArticlesCard(props) {

    const {oneArticle} = props;
    console.log('oneArticle', oneArticle);

    return (
        <div className="article-card">
            <img
                src={oneArticle.urlToImage}
                className="article-image"
                alt="img"
            />
            <div className="article-content">
                <h2 className="article-title">{oneArticle.title}</h2>
                <p className="article-text">{oneArticle.description}</p>
            </div>
        </div>
    );
}

export default ArticlesCard;