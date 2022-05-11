import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const RR = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="gap"></div>
            <main className="main" role="main">
                <div className="section">
                    <div className="container">
                        <div className="support-details-2">
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>HİLE VE MOD KULLANIMI</strong>
                                </p>
                            </div>
                            <p>Riva Network olarak en çok önem verdiğimiz kuraldır ve affı yoktur. Tespit edilmesi durumunda, aynı adres üzerindeki bütün hesaplar engellenecektir.</p>
                            <p>Oyuna ek müdahale edebilecek mod veya hile kullanımı yasaktır. Hesabın akıbeti, hile kullanılması durumunda süresiz engel ile sonuçlanacaktır.</p>
                            <p>Şunlar da dahildir;</p>
                            <ul>
                                <li>Diğer oyunculara haksız avantaj sağlayan mod kullanımı.</li>
                                <li>Hile yazılımları ile haksız avantaj sağlamak.</li>
                                <li>Regedit kullanarak haksız avantaj sağlamak.</li>
                            </ul>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>DOLANDIRMA & TUZAK</strong>
                                </p>
                            </div>
                            <p>Oyun içi başka oyuncuları kandırmak ve söz verip tutmamak suçtur, ve yasaktır. Buna ek olarak dolandırılan kişiye eşyası geri verilmez. Ayrıca, ışınlanma tuzağı yasak değildir.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>İLLEGAL OYUN</strong>
                                </p>
                            </div>
                            <p>Oyunlarda illegal yollar kullanarak haksız rekabet sağlamak yasaktır.</p>
                            <p>İllegal oyuna şunlar dahildir;</p>
                            <ul>
                                <li>Birden fazla hesap açarak paylaşımlı istatistik kazanılması. (haksız rekabet)</li>
                                <li>Birden fazla hesap ile aynı arenaya giriş yapıp tek bir hesaba istatistik sağlanması (örgütlenmek)</li>
                                <li>Haksız rekabet unsurları kullanarak normal standartların üzerinde istatistik kazanılması. (haksız rekabet)</li>
                            </ul>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>SOLO & TAKIM KURALLARI</strong>
                                </p>
                            </div>
                            <p>
                                Solo oyun modlarında herkes tektir ve takım olmak yasaktır.
                                <br />
                                Takım oyun modlarında herkes kendi takım arkadaşıyla takım olmak zorundadır.
                                <br />
                                Rakip takım ile takım olmak yasaktır. Cezası 7 gün solo oyun engelidir.
                                <br />
                                Takım üyelerine zarar vermek yasaktır, cezası 7 gün oyun engelidir.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>HESAP GÜVENLİĞİ</strong>
                                </p>
                            </div>
                            <p>Hesap güvenliği oyuncunun kendisine aittir. Herhangi bir şekilde şifre paylaşımı (Oyun içi veya dışı) hesabın çalınma riskini arttıracaktır. Bu ve bunun gibi olaylarda yönetim sorumlu tutulamaz, bundan dolayı hesabınızın şifresini kimseyle paylaşmayın ve farklı sunucularda kullanmayın. Şifrenizin güvende olduğundan ve hiç kimseye vermediğinizden emin olun.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>UYGUNSUZ İSİM/NİCK KULLANIMI</strong>
                                </p>
                            </div>
                            <p>
                                Uygunsuz, küfürlü veya nefret içerikli kullanıcı isimleriyle kayıt olmak yasaktır.
                                <br />
                                Bu tür hesaplara süresiz engel atılmaktadır.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>YETKİLİ EKİBE SAYGI</strong>
                                </p>
                            </div>
                            <p>
                                Oyun içi veya Discord ortamında yetkili kişilere karşı saygılı olun, saygısızlık yapmanız engellenmenize sebep olacaktır.
                                <br />
                                Ayrıca, yetkili kişileri rahatsız etmek, oyalamak ve bir konu hakkında yalan söylemek yasaktır.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>TÜM KULLANICILARA SAYGI</strong>
                                </p>
                            </div>
                            <p>
                                Oyun içi veya Discord ortamında insanlara karşı saygılı olun, internet ortamında bulunmanız istediğiniz gibi davranabileceğiniz anlamına gelmez. Saygısızlık yapan kullanıcılar sunucudan engellenecektir.
                                <br />
                                Üstteki maddeye ek olarak; Dil, din, ırk, cinsiyetçilik, yaşlılık ve özürlülük gibi küstahça bir dil kullanımına izin verilmeyecektir.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>ÖZEL HAYATIN GİZLİLİĞİ</strong>
                                </p>
                            </div>
                            <p>
                                Oyun içi veya Riva Network sunucusuna ait platformlarda herhangi bir kişinin özel hayatıyla ilgili bilgi, görüntü veya ses paylaşmak büyük bir suçtur.
                                <br />
                                Bu suçu işleyenler sunucudan süresiz olarak engellenir ve gerektiğinde hakkında hukuki işlem başlatılır.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>OYUN İÇİ & DISCORD SOHBET</strong>
                                </p>
                            </div>
                            <p>
                                Oyun sohbetini kullanırken sürekli aynı mesajı yazmayın, reklam yapmayın ve küfür kullanmayın.
                                <br />
                                Küstah, uygunsuz dil ve içerik kesinlikle yasaktır.
                                <br />
                                NOT: Özel mesajlaşmalar (/ark mesaj, /ark duyuru, /msg, /pm) dahil değildir.
                                <br />
                                Buna ek olarak siyaset yapmak yasaktır.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>OYUN İÇİ & DİSCORD HESAP/EŞYA SATMAK</strong>
                                </p>
                            </div>
                            <p>Oyun içinde hesap veya buna benzer satışların tamamı ve bu satışlara teşvik etmek yasaktır.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>DESTEK SİSTEMİ</strong>
                                </p>
                            </div>
                            <p>
                                Destek sistemini kötüye kullanan, aynı talebi üst üste atan veya atılması için başkalarını örgütleyen kullanıcılar hakkında süresiz hesap ve talep atma engeli uygulanır.
                                <br />
                                Destek sisteminde talep yollarken sahte, üzerinde oynanmış, değiştirilmiş ve kasıtlı kanıt yollayan kullanıcılar hakkında süresiz engel uygulanır.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <p>
                                    <strong>ENGELLENEN HESAPLAR</strong>
                                </p>
                            </div>
                            <p>
                                Üzerinden 1 ay geçmiş engellenen hesapların itirazı kabul edilmemektedir.
                                <br />
                                Bundan dolayı itiraz hakkı bulunmamaktadır.
                            </p>
                            <p style={{ fontStyle: "italic" }}>Riva Network sunucusuna kayıt olan her kullanıcı bu kuralları kabul etmiş sayılır.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h2>1- OYUN KURALLARI</h2>
                            </div>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.1 - UYGUNSUZ KULLANICI ADLARI/SKİNLERİ</h4>
                            </div>
                            <p>Yetkililer tarafından uygun görülmeyen herhangi bir kullanıcı adı veya skin, değiştirilinceye kadar sunucudan yasaklanacaktır.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.2 - YASADIŞI CLİENT VEYA MOD KULLANIMI (HİLE KULLANIMI)</h4>
                            </div>
                            <p>
                                Farklı bir şekilde oyun oynama avantajı sağlayan herhangi bir client/mod kullanmak yasaktır. Yasadışı client veya modlar kullanmak kesinlikle yasaktır. Kill aura, anti-knockback, x-rayler, auto-clickerlar, makro basışları, freecamlar, oyuncu lokasyonunu gösteren mapler, uçmak yasadışı modlara örneklerdir. Regedit de buna dahil (Kayıt defterini düzenleme). Bile bile
                                yasadışı modlar kullanan kişiler ile takım olmak sizin de yasaklanmanıza neden olabilir.
                            </p>
                            <p>
                                <strong>Ceza sırası:</strong> 7 gün yasaklanma (Sadece sentinel) {"->"} 30 gün yasaklanma {"->"} Kalıcı yasaklanma.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.3 - BUTTERFLY/DRAG TIKLAMASI</h4>
                            </div>
                            <p>Butterfly tıklaması saniyede tıklamanızı arttırmak için iki veya daha fazla parmağınızı kullanmak olarak tanımlanır. Drag tıklaması farenin düğmesi boyunca sürüklemek veya tıklama tuşunu sürükleme düğmesi ile birleştirmek olarak tanımlanır. Butterfly ve drag tıklamasının her ikiside yasaktır ve Sentinel tarafından yasaklanmak ile sonuçlanabilir.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.4 - Takım olmak/Çapraz takım olmak</h4>
                            </div>
                            <p>Takım olmak kasten düşman bir oyuncu ile solo mod olan bir oyunda birlikte olmak olarak tanımlanır. Çapraz takım olmak ise kasten düşman bir oyuncu ile takım modunda bir oyunda takım olmak olarak tanımlanır. Takım olmak ve çapraz takım olmak solo ve takım modu olan oyunlarda kesinlikle yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> 7 gün yasaklanma (Sadece sentinel) {"->"} 30 gün yasaklanma {"->"} Kalıcı yasaklanma.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.5 - TROLLEMEK</h4>
                            </div>
                            <p>
                                Trollemek kasten başka bir oyuncuya karşı tek amacı can sıkmak, üzmek, veya zorbalık yapmak olmak olarak tanımlanır. Trollemek kesinlikle yasaktır. Trollemek takım arkadaşını öldürmek/zarar vermek, takım arkadaşlarından çalmak için crafting tableları kırmak, Blockwars gibi oyunlarda sebepsiz yere savunmaları kırmak, bir oyuncuyu arkadaş/party davetleri ile spamlamak
                                veya Tower Defense oyun modunda kasten takım arkadaşlarının kule yapmalarını engellemek gibi birçok şekilde olabilir. Trollemek ayrıca Eggwars'ta oyuncuları obsidian ile kill farmı yapmak için engellemek yada sadece onları sıkıştırmak için ve yumurtalarını kırmamak olarak kullanılabilir.
                            </p>
                            <p>
                                <strong>Ceza sırası:</strong> 7 gün yasaklanma (Sadece sentinel) {"->"} 30 gün yasaklanma {"->"} Kalıcı yasaklanma.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.6 - KAMP YAPMAK</h4>
                            </div>
                            <p>
                                Kamp yapmak kasıtlı olarak oyuncuların size ulaşmasının imkansız olacağı şekilde oyundan kaçmak olarak tanımlanır. Kamp yapmak kesinlikle yasaktır. Kamp yapmak skybase yapmak, normal oyun alanından uzaklaşan yapılar yapmak, lav gibi tehlikelerle kendinizi korumak, diğerlerinin size erişememesi gibi şekillerde olabilir. Asassins de shop kampı yapmak yasak değildir,
                                ancak oyuncular arasında kırgınlığa neden olacağı için tavsiye edilmez. Eggwars oyununda kamp yapmak üreticiler için veya yumurtalarını savunmak için farm yapanlar için geçerli değildir.
                            </p>
                            <p>
                                <strong>Ceza sırası:</strong> 7 gün yasaklanma (Sadece sentinel) {"->"} 30 gün yasaklanma {"->"} Kalıcı yasaklanma.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.7 - BUG'UN KÖTÜYE KULLANIMI</h4>
                            </div>
                            <p>Bug kötüye kullanımı kasten bir bugu veya hatayı her türlü şekilde kullanmak olarak tanımlanır. Bug kötüye kullanımı kesinlikle yasaktır. Buglar sitemizdeki Destek sayfasından rapor edilebilir. Bilerek bug kötüye kullanan birisi ile birlikte çalışırsanız sizde ceza ile sonuçlanabilirsiniz.</p>
                            <p>
                                <strong>Ceza sırası:</strong> 7 gün yasaklanma (Sadece sentinel) {"->"} 30 gün yasaklanma {"->"} Kalıcı yasaklanma.
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.8 - CEZADAN KAÇMAK</h4>
                            </div>
                            <p>Yaptırımların kaçınımı, başka bir hesabı kullanarak kendi yaptırımını engelleyecek şekilde tanımlanır. Bir cezayı kaçınmak, Kullanıcı adlarının ve uygunsuz derinin yasaklarının dışında, diğer hesabınıza uygulanması için aynı cezaya neden olacaktır.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.9 - SAHTE KANIT SUNMAK</h4>
                            </div>
                            <p>Yetkili ekibe olayla ilgili kanıt istenildiğinde sahte kanıtların gönderilmesi yasaktır. Sahte kanıtlar yetkili ekip tarafından tespit edilirse kullanıcı sunucudan uzaklaştırılır.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>1.10 - HAKSIZ KAZANÇ VEYA TİCARET HK.</h4>
                            </div>
                            <p>Oyunla bağlantısı olan herhangi bir şeyi gerçek para karşılığında satmak kalıcı uzaklaştırma veya ürünün karşılık verilmeden geri alınması demektir.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h2>2 - SOHBET KURALLARI</h2>
                            </div>
                            <p>Sunucu sohbeti kuralları, grup sohbeti ve özel mesajlar dahil tüm sunucu sohbeti için geçerlidir.</p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.1 - KÜFÜR/HAKARET/ARGO/KÖTÜ SÖZ KULLANIMI</h4>
                            </div>
                            <p>Küfür etmek nefret dolu konuşmalar veya diğer kullanıcıları küçümsemek, rahatsız etmek veya üzmek amacıyla kullanılan diller gibi saldırgan bir dil kullanılması olarak tanımlanmaktadır. Küfür etmek kesinlikle yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> Uyarı {"->"} 3 gün susturulma {"->"} 7 gün susturulma {"->"} 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.2 - TEHDİTLER</h4>
                            </div>
                            <p>Küfür etmek nefret dolu konuşmalar veya diğer kullanıcıları küçümsemek, rahatsız etmek veya üzmek amacıyla kullanılan diller gibi saldırgan bir dil kullanılması olarak tanımlanmaktadır. Küfür etmek kesinlikle yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.3 - SOHBET TROLLEMESİ</h4>
                            </div>
                            <p>Sohbet trollemesi diğer oyuncuları şaşırtmak, kandırmak veya diğer oyuncuları trollemek için kullanılan bir dil olarak tanımlanır. Bu oyunculara Alt+F4 yapmalarını söylemek, sahte gizli mesajlar yapmak için renk kodları kullanmak, ve diğerlerini trollemek gibi hileleri içerir. Sohbet trollemesi kesinlikle yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> Uyarı {"->"} 1 gün susturulma {"->"} 3 gün susturulma {"->"} 7 gün susturulma {"->"} 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.4 - SPAM YAPMAK</h4>
                            </div>
                            <p>Spam yapmak kısa bir süre içinde istenmeyen veya gereksiz mesajları sıklıkla göndermek olarak tanımlanır. Spam yapmak, rastgele emojilerden oluşan metinler paylaşmak, tekrar tekrar aynı mesajı kullanmak, bedava rank istemek, ve diğer şeyleri içerir. Spam yapmak kesinlikle yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> Uyarı {"->"} 1 gün msusturulma {"->"} 7 gün susturulma {"->"} 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.5 - KİMLİĞİE BÜRÜNME</h4>
                            </div>
                            <p>Kimliğe bürünmek, diğer oyuncuları sizi bir yetkili veya bir YouTuber olduğunuza inandırmaya zorlamaya çalışmak olarak tanımlanır. Kimliğe bürünme kesin olarak yasaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> Uyarı {"->"} 1 gün susturulma {"->"} 7 gün susturulma {"->"} 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.6 - DOLANDIRICILIK</h4>
                            </div>
                            <p>Dolandırıcılık bir oyuncuyu şifresi, ev adresi, finansal bilgileri veya daha fazlası gibi bilgileri ifşa etmesi için onları kandırmak olarak tanımlanır. Dolandırıcılık kesinlikle yasaktır. Dolandırıcılık anında kalıcı susturulmanıza neden olacaktır.</p>
                            <p>
                                <strong>Ceza sırası:</strong> Kalıcı susturulma
                            </p>
                            <div className="line">
                                <br />
                            </div>
                            <div className="sub-title">
                                <h4>2.7 - REKLAM</h4>
                            </div>
                            <p>
                                Reklamcılık diğer sunucuların, sosyal medya hesaplarının, Youtube/Twitch hesaplarının veya diğer herhangi mal veya hizmetin tanıtımı olarak tanımlanır. Youtube'un veya yayın yapmanın hafif reklamlarına izin verilir, ancak spam yapılır veya kötüye kullanılması durumunda ceza ile sonuçlanacaktır. YouTuber rolüne sahip kullanıcılar kendi kanallarını veya diğer sosyal
                                medya hesaplarını reklam yapabilir.
                            </p>
                            <p>
                                <strong>Ceza sırası:</strong> Uyarı (sadece Youtube, Twitch, veya diğer sosyal medya hesapları) {"->"} 1 gün susturulma {"->"} 7 gün susturulma {"->"} 30 gün susturulma {"->"} Kalıcı susturulma
                            </p>{" "}
                        </div>
                    </div>
                </div>{" "}
            </main>
            <div className="gap"></div>
            <Footer />
        </div>
    );
};

export default RR;
