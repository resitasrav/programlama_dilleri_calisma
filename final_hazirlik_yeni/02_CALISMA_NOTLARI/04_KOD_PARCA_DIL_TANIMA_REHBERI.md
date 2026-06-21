# Kod Parçası Dil Tanıma Rehberi

## Rust
- Paradigma: Sistem programlama + güvenlik
- Tip sistemi: Statik/güçlü
- Bellek: Ownership, borrowing, lifetime; GC yok
- Concurrency: thread/channel + Send/Sync
- Ayırt edici syntax: `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`
- Sınavda dikkat: Compile-time borrow checker sınavın en güçlü ipucu.

## Go
- Paradigma: Sade imperative + concurrent
- Tip sistemi: Statik, yapısal interface
- Bellek: GC, escape analysis
- Concurrency: goroutine + channel
- Ayırt edici syntax: `package main`, `func`, `go f()`, `chan`, `<-`, `defer`
- Sınavda dikkat: Kalıtım yerine composition/interface; channel üzerinden iletişim.

## Scala
- Paradigma: OOP + functional
- Tip sistemi: Statik, tip çıkarımı
- Bellek: JVM GC
- Concurrency: Future/Akka/JVM threadleri
- Ayırt edici syntax: `val`, `var`, `trait`, `object`, `case class`, `match`
- Sınavda dikkat: Java static yerine object/companion object; trait ile mixin.

## Erlang
- Paradigma: Functional + actor concurrency
- Tip sistemi: Dinamik/güçlü
- Bellek: Process başına GC
- Concurrency: hafif process + message passing
- Ayırt edici syntax: `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match
- Sınavda dikkat: Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır.

## Java
- Paradigma: OOP ağırlıklı
- Tip sistemi: Statik/güçlü
- Bellek: GC, referanslar
- Concurrency: Thread, synchronized
- Ayırt edici syntax: `public static void main`, `class`, `extends`, `implements`
- Sınavda dikkat: Pointer yok; JVM/JIT ve dynamic dispatch.

## C
- Paradigma: Procedural
- Tip sistemi: Statik, güvenlik kaçışları var
- Bellek: Manuel malloc/free
- Concurrency: pthread kütüphanesi
- Ayırt edici syntax: `#include`, `*p`, `&x`, `struct`, `printf`
- Sınavda dikkat: Pointer ve manuel bellek.

## C++
- Paradigma: Çok paradigmalı
- Tip sistemi: Statik/güçlü ama esnek
- Bellek: RAII + smart/manual pointer
- Concurrency: std::thread
- Ayırt edici syntax: `template<typename T>`, `std::`, `virtual`, `cout`
- Sınavda dikkat: Overloading/template/virtual dispatch.

## Python
- Paradigma: Çok paradigmalı scripting
- Tip sistemi: Dinamik/güçlü
- Bellek: GC/ref counting
- Concurrency: asyncio/threading
- Ayırt edici syntax: `def`, girinti, `self`, list comprehension
- Sınavda dikkat: Girinti blok yapısı ve dinamik tip.

## JavaScript
- Paradigma: Prototype + functional etkiler
- Tip sistemi: Dinamik
- Bellek: GC
- Concurrency: event loop, promise
- Ayırt edici syntax: `const`, `let`, `=>`, `Promise`, `prototype`
- Sınavda dikkat: Closure ve async/event loop.

## Prolog
- Paradigma: Logic
- Tip sistemi: Terim/unification
- Bellek: Runtime yönetimi
- Concurrency: sınırlı
- Ayırt edici syntax: `fact(a).`, `rule(X) :- other(X).`
- Sınavda dikkat: Olgu, kural, hedef, unification.

## Lisp
- Paradigma: Functional/sembolik
- Tip sistemi: Dinamik
- Bellek: GC
- Concurrency: varyanta bağlı
- Ayırt edici syntax: `(+ 1 2)`, `car`, `cdr`, çok parantezli prefix
- Sınavda dikkat: Kod-veri benzerliği ve liste işleme.

## Haskell
- Paradigma: Pure functional
- Tip sistemi: Statik/güçlü, type inference
- Bellek: GC
- Concurrency: STM/async
- Ayırt edici syntax: `::`, `where`, pattern matching, lazy evaluation
- Sınavda dikkat: Saflık, lazy evaluation, typeclass.
