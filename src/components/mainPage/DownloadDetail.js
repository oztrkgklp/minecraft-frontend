import React from "react";
import parse from "html-react-parser";
import howTo from "../../assets/how-to.png";

const DownloadDetail = () => {
    return (
        <div>
            <div class="gap"></div>

            <div class="launcher-faq">
                <div class="container">
                    <div class="col">
                        <div class="text">
                            <h2>Sıkça Sorulan Sorular</h2>
                            <p>Smart Screen uyarısı alıyorum, ne yapmalıyım? Windows bazen sinir bozucu olabiliyor. Bu engeli aşmak için resimde gösterilen adımları uygulayabilirsin:</p>
                        </div>
                        {parse(`<img src=${howTo} alt=""></img>`)}
                        <div class="text">
                            <h3>Hangi Minecraft versiyonlarını indirebilirim?</h3>
                            <p>Şu an SonOyuncu Minecraft Launcher sadece ücretsiz 1.8.9 Minecraft indirme imkânı tanıyor. Yakın zamanda istediğiniz Minecraft versiyonunu indirebilmen için çalışmalarımız devam ediyor.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text">
                            <h3>Launcher açılmıyor, deneyebileceğim başka bir yol var mı?</h3>
                            <p>Windows Alternatif sürümünü deneyebilirsin. Unutma ki yaşadığın sorun oyun içi ise alternatif Launcher sürümleri işine yaramayacaktır. Client sorunların için Yardım Merkezi'mize göz atabilirsin.</p>
                        </div>
                        <div class="text">
                            <h3>MacOS'de SonOyuncu Minecraft Launcher'i başlatamıyorum, ne yapabilirim?</h3>
                            <p>MacOS işletim sisteminde SonOyuncu Minecraft Launcher'i başlatmak için CTRL tuşuna basılı tutarak AÇ komutu vermen yeterli.</p>
                        </div>
                        <div class="text">
                            <h3>Linux Dağıtımlarında SonOyuncu Minecraft Launcher'i nasıl yükleyebilirim?</h3>
                            <p>İndirdiğin dosyayı "tar -xvf sobootstrap.tar.gz" komutu ile bulunduğun dizine çıkarman ve "sudo make install" komutunu çalıştırman yeterli.</p>
                        </div>
                        <div class="text">
                            <h3>Hangi Minecraft versiyonlarını indirebilirim?</h3>
                            <p>Şu an SonOyuncu Minecraft Launcher sadece ücretsiz 1.8.9 Minecraft indirme imkânı tanıyor. Yakın zamanda istediğiniz Minecraft versiyonunu indirebilmen için çalışmalarımız devam ediyor.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="gap"></div>

            <div class="support-wrapper">
                <div class="container">
                    <div class="support-categories">
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60.66" height="59.867" viewBox="0 0 60.66 59.867">
                                <g id="Group_415" data-name="Group 415" transform="translate(-304 -1016.128)">
                                    <line id="Stroke-1" y1="8.049" transform="translate(334.331 1053.263)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <g id="Group-8" transform="translate(305 1017.128)">
                                        <path id="Stroke-2" d="M49.733,2.59A9.681,9.681,0,0,1,59.409,12.3V23.212c-7.8,4.568-18.115,7.328-29.346,7.328S8.554,27.78.75,23.212V12.266A9.681,9.681,0,0,1,10.458,2.59Z" transform="translate(-0.75 5.596)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                        <path id="Stroke-4" d="M28.7,8.182V7.021A7.013,7.013,0,0,0,21.691.01H13.506A7.013,7.013,0,0,0,6.5,7.021V8.182" transform="translate(11.732 -0.01)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                        <path id="Stroke-6" d="M.774,12.743l.6,7.96a10.286,10.286,0,0,0,10.254,9.511h36.8A10.286,10.286,0,0,0,58.679,20.7l.6-7.96" transform="translate(-0.697 27.653)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    </g>
                                </g>
                            </svg>
                            <b>
                                Riva Network <br /> Hakkında
                            </b>
                            <span>7</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.623" height="59.867" viewBox="0 0 49.623 59.867">
                                <g id="Group_416" data-name="Group 416" transform="translate(-463 -1016.128)">
                                    <path id="Stroke-1" d="M32.333,21.7V14.985A14.265,14.265,0,0,0,3.8,14.923V21.7" transform="translate(469.745 1016.378)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <path id="Stroke-3" d="M36.512,44.515h-23.9A11.86,11.86,0,0,1,.75,32.654V19.238A11.86,11.86,0,0,1,12.611,7.377h23.9A11.86,11.86,0,0,1,48.374,19.238V32.654A11.86,11.86,0,0,1,36.512,44.515Z" transform="translate(463.25 1030.48)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <line id="Stroke-5" y2="6.947" transform="translate(487.813 1052.953)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>
                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57.67" height="62.126" viewBox="0 0 57.67 62.126">
                                <g id="Group_417" data-name="Group 417" transform="translate(-610.983 -1013)">
                                    <path
                                        id="Path_33946"
                                        d="M55.606,17.5,53.659,14.12a5.984,5.984,0,0,0-8.16-2.2h0A5.955,5.955,0,0,1,37.339,9.8a5.729,5.729,0,0,1-.8-2.863h0A5.984,5.984,0,0,0,30.554.778H26.631a5.955,5.955,0,0,0-5.955,5.984h0a5.984,5.984,0,0,1-5.984,5.9,5.727,5.727,0,0,1-2.863-.8h0a5.984,5.984,0,0,0-8.16,2.2L1.579,17.5a5.984,5.984,0,0,0,2.176,8.16h0a5.984,5.984,0,0,1,0,10.365h0a5.955,5.955,0,0,0-2.176,8.131h0l1.976,3.407a5.984,5.984,0,0,0,8.16,2.319h0a5.927,5.927,0,0,1,8.131,2.176,5.726,5.726,0,0,1,.8,2.863h0A5.984,5.984,0,0,0,26.631,60.9h3.923a5.984,5.984,0,0,0,5.984-5.955h0a5.955,5.955,0,0,1,5.984-5.984,6.1,6.1,0,0,1,2.863.8h0a5.984,5.984,0,0,0,8.16-2.176h0l2.061-3.436a5.955,5.955,0,0,0-2.176-8.16h0a5.955,5.955,0,0,1-2.176-8.16,5.87,5.87,0,0,1,2.176-2.176h0a5.984,5.984,0,0,0,2.176-8.131h0Z"
                                        transform="translate(611.221 1013.222)"
                                        fill="none"
                                        stroke="#fff"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        fill-rule="evenodd"
                                    />
                                    <ellipse id="Ellipse_737" cx="8.246" cy="8.246" rx="8.246" ry="8.246" transform="translate(631.582 1035.817)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="54.799" height="57.998" viewBox="0 0 54.799 57.998">
                                <g id="Group_418" data-name="Group 418" transform="translate(-769 -1016.128)">
                                    <g id="Group_174" data-name="Group 174" transform="translate(777.839 1017.128)">
                                        <path id="Path_105" data-name="Path 105" d="M26.061,16.258H14.129A6.629,6.629,0,1,1,14.129,3C23.41,3,26.061,16.258,26.061,16.258Z" transform="translate(-7.5 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        <path id="Path_106" data-name="Path 106" d="M18,16.258H29.932A6.629,6.629,0,1,0,29.932,3C20.652,3,18,16.258,18,16.258Z" transform="translate(0.561 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </g>
                                    <g id="Rectangle_26" data-name="Rectangle 26" transform="translate(774.304 1047.61)" fill="none" stroke="#fff" stroke-width="2">
                                        <path d="M0,0H44.193a0,0,0,0,1,0,0V21.516a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z" stroke="none" />
                                        <path d="M2,1H42.193a1,1,0,0,1,1,1V21.516a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V2A1,1,0,0,1,2,1Z" fill="none" />
                                    </g>
                                    <g id="Rectangle_27" data-name="Rectangle 27" transform="translate(769 1029.933)" fill="none" stroke="#fff" stroke-width="2">
                                        <path d="M5,0H49.8a5,5,0,0,1,5,5V19.445a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z" stroke="none" />
                                        <path d="M5,1H49.8a4,4,0,0,1,4,4V17.445a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V5A4,4,0,0,1,5,1Z" fill="none" />
                                    </g>
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="47.524" height="58.905" viewBox="0 0 47.524 58.905">
                                <g id="Group_419" data-name="Group 419" transform="translate(-923 -1014.502)">
                                    <path id="Path_107" data-name="Path 107" d="M6,39.988s2.845-2.845,11.381-2.845,14.226,5.691,22.762,5.691,11.381-2.845,11.381-2.845V5.845S48.679,8.691,40.143,8.691,25.917,3,17.381,3,6,5.845,6,5.845Z" transform="translate(918 1012.502)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Path_108" data-name="Path 108" d="M6,42.417V22.5" transform="translate(918 1029.99)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61.866" height="57.279" viewBox="0 0 61.866 57.279">
                                <g id="Group_420" data-name="Group 420" transform="translate(-1069 -1016.128)">
                                    <path id="Stroke-1" d="M33.482,22.85H20.819a8.418,8.418,0,1,1,0-16.837H33.482" transform="translate(1096.384 1029.924)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <line id="Stroke-3" x1="0.975" transform="translate(1117.661 1044.163)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Stroke-5" d="M16.415,0H43.451A16.415,16.415,0,0,1,59.866,16.415v22.45A16.415,16.415,0,0,1,43.451,55.279H16.415A16.415,16.415,0,0,1,0,38.864V16.415A16.415,16.415,0,0,1,16.415,0Z" transform="translate(1070 1017.128)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <line id="Stroke-7" x2="16.888" transform="translate(1084.188 1031.323)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60.029" height="58.589" viewBox="0 0 60.029 58.589">
                                <g id="Group_421" data-name="Group 421" transform="translate(-1229.844 -1015.972)">
                                    <path id="Stroke-1" d="M.75.75,7.256,1.876l3.012,35.887a5.628,5.628,0,0,0,5.63,5.171H50.022A5.631,5.631,0,0,0,55.605,38.1l2.968-20.513a4.2,4.2,0,0,0-3.55-4.751c-.2-.028-46.723-.044-46.723-.044" transform="translate(1230.25 1016.378)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <line id="Stroke-3" x2="8.674" transform="translate(1266.58 1040.728)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    <path id="Stroke-5" d="M6.312,17.7a1.7,1.7,0,1,1-1.7,1.7A1.7,1.7,0,0,1,6.312,17.7Z" transform="translate(1238.464 1052.453)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <path id="Stroke-7" d="M17.592,17.7a1.7,1.7,0,1,1-1.7,1.7A1.7,1.7,0,0,1,17.592,17.7Z" transform="translate(1262.469 1052.453)" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64.559" height="58.304" viewBox="0 0 64.559 58.304">
                                <g id="Group_422" data-name="Group 422" transform="translate(-1388 -1016.128)">
                                    <path id="Stroke-1" d="M40.979,5.851l-13.9,11.3a7.184,7.184,0,0,1-8.946,0L4.118,5.851" transform="translate(1397.764 1029.579)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <path id="Stroke-3" d="M46.635,56.3c9.513.026,15.925-7.79,15.925-17.4V17.423C62.56,7.816,56.148,0,46.635,0H15.925C6.412,0,0,7.816,0,17.423V38.907C0,48.514,6.412,56.33,15.925,56.3Z" transform="translate(1389 1017.128)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                        <a href="#" class="item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64.559" height="58.304" viewBox="0 0 64.559 58.304">
                                <g id="Group_423" data-name="Group 423" transform="translate(-1551 -1016.128)">
                                    <path id="Stroke-3" d="M46.635,56.3c9.513.026,15.925-7.79,15.925-17.4V17.423C62.56,7.816,56.148,0,46.635,0H15.925C6.412,0,0,7.816,0,17.423V38.907C0,48.514,6.412,56.33,15.925,56.3Z" transform="translate(1552 1017.128)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd" />
                                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="2.5" cy="2.5" r="2.5" transform="translate(1561.56 1027.495)" fill="#fff" />
                                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.5" cy="2.5" r="2.5" transform="translate(1570.56 1027.495)" fill="#fff" />
                                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="2.5" cy="2.5" r="2.5" transform="translate(1578.56 1027.495)" fill="#fff" />
                                </g>
                            </svg>

                            <b>Hesap</b>
                            <span>16</span>
                        </a>
                    </div>

                    <div class="sub-title">Sıkça Görüntülenen Yardım Başlıkları</div>

                    <div class="support-links">
                        <ul>
                            <li>
                                <a href="#">Riva Network Nedir?</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Riva Network Nedir?</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Vip Paktim Varnen Daha Yüksek Paket Alma</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Minecraft Paketi Hazırlanmadı Çzüm</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                            <li>
                                <a href="#">Üyelik Nasıl Oluşturulur?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadDetail;
