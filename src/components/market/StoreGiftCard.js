import React from "react";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import logo from "../../assets/footer-logo.svg";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const StoreGiftCard = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ marginTop: "12%" }}>
            <div className="register-wrapper">
                {/* Create a logo div */}
                <div className="logo">
                    {parse(`<img src=${logo} alt=""></img>`)}
                    <b>RIVA NETWORK</b>
                </div>

                {/* Hediye kodlar */}
                <div className="info-text">
                    <b>Hediye Kodu Bozdur</b>
                    <p>Hediye kodları genellikle "RV-" ile başlar. Kodun içindeki 0 (sıfır) ve O (o harfi) kullanımlarının karışmadığını kontrol etmeyi unutma.</p>
                </div>

                <div className="input-wrap no-icon">
                    <input type="text" placeholder="RV-XXXX-XXXX-XXXX" />
                </div>

                {/* Creates a use button */}
                <div className="register-button">
                    <Link to={routes.Home} className="primary-btn normal-shadow">
                        KULLAN
                    </Link>
                </div>

                <div className="go-to-market">
                    <Link to={routes.Store}>
                        <KeyboardDoubleArrowLeftIcon />
                        MARKETE DÖN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StoreGiftCard;
