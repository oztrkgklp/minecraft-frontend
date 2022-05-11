import React from "react";
import HeaderDesktop from "./header/HeaderDesktop";
import HeaderMobile from "./header/HeaderMobile";

const Header = () => {
    const [isMobile,setIsMobile] = React.useState(false)
    return <div>
         <div className="header-hero">
                    <div className="hero-overlay">
                        <div className="hero-logo-wrap">
                            <div className="hero-logo">RIVA NETWORK</div>

                        </div>
                        <div class="hamburger-btn">
                            <button class={"burger"+ (isMobile? " active" : "")} onClick={()=>setIsMobile(!isMobile)}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>

        {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </div>;

};

export default Header;
