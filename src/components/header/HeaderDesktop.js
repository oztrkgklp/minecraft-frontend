import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import logo from "../../assets/footer-logo.svg";
import parse from "html-react-parser";
import { routes } from "../../routes/routes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../redux/slices/signInSlice";

const Header = () => {
    // Selector for isSignedIn value.
    let isSignedIn = useSelector((state) => state.isSignedIn.value);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(setSignIn(false));
        window.scrollTo(0, 0);
    };

    return (
        <div>
            {" "}
            {/* Hero - logo wrapper */}
            <div className="header-hero-wrapper">
                <div className="hero-nav-2">
                    {/* Anasayfa nav - link */}
                    <div className="container">
                        <nav>
                            <ul>
                                <li className="nav-link">
                                    <Link to={routes.Home}>
                                        <HomeIcon />
                                        Anasayfa
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={routes.Games}>
                                        <GamesIcon />
                                        Oyunlar
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={routes.Leaderboard}>
                                        <LowPriorityIcon />
                                        Sıralama
                                    </Link>
                                </li>
                                <li>
                                    <div className="riva-logo">
                                        <Link to={routes.Home}>{parse(`<img src=${logo} alt=""></img>`)}</Link>
                                    </div>
                                </li>
                                <li className="nav-link">
                                    <Link to={routes.Store}>
                                        <LocalMallIcon />
                                        Market
                                    </Link>
                                </li>
                                <li className="nav-link">
                                    <Link to={isSignedIn ? routes.Support : routes.SignIn}>
                                        <SupportAgentIcon />
                                        Destek
                                    </Link>
                                </li>
                                {!isSignedIn ? (
                                    <li className="nav-link">
                                        <a href="#">
                                            <div
                                                style={{ marginRight: "10%", display: "flex", alignItems: "center" }}
                                                onClick={() =>
                                                    window.setTimeout(() => {
                                                        navigate(routes.SignUp);
                                                    }, 300)
                                                }
                                            >
                                                <PersonAddAltIcon />
                                                Kayıt
                                            </div>

                                            <div
                                                style={{ display: "flex", alignItems: "center" }}
                                                onClick={() =>
                                                    window.setTimeout(() => {
                                                        navigate(routes.SignIn);
                                                    }, 300)
                                                }
                                            >
                                                <LoginIcon />
                                                Giriş
                                            </div>
                                        </a>
                                    </li>
                                ) : (
                                    <li class="nav-link has-dropdown">
                                        <a href="#">
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                mamiemma
                                                <KeyboardArrowDownIcon />
                                            </div>
                                        </a>
                                        <div class="profile-dropdown">
                                            <Link to={routes.UserProfile}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <PersonOutlineIcon />
                                                    Profil
                                                </div>
                                            </Link>
                                            <Link to={routes.PurchaseRv}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <CreditCardIcon />
                                                    Kredi 0 <span>+</span>
                                                </div>
                                            </Link>
                                            <Link to={routes.UserChest}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19.139" height="19.047" viewBox="0 0 19.139 19.047">
                                                    <g id="box" transform="translate(0 -0.173)">
                                                        <path
                                                            id="Path_38"
                                                            data-name="Path 38"
                                                            d="M9.792,1.412a.6.6,0,0,0-.445,0L2.208,4.267,9.569,7.211,16.93,4.267Zm8.151,3.74-7.775,3.11v9.476l7.775-3.11V5.153ZM8.971,17.739V8.261L1.2,5.152v9.477ZM8.9.3a1.794,1.794,0,0,1,1.333,0l8.527,3.412a.6.6,0,0,1,.375.555V14.629a1.2,1.2,0,0,1-.752,1.11L9.792,19.177a.6.6,0,0,1-.445,0L.753,15.739A1.2,1.2,0,0,1,0,14.629V4.267a.6.6,0,0,1,.376-.555Z"
                                                            fill="#fff"
                                                            fill-rule="evenodd"
                                                        />
                                                    </g>
                                                </svg>
                                                Sandık (0)
                                            </Link>
                                            <Link to={routes.GiftCard}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <CardGiftcardIcon />
                                                    Hediye Kuponu
                                                </div>
                                            </Link>

                                            <Link to={routes.Home}>
                                                <div style={{ display: "flex", alignItems: "center" }} onClick={() => handleSignOut()}>
                                                    <LogoutIcon />
                                                    Çıkış Yap
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
