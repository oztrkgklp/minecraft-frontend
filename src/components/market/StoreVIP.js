import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import UserBalances from "./UserBalances";
import parse from "html-react-parser";
import riCheck from "../../assets/ri-check.svg";
import riClose from "../../assets/ri-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import { getVipDetails } from "../../redux/slices/vipDetailsSlice";
import constants from "../../util/constants";
import StoreCategory from "./StoreCategory";
import { routes } from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../redux/slices/selectedProductSlice";


// Returns a list of all VIP products.
const StoreVIP = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Returns a list of VIP products.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let products = useSelector((state) => state.products.value.filter((product) => product.type === constants.PRODUCT_TYPES.VIP));
    let vipDetails = useSelector((state) => state.vipDetails.value);

    // Dispatch the products and via details.
    React.useEffect(() => {
        dispatch(getProducts());
        dispatch(getVipDetails());
    }, []);

    const handleClick = (id) => {
        dispatch(getProduct(id));
        window.setTimeout(() => {navigate(routes.StoreVipDetail)} , 300)
    };

    // Returns true if the stock of the product is less than 3.
    const checkStock = (product) => {
        if (product.stock <= 3)
            return (
                <div className="top-badge">
                    <span>Sınırlı Stok!</span>
                </div>
            );
        if (product.isOnSale)
            return (
                <div className="top-badge purple">
                    <span>Özel İndirim!</span>
                </div>
            );
    };

    return (
        <div>
            <Header />

            <div className="container">
                <div class="riva-welcome">
                    <span>Riva Network &copy;</span>
                    <b>Market'e Hoşgeldin</b>
                </div>
                {/* Default StoreCategory category. */}
                <StoreCategory />
                {/* Checks if the user balances are valid for the current user. */}
                <UserBalances />
                <div className="market-content">
                    <div className="market-packs-list">
                        {/*  Parse the image and return a list of products */}
                        {products.map((product) => (
                            <div className="market-pack">
                                {checkStock(product)}
                                {parse(`<img src=${product.image} alt=""/>`)}

                                <div className="price">
                                    <span>
                                        {" "}
                                        {product.price.periodValue + " " + product.price.period}/{product.price.amount + " " + product.price.amountUnit}
                                    </span>
                                </div>
                                <div className="action" onClick={()=>handleClick(product.id)}>
                                    <a href="#"  className={product.stock === 0 ? "primary-btn red normal-shadow" : "primary-btn normal-shadow"}>
                                        {product.stock === 0 ? "Tükendi!" : "Satın Al"}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="package-area-table">
                        <div className="h5 text-white m-0">TÜM SUNUCULARDA</div>
                        {/* Generates a vip package - detail */}
                        {vipDetails.map((detail, i) => {
                            return (
                                <div className="package-detail">
                                    <div className="pd-item">{detail.name} </div>;
                                    {products.map((product) => {
                                        return product.detail[i].limit === null ? (
                                            product.detail[i].isTrue ? (
                                                <div class="pd-item">{parse(`<img src=${riCheck} alt=""/>`)}</div>
                                            ) : (
                                                <div class="pd-item">{parse(`<img src=${riClose} alt=""/>`)}</div>
                                            )
                                        ) : (
                                            <div class="pd-item">
                                                <span className={product.detail[i].isTrue ? "green" : "red"}>{product.detail[i].limit}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Footer - > Footer */}

            <Footer />
        </div>
    );
};

export default StoreVIP;
