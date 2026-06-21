# Programlama Dilleri Karşılaştırma

| Dil | Paradigma | Tip sistemi | Bellek | Concurrency | Koddan tanıma | Sınav detayı |
|---|---|---|---|---|---|---|
| Rust | Sistem programlama + güvenlik | Statik/güçlü | Ownership, borrowing, lifetime; GC yok | thread/channel + Send/Sync | `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>` | Compile-time borrow checker sınavın en güçlü ipucu. |
| Go | Sade imperative + concurrent | Statik, yapısal interface | GC, escape analysis | goroutine + channel | `package main`, `func`, `go f()`, `chan`, `<-`, `defer` | Kalıtım yerine composition/interface; channel üzerinden iletişim. |
| Scala | OOP + functional | Statik, tip çıkarımı | JVM GC | Future/Akka/JVM threadleri | `val`, `var`, `trait`, `object`, `case class`, `match` | Java static yerine object/companion object; trait ile mixin. |
| Erlang | Functional + actor concurrency | Dinamik/güçlü | Process başına GC | hafif process + message passing | `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match | Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır. |
| Java | OOP ağırlıklı | Statik/güçlü | GC, referanslar | Thread, synchronized | `public static void main`, `class`, `extends`, `implements` | Pointer yok; JVM/JIT ve dynamic dispatch. |
| C | Procedural | Statik, güvenlik kaçışları var | Manuel malloc/free | pthread kütüphanesi | `#include`, `*p`, `&x`, `struct`, `printf` | Pointer ve manuel bellek. |
| C++ | Çok paradigmalı | Statik/güçlü ama esnek | RAII + smart/manual pointer | std::thread | `template<typename T>`, `std::`, `virtual`, `cout` | Overloading/template/virtual dispatch. |
| Python | Çok paradigmalı scripting | Dinamik/güçlü | GC/ref counting | asyncio/threading | `def`, girinti, `self`, list comprehension | Girinti blok yapısı ve dinamik tip. |
| JavaScript | Prototype + functional etkiler | Dinamik | GC | event loop, promise | `const`, `let`, `=>`, `Promise`, `prototype` | Closure ve async/event loop. |
| Prolog | Logic | Terim/unification | Runtime yönetimi | sınırlı | `fact(a).`, `rule(X) :- other(X).` | Olgu, kural, hedef, unification. |
| Lisp | Functional/sembolik | Dinamik | GC | varyanta bağlı | `(+ 1 2)`, `car`, `cdr`, çok parantezli prefix | Kod-veri benzerliği ve liste işleme. |
| Haskell | Pure functional | Statik/güçlü, type inference | GC | STM/async | `::`, `where`, pattern matching, lazy evaluation | Saflık, lazy evaluation, typeclass. |
