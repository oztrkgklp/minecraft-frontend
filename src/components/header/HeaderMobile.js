import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import logo from "../../assets/footer-logo.svg";
import parse from "html-react-parser";
import { routes } from "../../routes/routes";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

// Creates a style list with the default styles.
const useStyles = makeStyles(() => ({
    mobileMenu: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
    },
    mobileMenuListItems: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
        paddingBottom: "10px",
        marginTop: "10px",
        alignItems: "center",
    },
    mobileMenuListItemsLink: {
        color: "#fff",
        fontSize: "1.2rem",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Nunito', sans-serif !important",
        "&:hover": {
            backgroundImage: "linear-gradient(30deg, #3758FF 0%, rgba(40, 181, 244, 0.29) 100%)",
            "-webkit-filter": "drop-shadow(0px 3px 6px #3758FF)",
            filter: "drop-shadow(0px 3px 6px #3758FF)",
        },
    },
    liHover: {
        "&:hover": {
            backgroundImage: "linear-gradient(30deg, #3758FF 0%, rgba(40, 181, 244, 0.29) 100%)",
            "-webkit-filter": "drop-shadow(0px 3px 6px #3758FF)",
            filter: "drop-shadow(0px 3px 6px #3758FF)",
        },
    },
}));

export default function HeaderMobile() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    // Toggle the drawer.
    const toggleDrawer = () => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState(!state);
    };

    // Generates a menu item.
    const list = (anchor) => (
        <Box role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <div class="mobile-menu-bg"></div>
            <List className={classes.mobileMenu}>
                <ul>
                    <li className={classes.mobileMenuListItems} style={{ marginTop: "20%", marginBottom: "10%" }}>
                        <div className="riva-logo">
                            <Link to={routes.Home} className={classes.logo}>
                                {parse(`<img src=${logo} alt=""></img>`)}
                            </Link>
                        </div>
                    </li>
                    <li className={classes.mobileMenuListItems}>
                        <Link to={routes.Home} className={classes.mobileMenuListItemsLink}>
                            <HomeIcon style={{ marginRight: "5%" }} />
                            Anasayfa
                        </Link>
                    </li>
                    <li className={classes.mobileMenuListItems}>
                        <Link to={routes.Games} className={classes.mobileMenuListItemsLink}>
                            <GamesIcon style={{ marginRight: "5%" }} />
                            Oyunlar
                        </Link>
                    </li>
                    <li className={classes.mobileMenuListItems} className={classes.liHover}>
                        <Link to={routes.Leaderboard} className={classes.mobileMenuListItemsLink}>
                            <LowPriorityIcon style={{ marginRight: "5%" }} />
                            Sıralama
                        </Link>
                    </li>

                    <li className={classes.mobileMenuListItems}>
                        <Link to={routes.Store} className={classes.mobileMenuListItemsLink}>
                            <LocalMallIcon style={{ marginRight: "5%" }} />
                            Market
                        </Link>
                    </li>
                    <li className={classes.mobileMenuListItems}>
                        <Link to={routes.Support} className={classes.mobileMenuListItemsLink}>
                            <SupportAgentIcon style={{ marginRight: "5%" }} />
                            Destek
                        </Link>
                    </li>
                    <li className={classes.mobileMenuListItems}>
                        <a href="#" className={classes.mobileMenuListItemsLink}>
                            <div style={{ marginRight: "10%", display: "flex", alignItems: "center" }} onClick={() => navigate(routes.SignUp)}>
                                <PersonAddAltIcon style={{ marginRight: "10%" }} />
                                Kayıt
                            </div>

                            <div style={{ display: "flex", alignItems: "center" }} onClick={() => navigate(routes.SignIn)}>
                                <LoginIcon style={{ marginRight: "10%" }} />
                                Giriş
                            </div>
                        </a>
                    </li>
                </ul>
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <div>
                {/* Creates a PaperProps. */}
                <Drawer
                    open={state}
                    PaperProps={{
                        sx: {
                            backgroundColor: "#19232E",
                            width: "45%",
                        },
                    }}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
        </div>
    );
}
