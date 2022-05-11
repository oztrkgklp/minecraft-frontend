import React from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import parse from "html-react-parser";
import constants from "../../util/constants";
import Footer from "../Footer";
import { routes } from "../../routes/routes";
import { getProduct } from "../../redux/slices/selectedProductSlice";
import { Link } from "react-router-dom";

// Creates a rv file that can be used to purchase a product.
const PurchaseRv = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [element, setElement] = React.useState({
        id:-1
    });
    const [clicked, setClicked] = React.useState(false);
    // Dispatch the products.
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products.value).filter((product) => product.type === constants.PRODUCT_TYPES.RV);
    React.useEffect(() => {
        dispatch(getProducts());
    }, []);
    
    React.useEffect(() => {
        handleClick();
    }, [clicked]);

    const handleClick = () => {
        dispatch(getProduct(element.id));
        setClicked(false);
    };

    return (
        <div>
            <Header />

            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="profile-card">
                        <div className="credit-campaign">
                            <p>60 RC veya üzeri yükle +5 gün Pet Üyeliği kazan!</p>
                        </div>
                        <div className="credit-title">Kaç RC yüklemek istersin?</div>

                        <div className="credit-wrapper">
                            {/* Returns a credit */}
                            {products.map((product) => {
                                return (
                                    <div
                                        className={"credit-item " + (product.id === element.id ? " active" : "")}
                                        onClick={() => {
                                            setElement(product)
                                            setClicked(true);
                                        }}
                                    >
                                        {parse(`<img src=${product.image} alt=""></img>`)}
                                        <span>
                                            {product.price.amount} {product.price.unit}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cont-btn">
                            <Link to={routes.PurchaseRvDetail} className="animation-btn animation-btn-blue scrollbar-animation" href="">
                                <span>Devam Et</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Footer />
        </div>
    );
};

export default PurchaseRv;
