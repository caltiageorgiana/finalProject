import React, { useContext } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { NewsContext } from "../../contexts/NewsContext";

function Header() {

    const {favoritesCount} = useContext(NewsContext);

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    {" "}
                    <img
                        className="img-logo"
                        src="/img/logo.png"
                        alt="logo"
                    />{" "}
                </Link>
            </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link
                                to="/tesla"
                                style={{
                                    textDecoration: "none",
                                    color: "color(srgb 0.92 0.92 0.92)",
                                }}
                                className="link-n"
                            >
                                Tesla{" "}
                                <i class="fa-solid fa-charging-station"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/apple"
                                style={{
                                    textDecoration: "none",
                                    color: "color(srgb 0.92 0.92 0.92)",
                                }}
                                className="link-n"
                            >
                                Apple <i class="fa-brands fa-apple"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/amazon"
                                style={{
                                    textDecoration: "none",
                                    color: "color(srgb 0.92 0.92 0.92)",
                                }}
                                className="link-n"
                            >
                                Amazon <i class="fa-brands fa-amazon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="fav-button"
                                to="/favorite"
                                style={{
                                    textDecoration: "none",
                                    color: "color(srgb 0.92 0.92 0.92)",
                                }}
                            >
                                <i className="fa-solid fa-star"></i>
                                .
                                {favoritesCount()}
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;