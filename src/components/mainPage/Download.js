import React from "react";
import Footer from "../Footer";
import DownloadHeader from "../header/DownloadHeader";
import parse from "html-react-parser";
import WindowsLogo from "../../assets/windows-logo-icon-16.jpg";
import LinuxLogo from "../../assets/linuxpng.png";
import MacLogo from "../../assets/Apple-logo.png";
import LauncherLogo from "../../assets/launcher-img.png";
import DownloadDetail from "./DownloadDetail";

const Download = () => {
    return (
        <div>
            <div class="landing-hero">
                <div class="overlay">
                    <div class="container">
                        <DownloadHeader />

                        <div class="hamburger-btn">
                            <button class="burger" onclick="this.classList.toggle('active');">
                                <span></span>
                            </button>
                        </div>

                        <div class="landing-content">
                            <div class="text">
                                <h1>RivaLauncher</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                                <a href="#" class="primary-btn">
                                    HEMEN İNDİR
                                </a>
                                <div class="os-list">
                                    <a href="#">
                                        {parse(`<img src=${WindowsLogo} alt=""/>`)}
                                        Windows Alternatif
                                    </a>
                                    <a href="#">
                                        {parse(`<img src=${LinuxLogo} alt=""/>`)}
                                        Linux
                                    </a>
                                    <a href="#">
                                        {parse(`<img src=${MacLogo} alt=""/>`)}
                                        MacOS
                                    </a>
                                </div>
                            </div>
                            <div class="image">
                                <div class="img-wrap">{parse(`<img src=${LauncherLogo} alt=""/>`)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownloadDetail />
            <div class="gap"></div>
            <Footer />
        </div>
    );
};

export default Download;
