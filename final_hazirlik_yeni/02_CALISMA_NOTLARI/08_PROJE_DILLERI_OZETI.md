# Proje Dilleri Ozeti

Kaynak: Ders Sunumlari.zip icindeki proje raporlari ve genel programlama dilleri bilgisiyle guclendirilen sinav notlari.

## Rust
- Ortaya cikis amaci: Sistem programlama + güvenlik.
- Tasarim felsefesi: Dilin temel hedefi okunabilirlik, guvenlik, concurrency veya ifade gucu gibi ayirt edici bir problemi cozmektir.
- Paradigma: Sistem programlama + güvenlik.
- Tip sistemi: Statik/güçlü.
- Bellek yonetimi: Ownership, borrowing, lifetime; GC yok.
- Concurrency yaklasimi: thread/channel + Send/Sync.
- Syntax ayirt edicileri: `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`.
- Avantajlari: Sinavda dilin tasarim hedefiyle birlikte yazilmalidir.
- Dezavantajlari: Ogrenme egrisi, runtime maliyeti, ekosistem veya model karmasikligi dile gore tartisilabilir.
- Diger dillerden farki: Compile-time borrow checker sınavın en güçlü ipucu.
- Finalde nasil sorulabilir?: Kod parcasi verilip dil tanima, concurrency modeli veya bellek yonetimi sorulabilir.
- Acik uclu soru ornegi: Rust dilinin concurrency ve tip/bellek modeli sinavdaki klasik kavramlarla nasil baglanir?
- Test soru ornegi: Rust kodunu tanimak icin en guclu ipucu hangisidir?
- Kaynak: Proje raporlari; eksik ayrinti varsa Genel bilgi.

## Go
- Ortaya cikis amaci: Sade imperative + concurrent.
- Tasarim felsefesi: Dilin temel hedefi okunabilirlik, guvenlik, concurrency veya ifade gucu gibi ayirt edici bir problemi cozmektir.
- Paradigma: Sade imperative + concurrent.
- Tip sistemi: Statik, yapısal interface.
- Bellek yonetimi: GC, escape analysis.
- Concurrency yaklasimi: goroutine + channel.
- Syntax ayirt edicileri: `package main`, `func`, `go f()`, `chan`, `<-`, `defer`.
- Avantajlari: Sinavda dilin tasarim hedefiyle birlikte yazilmalidir.
- Dezavantajlari: Ogrenme egrisi, runtime maliyeti, ekosistem veya model karmasikligi dile gore tartisilabilir.
- Diger dillerden farki: Kalıtım yerine composition/interface; channel üzerinden iletişim.
- Finalde nasil sorulabilir?: Kod parcasi verilip dil tanima, concurrency modeli veya bellek yonetimi sorulabilir.
- Acik uclu soru ornegi: Go dilinin concurrency ve tip/bellek modeli sinavdaki klasik kavramlarla nasil baglanir?
- Test soru ornegi: Go kodunu tanimak icin en guclu ipucu hangisidir?
- Kaynak: Proje raporlari; eksik ayrinti varsa Genel bilgi.

## Scala
- Ortaya cikis amaci: OOP + functional.
- Tasarim felsefesi: Dilin temel hedefi okunabilirlik, guvenlik, concurrency veya ifade gucu gibi ayirt edici bir problemi cozmektir.
- Paradigma: OOP + functional.
- Tip sistemi: Statik, tip çıkarımı.
- Bellek yonetimi: JVM GC.
- Concurrency yaklasimi: Future/Akka/JVM threadleri.
- Syntax ayirt edicileri: `val`, `var`, `trait`, `object`, `case class`, `match`.
- Avantajlari: Sinavda dilin tasarim hedefiyle birlikte yazilmalidir.
- Dezavantajlari: Ogrenme egrisi, runtime maliyeti, ekosistem veya model karmasikligi dile gore tartisilabilir.
- Diger dillerden farki: Java static yerine object/companion object; trait ile mixin.
- Finalde nasil sorulabilir?: Kod parcasi verilip dil tanima, concurrency modeli veya bellek yonetimi sorulabilir.
- Acik uclu soru ornegi: Scala dilinin concurrency ve tip/bellek modeli sinavdaki klasik kavramlarla nasil baglanir?
- Test soru ornegi: Scala kodunu tanimak icin en guclu ipucu hangisidir?
- Kaynak: Proje raporlari; eksik ayrinti varsa Genel bilgi.

## Erlang
- Ortaya cikis amaci: Functional + actor concurrency.
- Tasarim felsefesi: Dilin temel hedefi okunabilirlik, guvenlik, concurrency veya ifade gucu gibi ayirt edici bir problemi cozmektir.
- Paradigma: Functional + actor concurrency.
- Tip sistemi: Dinamik/güçlü.
- Bellek yonetimi: Process başına GC.
- Concurrency yaklasimi: hafif process + message passing.
- Syntax ayirt edicileri: `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match.
- Avantajlari: Sinavda dilin tasarim hedefiyle birlikte yazilmalidir.
- Dezavantajlari: Ogrenme egrisi, runtime maliyeti, ekosistem veya model karmasikligi dile gore tartisilabilir.
- Diger dillerden farki: Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır.
- Finalde nasil sorulabilir?: Kod parcasi verilip dil tanima, concurrency modeli veya bellek yonetimi sorulabilir.
- Acik uclu soru ornegi: Erlang dilinin concurrency ve tip/bellek modeli sinavdaki klasik kavramlarla nasil baglanir?
- Test soru ornegi: Erlang kodunu tanimak icin en guclu ipucu hangisidir?
- Kaynak: Proje raporlari; eksik ayrinti varsa Genel bilgi.
