import React from 'react'

const UserChangePassword = () => {
  return (
    <div>
    <div class="profile-card">
        <div class="card-sub-title">
          Şifreni Değiştir
        </div>
        <div class="card-flex">
          <p class="info-text">
            <b>Bunlar Çok Önemli</b>
            *Şifreni kimseyle paylaşma. <br/>
            *Şifreni başka oyunlarda, sitelerde veya herhangi bir platformda kullanma. <br />
            *Şifrenin kolay tahmin edilemeyecek şeyler içerdiğinden emin ol. <br />
            <span class="red">**Şifreni paylaşman veya hesabına senin dışında birisinin erişmesi durumunda
              yaşayabileceğin
              kayıplarda
              yardımcı olamayacağımızı unutma.</span>
          </p>
          <div class="inputs">
            <div class="input-wrapper">
              <small>Mevcut Şifre</small>
              <div class="input-wrap input-wrap-2 no-icon">
                <input type="password" placeholder="Mevcut Şifre" />
              </div>
            </div>
            <div class="input-wrapper">
              <small>Yeni Şifre</small>
              <div class="input-wrap input-wrap-2 no-icon">
                <input type="password" placeholder="**********" />
              </div>
            </div>
            <div class="input-wrapper">
              <small>Şifre Onayı</small>
              <div class="input-wrap input-wrap-2 no-icon">
                <input type="password" placeholder="**********" />
              </div>
            </div>
          </div>
        </div>
        <div class="action-button">
          <button>Güncelle</button>
        </div>
      </div>
    </div>
  )
}

export default UserChangePassword