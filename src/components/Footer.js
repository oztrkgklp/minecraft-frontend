import React from "react";
import parse from "html-react-parser";
import discord from "../assets/discord-social.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import appStore from "../assets/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli_1-300x96.png";
import googlePlay from "../assets/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli_1-300x96.png";
import appGallery from "../assets/AppGallery_DownlaodBadge_TUR.jpg";
import footerLogo from "../assets/footer-logo.svg";
import { Link, Routes } from "react-router-dom";
import { setSignIn } from "../redux/slices/signInSlice";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../routes/routes";

// Returns a div for a registerbanner.

const Footer = () => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector((state) => state.isSignedIn.value);
    return (
        <div>
            {!isSignedIn && (
                <div className="register-banner">
                    <div className="overlay">
                        <div className="container">
                            <div className="text">
                                <h3>
                                    Sınırsız Eğlenceye Hazır mısın? <br />
                                    <span>Hemen ücretsiz kayıt ol ve tadını çıkar.</span>
                                </h3>
                            </div>
                            <div className="buttons">
                                <Link to="/Sign-Up" className="animation-btn animation-btn-blue scrollbar-animation">
                                    <span>ÜYE OL</span>
                                </Link>
                                <Link to="/More-Information" className="animation-btn animation-btn-green scrollbar-animation">
                                    <span>DAHA FAZLA BİLGİ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <footer>
                <div className="container">
                    <div className="footer-col">
                        <div className="logo">{parse(`<img src=${footerLogo} alt=""/>`)}</div>
                        <b>&copy; 2021 riva network®</b>
                    </div>
                    <div className="footer-col">
                        <div className="title">Yasal</div>
                        <div className="links">
                            <Link to={routes.TermsOfService}>
                                Hizmet Şartları Ve <br />
                                Üyelik Sözleşmesi
                            </Link>
                            <Link to={routes.PrivacyPolicy}>Gizlilik Politikası</Link>
                            <Link to={routes.GDPR}>K.V.K.K.</Link>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="title">Yararlı Linkler</div>
                        <div className="links">
                            <a href={routes.MinecraftWiki}>Minecraft Wiki</a>
                            <Link to={routes.RivaCommunity}>Riva Community</Link>
                            <Link to={routes.JoinTeam}>Ekibe Katıl</Link>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="title">Destek</div>
                        <div className="links">
                            <Link to={routes.SSS}>Sıkça Sorulan Sorular</Link>
                            <Link to={routes.HelpCenter}>Yardım Merkezi</Link>
                            <Link to={routes.CreatorPolicy}>İçerik Üretici Politikası</Link>
                            <Link to={routes.Rules}>Kurallar</Link>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="title">Kısayollar</div>
                        <div className="links">
                            <Link to={routes.Store}>Market</Link>
                            <Link to={routes.Leaderboard}>Sıralamalar</Link>
                            <Link to={routes.RedoCode}>Kod Bozdur</Link>
                            {!isSignedIn && <Link to={routes.SignUp}>Kayıt Ol</Link>}
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="title">Sosyal Medya</div>
                        <span>Bizi Takip Edin</span>
                        <div className="socials">
                            <a href="#">{parse(`<img src=${discord} alt=""/>`)}</a>
                            <a href="#">{parse(`<img src=${youtube} alt=""/>`)}</a>
                            <a href="#">{parse(`<img src=${instagram} alt=""/>`)}</a>
                            <a href="#">{parse(`<img src=${facebook} alt=""/>`)}</a>
                        </div>
                        <Link to={routes.Download} className="animation-btn animation-btn-blue scrollbar-animation">
                            <span>MINECRAFT İNDİR</span>
                        </Link>
                    </div>
                </div>
                <div className="footer-apps">
                    <a href="#"> {parse(`<img src=${appStore} alt=""/>`)}</a>
                    <a href="#">{parse(`<img src=${googlePlay} alt=""/>`)}</a>
                    <a href="#">{parse(`<img src=${appGallery} alt=""/>`)}</a>


                </div>
            </footer>
        </div>
    );
};

export default Footer;
