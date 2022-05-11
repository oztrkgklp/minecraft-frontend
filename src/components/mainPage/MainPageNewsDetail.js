import React from "react";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import CategoryIcon from "@mui/icons-material/Category";
import discordLogo from "../../assets/Discord-Logo+Wordmark-Color.svg";
import mcPic from "../../assets/mc-pic.png";

const MainPageNewsDetail = () => {
    const blogPost = useSelector((state) => state.selectedBlogPost.value);
    console.log(blogPost);
    return (
        <div>
            <Header />
            <div class="main-wrapper">
                <div class="container">
                    <div class="content">
                        <div className="blog-detail-wrap">
                            <div className="image">
                                <div className={"category-badge" + (blogPost.category === "Güncelleme" ? " green" : " blue")}>
                                    <CategoryIcon />
                                    {blogPost.category}
                                </div>
                                {parse(`<img src=${blogPost.imageDetail} alt=""></img>`)}
                            </div>
                            <div className="blog-detail-content">
                                <h1>{blogPost.title}</h1>
                                <span className={"color" + (blogPost.category === "Güncelleme" ? "-green" : "-blue")}>
                                    {blogPost.periodValue} {blogPost.perioUnit} önce <b>{blogPost.category}</b> kategorisinde yayınlandı.
                                </span>

                                {parse(blogPost.content)}
                            </div>
                        </div>
                    </div>
                    <div class="side">
                        <div class="side-profile">
                            <div class="image">{parse(`<img src=${mcPic} alt="">Güncelleme</img>`)}</div>
                            <b>mamiemma ( 0 SC )</b>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.21" height="16.758" viewBox="0 0 17.21 16.758">
                                    <g id="Iconly_Light_Upload" data-name="Iconly/Light/Upload" transform="translate(16.61 0.6) rotate(90)">
                                        <g id="Upload" transform="translate(0 16.01) rotate(-90)">
                                            <path id="Stroke-1" d="M10.3,3.883V3.1A3.1,3.1,0,0,0,7.2,0H3.1A3.1,3.1,0,0,0,0,3.1v9.36a3.1,3.1,0,0,0,3.1,3.1H7.206a3.09,3.09,0,0,0,3.09-3.09v-.793" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" fill-rule="evenodd" />
                                            <line id="Stroke-3" x1="10.126" transform="translate(5.884 7.779)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" />
                                            <path id="Stroke-5" d="M0,0,2.462,2.451,0,4.9" transform="translate(13.547 5.327)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" fill-rule="evenodd" />
                                        </g>
                                    </g>
                                </svg>
                                Çıkış Yap
                            </a>
                        </div>
                        <div class="discord-join">
                            <div class="head">{parse(`<img src=${discordLogo} alt="">Güncelleme</img>`)} </div>
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

export default MainPageNewsDetail;
