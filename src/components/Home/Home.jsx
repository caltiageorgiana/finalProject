import "./Home.css";
import { Link } from "react-router-dom";


function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <div className="home1">
            <div className="intro">
                <h2 className="home-h2">
                    Bine ai venit, acesta este proiectul meu final!
                </h2>
                <p className="home-p">Un site destinat articolelor despre:</p>
            </div>

            <div className="tesla-intro">
                <img
                    className="tesla-img"
                    src="/img/teslaintro.jpg"
                    alt="tesla"
                />
                <div className="overlay">
                    <div className="description-wrapper">
                        <h1 className="title">Tesla</h1>
                        <p className="description">
                            Tesla este o companie americană de vehicule
                            electrice și energie curată, fondată în 2003 de Elon
                            Musk, care a fost pionier în popularizarea
                            vehiculelor electrice și dezvoltarea soluțiilor de
                            stocare a energiei. <br />
                            Explorează acum articolele despre Tesla cu un click
                            mai jos!
                        </p>
                        <Link
                            to="/tesla"
                            style={{ textDecoration: "none" }}
                            onClick={scrollToTop}
                        >
                            <button className="button">Explorează</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="apple-intro">
                <img
                    className="apple-img"
                    src="/img/appleintro.jpg"
                    alt="apple"
                />
                <div className="overlay2">
                    <div className="description-wrapper">
                        <h1 className="title">Apple</h1>
                        <p className="description">
                            Apple este o companie americană de tehnologie,
                            faimoasă pentru produsele sale precum iPhone, iPad
                            și Mac. Fondată în 1976, a devenit lider în
                            industria IT și oferă o gamă variată de servicii și
                            produse.
                            <br />
                            Explorează acum articolele despre Apple cu un click
                            mai jos!
                        </p>
                        <Link
                            to="/apple"
                            style={{ textDecoration: "none" }}
                            onClick={scrollToTop}
                        >
                            <button className="button">Explorează</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="amazon-intro">
                <img
                    className="amazon-img"
                    src="/img/amazonintro.jpg"
                    alt="amazon"
                />
                <div className="overlay3">
                    <div className="description-wrapper">
                        <h1 className="title">Amazon</h1>
                        <p className="description">
                            Amazon este o companie globală de comerț electronic
                            și servicii cloud, fondată în 1994 de Jeff Bezos.
                            Cunoscută pentru diversitatea produselor și
                            serviciilor sale, Amazon este una dintre cele mai
                            mari companii din lume.
                            <br />
                            Explorează acum articolele despre Amazon cu un click
                            mai jos!
                        </p>
                        <Link
                            to="/amazon"
                            style={{ textDecoration: "none" }}
                            onClick={scrollToTop}
                        >
                            <button className="button">Explorează</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
