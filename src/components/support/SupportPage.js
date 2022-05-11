import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import HackReport from "./categories/HackReport";
import BugReport from "./categories/BugReport";
import InappropriateChatReport from "./categories/InappropriateChatReport";
import PaymentReport from "./categories/PaymentReport";
import Suggestions from "./categories/Suggestions";
import TeamReport from "./categories/TeamReport";
import SalesReport from "./categories/SalesReport";
import AdReport from "./categories/AdReport";
import BreachReport from "./categories/BreachReport";
import Objection from "./categories/Objection";
import Questions from "./categories/Questions";
import GamePlay from "./categories/GamePlay";
import $ from "jquery";
import "select2"; 
import "select2/dist/css/select2.css";

const SupportPage = () => {
    $(document).ready(function () {
        $(".select2").select2({
            minimumResultsForSearch: -1,
        });
    });
    $(function () {
        $("#kategori-select").change(function () {
            var val = $(this).val();
            $(".kategori-item").hide();
            $("#" + val).show();
        });
    });
    return (
        <>
            <Header />
            <div className="gap"></div>

            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="profile-sidebar">
                        <div className="sidebar-announce">
                            <span>Bilgilendirme</span>
                            <p>Destek ekibimiz aktif olduğunda sorunuzu cevaplayacaktır. Anlayışınız için teşekkürler....</p>
                        </div>
                    </div>

                    <div className="profile-card">
                        <div className="input-wrapper">
                            <small>Talep Başlığı</small>
                            <div className="input-wrap input-wrap-2 no-icon">
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <small>Kategori</small>
                            <select className="select2 select2-profile" id="kategori-select">
                                <option value="select">Kategori seçin</option>
                                <option value="hile">Hile</option>
                                <option value="hata-bildirimi">Hata Bildirimi</option>
                                <option value="uygunsuz-sohbet">Uygunsuz Sohbet</option>
                                <option value="odeme-bildirimi">Ödeme Bildirimi</option>
                                <option value="oneriler">Öneriler</option>
                                <option value="takim-bildirimi">Takım Bildirimi</option>
                                <option value="satis-bildirimi">Satış Bildirimi</option>
                                <option value="reklam-bildirimi">Reklam Bildirimi</option>
                                <option value="oyun-bozanlik">Oyun Bozanlık</option>
                                <option value="ceza-itirazi">Ceza İtirazı</option>
                                <option value="sorular">Sorular</option>
                                <option value="oyun">Oyun</option>
                            </select>
                        </div>
                        <hr />
                        <br />

                        {/* <!-- hile  --> */}
                        <HackReport id="hile" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- hata bildirimi  --> */}
                        <BugReport id="hata-bildirimi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- uygunsuz sohbet  --> */}
                        <InappropriateChatReport id="uygunsuz-sohbet" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- odeme bildirimi --> */}
                        <PaymentReport id="odeme-bildirimi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- oneriler --> */}
                        <Suggestions id="oneriler" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- takim bildirimi  --> */}
                        <TeamReport id="takim-bildirimi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- satis bildirimi  --> */}
                        <SalesReport id="satis-bildirimi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- reklam bildirimi  --> */}
                        <AdReport id="reklam-bildirimi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- oyun-bozanlik  --> */}
                        <BreachReport id="oyun-bozanlik" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- ceza-itirazi  --> */}
                        <Objection id="ceza-itirazi" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- sorular  --> */}
                        <Questions id="sorular" className="kategori-item" style={{ display: "none" }} />
                        {/* <!-- oyun  --> */}
                        <GamePlay id="oyun" className="kategori-item" style={{ display: "none" }} />

                        <div className="action-button">
                            <button>Talep Oluştur</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Footer />
        </>
    );
};

export default SupportPage;
