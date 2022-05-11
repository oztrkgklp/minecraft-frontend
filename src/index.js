import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Store from "./redux/store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import StoreVIP from "./components/market/StoreVIP";
import StoreCosmetic from "./components/market/StoreCosmetic";
import StoreGiftCard from "./components/market/StoreGiftCard";
import PurchaseRv from "./components/market/PurchaseRv";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import MainPage from "./components/mainPage/MainPage";
import MainPageNewsDetail from "./components/mainPage/MainPageNewsDetail";
import MainGamePage from "./components/games/MainGamePage";
import LeadeboardPage from "./components/leaderboard/LeaderboardPage";
import ProductDetail from "./components/market/ProductDetail";
import AccountVerification from "./components/user/AccountVerification";
import SupportMain from "./components/support/SupportMain";
import UserChest from "./components/user/UserChest";
import UserProfile from "./components/user/UserProfile";
import Download from "./components/mainPage/Download";
import SupportPage from "./components/support/SupportPage";
import CCP from "./components/texts/CCP";
import $ from "jquery";
import GDPR from "./components/texts/GDPR";
import PP from "./components/texts/PP";
import TS from "./components/texts/TS";
import RR from "./components/texts/RR";
import SupportDetail from "./components/support/SupportDetail";

// Renders the root page.
const rootElement = document.getElementById("root");
const index = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.Home} element={<MainPage />} />
                    //STORE ROUTES
                    <Route path={routes.Store} element={<App />} />
                    <Route path={routes.VIP} element={<StoreVIP />} />
                    <Route path={routes.Cosmetic} element={<StoreCosmetic />} />
                    <Route path={routes.GiftCard} element={<StoreGiftCard />} />
                    <Route path={routes.PurchaseRv} element={<PurchaseRv />} />
                    <Route path={routes.PurchaseRvDetail} element={<ProductDetail />} />
                    <Route path={routes.StoreCostmeticDetail} element={<ProductDetail />} />
                    <Route path={routes.StoreVipDetail} element={<ProductDetail />} />
                    <Route path={routes.StoreDetail} element={<ProductDetail />} />
                    <Route path={routes.PopularProductDetail} element={<ProductDetail />} />
                    //END STORE ROUTES
                    <Route path={routes.SignUp} element={<SignUp />} />
                    <Route path={routes.SignIn} element={<SignIn />} />
                    <Route path={routes.MainPageNewsDetail} element={<MainPageNewsDetail />} />
                    <Route path={routes.Games} element={<MainGamePage />} />
                    <Route path={routes.Leaderboard} element={<LeadeboardPage />} />
                    <Route path={routes.AccountVerification} element={<AccountVerification />} />
                    <Route path={routes.UserChest} element={<UserChest />} />
                    <Route path={routes.UserProfile} element={<UserProfile />} />
                    <Route path={routes.ChangePassword} element={<UserProfile />} />
                    <Route path={routes.UserEmail} element={<UserProfile />} />
                    <Route path={routes.EditProfile} element={<UserProfile />} />
                    <Route path={routes.UserAccountEntries} element={<UserProfile />} />
                    <Route path={routes.Download} element={<Download />} />
                    <Route path={routes.Support} element={<SupportMain />} />
                    <Route path={routes.CreateTicket} element={<SupportPage />} />
                    <Route path={routes.SupportDetail} element={<SupportDetail />} />
                    //FOOTER ROUTES
                    <Route path={routes.CreatorPolicy} element={<CCP />} />
                    <Route path={routes.GDPR} element={<GDPR />} />
                    <Route path={routes.PrivacyPolicy} element={<PP />} />
                    <Route path={routes.TermsOfService} element={<TS />} />
                    <Route path={routes.Rules} element={<RR />} />
                    //END FOOTER ROUTES
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

render(index(), rootElement);
