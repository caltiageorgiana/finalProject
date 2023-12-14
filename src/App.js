import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Tesla from './components/Tesla/Tesla';
import Apple from './components/Apple/Apple';
import Amazon from './components/Amazon/Amazon';
import Favorite from './components/Favorite/Favorite';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ArticleDetails from './components/ArticleDetails/ArticleDetails';
import ArticlesList from './components/ArticlesList/ArticlesList';
import NewsContextProvider from './contexts/NewsContext';

function App() {
    return (
        <NewsContextProvider>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/tesla" element={<Tesla />} />
                    <Route path="/apple" element={<Apple />} />
                    <Route path="/amazon" element={<Amazon />} />
                    <Route path="/articles-list" element={<ArticlesList />} />
                    <Route path="/article-details" element={<ArticleDetails />} />
                    <Route path="/favorite" element={<Favorite />} />
                </Routes>
                <Footer />
            </div>
        </NewsContextProvider>
    );
}

export default App;
