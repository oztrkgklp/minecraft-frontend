import React from "react";
import parse from "html-react-parser";
import logo from "../../assets/footer-logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";

// Creates a signup form.
const SignUp = () => {
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    return (
        <div style={{ marginTop: "12%" }}>
            {/* Renders the register form. */}

            <div class="register-wrapper">
                <div class="logo">
                    {parse(`<img src=${logo} alt=""></img>`)}
                    <b>RIVA NETWORK</b>
                </div>

                <div class="input-wrap">
                    <span>
                        <PersonIcon />
                    </span>
                    <input type="text" placeholder="Kullanıcı adı" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div class="input-wrap">
                    <span>
                        <MailOutlineIcon />
                    </span>
                    <input type="text" placeholder="E-Posta" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="flex-input-wrap">
                    <div class="input-wrap">
                        <span>
                            <HttpsIcon />
                        </span>
                        <input type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="input-wrap">
                        <span>
                            <HttpsIcon />
                        </span>
                        <input type="password" placeholder="Şifre Tekrar" onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                </div>

                <div class="register-bottom">
                    <label class="check-container">
                        Beni Hatırla
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <a href="#">Şifremi unuttum</a>
                </div>

                <div class="policies">
                    <label class="check-container rounded">
                        Tüm <u>kuralları okudum</u> ve kabul ediyorum
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div class="register-button">
                    {
                        <Link to={userName && email && password && passwordConfirm && password === passwordConfirm ? routes.AccountVerification : ""} class="primary-btn normal-shadow">
                            KAYDOL
                        </Link>
                    }
                </div>

                <div class="already-have">
                    <p>Hey, zaten bir hesabın var mı? hemen giriş yap!</p>
                    <a href="#">Tıkla ve giriş yap</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
