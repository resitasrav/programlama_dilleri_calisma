# Klasik Soru Çalışma Notları

Cevap şablonu: tanım -> kod/değer tablosu -> binding/scope/lifetime aşaması -> sonuç -> tuzak.

## Compile-time vs run-time, compiler, interpreter, JIT
- Tanım: Derleme zamanı kodun analiz/çeviri aşaması; çalışma zamanı gerçek verilerle yürütme aşamasıdır.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 1.pdf, s.16-21

## Static scope, dynamic scope, binding
- Tanım: Static scope lexical yapıya, dynamic scope çağrı zincirine bakar; binding isim ile varlık/değer/adres ilişkisidir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 5.pdf; Konu 11.pdf

## Lifetime, static/stack/heap, dangling pointer
- Tanım: Lifetime değişkenin bellekte var olma süresidir; scope görünürlük, lifetime varlık süresidir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 6.pdf; Konu 12.pdf

## Type checking, strong/weak typing, coercion
- Tanım: Type checking tür hatalarını compile-time veya run-time yakalar; strong typing tür hatalarını sınırlamayı hedefler.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 1.pdf, s.14; Konu 7.pdf

## Expressions, precedence, associativity, short-circuit, side effect
- Tanım: İfade sonucu operand değerlendirme sırası, öncelik, ilişkisellik ve yan etkilere bağlı olabilir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 7.pdf

## Alt programlar, formal/actual parametre, function/procedure
- Tanım: Alt programlar işlem soyutlaması sağlar; formal parametre başlıkta, actual parametre çağrıda verilir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 10.pdf

## Pass-by-value/reference/result/value-result/name
- Tanım: Parametre geçiş modeli actual değerin kopya, adres, sonuç veya ifade olarak taşınmasını belirler.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 10.pdf, s.9-18

## Function parameter binding: shallow, deep, ad hoc
- Tanım: Fonksiyon parametre olarak geçerken hangi referans ortamıyla çalışacağı kritik binding problemidir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 11.pdf, s.2-13

## Closure ve coroutine
- Tanım: Closure fonksiyon + referans ortamıdır; coroutine durumunu koruyup resume ile devam eder.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 11.pdf, s.14-24

## Subprogram linkage, activation record, recursion
- Tanım: Activation record parametre, return address, yerel değişken ve geçici değerleri tutan çağrı kaydıdır.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 12.pdf

## ADT, veri soyutlama, encapsulation
- Tanım: ADT veri temsilini saklar, kullanıcıya tip adı ve işlem protokolü sunar.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 13.pdf

## OOP, inheritance, polymorphism, dynamic binding
- Tanım: Dynamic binding override edilmiş metodun çalışma zamanı nesne tipine göre seçilmesidir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 14.pdf

## Concurrency, race condition, semaphore, monitor, message passing
- Tanım: Eşzamanlılıkta birden çok kontrol akışı ilerler; paylaşılan veri yarış durumu doğurabilir.
- Mini örnek: küçük bir kod parçası üzerinde değişkenleri tabloyla takip et.
- Kısa cevap: sonucu ve kavram adını yaz.
- Uzun cevap: nedenini, hangi aşamada belirlendiğini ve tuzağı açıkla.
- Puanlama: tanım 2, adım adım takip 4, tuzak 2, sonuç 2.
- Kaynak: Konu 15.pdf
