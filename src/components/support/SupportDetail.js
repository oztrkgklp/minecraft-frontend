import React from "react";
import parse from "html-react-parser";
import Header from "../Header";
import Footer from "../Footer";
import message1 from "../../assets/message-1.png";
import message2 from "../../assets/message-2.png";
import badgeCheck from "../../assets/badge-check.svg";

const SupportDetail = () => {
    return (
        <div>
            <Header />
            <div class="gap"></div>
            <div class="profile-page-wrapper">
                <div class="container">
                    {" "}
                    <div class="profile-sidebar">
                        <div class="sidebar-announce">
                            <span>Bilgilendirme</span>
                            <p>Şuanda destek ekibimizden çevirim içi Olan kimse yoktur, Destek ekibimiz aktif olduğunda sorunuzu cevaplayacaktır. Anlayışınız için teşekkürler....</p>
                        </div>
                    </div>
                    <div class="profile-card no-pad">
                        <div class="card-header">
                            <div class="left">
                                <div class="message-title">Merhabalar size bir soru sormak istiyorum</div>
                            </div>
                            <div class="right">
                                <div class="message-stats">
                                    <span>Syblock</span>
                                    <span>Ödeme Bildirimi</span>
                                    <span>24 Tmz. 2021</span>
                                    <span class="green">Cevaplandı</span>
                                </div>
                            </div>
                        </div>

                        <div class="card-content">
                            <div class="messages">
                                <div class="message-item">
                                    <div class="pic">{parse(`<img src=${message1} alt=""></img>`)}</div>
                                    <div class="details">
                                        <b>
                                            mertkaan
                                            {parse(`<img src=${badgeCheck} alt=""></img>`)}
                                        </b>
                                        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</span>
                                    </div>
                                </div>
                                <div class="message-item my-message">
                                    <div class="details">
                                        <b>mamiemma</b>
                                        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, </span>
                                    </div>
                                    <div class="pic">{parse(`<img src=${message2} alt=""></img>`)}</div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="input-wrapper">
                                <div class="input-wrap input-wrap-2 auto-height">
                                    <textarea placeholder="Destek ekibimize göndermek istediğiniz mesaj"></textarea>
                                </div>
                            </div>
                            <div class="action-button">
                                <button>Gönder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gap"></div>
            <Footer />
        </div>
    );
};

export default SupportDetail;
