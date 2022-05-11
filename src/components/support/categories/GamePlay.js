import React from "react";
import $ from "jquery";

const GamePlay = ({ id, className, style }) => {
    $(function () {
        $("#oyun-select").change(function () {
            var val = $(this).val();
            if (val === "fps-sorunlari") {
                $("#bolum-select").show();
            } else {
                $("#bolum-select").hide();
            }
        });
    });
    return (
        <div>
            <div id={id} className={className} style={style}>
                <div className="input-wrapper">
                    <small>Hata</small>
                    <select className="select2 select2-profile" id="oyun-select">
                        <option value="fps-sorunlari">FPS Sorunları</option>
                        <option value="">Giriş Sorunları</option>
                        <option value="">Launcher Açılma Sorunları</option>
                    </select>
                </div>
                <div className="input-wrapper" id="bolum-select">
                    <small>Bölüm</small>
                    <select className="select2 select2-profile">
                        <option value="Genel">Genel</option>
                        <option value="Ana Lobiler">Ana Lobiler</option>
                        <option value="Oyun Lobileri">Oyun Lobileri</option>
                        <option value="Giriş Lobileri">Giriş Lobileri</option>
                        <option value="Fickle (AFK Sunucusu)">Fickle (AFK Sunucusu)</option>
                        <option value="Skyblock">Skyblock</option>
                        <option value="Survival">Survival</option>
                        <option value="Factions">Factions</option>
                        <option value="Creative">Creative</option>
                        <option value="The Kingdoms">The Kingdoms</option>
                        <option value="Arcade">Arcade</option>
                        <option value="UHC Run">UHC Run</option>
                        <option value="TURF WARS">TURF WARS</option>
                        <option value="ARENA PVP">ARENA PVP</option>
                        <option value="SPEED BUILDERS">SPEED BUILDERS</option>
                        <option value="KATİL KİM">KATİL KİM</option>
                        <option value="DRAGON ESCAPE">DRAGON ESCAPE</option>
                        <option value="TNT RUN">TNT RUN</option>
                        <option value="EGG WARS">EGG WARS</option>
                        <option value="BED WARS">BED WARS</option>
                        <option value="UHC MEETUP">UHC MEETUP</option>
                        <option value="SKY WARS">SKY WARS</option>
                        <option value="OITC">OITC</option>
                        <option value="BOMB LOBBERS">BOMB LOBBERS</option>
                        <option value="BUILD BATTLE">BUILD BATTLE</option>
                        <option value="SURVIVAL GAMES">SURVIVAL GAMES</option>
                        <option value="HEROBRINE CHAMBER">HEROBRINE CHAMBER</option>
                        <option value="THE BRIDGE">THE BRIDGE</option>
                    </select>
                </div>
                <div className="input-wrapper">
                    <small>Mesajınız</small>
                    <div className="input-wrap input-wrap-2 auto-height">
                        <textarea placeholder=""></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePlay;
