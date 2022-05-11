import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import parse from "html-react-parser";
import { getProduct } from "../../redux/slices/selectedProductSlice";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "select2";
import "select2/dist/css/select2.css";

const ProductDetail = () => {
    $(document).ready(function () {
        $(".select2").select2({
            minimumResultsForSearch: -1,
        });
    });

    // Use selector to select products.
    const dispatch = useDispatch();
    let selectedProduct = useSelector((state) => state.selectedProduct.value);
    React.useEffect(() => {
        dispatch(getProduct());
    }, []);

    return (
        <div>
            <Header />
            <div className="gap"></div>

            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="profile-card">
                        <div className="card-sub-title">Ürün Bilgisi</div>
                        <div className="product-details">
                            <div className="product-image">{parse(`<img src=${selectedProduct.image} alt=""/>`)}</div>
                            <div className="product-info">
                                <div className="name">{selectedProduct.name}</div>
                                <span>OYUN KREDİSİ</span>
                                <b> {selectedProduct.price.priceInTl.toFixed(2)} ₺</b>
                            </div>
                        </div>
                        <div className="card-sub-title">Ödeme Yöntemi</div>
                        <div className="payment-options">
                            <button className="p-option active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span>MOBİL</span>
                            </button>
                            <button className="p-option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                </svg>
                                <span>KREDİ KARTI</span>
                            </button>
                            <button className="p-option">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                <span>HAVALE</span>
                            </button>
                        </div>
                        <hr />

                        <div className="purchase-accordion">
                            <div className="head">
                                <p>Hediye Bilgisi</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="body">
                                <label className="check-container">
                                    Bu ürün bir hediye olacak.
                                    <input type="checkbox" onchange="checkGift()" />
                                    <span className="checkmark"></span>
                                </label>
                                <div className="gift-input">
                                    <div className="input-wrapper">
                                        <div className="input-wrap input-wrap-2 no-icon">
                                            <input type="text" placeholder="Kullanıcı Adı" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="purchase-accordion">
                            <div className="head">
                                <p>Fatura Bilgisi</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="body">
                                <div>
                                    <div className="flex-input-wrapper">
                                        <div className="input-wrapper">
                                            <div className="input-wrap input-wrap-2 no-icon">
                                                <input type="text" placeholder="İsim ve Soyisim" />
                                            </div>
                                        </div>
                                        <div className="input-wrapper">
                                            <div className="input-wrap input-wrap-2 no-icon">
                                                <input type="text" placeholder="E-mail" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-wrapper">
                                        <div className="input-wrap input-wrap-2 auto-height">
                                            <textarea placeholder="Adres"></textarea>
                                        </div>
                                    </div>
                                    <div className="flex-input-wrapper">
                                        <div className="input-wrapper">
                                            <select className="select2 select2-profile">
                                                <option value="">İstanbul</option>
                                                <option value="">İzmir</option>
                                                <option value="">Ankara</option>
                                            </select>
                                        </div>
                                        <div className="input-wrapper">
                                            <select className="select2 select2-profile">
                                                <option value="">Beşiktaş</option>
                                                <option value="">Üsküdar</option>
                                                <option value="">Ankara</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-sidebar right-side mt-30">
                        <div className="sidebar-purchase">
                            <div className="title">Sipariş Özeti</div>
                            <ul>
                                <li>
                                    <b>Ürün Tutarı</b>
                                    <span>{selectedProduct.price.priceInTl.toFixed(2)} ₺</span>
                                </li>
                                <li>
                                    <b>KDV (%18)</b>
                                    <span>{(selectedProduct.price.priceInTl * selectedProduct.price.kdvPercentage).toFixed(2)} ₺</span>
                                </li>
                                <li>
                                    <b>Toplam Tutar</b>
                                    <span>{(selectedProduct.price.priceInTl + selectedProduct.price.priceInTl * selectedProduct.price.kdvPercentage).toFixed(2)} ₺</span>
                                </li>
                            </ul>
                            <div className="purchase-policy">
                                <label className="check-container">
                                    <a href="#">Ön bilgilendirme formu</a> ve <a href="#">Mesafeli satış sözleşmesi</a>'ni onaylıyorum.
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <a className="animation-btn animation-btn-blue scrollbar-animation" href="">
                                <span>Ödeme Yap</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
