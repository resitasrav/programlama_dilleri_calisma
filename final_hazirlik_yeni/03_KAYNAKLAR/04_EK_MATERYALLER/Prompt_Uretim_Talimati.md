Sen bu klasördeki Programlama Dilleri dersi materyallerini kullanarak final sınavına yönelik eksiksiz, offline çalışan bir çalışma sistemi oluşturacaksın.

ÖNEMLİ:

* Daha önce hazırlanmış final_hazirlik klasörü yanlışlıkla silindi.
* Bu yüzden sistemi sıfırdan kur.
* Yeni çıktı klasörünün adı kesinlikle şu olsun: final_hazirlik_yeni
* Eski dosyaların var olduğunu varsayma.
* Her şeyi mevcut klasördeki PDF, DOCX, MD, TXT, HTML, görsel veya benzeri ders/proje dosyalarından yeniden çıkar.
* Bilgi uydurma. Kaynakta olmayan ama genel programlama dilleri bilgisi olarak eklenen yerleri açıkça “Genel bilgi” diye belirt.
* Dosyalarda bozuk karakter, OCR hatası veya okunamayan sayfa varsa bunu raporda belirt ama mümkün olduğunca kalan içerikten çalışmaya devam et.

DERS VE SINAV BAĞLAMI:

Ders: Programlama Dilleri

Sınav: Final

Hocanın söyledikleri / sınav beklentisi:

* Final vizeden biraz daha zor olacak.
* Vizede yaklaşık 50 soru vardı: 45 test + 5 klasik.
* Klasik sorular daha çok derleme zamanı / çalışma zamanı, değişkenlerin değerleri ve değişimi, scope, binding, lifetime, type checking gibi konular üzerindeydi.
* Finalde test ve klasik karışık olabilir.
* Hoca “kod parçası verip aşağıdakilerden hangisi bu dile aittir?” tarzı soru sorabileceğini söyledi.
* Test soruları daha zor, yorumlu ve detay isteyen tarzda olacak.
* Proje konularıyla ilgili açık uçlu soru gelebilir.
* Vize öncesi konular tamamen dışlanmayacak çünkü konular bağlantılı.
* Ancak final ağırlığı özellikle 10. slayttan sonraki konular, final konuları ve e-kampüse yüklenen akademik proje ödevleri üzerinde olmalı.
* E-kampüste akademik tarzda hazırlanmış proje ödevleri var. Bunlarda Rust, Go, Scala, Erlang gibi diller anlatılmış olabilir. Bu proje dosyalarından soru çıkma ihtimali yüksek.

ÖNCEKİ ÇIKTIDA YAKALANAN KRİTİK FİNAL KONULARI:
Sistemde özellikle şu konular güçlü temsil edilmeli:

* Alt programlar
* Parametre geçiş yöntemleri
* Function parameter binding
* Compile-time vs run-time
* Static binding vs dynamic binding
* Static scope vs dynamic scope
* Variable lifetime
* Activation record / stack frame
* Closure
* Coroutine
* ADT / veri soyutlama
* OOP
* Inheritance
* Polymorphism
* Dynamic binding
* Type system
* Strong typing / weak typing
* Type checking
* Exception handling
* Concurrency
* Parallelism
* Synchronization
* Rust ownership / borrowing / lifetime
* Go goroutine / channel
* Scala trait / object / functional + OOP yapı
* Erlang process / message passing / pattern matching

ANA HEDEF:

1. Ders materyallerini oku.
2. Final ağırlıklı özet çıkar.
3. Proje dosyalarındaki dilleri ve ayırt edici özellikleri çıkar.
4. Kod parçasından dil tanıma rehberi oluştur.
5. Klasik sınav sorularına hazırlık notları oluştur.
6. En az 150 soruluk etkileşimli, offline çalışan HTML/CSS/JS çalışma sistemi oluştur.
7. Soruların her birinde doğru cevap, yanlış şık açıklamaları, konu etiketi, zorluk, sınav tuzağı ve kaynak bilgisi bulunsun.
8. En sonunda sistemi otomatik doğrula ve rapor üret.

KLASÖR YAPISI:

final_hazirlik_yeni/
│
├── index.html
├── style.css
├── app.js
├── README.md
│
├── 01_GENEL_FINAL_OZETI.md
├── 02_KONU_KONU_DETAYLI_OZET.md
├── 03_PROGRAMLAMA_DILLERI_KARSILASTIRMA.md
├── 04_KOD_PARCA_DIL_TANIMA_REHBERI.md
├── 05_KLASIK_SORU_CALISMA_NOTLARI.md
├── 06_FINAL_ICIN_EN_KRITIK_50_BILGI.md
├── 07_HOCA_TARZI_TAHMINI_SORULAR.md
├── 08_PROJE_DILLERI_OZETI.md
│
├── build_final_system.py
├── extract_sources.py
├── validate_system.py
└── FINAL_RAPORU.md

DOSYA OKUMA VE KAYNAK ÇIKARMA:

1. Klasördeki tüm kaynakları tara:

   * PDF
   * DOCX
   * MD
   * TXT
   * HTML
   * Görsel varsa OCR denenebilir ama zorunlu değil.
2. Dosyaları türlerine göre sınıflandır:

   * Ana ders sunumları
   * Vize öncesi temel konular
   * Final ağırlıklı slaytlar
   * Proje ödevleri / akademik dil raporları
   * Ek materyaller
3. “Konu 1.pdf” ile “Konu 15.pdf” gibi sunumlar varsa hepsini oku.
4. “programlama_dilleri.pdf”, “programlama_dilleri_kısa.pdf”, “Programlama Dilleri ve Hesaplama Kuramı.docx” gibi dosyalar varsa oku.
5. Proje dosyalarından özellikle Rust, Go, Scala, Erlang veya başka anlatılan dilleri çıkar.
6. Her önemli bilginin yanına mümkünse kaynak ekle:

   * Dosya adı
   * Sayfa numarası veya slayt numarası
   * Kaynak bulunamıyorsa “Kaynak: Genel bilgi” yaz.
7. Kaynak uydurma. Sayfa/slayt bilgisi emin değilse “yaklaşık / çıkarılan metinden” diye belirt.

ÖZET DOSYALARI:

1. 01_GENEL_FINAL_OZETI.md
   Finalde çıkma ihtimali yüksek konuların sade ama akademik özeti olsun.
   Şu yapı kullanılsın:

* Konu adı
* Kısa tanım
* Finalde neden önemli?
* Hoca nasıl sorabilir?
* Mini örnek
* Dikkat edilmesi gereken tuzak
* Kaynak

2. 02_KONU_KONU_DETAYLI_OZET.md
   Her konu için detaylı çalışma notu oluştur:

* Tanım
* Temel kavramlar
* Compile-time / run-time ilişkisi
* Scope / binding ilişkisi
* Kod üstünden örnek
* Testte nasıl sorulur?
* Klasikte nasıl sorulur?
* Yanlış anlaşılabilecek noktalar
* Örnek soru + cevap mantığı
* Kaynak

3. 03_PROGRAMLAMA_DILLERI_KARSILASTIRMA.md
   Diller arası karşılaştırma tablosu oluştur.
   Mutlaka şu dilleri kontrol et:

* C
* C++
* Java
* Python
* JavaScript
* Scala
* Rust
* Go
* Erlang
* Prolog
* Lisp
* Haskell
* Ders materyalinde geçen başka diller

Karşılaştırma başlıkları:

* Paradigma
* Tip sistemi
* Static / dynamic typing
* Strong / weak typing
* Derlenen / yorumlanan / hibrit
* Bellek yönetimi
* Scope yapısı
* Binding özellikleri
* OOP desteği
* Functional programming desteği
* Concurrency yaklaşımı
* Exception handling yaklaşımı
* Ayırt edici syntax
* Kod parçasından tanıma ipucu
* Finalde gelebilecek soru tipi

4. 04_KOD_PARCA_DIL_TANIMA_REHBERI.md
   Hoca kod parçası verip “hangi dile aittir?” diye sorabileceği için bu dosya çok önemli.

Her dil için:

* Değişken tanımlama
* Fonksiyon tanımlama
* Class / struct / trait / interface
* Pattern matching
* Pointer / reference / ownership
* Goroutine / channel
* Actor / process / message passing
* Lambda / anonymous function
* Generic kullanımı
* Import / package yapısı
* Noktalı virgül kullanımı
* Blok yapısı
* Tip bildirimi tarzı
* Örnek kod
* Bu kodun neden o dile ait olduğu
* Karıştırılabileceği diğer dil
* Sınav tuzağı

Özellikle şunları ayırt ettir:

* Rust: ownership, borrowing, let mut, match, Result, Option, & reference, lifetime işaretleri
* Go: package main, func, goroutine, go keyword, channel, <- operatörü
* Scala: object, trait, val/var, match, case, higher-order function
* Erlang: process, spawn, receive, pattern matching, değişkenlerin büyük harfle başlaması, nokta ile biten ifadeler
* Java: class, public static void main, interface, extends/implements
* C/C++: pointer, malloc/free, struct, header include, reference &, template
* Python: indent, def, self, duck typing
* JavaScript: let/const/var, function, arrow function, prototype, async/await
* Prolog: fact/rule/query, :- sembolü
* Lisp: parantezli prefix yapı
* Haskell: pure functional yapı, type signature, pattern matching

5. 05_KLASIK_SORU_CALISMA_NOTLARI.md
   Klasik sorular için çok önemli.
   Sadece tanım yazma; kod üstünden adım adım çözüm mantığı ver.

Şu konuları kapsa:

* Compile-time vs run-time
* Static binding vs dynamic binding
* Static scope vs dynamic scope
* Variable lifetime
* Activation record / stack frame
* Type checking
* Strong typing / weak typing
* Name binding
* Value binding
* Pass by value
* Pass by reference
* Pass by value-result
* Pass by name
* Aliasing
* Side effect
* Recursion
* Closure
* Coroutine
* Dynamic method dispatch
* Scope zinciri
* Kod çalıştırma ve değişken değeri takip soruları

Her konu için:

* Tanım
* Mini kod örneği
* Kod üzerinde adım adım değer değişimi
* Sınavda gelebilecek klasik soru
* Kısa cevap
* Uzun cevap
* Puanlama şeması
* Yaygın öğrenci hatası
* Hocanın tuzak kurabileceği nokta

6. 06_FINAL_ICIN_EN_KRITIK_50_BILGI.md
   Final sabahı hızlı tekrar için 50 maddelik liste hazırla.
   Her madde:

* Kısa bilgi
* Neden önemli?
* Hangi soru tipinde çıkar?
* 1 cümlelik hatırlatma

7. 07_HOCA_TARZI_TAHMINI_SORULAR.md
   Hocanın anlatılan sınav tarzına göre tahmini sorular üret.
   Şunlar olsun:

* 30 test sorusu
* 10 klasik soru
* 10 kod parçası dil tanıma sorusu
* 10 kod yorumlama/değer takip sorusu

Bu dosyadaki sorular “en muhtemel sınav tarzı” gibi hazırlanmalı.

8. 08_PROJE_DILLERI_OZETI.md
   Proje dosyalarından çıkan diller için ayrı özet hazırla.
   Özellikle Rust, Go, Scala, Erlang varsa detaylandır.

Her dil için:

* Dilin ortaya çıkış amacı
* Tasarım felsefesi
* Paradigma
* Tip sistemi
* Bellek yönetimi
* Concurrency yaklaşımı
* Syntax ayırt edicileri
* Avantajları
* Dezavantajları
* Diğer dillerden farkları
* Finalde nasıl sorulabilir?
* Açık uçlu soru örneği
* Test soru örneği
* Kaynak

İNTERAKTİF HTML ÇALIŞMA SİSTEMİ:

Dosyalar:

* index.html
* style.css
* app.js

Sistem tamamen offline çalışmalı.
CDN kullanılmasın.
İnternet bağlantısı gerektirmesin.
Veri app.js içine gömülü olabilir.

Arayüz özellikleri:

1. Dashboard

* Toplam soru sayısı
* Çözülen soru sayısı
* Doğru sayısı
* Yanlış sayısı
* Başarı yüzdesi
* Favori soru sayısı
* Yanlış yapılan soru sayısı
* Konu bazlı ilerleme
* Zorluk bazlı ilerleme

2. Filtreler
   Şu filtreler olsun:

* Final ağırlıklı
* Vize temeli
* Proje konusu
* Kod yorumlama
* Dil tanıma
* Compile-time / run-time
* Scope / binding
* Type system
* Parametre geçişi
* Activation record
* Closure / coroutine
* ADT
* OOP
* Dynamic binding
* Concurrency
* Rust
* Go
* Scala
* Erlang
* Klasik soru
* Tuzaklı
* Yanlış yapılanlar
* Favoriler
* Çözülmemişler

3. Arama
   Kullanıcı şu alanlarda arama yapabilsin:

* Soru metni
* Şıklar
* Açıklamalar
* Konu etiketi
* Dil adı
* Kaynak adı

4. Soru bankası
   En az 150 soru üret.
   Dağılım:

* En az 85 test sorusu
* En az 20 klasik / açık uçlu soru
* En az 20 kod parçasından dil tanıma sorusu
* En az 20 kod yorumlama / değişken değeri takip sorusu

Toplam minimum 150 olsun.
Kalite uygunsa 160-180 arası olabilir.

5. Soru dağılım ağırlığı
   Yaklaşık dağılım:

* %55 final ağırlıklı konular
* %20 proje dilleri
* %15 vize temeli ama finalle bağlantılı konular
* %10 karışık, zor, tuzaklı ve yorum soruları

6. Zorluk
   Her soru şu zorluklardan biriyle etiketlensin:

* Kolay
* Orta
* Zor
* Final tarzı
* Tuzaklı

7. Test sorusu formatı
   Her test sorusunda:

* Soru ID
* Soru türü
* Soru metni
* 4 veya 5 şık
* Doğru cevap
* Zorluk
* Etiketler
* Kaynak
* Neden önemli?
* Genel açıklama
* Her şık için ayrı açıklama

Her şık açıklaması şu bilgileri içersin:

* Bu şık neden doğru / yanlış?
* Hangi konu ile ilgili?
* Hangi kavramı ölçüyor?
* Sınavdaki tuzak ne?
* Öğrenci neden bu şıkka düşebilir?
* Benzer soruda neye dikkat edilmeli?

Zayıf açıklama yasak:

* “Yanlış çünkü doğru cevap bu değil” gibi açıklamalar kullanma.
* Her yanlış şık da anlamlı açıklansın.

8. Klasik soru formatı
   Her klasik soruda:

* Soru
* Beklenen cevap
* Kısa cevap
* Uzun cevap
* Puanlama şeması
* Anahtar kavramlar
* Yaygın öğrenci hatası
* Sınav tuzağı
* Kaynak

Klasik sorular özellikle kod ve değer takibi içersin.
Sadece tanım sorusu olmasın.

9. Kod soruları
   Kod sorularında şu tarzlar olsun:

* Kod hangi dile ait?
* Bu kodun en güçlü dil ipucu nedir?
* Kodda hangi değişkenin değeri ne olur?
* Binding compile-time mı run-time mı?
* Scope static mi dynamic mi?
* Parametre geçişinde değerler nasıl değişir?
* Dynamic binding hangi metodu çağırır?
* Closure hangi değişkeni yakalar?
* Activation record ne zaman oluşur?
* Kod hata verir mi?
* Hata compile-time mı run-time mı?
* Rust ownership/borrowing açısından ne olur?
* Go channel/goroutine açısından ne olur?
* Scala trait/object açısından ne olur?
* Erlang process/pattern matching açısından ne olur?

10. Kullanıcı etkileşimi
    Her soru kartında:

* Cevapla butonu
* Açıklamayı göster/gizle
* Her şık için ayrı açıklama göster/gizle
* Favorilere ekle
* Yanlış yaptım olarak işaretle
* Çözüldü olarak işaretle
* Not alanı olabilir

11. LocalStorage
    Kullanıcının ilerlemesi tarayıcıda saklansın:

* Çözülen sorular
* Doğru / yanlış durumu
* Favoriler
* Kullanıcı notları
* Son seçilen filtreler

12. Tasarım

* Temiz, sade, okunabilir arayüz.
* Mobil ve masaüstü uyumlu.
* Kod blokları okunabilir olsun.
* Uzun açıklamalar katlanabilir olsun.
* Renkler göz yormasın.
* Dış kütüphane kullanma.

Soru üretirken özellikle bu tarzlara ağırlık ver:

A) AI tarzı yorumlu test soruları
Örnek kalıp:

* “Aşağıdakilerden hangisi bu dilin tasarım felsefesine en uygundur?”
* “Bu kod parçasının hangi dile ait olduğunu anlamak için en güçlü ipucu hangisidir?”
* “Bu durumda binding ne zaman gerçekleşir?”
* “Aşağıdaki ifadelerden hangisi compile-time ile run-time ayrımını en doğru açıklar?”
* “Rust ile Go’nun bellek yönetimi açısından temel farkı nedir?”
* “Scala’nın hem OOP hem fonksiyonel programlama dili olarak görülmesinin nedeni nedir?”
* “Erlang’ın concurrency yaklaşımı neden shared-memory yaklaşımından farklıdır?”

B) Kod parçası dil tanıma
Örnek diller:

* Rust
* Go
* Scala
* Erlang
* Java
* C
* C++
* Python
* JavaScript
* Prolog
* Lisp
* Haskell

C) Klasik kod takip soruları
Şu konulardan kod ver:

* Pass by value
* Pass by reference
* Pass by value-result
* Pass by name
* Static scope
* Dynamic scope
* Dynamic binding
* Closure
* Recursion
* Activation record
* Aliasing
* Side effect

D) Proje dilleri
Rust, Go, Scala, Erlang için mutlaka soru üret:

* Ortaya çıkış amacı
* Bellek yönetimi
* Concurrency
* Syntax ayırt etme
* Paradigma
* Tip sistemi
* Avantaj/dezavantaj
* Diğer dillerden farkı
* Açık uçlu sınav sorusu

KALİTE KONTROL:

Sistemi oluşturduktan sonra validate_system.py ile şu kontrolleri yap:

1. app.js syntax hatası var mı?
2. Toplam soru sayısı en az 150 mi?
3. Her soruda ID var mı?
4. Aynı ID iki kez kullanılmış mı?
5. Her soruda doğru cevap var mı?
6. Her test sorusunda en az 4 şık var mı?
7. Her şıkta açıklama var mı?
8. Boş açıklama var mı?
9. Etiketsiz soru var mı?
10. Kaynaksız soru var mı? Varsa “Genel bilgi” olarak işaretlenmiş mi?
11. Filtrelerde kullanılan tag isimleri app.js içindeki sorularla uyumlu mu?
12. localStorage kodu var mı?
13. Açıklama göster/gizle çalışıyor mu?
14. Favori sistemi çalışıyor mu?
15. Yanlış yapılanlar filtresi çalışıyor mu?
16. index.html dış CDN kullanıyor mu?
17. README tamam mı?

Ayrıca manuel kalite kontrol yap:

* En az 20 test sorusunun doğru cevabını ve yanlış şık açıklamalarını kontrol et.
* En az 10 kod sorusunda syntax ve dil tanıma ipuçlarını kontrol et.
* Rust, Go, Scala, Erlang sorularında yanlış genel bilgi olup olmadığını kontrol et.
* Parametre geçişi ve scope sorularında cevap anahtarlarını özellikle kontrol et.
* Açıklaması zayıf kalan soruları güçlendir.

README.md İÇERİĞİ:

README içinde şunlar olsun:

* Sistem nasıl açılır?
* Hangi dosyalar üretildi?
* Hangi dosya ana giriş dosyasıdır?
* index.html nasıl çalıştırılır?
* İnternet gerekiyor mu?
* Soru bankası nasıl güncellenir?
* localStorage ne saklar?
* Kaynaklar nasıl işlendi?
* Eksik/okunamayan dosyalar var mı?
* Validasyon nasıl çalıştırılır?
* Final için önerilen çalışma sırası nedir?

FINAL_RAPORU.md İÇERİĞİ:

En sonunda FINAL_RAPORU.md oluştur ve şu bilgileri yaz:

* Okunan toplam dosya sayısı
* Özgün çıkarılan kaynak sayısı
* Özetlenen ana kaynaklar
* Üretilen toplam soru sayısı
* Test soru sayısı
* Klasik soru sayısı
* Dil tanıma soru sayısı
* Kod yorumlama/değer takip soru sayısı
* Proje dosyalarından çıkan diller
* Final ağırlıklı en kritik konular
* Eksik/okunamayan dosyalar
* Yapılan otomatik kontroller
* Manuel kalite kontrol sonucu
* Açmak için tıklanacak dosya
* Öğrenci için önerilen ilk çalışma yolu

ÖNERİLEN ÇALIŞMA YOLU RAPORA EKLENSİN:

1. 06_FINAL_ICIN_EN_KRITIK_50_BILGI.md oku.
2. 01_GENEL_FINAL_OZETI.md oku.
3. 04_KOD_PARCA_DIL_TANIMA_REHBERI.md oku.
4. index.html aç.
5. Önce şu filtrelerle soru çöz:

   * Final tarzı
   * Tuzaklı
   * Kod yorumlama
   * Dil tanıma
   * Proje konusu
6. Yanlış yapılan soruları tekrar çöz.
7. En son 07_HOCA_TARZI_TAHMINI_SORULAR.md dosyasını çöz.

ÇIKTI SONRASI KISA MESAJ:
İş bitince terminalde veya cevapta şu kısa raporu ver:

* Klasör: final_hazirlik_yeni
* Açılacak dosya: final_hazirlik_yeni/index.html
* Toplam soru:
* Test:
* Klasik:
* Dil tanıma:
* Kod yorumlama:
* Proje dilleri:
* Finalin en kritik 15 konusu:
* Eksik/okunamayan kaynak:
* Validasyon sonucu:
* İlk açmam gereken dosya:
