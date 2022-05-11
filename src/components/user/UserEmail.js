import React from "react";

const UserEmail = () => {
    return (
        <div>
            <div className="profile-card">
                <div className="card-sub-title">E-Posta Değiştirme</div>
                <div className="card-flex">
                    <div className="info-text">
                        <b>E-Posta Değiştirme Bağlantısı Gönder</b>
                        <p>
                            E-posta adresine ( <b>info@riva.network</b> ) e-posta adresini değiştirmeni sağlayacak bir bağlantı gönderilecek. <br />
                            <br />
                            Bu e-postadaki bağlantıya tıkladığında yeni e-posta adresini girebileceğin bir form ile karşılaşacaksın. Gönderdiğimiz e-postayı göremediysen gereksiz (spam) klasörüne göz atmayı unutma.
                        </p>
                    </div>
                </div>
                <div className="action-button">
                    <button>Gönder</button>
                </div>
            </div>
        </div>
    );
};

export default UserEmail;
