import React from "react";

const BreachReport = ({id, className, style}) => {
    return (
        <div>
            <div id={id} className={className} style={style}>
                <div className="input-wrapper">
                    <small>Mesajınız</small>
                    <div className="input-wrap input-wrap-2 auto-height">
                        <textarea placeholder=""></textarea>
                    </div>
                </div>
                <div className="input-wrapper">
                    <small>Şüpheli Oyuncular</small>
                    <div className="input-wrap input-wrap-2 no-icon">
                        <input type="text" placeholder="" />
                    </div>
                    <div className="input-info">Oyuncu ismi girdikten sonra boşluk bırakmanız gerekmektedir.</div>
                </div>
                <div className="input-wrapper">
                    <small>Ek Dosyalar</small>
                    <div className="input-wrap input-wrap-2 no-icon">
                        <input type="file" placeholder="" className="addition-files" />
                    </div>
                    <div className="input-info">
                        NOT: Destek sistemimiz üzerinden yalnızca fotoğraf formatları kabul edilmektedir, video içeriklerinizi video platformuna yükledikten sonra videonuzun linkini ek bağlantılar
                        bölümüne bırakabilirsiniz.
                    </div>
                </div>
                <div className="input-wrapper">
                    <small>Ek Bağlantılar</small>
                    <div className="input-wrap input-wrap-2 no-icon">
                        <input type="text" placeholder="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreachReport;
