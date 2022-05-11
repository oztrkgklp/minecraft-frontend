import React from "react";
import logo from "../../assets/footer-logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

// Returns a sign - in string.
const SignIn = () => {
    return (
        <div style={{ marginTop: "12%" }}>
            {" "}
            <div class="register-wrapper">
                <div class="logo">
                    {parse(`<img src=${logo} alt=""></img>`)} <b>RIVA NETWORK</b>
                </div>

                <div class="input-wrap">
                    <span>
                        <PersonIcon />
                    </span>
                    <input type="text" placeholder="Kullanıcı adı" />
                </div>
                <div class="input-wrap">
                    <span>
                        <HttpsIcon />
                    </span>
                    <input type="text" placeholder="Şifre" />
                </div>

                <div class="register-bottom">
                    <label class="check-container">
                        Beni Hatırla
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <a href="#">Şifremi unuttum</a>
                </div>
                <br />
                <div class="register-button">
                    <Link to={routes.Home} class="primary-btn normal-shadow">
                        GİRİŞ YAP
                    </Link>
                </div>

                <div class="already-have">
                    <p>HHey, henüz bir hesabın yok mu? Dert etme!</p>
                    <a href="#">Tıkla ve oluştur</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
