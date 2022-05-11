import React from "react";
import StoreCategory from "./StoreCategory";
import UserBalances from "./UserBalances";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import constants from "../../util/constants";
import { getProduct } from "../../redux/slices/selectedProductSlice";
import { routes } from "../../routes/routes";
import { useNavigate } from "react-router-dom";

// Returns a copy of the market.
const StoreCosmetic = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

   
    // Dispatch all products that are COSMETIC
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let products = useSelector((state) => state.products.value.filter((product) => product.type === constants.PRODUCT_TYPES.COSMETIC));

    React.useEffect(() => {
        dispatch(getProducts());
    }, []);

    const handleClick = (id) => {
        dispatch(getProduct(id));
        window.setTimeout(() => {navigate(routes.StoreCostmeticDetail)} , 300)
    };

    return (
        <div>
            <Header />

            <div class="container">
                {/* Riva - welcome */}
                <div class="riva-welcome">
                    <span>Riva Network &copy;</span>
                    <b>Market'e Hoşgeldin</b>
                </div>
                {/* Default StoreCategory category. */}
                <StoreCategory />

                {/* UserBalances - > user balances */}
                <div>
                    <UserBalances />
                </div>
                <div class="market-content">
                    <div class="market-items-list">
                        {/* Returns a list of all products in the market. */}
                        {products.map((product) => (
                            <div onClick={(() => handleClick(product.id))}>
                                <div class="market-item-box" >
                                <div class="head">
                                    <span>{product.name}</span>
                                    <small>
                                        {product.price.periodValue} {product.price.period}
                                    </small>
                                </div>
                                <div class="image">{parse(`<img src=${product.image} alt=""></img>`)}</div>
                                <div class="action" >
                                    <a href="#" class="primary-btn normal-shadow">
                                        {product.price.amount} {product.price.amountUnit}
                                    </a>
                                </div>
                            </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div class="faq-wrap">
                    <div class="faq-wrap-content">
                        <h2>Sıkça Sorulan Sorular</h2>
                        <div class="faq-cols">
                            <div class="faq-col">
                                <h3>Ürünler ne zaman teslim edilir?</h3>
                                <p>Ürün, satın alımının ardından aksi belirtilmediği sürece kısa süre içerisinde hesabına tanımlanır. Ürün teslimatıyla ilgili sorun yaşadığını düşünüyorsan Yardım Merkezi'ni kullanabilirsin.</p>
                            </div>
                            <div class="faq-col">
                                <h3>Ürünleri satın almak için oyunda olmak?</h3>
                                <p>Hayır, oyunda olman gerekmiyor. Böylelikle bilgisayara erişimin olmadığı durumlarda dahi kampanyalardan yararlanmaya devam edebilirsin.</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-wrap-bottom">
                        <Link to="/">Daha Fazla Detay İçin Tıkla</Link>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "3%" }}>
                {/* Footer - > Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default StoreCosmetic;
