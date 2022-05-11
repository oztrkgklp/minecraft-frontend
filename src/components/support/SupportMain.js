import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const SupportMain = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div class="gap"></div>
            <div class="profile-page-wrapper">
                <div class="container">
                    <div class="profile-sidebar">
                        <div class="sidebar-announce">
                            <span>Bilgilendirme</span>
                            <p>Şuanda destek ekibimizden çevirim içi Olan kimse yoktur, Destek ekibimiz aktif olduğunda sorunuzu cevaplayacaktır. Anlayışınız için teşekkürler....</p>
                        </div>
                    </div>

                    <div className="profile-card no-pad">
                        <div className="card-header">
                            <div className="left">Destek Mesajları</div>
                            <div class="right">
                                <Link to={routes.CreateTicket} href="#" class="create-message">
                                    Mesaj Oluştur
                                </Link>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="profile-table table-2">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Başlık</th>
                                            <th>Kategori</th>
                                            <th>Güncelleme</th>
                                            <th>Durum</th>
                                            <th>İşlem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Merhabalar</td>
                                            <td>Ödeme Bildirimi</td>
                                            <td>7 Saat Önce</td>
                                            <td>
                                                <span className="badge">Cevaplandı</span>
                                            </td>
                                            <td>
                                                <Link to={routes.SupportDetail}  className="action-btn">
                                                    <VisibilityIcon />
                                                </Link>
                                                <a href="#" className="action-btn">
                                                    <DeleteOutlineIcon />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Merhabalar</td>
                                            <td>Ödeme Bildirimi</td>
                                            <td>7 Saat Önce</td>
                                            <td>
                                                <span className="badge">Cevaplandı</span>
                                            </td>
                                            <td>
                                                <a href="#" className="action-btn">
                                                    <VisibilityIcon />
                                                </a>
                                                <a href="#" className="action-btn">
                                                    <DeleteOutlineIcon />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Footer />
        </div>
    );
};

export default SupportMain;
