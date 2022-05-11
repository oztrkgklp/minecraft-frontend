import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const CCP = () => {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header /> <div class="gap"></div>
            <div>
                {" "}
                <div class="container">
                    <div class="support-details-2">
                        <h1>Youtube İçerik Üreticileri Şartlar</h1>
                        <p>Harika bir Youtube kanalın varsa ve SonOyuncu’da kanalının ayrıcalıklarından faydalanmak istiyorsan YouTuber rolümüz tam sana göre. Aşağıdaki şartları karşılıyorsan veya karşılamamana rağmen gerçekten müthiş bir YouTuber olduğunu düşünüyorsan yine aşağıda bulabileceğin başvuru kurallarına göre YouTuber başvurunu yapabilirsin.</p>
                        <div class="line"></div>
                        <div class="sub-title">YouTuber rolünün avantajları neler?</div>
                        <ul>
                            <li>&bull;&nbsp;En pahalı VIP paketi ayrıcalıkları.</li>
                            <li>&bull;&nbsp;Sana özel temsilci ile birebir hızlı iletişim.</li>
                            <li>&bull;&nbsp;Güncellemeler ve yenilikleri ilk önce deneme imkanı.</li>
                            <li>&bull;&nbsp;Hediye kodları ve etkinlik imkanları.</li>
                            <li>&bull;&nbsp;Ultra süper gizli mod (disguise).</li>
                            <li>&bull;&nbsp;İsminin önünde mega havalı “YouTuber” etiketi.</li>
                        </ul>
                        <div class="line"></div>
                        <div class="sub-title">YouTube İçerik Üretici Şartları</div>
                        <ul>
                            <li>&bull;&nbsp;Aktif olarak içerik üretiyor olmak.</li>
                            <li>&bull;&nbsp;Kanalında sadece Minecraft içerikleri üretiyorsan en az 30 bin abone.</li>
                            <li>&bull;&nbsp;Kanalın sadece Minecraft içeriklerine sahip değilse ve aralıklarla Minecraft videosu çekiliyorsa 70 bin abone.</li>
                            <li>&bull;&nbsp;Videoların yüklenmesinden itibaren 1 hafta içinde en az 6000 izlenme.</li>
                            <li>&bull;&nbsp;Hizmet Şartları ve Üyelik Sözleşmesi’nin daha önce çok kez ihlal edilmemiş olması.</li>
                            <li>&bull;&nbsp;Tatlı olmak, nazik olmak, ponçik olmak.</li>
                        </ul>
                        <div class="line"></div>
                        <div class="sub-title">Kanalım içerik üretici şartlarını karşılıyor. YouTuber rolü alabilecek miyim?</div>
                        <p>Hem evet, hem hayır. Kanalının içerik üretici şartlarımızı karşılaması YouTuber rolü almanı garantilemez. Duruma göre herhangi bir sebeple rol talebin reddedilebilir. Buna ürettiğin sakıncalı içerikler, dil kullanımın veya geçmişte Hizmet Şartları ihlallerin sebep olabilir ve bunlarla sınırlı değildir.</p>
                        <div class="line"></div>
                        <div class="sub-title">Sakıncalı içerikler nelerdir?</div>
                        <p>Sakıncalı içerikler olarak telaffuz ettiğimiz içerik tipleri aşağı yukarı belirtilenler gibidir ve bunlarla sınırlı değildir.</p>
                        <ul>
                            <li>&bull;&nbsp;Hile, suistimal, ayaklanma veya buna benzer diğer aktivitelere teşvik edici içerikler.</li>
                            <li>&bull;&nbsp;Hakaret içeren, kırıcı, hedef alan dil kullanımı içeren içerikler.</li>
                            <li>&bull;&nbsp;İllegal olarak kabul edilen veya Türk kanunlarını ihlal eden içerikler.</li>
                            <li>&bull;&nbsp;SonOyuncu Hizmet Şartları’nı ihlal eden veya ihlal etmeye teşvik eden içerikler.</li>
                            <li>&bull;&nbsp;Yetişkinlere yönelik içerikler veya oyuncu kitlemiz için uygun görmediğimiz içerikler.</li>
                        </ul>
                        <div class="line"></div>
                        <div class="sub-title">YouTuber rolümü aldım. Sonsuza kadar benim!</div>
                        <p>Hayır değil. Yukarıda belirtilen veya belirtilmeyen sebepler ile rolün geri alınabilir. YouTuber rolü bir hak değildir ve SonOyuncu Hizmet Şartları veya diğer belirtilmemiş gerekçelerle rolünü alabiliriz.</p>
                        <div class="line"></div>
                        <div class="sub-title">Başvurumu yaptım, kabul edilmesem bile cevap alabilecek miyim?</div>
                        <p>Başvuru yoğunluğu veya şartlardan çok uzak olunması gibi durumlarda olumsuz cevapları veremeyebiliyoruz. Başvurun onaylanırsa bizim için bıraktığın iletişim yollarından iletişime geçeriz.</p>
                        <div class="line"></div>
                        <div class="sub-title">Ne kadar sürede cevap alırım?</div>
                        <p>Duruma göre değişir. Genellikle 2 hafta içerisinde başvurunla ilgili cevap almanı sağlarız.</p>
                        <div class="line"></div>
                        <div class="sub-title">Başvurumu nasıl yapacağım?</div>
                        <p>
                            Başvurunu <a href="#">partner@sonoyuncu.com.tr</a> adresine iletebilirsin. E-posta içeriğinde kanalının bağlantısı, oyun içi kullanıcı adının olmasına lütfen özen göster. E-postayı kanalının iş sorguları için kayıtlı olan e-posta adresinden gönderirsen sahipliğini doğrulama sürecini oldukça hızlandırabilirsin
                        </p>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
            <Footer />
        </div>
    );
};

export default CCP;
