# Genel Final Özeti

Final ağırlığı özellikle Konu 10-15 ve proje dillerindedir. Vize temeli tamamen dışlanmaz; scope, type checking, syntax/semantics ve memory yönetimi final konularıyla birleşir.

## Compile-time vs run-time, compiler, interpreter, JIT
- Özet: Derleme zamanı kodun analiz/çeviri aşaması; çalışma zamanı gerçek verilerle yürütme aşamasıdır.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 1.pdf, s.16-21

## Static scope, dynamic scope, binding
- Özet: Static scope lexical yapıya, dynamic scope çağrı zincirine bakar; binding isim ile varlık/değer/adres ilişkisidir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 5.pdf; Konu 11.pdf

## Lifetime, static/stack/heap, dangling pointer
- Özet: Lifetime değişkenin bellekte var olma süresidir; scope görünürlük, lifetime varlık süresidir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 6.pdf; Konu 12.pdf

## Type checking, strong/weak typing, coercion
- Özet: Type checking tür hatalarını compile-time veya run-time yakalar; strong typing tür hatalarını sınırlamayı hedefler.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 1.pdf, s.14; Konu 7.pdf

## Expressions, precedence, associativity, short-circuit, side effect
- Özet: İfade sonucu operand değerlendirme sırası, öncelik, ilişkisellik ve yan etkilere bağlı olabilir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 7.pdf

## Alt programlar, formal/actual parametre, function/procedure
- Özet: Alt programlar işlem soyutlaması sağlar; formal parametre başlıkta, actual parametre çağrıda verilir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 10.pdf

## Pass-by-value/reference/result/value-result/name
- Özet: Parametre geçiş modeli actual değerin kopya, adres, sonuç veya ifade olarak taşınmasını belirler.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 10.pdf, s.9-18

## Function parameter binding: shallow, deep, ad hoc
- Özet: Fonksiyon parametre olarak geçerken hangi referans ortamıyla çalışacağı kritik binding problemidir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 11.pdf, s.2-13

## Closure ve coroutine
- Özet: Closure fonksiyon + referans ortamıdır; coroutine durumunu koruyup resume ile devam eder.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 11.pdf, s.14-24

## Subprogram linkage, activation record, recursion
- Özet: Activation record parametre, return address, yerel değişken ve geçici değerleri tutan çağrı kaydıdır.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 12.pdf

## ADT, veri soyutlama, encapsulation
- Özet: ADT veri temsilini saklar, kullanıcıya tip adı ve işlem protokolü sunar.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 13.pdf

## OOP, inheritance, polymorphism, dynamic binding
- Özet: Dynamic binding override edilmiş metodun çalışma zamanı nesne tipine göre seçilmesidir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 14.pdf

## Concurrency, race condition, semaphore, monitor, message passing
- Özet: Eşzamanlılıkta birden çok kontrol akışı ilerler; paylaşılan veri yarış durumu doğurabilir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Konu 15.pdf

## Rust ownership, borrowing, lifetime, trait
- Özet: Rust ownership/borrowing kurallarıyla GC olmadan bellek güvenliği sağlamaya çalışır.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Rust proje raporu; 941478ad PDF varsa

## Go goroutine, channel, interface, GC
- Özet: Go sade syntax, hızlı derleme, GC, goroutine ve channel tabanlı concurrency ile öne çıkar.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Ders Sunumları.zip içindeki Go raporları

## Scala trait, object, case class, match
- Özet: Scala statik tipli, JVM tabanlı, OOP ve fonksiyonel yapıları birleştiren dildir.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Ders Sunumları.zip::Scala Dili-1.pdf

## Erlang process, atom, pattern matching
- Özet: Erlang izole süreçler ve mesajlaşma ile concurrent/fault-tolerant sistemlere odaklanır.
- Sınavda nasıl gelir: kod verilip değer/binding/scope/çalışma zamanı sorulabilir.
- Tuzak: benzer kavramları aynı sanmak veya dil syntax'ını yanlış okumak.
- Kaynak: Ders Sunumları.zip::Erlang proje raporu
