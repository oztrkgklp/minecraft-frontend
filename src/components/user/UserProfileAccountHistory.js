import React from "react";

const UserProfileAccountHistory = () => {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card">
                <div className="card-sub-title">Hesap Kayıtları</div>
                <div className="profile-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Kayıt</th>
                                <th>Tarih</th>
                                <th>IP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>E-posta doğrulandı.</td>
                                <td>2021-09-17 23:40:17</td>
                                <td>85.107.70.43</td>
                            </tr>
                            <tr>
                                <td>Giriş yapıldı (NORMAL)</td>
                                <td>2021-09-17 23:40:17</td>
                                <td>85.107.70.43</td>
                            </tr>
                            <tr>
                                <td>Hesap oluşturuldu.</td>
                                <td>2021-09-17 23:40:17</td>
                                <td>85.107.70.43</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfileAccountHistory;
