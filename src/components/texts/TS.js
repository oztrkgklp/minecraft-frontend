import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const TS = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <div className="gap"></div>
            <main class="main" role="main">
                <div class="section">
                    <div class="container">
                        <div class="support-details-2">
                            <h1>Hizmet Şartları ve Üyelik Sözleşmesi</h1>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">RivaNetwork Hizmet Şartları ve Üyelik Sözleşmesi</div>
                            <p>Son güncelleme: 08/03/2022</p>
                            <p>
                                İşbu hizmet şartları ve üyelik sözleşmesi (“Hizmet Şartları”) ile, Riva Network tarafından size oyunlarımızı, uygulamalarımızı, internet sitelerimizi ve başka hizmetlerimizi (“Riva Network Hizmetleri”) kullanma ve onlardan yararlanma izni verilmesinin şartları belirlenmektedir. “Riva Network” ifadesi, RIVADEV YAZILIM SİSTEMLERİ LTD. ŞTİ. anlamında olup işbu Hizmet
                                Şartları siz ile söz konusu kuruluş arasında bir sözleşme niteliğindedir.
                            </p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">Sanal İçerik.</div>
                            <p>
                                Sanal İçerik satın almak, kazanmak veya hediye olarak almak üzere tıkladığınızda, sadece Sanal İçerik’e erişmenize imkân veren bir lisans elde etmiş olursunuz. Edindiğiniz Sanal İçerik üzerinde hiçbir mülkiyet hakkınız yoktur ve bunları başkasına devredemezsiniz. Sanal İçerik’in hiçbir parasal değeri yoktur, genel olarak oyuna özgüdür ve bunu “gerçek dünya” parası
                                ile değiştiremezsiniz.
                            </p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">1) HESAP</div>
                            <p>
                                1.1) Hesap oluşturmamın önünde bir engel var mı? Riva Network’de hesap oluşturabilmeniz için 13 yaşın üzerinde olmanız veya ebeveyniniz/yasal vasinizin iznine sahip olmanız gerekir. 13 yaşın üzerinde olmamanız durumunda oluşturulan hesabın tüm aktivitelerinin sorumluluğu ebeveyniniz/yasal vasiniz ve sizdedir.
                                <br />
                                <br />
                                1.2) Gerçek bilgilerimi vermek zorunda mıyım? Evet. Riva Network'de yapacağınız işlemler için sizden istendiğinde gerçek bilgilerinizi vermek zorundasınız. Buna adınız ve soyadınız da dahildir.
                                <br />
                                <br />
                                1.3) Hesabımı takas edebilir veya satabilir miyim? Hayır. Hesap oluşturduğunuz anda aşağıdaki şartları kabul etmiş sayılırsınız:
                                <br />
                                <br />
                                Hesap bilgilerinizi/hesabınızı kimseyle paylaşamazsınız. Hesap bilgilerinizi/hesabınızı satamazsınız veya devredemezsiniz. Hesap bilgilerinizi gizli tutmalısınız. Hesap bilgilerinizin ifşa olması veya başkası tarafından öğrenildiğini düşünmeniz durumunda derhal bize bildirmelisiniz. Hesabınızı başkasıyla paylaşmanız veya hesabınızın güvenliğini yeterince
                                sağlayamamanız durumunda meydana gelebilecek yetkisiz erişim ve kayıplardan (Sanal İçerik kayıpları da dahil olmak üzere) siz sorumlusunuz.
                            </p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">2) HESABIN FESHİ</div>
                            <h3>
                                <strong>2.1) Hesabın askıya alınması ve feshi.</strong>
                            </h3>
                            <p>
                                <strong>2.1.1) Siz.</strong> Hesabınızın askıya alınması veya silinmesi için talepte bulunabilirsiniz. Bunun için siteden destek açarak bizimle iletişime geçmelisiniz.
                            </p>
                            <p>
                                <strong>2.1.2) Biz.</strong> Şu hâllerde yeterli şüphe oluşması durumunda hesabınızı size haber vermeksizin askıya alabilir veya silebiliriz:
                            </p>
                            <ul>
                                <li>Hizmet Şartları’nı veya Kullanım Kuralları’nı ihlâl ettiyseniz.</li>
                                <li>Yasal gerekçeler, 3. şahısların haklarının korunması veya Riva Network menfaati gerekçesiyle hesabın aktivitelerinin sonlandırılması gerekli ise.</li>
                                <li>Yaptığınız ödemenin bir şekilde ödeme aracısı tarafından geri çekilmesi durumunda birilerine para iadesi yapmamız gerekir ise.</li>
                                <li>Başka birisinin ödeme yöntemlerini izinsiz kullanmış iseniz.</li>
                            </ul>
                            <p>Bu tespitleri yapabilmek için otomatik sistemler veya işbirliği yaptığımız kişilerin verdiği bilgileri kullanabiliriz. Yanıldığımızı düşünürseniz Yardım Merkezi’mizden hiçbir detayı atlamadan bizimle iletişim geçin.</p>
                            <h3>
                                <strong>2.2) Hesabım sonsuza kadar muhafaza edilecek mi?</strong>
                            </h3>
                            <p>Bunun garantisini veremeyiz. Hesabınızın uzun süre inaktif olması durumunda hesabı feshetme veya askıya alma hakkımızı saklı tutarız.</p>
                            <h3>
                                <strong>2.3) Hesabım feshedilirse ne olur?</strong>
                            </h3>
                            <p>Hesabınıza tanımlanmış olan tüm kayıtlar silinir ve bunlara erişemezsiniz. Buna Sanal İçerik (satın aldığınız ürünler) de dahildir.</p>
                            <ul>
                                <li>Paranızın iadesini isteyemezsiniz.</li>
                                <li>Oluşturduğunuz diğer hesapların da feshedilebileceğini anlıyor ve kabul ediyorsunuz.</li>
                            </ul>
                            <p>Hesabınızın Riva Network tarafından Hizmet Şartları çerçevesinde her zaman feshedilebileceğinin riskinin bulunduğunu biliyor ve bu şartlara göre davranacağınızı kabul ediyorsunuz.</p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>3) SINIRLAMALAR</h2>
                            </div>
                            <h3>
                                <strong>3.1) Riva Network Hizmetleri ile neler yapabilirim?</strong>
                            </h3>
                            <p>
                                Riva Network Hizmetleri’ni ve Sanal İçerik’leri sadece şahsi ve ticari olmayan amaçlarınız için kullanabilirsiniz. Herhangi bir Riva Network Hizmeti’nden gelir elde edemez veya Sanal İçerik’lerin takasını/satışını yapamazsınız. Sanal İçerik’leriniz devredilemez ve Riva Network tarafından geri alınabilir. Hesabınızın feshedilmesi veya askıya alınması durumunda Sanal
                                İçerik’leriniz de sonlandırılabilir. Aksi, sözleşmeler ile tarafımızca belirtilmedikçe hiçbir Riva Network Hizmeti üzerinden gelir sağlayamaz, sistemlerimiz üzerinde tersine mühendislik uygulayamaz, kaynak koda dönüştüremez veya modifikasyonlar yapamazsınız.
                            </p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>4) SANAL İÇERİKLER, OYUN PARASI VE SATIN ALIMLAR</h2>
                            </div>
                            <h3>
                                <strong>4.1) Sanal İçerik’in tanımı.</strong>
                            </h3>
                            <p>
                                Sanal İçerik Riva Network Hizmet’lerinde size sunulan üyelik paketleri, kitler, spawnerler , kozmetik ürünleri (Sanal Ürünler) vb. veya krediler, coin (Oyun Parası) (topluca “Sanal İçerik”) gibi şeylerin tamamıdır. Satın alma esnasında aksi belirtilmedikçe satın alınan Sanal Ürünler veya Oyun Parası yalnızca hangi oyun için satın alınmışsa o oyun için
                                kullanılabilir.
                            </p>
                            <h3>
                                <strong>4.2) Sanal İçerikleri nasıl edinirim?</strong>
                            </h3>
                            <p>Sanal İçerik’leri elde edebilmeniz için birden çok yol vardır.</p>
                            <ul>
                                <li>Kredi kartı, banka kartı, ininal kart veya mobil ödeme gibi yollarla satın alabilirsiniz.</li>
                                <li>Riva Network etkinliklerinden, görevlerinden veya çekilişlerinden kazanabilirsiniz.</li>
                                <li>Başka bir oyuncu tarafından size hediye edilebilir. (Hediye Rivalet yüklemesi gibi)</li>
                            </ul>
                            <h3>
                                <strong>4.3) Sahip olduğum Sanal İçerik’in mülkiyeti bana mı ait?</strong>
                            </h3>
                            <p>Hayır. Sanal İçerik üzerinde hiçbir mülkiyet hakkınız yoktur. Satın aldığınız Sanal İçerik’lerin hiçbir parasal değeri yoktur ve sahip olduğunuz tüm Sanal İçerik’lerin mülkiyeti Riva Network’ya aittir. Sahip olduğunuz Sanal İçerik Riva Network tarafından geri alınabilir, limitlenebilir veya değiştirilebilir.</p>
                            <p>Hizmet Şartları’nda aksi yönde bir ifade bulunsa dahi, hesabınız üzerinde hiçbir mülkiyet hakkınızın olmadığını ve olmayacağını, buna bağlı bütün hakların Riva Network’ya ait olduğunu ve Riva Network çıkarlarına işleyeceğini ve bundan sonra da her zaman Riva Network’ya ait olup onun çıkarına işleyeceğini biliyor ve kabul ediyorsunuz.</p>
                            <h3>
                                <strong>4.4) Sanal İçerik’imi her zaman kullanabilecek miyim?</strong>
                            </h3>
                            <p>Sanal İçerik’inizi kullanabilmeniz veya erişebilmeniz her zaman için mümkün olmayabilir. Riva Network Hizmetleri’nin eğlence ve güvenliğini artırmak veya korumak maksadıyla, oyun içeriklerinin veya Sanal İçerikler’in tümünü veya bir kısmını önceden haber vermeksizin ve hiçbir sorumluluk altına girmeden iptal etme, limitleme veya değiştirme hakkımız vardır.</p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>5) ÖDEME VE VERGİLER</h2>
                            </div>
                            <h3>
                                <strong>5.1) Riva Network Hizmetleri tamamen ücretsiz mi?</strong>
                            </h3>
                            <p>
                                Riva Network Hizmetleri’nin bazı işlevleri ücretli olabilir. Bu durumda bize veya kullandığımız ödeme aracı firmalara doğru ve eksiksiz ödeme bilgileri vermeyi kabul ediyorsunuz. Ayrıca hesabınızda yaptığınız harcamalar ve ödemeler ile ilgili ücret ve (gerekiyorsa) vergileri de ödemeyi kabul ediyorsunuz. Riva Network Hizmetleri’nin herhangi bir ürünü veya içeriği
                                için ücretlendirmeler üzerinde değişiklik yapma hakkı vardır. Bu Oyun Paranızın ürünler karşısındaki alım gücünü değiştirebilir. Sanal İçerik satın alımları için ücret peşin yapılır ve iade edilmez. Hesabınızda yapılan yetkisiz ödemeler de dahil olmak üzere bütün ödemelerden tamamen siz sorumlusunuz.
                            </p>
                            <h3>
                                <strong>5.2) Ödeme sırasındaki sorumluluklarım nelerdir?</strong>
                            </h3>
                            <p>Ödeme işlemi sırasında hesabınıza tanımlanan Sanal İçerik’in doğru olup olmadığını kontrol etmeniz gerekir. Bir hata farkederseniz zaman kaybetmeden bizimle iletişim kurun.</p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>6) KULLANICI TARAFINDAN OLUŞTURULAN İÇERİKLER</h2>
                            </div>
                            <h3>
                                <strong>6.1) Riva Network Hizmetleri içerisinde yayınladığım içeriklerden sorumlu muyum?</strong>
                            </h3>
                            <p>Evet. Riva Network Hizmetleri içerisinde yayınladığınız tüm mesajlar, içerikler, metinler, sesler, görüntüler ve her türlü iletişiminizden (“İçerikleriniz”) siz sorumlusunuz.</p>
                            <p>İçerikleriniz’i ancak şu şartları kabul ediyorsanız yayınlayabilirsiniz:</p>
                            <ul>
                                <li>İçerikleriniz’i yüklediğiniz veya yayınladığınız andan itibaren, yayınladığınız veya yüklediğiniz İçerikleriniz’in dağıtma, yayınlama, uyarlama, çoğaltma, değiştirme, türevlerini üretme ve tüm telif haklarını süresiz ve ücretsiz olarak Riva Network’ya vermiş olduğunuzu kabul ediyorsunuz.</li>
                                <li>İçerikleriniz’in üzerindeki tüm haklarınızdan Türkiye Cumhuriyeti kanunlarının izin verdiği ölçüde feragat ediyorsunuz. Aksi durumda İçerikleriniz’i adınız veya rumuzunuz ile veya adınız veya rumuzunuz olmadan kullanma ve değiştirme hakkını Riva Network’ya verdiğinizi kabul ediyorsunuz.</li>
                                <li>İçerikleriniz’in hiçbirinin Riva Network’ya hiçbir gizlilik yükümlülüğü, eser sahibini zikretme yükümlülüğü veya başka yükümlülük getirmediğini ve İçerikleriniz’in herhangi bir kullanım veya ifşasından dolayı Riva Network’nun sorumlu tutulamayacağını beyan, taahhüt ve kabul diyorsunuz.</li>
                                <li>İçerikleriniz’in hiçbir üçüncü şahsın haklarına tecavüz etmeyeceğini beyan, taahhüt ve kabul ediyorsunuz.</li>
                            </ul>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>7) GÖZETİM VE TAKİP</h2>
                            </div>
                            <h3>
                                <strong>7.1) Riva Network Hizmetleri’ni kullanırken Riva Network beni gözetim altında tutuyor mu?</strong>
                            </h3>
                            <p>
                                Evet. Uygunsuz davranışları tespit etmek ve sınırlamak, hileyi ve bilgisayar korsanlığını önlemek ve Riva Network Hizmetleri’ni iyileştirmek amacıyla bilgisayarınızda veya cihazınızda aktif bir şekilde sizi gözetim altında tutabiliriz. Riva Network Hizmetleri’ni kullanmanızla ilgili bilgileri nasıl topladığımız ve işlediğimiz konusunda daha fazla bilgi almak için
                                Gizlilik Politikası’na göz atınız.
                            </p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h2>8) TELİF HAKKI İHLALLERİNİN BİLDİRİLMESİ</h2>
                            </div>
                            <h3>
                                <strong>8.1) Birisi telif hakları ile korunan bir eserimin haklarını Riva Network Hizmetleri’nde ihlal etmişse ne yapmam gerekir?</strong>
                            </h3>
                            <p>
                                Riva Network Hizmetleri içerisinde ihlal edilen bir telif hakkınız olduğunu düşünüyorsanız bunun için info@rivanetwork.com.tr adresine telif hakkıyla korunan eserin hangi eser olduğu veya adı, telefon numaranız ve e-posta adresiniz ile bildirebilirsiniz. Yalnızca ilgili eserin telif hakları sizdeyse veya sahibi adına hareket etmenizi sağlayan vekaletiniz varsa
                                bildirebilirsiniz.
                            </p>
                            <p>Söz konusu bildirim bir yasal bildirimdir ve gerektiğinde ihlal ettiğinden şüphelenilen kişi ile paylaşılabileceğini bildirmek isteriz.</p>
                            <div class="line">
                                <br />
                            </div>
                            <div class="sub-title">
                                <h5>
                                    İŞBU HİZMET ŞARTLARI’NI OKUYUP ANLADIĞINIZI VE RİVA NETWORK HİZMETLERİ’Nİ KULLANDIĞINIZ VEYA ONLARA
                                    <br />
                                    ERİŞTİĞİNİZDE İŞBU HİZMET ŞARTLARI’NIN ÜZERİNİZDE BAĞLAYICI HALE GELDİĞİNİ BİLİYOR VE KABUL EDİYORSUNUZ.
                                </h5>
                            </div>{" "}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TS;
