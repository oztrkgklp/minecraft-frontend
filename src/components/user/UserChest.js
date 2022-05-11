import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SendIcon from "@mui/icons-material/Send";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

// Returns a UserChest for the user.
const UserChest = () => {
    return (
        <div>
            <Header />
            <div class="gap"></div>

            <div class="profile-page-wrapper">
                <div class="container">
                    <div class="profile-card-wrapper">
                        // Return a user chest.
                        <div class="profile-card no-pad">
                            <div class="card-header center">
                                <div class="left">
                                    <h2>Sandığım</h2>
                                </div>
                            </div>

                            <div class="card-content">
                                <div class="profile-table  table-2">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Ürün</th>
                                                <th>Sunucu</th>
                                                <th>Tarih</th>
                                                <th>İşlem</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn blue">
                                                        <SendIcon />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn blue">
                                                        <SendIcon />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn blue">
                                                        <SendIcon />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        // Returns a Chest History for the user.
                        <div class="profile-card no-pad">
                            <div class="card-header center">
                                <div class="left">
                                    <h2>Sandık Geçmişi </h2>
                                </div>
                            </div>

                            <div class="card-content">
                                <div class="profile-table  table-2">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Kullanıcı</th>
                                                <th>Ürün</th>
                                                <th>Sunucu</th>
                                                <th>Tarih</th>
                                                <th>İşlem</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div class="user">
                                                        <img src="images/userr.png" alt="" /> Deneme
                                                    </div>
                                                </td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn no-bg">
                                                        <SendIcon />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div class="user">
                                                        <img src="images/userr.png" alt="" /> Deneme
                                                    </div>
                                                </td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn no-bg">
                                                        <CardGiftcardIcon />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <div class="user">
                                                        <img src="images/userr.png" alt="" /> Deneme
                                                    </div>
                                                </td>
                                                <td>Diamond Zırh</td>
                                                <td>Faction</td>
                                                <td>7 Tmz. 2021</td>
                                                <td>
                                                    <a href="#" class="action-btn no-bg">
                                                        <CardGiftcardIcon />
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
            </div>

            <Footer />
        </div>
    );
};

export default UserChest;
