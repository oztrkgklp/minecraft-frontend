import React from "react";
import discordLogo from "../../assets/Discord-Logo+Wordmark-Color.svg";
import parse from "html-react-parser";
import { getBlogPosts } from "../../redux/slices/blogPostSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";
import { getBlogPost } from "../../redux/slices/selectedBlogPostSlice";
import { useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/mc-pic.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { setSignIn } from "../../redux/slices/signInSlice";

const MainPageNews = () => {
    let isSignedIn = useSelector((state) => state.isSignedIn.value);
    const dispatch = useDispatch();
    const blogPosts = useSelector((state) => state.blogPosts.value);
    const navigate = useNavigate();
    React.useEffect(() => {
        dispatch(getBlogPosts());
    }, []);

    const handleClick = (id) => {
        dispatch(getBlogPost(id));
        window.setTimeout(() => {
            navigate(routes.MainPageNewsDetail);
        }, 300);
    };
    const handleSignOut = () => {
        dispatch(setSignIn(false));
        window.scrollTo(0, 0);
    };

    return (
        <div>
            {" "}
            <div className="main-wrapper">
                <div className="container">
                    <div className="content">
                        {blogPosts.map((blogPost) => {
                            return (
                                <div className="blog-post">
                                    <div className="image">{parse(`<img src=${blogPost.imageHome} alt=""></img>`)}</div>
                                    <div className="text">
                                        <h3>{blogPost.title}</h3>
                                        <span className={"color" + (blogPost.category === "Güncelleme" ? "-green" : "-blue")}>
                                            {blogPost.periodValue} {blogPost.perioUnit} önce <b>{blogPost.category}</b> kategorisinde yayınlandı.
                                        </span>
                                        <p>{blogPost.description}</p>
                                        <div className="button">
                                            <a className="primary-btn" style={{ cursor: "pointer" }} onClick={() => handleClick(blogPost.id)}>
                                                DEVAMINI OKU
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div class="side">
                        {isSignedIn && (
                            <div class="side-profile">
                                <div class="image">{parse(`<img src="${ProfilePic}" alt=""/>`)}</div>
                                <b>mamiemma ( 0 SC )</b>
                                <a onClick={() => handleSignOut()}>
                                    <LogoutIcon />
                                    Çıkış Yap
                                </a>
                            </div>
                        )}

                        <div class="discord-join">
                            <div class="head">{parse(`<img src=${discordLogo} alt=""></img>`)}</div>
                            <div class="body">
                                <p>
                                    <b>259</b> Çevrimiçi Üye
                                </p>
                                <a href="#">Katıl</a>
                            </div>
                        </div>
                        <div class="side-box">
                            <div class="head">RİVA NETWORK NEDİR</div>
                            <div class="body">
                                <p>Riva® Network 9 yıldır hizmet veren Türkiye'nin en köklü Minecraft sunucusudur. Riva Network®'da Riva Network® Launcher sayesinde hilesiz ve bedava Minecraft oynayabilirsiniz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageNews;
