import React from "react";
import $ from "jquery";
import "select2"; 
import "select2/dist/css/select2.css";

const EditProfile = () => {
    $(document).ready(function () {
        $(".select2").select2({
            minimumResultsForSearch: -1,
        });
    });

    return (
        <div>
            <div className="profile-card">
                <div className="card-sub-title">Kullanıcı Bilgileri</div>

                <div className="flex-input-wrapper">
                    <div className="input-wrapper">
                        <small>İsim</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="text" placeholder="İsim" />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <small>Soyisim</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="text" placeholder="Soyisim" />
                        </div>
                    </div>
                </div>

                <div className="flex-input-wrapper">
                    <div className="input-wrapper">
                        <small>Kayıt Tarihi</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="text" value="2021-09-17 13:22:36" disabled />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <small>Doğum Tarihi</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="date" placeholder="" />
                        </div>
                    </div>
                </div>

                <div className="card-sub-title">İletişim Bilgileri</div>
                <p className="info-text">
                    E-posta adresini değiştirmek için <a href="#">E-posta değiştirme</a> sayfasını kullanabilirsin.
                </p>

                <div className="flex-input-wrapper">
                    <div className="input-wrapper">
                        <small>E-Posta</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="text" value="info@riva.network" disabled />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <small>Telefon Numarası</small>
                        <div className="input-wrap input-wrap-2 no-icon">
                            <input type="text" placeholder="Telefon Numarası" />
                        </div>
                    </div>
                </div>

                <div className="card-sub-title">Adres Bilgileri</div>
                <p className="info-text">
                    Fatura kesebilmemiz için gereklidir. Adresine herhangi bir gönderim yapılmaz. <br />
                    Ayrıntılı bilgi için <a href="#">Neden adres bilgilerimi belirtmem gerekiyor?</a> makalemize göz atabilirsin.
                </p>

                <div className="flex-input-wrapper">
                    <div className="input-wrapper">
                        <small>İl</small>
                        <select className="select2 select2-profile">
                            <option value="">İstanbul</option>
                            <option value="">İzmir</option>
                            <option value="">Ankara</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <small>İlçe</small>
                        <select className="select2 select2-profile">
                            <option value="">İstanbul</option>
                            <option value="">İzmir</option>
                            <option value="">Ankara</option>
                        </select>
                    </div>
                </div>
                <div className="input-wrapper">
                    <small>Adres</small>
                    <div className="input-wrap input-wrap-2 auto-height">
                        <textarea placeholder="Adres"></textarea>
                    </div>
                </div>
                <p className="info-text">Adres bilgilerine alakasız içerik, küfür, argo vb. şeyler yazmamalısın. Adres sistemi vergi daireleri ile entegre çalışmaktadır.</p>

                <div className="action-button">
                    <button>Güncelle</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
