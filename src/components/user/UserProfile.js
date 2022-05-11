import React from "react";
import Header from "../../components/Header";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BlockIcon from "@mui/icons-material/Block";
import LogoutIcon from "@mui/icons-material/Logout";
import UserProfileMain from "./UserProfileMain";
import UserChangePassword from "./UserChangePassword";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import UserEmail from "./UserEmail";
import EditProfile from "./EditProfile";
import { useDispatch } from "react-redux";
import { setSignIn } from "../../redux/slices/signInSlice";
import ProfilePic from "../../assets/profile-pic.png";
import parse from "html-react-parser";
import UserProfileAccountHistory from "./UserProfileAccountHistory";

const UserProfile = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(setSignIn(false));
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <Header />
            <div className="gap"></div>

            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="profile-sidebar">
                        <div className="user-profile">
                            <div className="pic-wrap">
                                <div className="pic">{parse(`<img src="${ProfilePic}" alt=""/>`)}</div>
                            </div>
                            <div className="name">RIVADEV</div>
                            <div className="rank-wrap">
                                <div className="rank">
                                    <span>Yönetici</span>
                                </div>
                                <div className="rank">
                                    <img src="images/valorantgold.png" alt="" />
                                    <div className="rank-tooltip">
                                        <p>
                                            <span>Seviye:</span> Altın 3
                                        </p>
                                        <p>
                                            <span>Tecrübe Puanı:</span> 0 TP
                                        </p>
                                        <p>
                                            <span>Sonraki Seviye:</span> 0 TP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-links">
                            <div className="subtitle">Hesap Ayarları</div>
                            <Link to={routes.EditProfile} className={window.location.pathname === routes.EditProfile ? "active" : ""}>
                                <ManageAccountsIcon />
                                Profili düzenle
                            </Link>
                            <Link to={routes.ChangePassword} className={window.location.pathname === routes.ChangePassword ? "active" : ""}>
                                <LockOpenIcon />
                                Şifreyi Değiştir
                            </Link>
                            <Link to={routes.UserEmail} className={window.location.pathname === routes.UserEmail ? "active" : ""}>
                                <MailOutlineIcon />
                                E-Posta
                            </Link>
                            <Link to={routes.UserSubscriptions} className={window.location.pathname === routes.UserSubscriptions ? "active" : ""}>
                                <SubscriptionsIcon />
                                Abonelikler
                            </Link>
                            <Link to={routes.UserChangeSkin}>
                                <ChangeCircleIcon />
                                Skin Değiştir
                            </Link>
                            <hr />
                            <div className="subtitle">Ayrıntılar</div>
                            <Link to={routes.UserPaymentHistory} className={window.location.pathname === routes.UserPaymentHistory ? "active" : ""}>
                                <ReceiptIcon />
                                Ödeme Geçmişim
                            </Link>
                            <Link to={routes.UserRvHistory} className={window.location.pathname === routes.UserRvHistory ? "active" : ""}>
                                <ReceiptIcon />
                                RV Geçmişim
                            </Link>
                            <Link to={routes.UserCoinHistory} className={window.location.pathname === routes.UserCoinHistory ? "active" : ""}>
                                <MonetizationOnIcon />
                                Coin Geçmişim
                            </Link>
                            <Link to={routes.UserAccountEntries} className={window.location.pathname === routes.UserAccountEntries ? "active" : ""}>
                                <ManageAccountsIcon />
                                Hesap Kayıtlarım
                            </Link>
                            <Link to={routes.UserPunishHistory} className={window.location.pathname === routes.UserPunishHistory ? "active" : ""}>
                                <BlockIcon />
                                Ceza Geçmişim
                            </Link>
                        </div>

                        <div className="logout-btn" onClick={() => handleSignOut()}>
                            <Link to={routes.Home}>
                                <LogoutIcon />
                                Çıkış yap
                            </Link>
                        </div>
                    </div>

                    {window.location.pathname === routes.UserProfile && <UserProfileMain />}
                    {window.location.pathname === routes.ChangePassword && <UserChangePassword />}
                    {window.location.pathname === routes.UserEmail && <UserEmail />}
                    {window.location.pathname === routes.EditProfile && <EditProfile />}
                    {window.location.pathname === routes.UserAccountEntries && <UserProfileAccountHistory />}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
