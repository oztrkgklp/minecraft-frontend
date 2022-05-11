import "./styles/style.css";
import StoreCategory from "./components/market/StoreCategory";
import UserBalances from "./components/market/UserBalances";
import MarketPlace from "./components/market/MarketPlace";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";

// Creates a new instance of the app.
function App() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="market-wrapper">
                <div className="container">
                    <div class="title">
                        <span>RİVANETWORK MARKET</span>
                        VIP, Kutular, Kozmetik ve dahası!
                    </div>
                    <StoreCategory />
                    <UserBalances />
                    <MarketPlace />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
