import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const AccountVerification = () => {
    const [isVerified, setIsVerified] = React.useState(false);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="mail-dogrulama-wrapper">
                    <div className="steps-wrap">
                        <div className="bar"></div>
                        <div className={"step " + (!isVerified ? " active" : "")}>
                            <div className="number">1</div>
                            <span>E-Posta Doğrulama</span>
                        </div>
                        <div className={"step " + (isVerified ? " active" : "")}>
                            <div className="number">2</div>
                            <span>E-Posta Onay</span>
                        </div>
                    </div>
                    {isVerified && 
                        <div className="dogrulama-alert">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                Mail Başarıyla Gönderildi.
                            </p>
                        </div>
                    }

                    <div className="dogrulama-box" onClick={() => setIsVerified(true)}>
                        <b>E-Posta Adresini Doğrula</b>
                        <p>Kullanıcı sayfalarını görüntüleyebilmen ve işlem yapabilmen için e-posta adresini doğrulaman gerek.</p>
                        <a className="animation-btn animation-btn-blue scrollbar-animation" id="mail-dogrula" >
                            <span>Doğrulama Maili Gönder</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AccountVerification;
