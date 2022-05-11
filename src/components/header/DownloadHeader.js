import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../../redux/slices/signInSlice";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";

const DownloadHeader = () => {
    let isSignedIn = useSelector((state) => state.isSignedIn.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = Boolean(anchorEl);
    const handleSignOut = () => {
        dispatch(setSignIn(false));
        window.scrollTo(0, 0);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <header>
                <div class="container">
                    <div class="header-left">
                        <Link to={routes.Home}>
                            <HomeIcon />
                            Anasayfa
                        </Link>
                        <Link to={routes.Games}>
                            <GamesIcon />
                            Oyunlar
                        </Link>
                        <Link to={routes.Store}>
                            <LocalMallIcon />
                            Market
                        </Link>
                    </div>
                    <div class="header-right">
                        {!isSignedIn ? (
                            <a href="#">
                                <div
                                    style={{ marginRight: "10%", display: "flex", alignItems: "center" }}
                                    onClick={() =>
                                        window.setTimeout(() => {
                                            navigate(routes.SignUp);
                                        }, 300)
                                    }
                                >
                                    <PersonAddAltIcon />
                                    Kayıt
                                </div>

                                <div
                                    style={{ display: "flex", alignItems: "center" }}
                                    onClick={() =>
                                        window.setTimeout(() => {
                                            navigate(routes.SignIn);
                                        }, 300)
                                    }
                                >
                                    <LoginIcon />
                                    Giriş
                                </div>
                            </a>
                        ) : (
                            <div>
                                <div>
                                    <IconButton id="basic-button" size="small" aria-controls={isOpen ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={isOpen ? "true" : undefined} style={{ color: "white" }} onClick={handleClick}>
                                        mamiemma <KeyboardArrowDownIcon style={{ color: "white" }} />
                                    </IconButton>
                                </div>

                                <Menu
                                    PaperProps={{
                                        style: {
                                            background: "rgba(0,0,0,0.05)",
                                            color: "white !important",
                                            textDecoration: "none !important",
                                        },
                                    }}
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={isOpen}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <Link to={routes.UserProfile}>
                                        <MenuItem style={{ color: "white", display: "flex", alignItems: "center" }}>
                                            {" "}
                                            <PersonOutlineIcon style={{ marginRight: "5px" }} /> Profil
                                        </MenuItem>
                                    </Link>
                                    <Link to={routes.PurchaseRv}>
                                        <MenuItem style={{ color: "white", display: "flex", alignItems: "center" }}>
                                            <CreditCardIcon style={{ marginRight: "5px" }} />
                                            Kredi 0 <span>+</span>
                                        </MenuItem>
                                    </Link>
                                    <Link to={routes.UserChest}>
                                        <MenuItem style={{ color: "white", display: "flex", alignItems: "center" }}>
                                            <svg style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" width="19.139" height="19.047" viewBox="0 0 19.139 19.047">
                                                <g id="box" transform="translate(0 -0.173)">
                                                    <path
                                                        id="Path_38"
                                                        data-name="Path 38"
                                                        d="M9.792,1.412a.6.6,0,0,0-.445,0L2.208,4.267,9.569,7.211,16.93,4.267Zm8.151,3.74-7.775,3.11v9.476l7.775-3.11V5.153ZM8.971,17.739V8.261L1.2,5.152v9.477ZM8.9.3a1.794,1.794,0,0,1,1.333,0l8.527,3.412a.6.6,0,0,1,.375.555V14.629a1.2,1.2,0,0,1-.752,1.11L9.792,19.177a.6.6,0,0,1-.445,0L.753,15.739A1.2,1.2,0,0,1,0,14.629V4.267a.6.6,0,0,1,.376-.555Z"
                                                        fill="#fff"
                                                        fill-rule="evenodd"
                                                    />
                                                </g>
                                            </svg>
                                            Sandık(0)
                                        </MenuItem>
                                    </Link>
                                    <Link to={routes.GiftCard}>
                                        <MenuItem style={{ color: "white", display: "flex", alignItems: "center" }}>
                                            {" "}
                                            <CardGiftcardIcon style={{ marginRight: "5px" }} /> Hediye Kuponu
                                        </MenuItem>
                                    </Link>
                                </Menu>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default DownloadHeader;
