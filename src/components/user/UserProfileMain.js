import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import mcHead1 from "../../assets/mc-head1.svg";  
import { routes } from "../../routes/routes";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const UserProfileMain = () => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card no-pad">
                <div className="card-header center">
                    <div className="left">
                        <h4>Faction</h4>
                    </div>
                </div>

                <div className="card-content">
                    <div className="profile-table  table-2">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sıra</th>
                                    <th>Kafa</th>
                                    <th>Kullanıcı Adı</th>
                                    <th>Öldürme</th>
                                    <th>Ölme</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                    {parse(`<img src=${mcHead1} alt=""></img>`)}
                                    </td>
                                    <td>BukiBurti</td>
                                    <td>24.000</td>
                                    <td>
                                        <span>4.213</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="profile-card no-pad">
                <div className="card-header">
                    <div className="left">Destek Mesajları</div>
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
                                        <Link to={routes.SupportDetail} className="action-btn">
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

            <div className="profile-card no-pad">
                <div className="card-header">
                    <div className="left">Hediye Geçmişi</div>
                </div>

                <div className="card-content">
                    <div className="profile-table table-2">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Kimden</th>
                                    <th>Kaç Adet</th>
                                    <th>Ne Zaman</th>
                                    <th>Ne Kadar</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>AfacaAli</td>
                                    <td>02 Adet</td>
                                    <td>7 Tmz. 2021</td>
                                    <td>500.000</td>
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
    );
};

export default UserProfileMain;
