import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import parse from "html-react-parser";
import constants from "../../util/constants";
import { getProduct } from "../../redux/slices/selectedProductSlice";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";


const Product = (props) => {
    // Use selector to select products.
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let products = useSelector((state) => state.products.value).filter((product) => product.type === constants.PRODUCT_TYPES.MARKET);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const handleClick = (id) => {
        dispatch(getProduct(id));
        window.setTimeout(() => {
            navigate(routes.StoreDetail);
        }, 300);
    };

    return (
        <div>
            <div className="sub-title">Haftanın en popüler ürünleri</div>
            <div className="market-list">
                {/* Returns a formatted list of all available products. */}
                {products
                    .filter((product) => !product.isPopular)
                    .map((product) => {
                        return (
                            <div className={"market-item-wrap " + (product.isOnSale ? "on-sale" : "")} onClick={() => handleClick(product.id)}>
                                <div className="market-item">
                                    {product.isOnSale ? (
                                        <div className="badge-overlay">
                                            <span className="top-right badge red">%{product.discountPercentage} İNDİRİM</span>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    <div className="name">{product.name}</div>
                                    <div className="image">{parse(`<img src=${product.image} alt=""/>`)}</div>
                                    <div className="price">
                                        {" "}
                                        {product.price.periodValue + " " + product.price.period}/{product.price.amount + " " + product.price.amountUnit}
                                    </div>
                                    <a href="#" className="primary-btn normal-shadow" >
                                        Hemen Al
                                    </a>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Product;
