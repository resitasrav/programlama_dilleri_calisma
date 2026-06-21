const QUESTIONS = [
  {
    "id": "TST-001",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Compile-time / run-time"
    ],
    "topic": "Rust ownership",
    "question": "let s2 = s1; sonrasında s1 neden kullanılamaz?",
    "options": [
      {
        "text": "GC iki referansı takip eder, hata olmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust'ın temel farkı GC değil ownership modelidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız runtime uyarısıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Borrow/move hataları derleme zamanında yakalanır. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Sadece integer tiplerinde move olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Heap verisi taşıyan tiplerde move özellikle önemlidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Konu: Rust ownership. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap D. Mantık: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-002",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Type system"
    ],
    "topic": "Rust borrowing",
    "question": "İki `&mut` referans neden yasaktır?",
    "options": [
      {
        "text": "Çünkü Rust zayıf tipli dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust statik/güçlü tipli kabul edilir. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız Go channel kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu Rust borrowing kuralıdır. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Konu: Rust borrowing. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "Çünkü `mut` hiç kullanılamaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `mut` kullanılabilir; sorun aynı anda iki mutable borrow'dur. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap C. Mantık: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-003",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Dil tanıma"
    ],
    "topic": "Go channel",
    "question": "`go worker(ch); x := <-ch` ne anlatır?",
    "options": [
      {
        "text": "`go` generic tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `go` goroutine başlatır. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Konu: Go channel. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Class inheritance başlatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da class/extends yoktur. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Channel sıradan array'dir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Channel veri aktarımı ve senkronizasyon sağlar. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap B. Mantık: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "ch := make(chan int)\ngo worker(ch)\nx := <-ch"
  },
  {
    "id": "TST-004",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Proje konusu",
      "Type system",
      "Nesne yönelimli programlama"
    ],
    "topic": "Go interface",
    "question": "Go interface için doğru ifade nedir?",
    "options": [
      {
        "text": "Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Konu: Go interface. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Java gibi extends zorunludur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da extends/class hiyerarşisi yoktur. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Interface channel buffer boyutudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Interface tip soyutlamadır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Tip güvenliğini tamamen kapatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Statik tip sistemi içinde çalışır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap A. Mantık: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-005",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Nesne yönelimli programlama"
    ],
    "topic": "Scala trait/object",
    "question": "`trait` ve `object` için doğru yorum nedir?",
    "options": [
      {
        "text": "trait pointer türüdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala trait pointer değildir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "object Java Object sınıfıyla aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala object singleton yapıdır. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala OOP desteklemez.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala güçlü OOP desteğine sahiptir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "`trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Konu: Scala trait/object. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "trait Speaker { def speak(): String }\nobject Main { def main(args: Array[String]) = println(\"ok\") }"
  },
  {
    "id": "TST-006",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Fonksiyonel programlama"
    ],
    "topic": "Scala pattern matching",
    "question": "`case class` ve `match` birlikte neyi gösterir?",
    "options": [
      {
        "text": "Erlang atom tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang nokta/receive/atom syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "C++ template'tir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: C++ template syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala'da veri modeli ve pattern matching kullanımını gösterir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Scala'da veri modeli ve pattern matching kullanımını gösterir. Konu: Scala pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "Go channel okumasıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go channel `<-` ile ayırt edilir. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Scala'da veri modeli ve pattern matching kullanımını gösterir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-007",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Concurrency"
    ],
    "topic": "Erlang pattern matching",
    "question": "Erlang'da `X = 3, X = 4.` neden sorunludur?",
    "options": [
      {
        "text": "Bu Rust borrow örneğidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust syntax'ı farklıdır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "`=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Konu: Erlang pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "X önce 3 sonra 4 olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang değişkenleri mutable atama gibi davranmaz. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Bu Go kısa değişken bildirimidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go `:=` kullanır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap B. Mantık: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "TST-008",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Fonksiyonel programlama"
    ],
    "topic": "Erlang process",
    "question": "Erlang concurrency yaklaşımı nedir?",
    "options": [
      {
        "text": "İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Konu: Erlang process. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "Global belleği kilitsiz paylaşır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu race condition riskidir. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "Class inheritance ile concurrency kurar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang OOP inheritance'a dayanmaz. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Concurrency desteği yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang özellikle concurrent sistemler için tasarlanmıştır. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap A. Mantık: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-009",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value-result",
    "question": "`p(x,x)` value-result modelinde neden tuzaklıdır?",
    "options": [
      {
        "text": "Hiç actual okunmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Başta kopyalama yapılır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Reference ile tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Reference anlık aliasing, value-result dönüş kopyasıdır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece functional dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Klasik parametre geçiş modelidir. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Konu: Pass-by-value-result. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-010",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-name",
    "question": "Pass-by-name nasıl çalışır?",
    "options": [
      {
        "text": "Sadece adres gönderilir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-reference olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Dönüşte kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu value-result ailesidir. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Konu: Pass-by-name. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "Başta bir kez kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-value olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-011",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "Activation record içinde ne bulunur?",
    "options": [
      {
        "text": "Yalnız inheritance ağacı.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Inheritance OOP konusudur. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "A"
      },
      {
        "text": "Parametreler, return address, yerel değişkenler ve geçici değerler bulunur.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Konu: Activation record. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 12.pdf.",
        "key": "B"
      },
      {
        "text": "Yalnız token listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Token listesi lexical analizdir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "C"
      },
      {
        "text": "Yalnız heap nesneleri listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: AR çağrıya özgü stack/linkage bilgisidir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 12.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-012",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure neden lifetime uzatır?",
    "options": [
      {
        "text": "İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Konu: Closure lifetime. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her zaman global değişken kullanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Closure lexical ortam yakalar. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Scope ve lifetime aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope görünürlük, lifetime varlık süresidir. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Coroutine ile aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine duraklama/devam mekanizmasıdır. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-013",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Kod yorumlama"
    ],
    "topic": "Coroutine",
    "question": "Coroutine'i subroutine'den ayıran nedir?",
    "options": [
      {
        "text": "Her zaman prosedürdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Prosedür/fonksiyon ayrımı değildir. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her çağrıda durumu sıfırlar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine durum korur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece type checking yapar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu tip sistemi konusudur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Durumunu koruyup durakladığı yerden resume ile devam edebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Konu: Coroutine. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-014",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Type system"
    ],
    "topic": "ADT",
    "question": "Stack ADT için doğru yorum nedir?",
    "options": [
      {
        "text": "Encapsulation'ı kaldırır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Tersine temsil gizler. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "A"
      },
      {
        "text": "Sadece Prolog kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT genel veri soyutlamadır. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "B"
      },
      {
        "text": "Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Konu: ADT. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 13.pdf.",
        "key": "C"
      },
      {
        "text": "ADT ham byte dizisidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT davranış ve işlem protokolüdür. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 13.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-015",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Scope / binding"
    ],
    "topic": "Dynamic binding",
    "question": "Overloading ile overriding/dynamic binding farkı nedir?",
    "options": [
      {
        "text": "Yalnız Prolog'da görülür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: OOP dispatch konusudur. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "A"
      },
      {
        "text": "Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Konu: Dynamic binding. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 14.pdf.",
        "key": "B"
      },
      {
        "text": "Tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: İsim/imza çoklama ile override farklıdır. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "C"
      },
      {
        "text": "Dynamic binding compile-time kesinleşir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çalışma zamanı seçimini vurgular. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 14.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-016",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Kod yorumlama"
    ],
    "topic": "Semaphore",
    "question": "Semaphore için doğru ifade nedir?",
    "options": [
      {
        "text": "`wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Konu: Semaphore. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 15.pdf.",
        "key": "A"
      },
      {
        "text": "Token tablosudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Runtime senkronizasyon yapısıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "B"
      },
      {
        "text": "Deadlock imkansızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yanlış kullanım deadlock yaratabilir. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "C"
      },
      {
        "text": "Inheritance aracıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Concurrency aracıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 15.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-017",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static vs dynamic scope",
    "question": "Static scope ve dynamic scope farkı nedir?",
    "options": [
      {
        "text": "Static heap, dynamic stack demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope bellek bölgesi değildir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "A"
      },
      {
        "text": "Dynamic her zaman daha okunabilirdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çağrı zinciri öngörülebilirliği azaltabilir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "B"
      },
      {
        "text": "Static sadece yorumlanan dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Derlenen dillerde de yaygındır. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "C"
      },
      {
        "text": "Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Konu: Static vs dynamic scope. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 5.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 5.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-018",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Kod yorumlama",
      "Klasik soru"
    ],
    "topic": "Short-circuit",
    "question": "`a != 0 && f()` ifadesinde a=0 ise ne olur?",
    "options": [
      {
        "text": "Yalnız aritmetikte olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Mantıksal operatörlerde tipiktir. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Syntax konusudur, runtime etkisi yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yan etki runtime davranışıdır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Konu: Short-circuit. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "f önce çağrılır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sol taraf false ise sağ taraf atlanır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 7.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-019",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Vize temeli",
      "Compile-time / run-time",
      "Paradigmalar"
    ],
    "topic": "Halting problem",
    "question": "Halting problemi compiler için ne gösterir?",
    "options": [
      {
        "text": "JIT halting'i çözer.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Gerçekleştirim modeli kararsızlığı çözmez. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "A"
      },
      {
        "text": "Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Konu: Halting problem. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "B"
      },
      {
        "text": "Compiler tüm sonsuz döngüleri yakalar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Halting problemi bunu reddeder. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "C"
      },
      {
        "text": "Syntax hataları karar verilemezdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Syntax genelde grammar ile karar verilebilir. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 2.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-020",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Type system",
      "Compile-time / run-time"
    ],
    "topic": "Type checking",
    "question": "Strong typing ile dynamic typing ilişkisi nedir?",
    "options": [
      {
        "text": "Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Konu: Type checking. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Dinamik her dil zayıftır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Python dinamik ama güçlü tipe yakındır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Statik her dil hatasızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Cast/union gibi kaçışlar olabilir. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "Strong typing hız demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Asıl konu tür hatalarını yakalamaktır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 7.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-021",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Compile-time / run-time"
    ],
    "topic": "Rust ownership",
    "question": "let s2 = s1; sonrasında s1 neden kullanılamaz? - varyant 2",
    "options": [
      {
        "text": "GC iki referansı takip eder, hata olmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust'ın temel farkı GC değil ownership modelidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız runtime uyarısıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Borrow/move hataları derleme zamanında yakalanır. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Sadece integer tiplerinde move olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Heap verisi taşıyan tiplerde move özellikle önemlidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Konu: Rust ownership. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap D. Mantık: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-022",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Type system"
    ],
    "topic": "Rust borrowing",
    "question": "İki `&mut` referans neden yasaktır? - varyant 2",
    "options": [
      {
        "text": "Çünkü Rust zayıf tipli dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust statik/güçlü tipli kabul edilir. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız Go channel kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu Rust borrowing kuralıdır. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Konu: Rust borrowing. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "Çünkü `mut` hiç kullanılamaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `mut` kullanılabilir; sorun aynı anda iki mutable borrow'dur. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap C. Mantık: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-023",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Dil tanıma"
    ],
    "topic": "Go channel",
    "question": "`go worker(ch); x := <-ch` ne anlatır? - varyant 2",
    "options": [
      {
        "text": "`go` generic tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `go` goroutine başlatır. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Konu: Go channel. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Class inheritance başlatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da class/extends yoktur. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Channel sıradan array'dir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Channel veri aktarımı ve senkronizasyon sağlar. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap B. Mantık: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "ch := make(chan int)\ngo worker(ch)\nx := <-ch"
  },
  {
    "id": "TST-024",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Proje konusu",
      "Type system",
      "Nesne yönelimli programlama"
    ],
    "topic": "Go interface",
    "question": "Go interface için doğru ifade nedir? - varyant 2",
    "options": [
      {
        "text": "Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Konu: Go interface. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Java gibi extends zorunludur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da extends/class hiyerarşisi yoktur. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Interface channel buffer boyutudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Interface tip soyutlamadır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Tip güvenliğini tamamen kapatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Statik tip sistemi içinde çalışır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap A. Mantık: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-025",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Nesne yönelimli programlama"
    ],
    "topic": "Scala trait/object",
    "question": "`trait` ve `object` için doğru yorum nedir? - varyant 2",
    "options": [
      {
        "text": "trait pointer türüdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala trait pointer değildir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "object Java Object sınıfıyla aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala object singleton yapıdır. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala OOP desteklemez.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala güçlü OOP desteğine sahiptir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "`trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Konu: Scala trait/object. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "trait Speaker { def speak(): String }\nobject Main { def main(args: Array[String]) = println(\"ok\") }"
  },
  {
    "id": "TST-026",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Fonksiyonel programlama"
    ],
    "topic": "Scala pattern matching",
    "question": "`case class` ve `match` birlikte neyi gösterir? - varyant 2",
    "options": [
      {
        "text": "Erlang atom tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang nokta/receive/atom syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "C++ template'tir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: C++ template syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala'da veri modeli ve pattern matching kullanımını gösterir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Scala'da veri modeli ve pattern matching kullanımını gösterir. Konu: Scala pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "Go channel okumasıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go channel `<-` ile ayırt edilir. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Scala'da veri modeli ve pattern matching kullanımını gösterir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-027",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Concurrency"
    ],
    "topic": "Erlang pattern matching",
    "question": "Erlang'da `X = 3, X = 4.` neden sorunludur? - varyant 2",
    "options": [
      {
        "text": "Bu Rust borrow örneğidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust syntax'ı farklıdır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "`=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Konu: Erlang pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "X önce 3 sonra 4 olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang değişkenleri mutable atama gibi davranmaz. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Bu Go kısa değişken bildirimidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go `:=` kullanır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap B. Mantık: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "TST-028",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Fonksiyonel programlama"
    ],
    "topic": "Erlang process",
    "question": "Erlang concurrency yaklaşımı nedir? - varyant 2",
    "options": [
      {
        "text": "İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Konu: Erlang process. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "Global belleği kilitsiz paylaşır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu race condition riskidir. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "Class inheritance ile concurrency kurar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang OOP inheritance'a dayanmaz. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Concurrency desteği yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang özellikle concurrent sistemler için tasarlanmıştır. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap A. Mantık: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-029",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value-result",
    "question": "`p(x,x)` value-result modelinde neden tuzaklıdır? - varyant 2",
    "options": [
      {
        "text": "Hiç actual okunmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Başta kopyalama yapılır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Reference ile tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Reference anlık aliasing, value-result dönüş kopyasıdır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece functional dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Klasik parametre geçiş modelidir. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Konu: Pass-by-value-result. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-030",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-name",
    "question": "Pass-by-name nasıl çalışır? - varyant 2",
    "options": [
      {
        "text": "Sadece adres gönderilir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-reference olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Dönüşte kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu value-result ailesidir. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Konu: Pass-by-name. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "Başta bir kez kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-value olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-031",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "Activation record içinde ne bulunur? - varyant 2",
    "options": [
      {
        "text": "Yalnız inheritance ağacı.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Inheritance OOP konusudur. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "A"
      },
      {
        "text": "Parametreler, return address, yerel değişkenler ve geçici değerler bulunur.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Konu: Activation record. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 12.pdf.",
        "key": "B"
      },
      {
        "text": "Yalnız token listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Token listesi lexical analizdir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "C"
      },
      {
        "text": "Yalnız heap nesneleri listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: AR çağrıya özgü stack/linkage bilgisidir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 12.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-032",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure neden lifetime uzatır? - varyant 2",
    "options": [
      {
        "text": "İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Konu: Closure lifetime. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her zaman global değişken kullanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Closure lexical ortam yakalar. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Scope ve lifetime aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope görünürlük, lifetime varlık süresidir. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Coroutine ile aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine duraklama/devam mekanizmasıdır. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-033",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Kod yorumlama"
    ],
    "topic": "Coroutine",
    "question": "Coroutine'i subroutine'den ayıran nedir? - varyant 2",
    "options": [
      {
        "text": "Her zaman prosedürdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Prosedür/fonksiyon ayrımı değildir. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her çağrıda durumu sıfırlar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine durum korur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece type checking yapar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu tip sistemi konusudur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Durumunu koruyup durakladığı yerden resume ile devam edebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Konu: Coroutine. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-034",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Type system"
    ],
    "topic": "ADT",
    "question": "Stack ADT için doğru yorum nedir? - varyant 2",
    "options": [
      {
        "text": "Encapsulation'ı kaldırır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Tersine temsil gizler. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "A"
      },
      {
        "text": "Sadece Prolog kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT genel veri soyutlamadır. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "B"
      },
      {
        "text": "Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Konu: ADT. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 13.pdf.",
        "key": "C"
      },
      {
        "text": "ADT ham byte dizisidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT davranış ve işlem protokolüdür. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 13.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-035",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Scope / binding"
    ],
    "topic": "Dynamic binding",
    "question": "Overloading ile overriding/dynamic binding farkı nedir? - varyant 2",
    "options": [
      {
        "text": "Yalnız Prolog'da görülür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: OOP dispatch konusudur. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "A"
      },
      {
        "text": "Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Konu: Dynamic binding. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 14.pdf.",
        "key": "B"
      },
      {
        "text": "Tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: İsim/imza çoklama ile override farklıdır. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "C"
      },
      {
        "text": "Dynamic binding compile-time kesinleşir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çalışma zamanı seçimini vurgular. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 14.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-036",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Kod yorumlama"
    ],
    "topic": "Semaphore",
    "question": "Semaphore için doğru ifade nedir? - varyant 2",
    "options": [
      {
        "text": "`wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Konu: Semaphore. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 15.pdf.",
        "key": "A"
      },
      {
        "text": "Token tablosudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Runtime senkronizasyon yapısıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "B"
      },
      {
        "text": "Deadlock imkansızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yanlış kullanım deadlock yaratabilir. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "C"
      },
      {
        "text": "Inheritance aracıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Concurrency aracıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 15.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-037",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static vs dynamic scope",
    "question": "Static scope ve dynamic scope farkı nedir? - varyant 2",
    "options": [
      {
        "text": "Static heap, dynamic stack demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope bellek bölgesi değildir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "A"
      },
      {
        "text": "Dynamic her zaman daha okunabilirdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çağrı zinciri öngörülebilirliği azaltabilir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "B"
      },
      {
        "text": "Static sadece yorumlanan dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Derlenen dillerde de yaygındır. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "C"
      },
      {
        "text": "Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Konu: Static vs dynamic scope. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 5.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 5.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-038",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Kod yorumlama",
      "Klasik soru"
    ],
    "topic": "Short-circuit",
    "question": "`a != 0 && f()` ifadesinde a=0 ise ne olur? - varyant 2",
    "options": [
      {
        "text": "Yalnız aritmetikte olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Mantıksal operatörlerde tipiktir. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Syntax konusudur, runtime etkisi yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yan etki runtime davranışıdır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Konu: Short-circuit. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "f önce çağrılır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sol taraf false ise sağ taraf atlanır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 7.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-039",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Vize temeli",
      "Compile-time / run-time",
      "Paradigmalar"
    ],
    "topic": "Halting problem",
    "question": "Halting problemi compiler için ne gösterir? - varyant 2",
    "options": [
      {
        "text": "JIT halting'i çözer.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Gerçekleştirim modeli kararsızlığı çözmez. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "A"
      },
      {
        "text": "Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Konu: Halting problem. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "B"
      },
      {
        "text": "Compiler tüm sonsuz döngüleri yakalar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Halting problemi bunu reddeder. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "C"
      },
      {
        "text": "Syntax hataları karar verilemezdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Syntax genelde grammar ile karar verilebilir. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 2.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-040",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Type system",
      "Compile-time / run-time"
    ],
    "topic": "Type checking",
    "question": "Strong typing ile dynamic typing ilişkisi nedir? - varyant 2",
    "options": [
      {
        "text": "Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Konu: Type checking. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Dinamik her dil zayıftır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Python dinamik ama güçlü tipe yakındır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Statik her dil hatasızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Cast/union gibi kaçışlar olabilir. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "Strong typing hız demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Asıl konu tür hatalarını yakalamaktır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 7.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-041",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Compile-time / run-time"
    ],
    "topic": "Rust ownership",
    "question": "let s2 = s1; sonrasında s1 neden kullanılamaz? - varyant 3",
    "options": [
      {
        "text": "GC iki referansı takip eder, hata olmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust'ın temel farkı GC değil ownership modelidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız runtime uyarısıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Borrow/move hataları derleme zamanında yakalanır. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Sadece integer tiplerinde move olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Heap verisi taşıyan tiplerde move özellikle önemlidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Konu: Rust ownership. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap D. Mantık: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-042",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Type system"
    ],
    "topic": "Rust borrowing",
    "question": "İki `&mut` referans neden yasaktır? - varyant 3",
    "options": [
      {
        "text": "Çünkü Rust zayıf tipli dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust statik/güçlü tipli kabul edilir. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız Go channel kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu Rust borrowing kuralıdır. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Konu: Rust borrowing. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "Çünkü `mut` hiç kullanılamaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `mut` kullanılabilir; sorun aynı anda iki mutable borrow'dur. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap C. Mantık: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-043",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Dil tanıma"
    ],
    "topic": "Go channel",
    "question": "`go worker(ch); x := <-ch` ne anlatır? - varyant 3",
    "options": [
      {
        "text": "`go` generic tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `go` goroutine başlatır. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Konu: Go channel. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Class inheritance başlatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da class/extends yoktur. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Channel sıradan array'dir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Channel veri aktarımı ve senkronizasyon sağlar. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap B. Mantık: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "ch := make(chan int)\ngo worker(ch)\nx := <-ch"
  },
  {
    "id": "TST-044",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Proje konusu",
      "Type system",
      "Nesne yönelimli programlama"
    ],
    "topic": "Go interface",
    "question": "Go interface için doğru ifade nedir? - varyant 3",
    "options": [
      {
        "text": "Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Konu: Go interface. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Java gibi extends zorunludur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da extends/class hiyerarşisi yoktur. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Interface channel buffer boyutudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Interface tip soyutlamadır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Tip güvenliğini tamamen kapatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Statik tip sistemi içinde çalışır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap A. Mantık: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-045",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Nesne yönelimli programlama"
    ],
    "topic": "Scala trait/object",
    "question": "`trait` ve `object` için doğru yorum nedir? - varyant 3",
    "options": [
      {
        "text": "trait pointer türüdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala trait pointer değildir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "object Java Object sınıfıyla aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala object singleton yapıdır. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala OOP desteklemez.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala güçlü OOP desteğine sahiptir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "`trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Konu: Scala trait/object. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "trait Speaker { def speak(): String }\nobject Main { def main(args: Array[String]) = println(\"ok\") }"
  },
  {
    "id": "TST-046",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Fonksiyonel programlama"
    ],
    "topic": "Scala pattern matching",
    "question": "`case class` ve `match` birlikte neyi gösterir? - varyant 3",
    "options": [
      {
        "text": "Erlang atom tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang nokta/receive/atom syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "C++ template'tir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: C++ template syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala'da veri modeli ve pattern matching kullanımını gösterir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Scala'da veri modeli ve pattern matching kullanımını gösterir. Konu: Scala pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "Go channel okumasıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go channel `<-` ile ayırt edilir. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Scala'da veri modeli ve pattern matching kullanımını gösterir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-047",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Concurrency"
    ],
    "topic": "Erlang pattern matching",
    "question": "Erlang'da `X = 3, X = 4.` neden sorunludur? - varyant 3",
    "options": [
      {
        "text": "Bu Rust borrow örneğidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust syntax'ı farklıdır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "`=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Konu: Erlang pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "X önce 3 sonra 4 olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang değişkenleri mutable atama gibi davranmaz. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Bu Go kısa değişken bildirimidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go `:=` kullanır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap B. Mantık: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "TST-048",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Fonksiyonel programlama"
    ],
    "topic": "Erlang process",
    "question": "Erlang concurrency yaklaşımı nedir? - varyant 3",
    "options": [
      {
        "text": "İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Konu: Erlang process. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "Global belleği kilitsiz paylaşır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu race condition riskidir. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "Class inheritance ile concurrency kurar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang OOP inheritance'a dayanmaz. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Concurrency desteği yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang özellikle concurrent sistemler için tasarlanmıştır. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap A. Mantık: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-049",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value-result",
    "question": "`p(x,x)` value-result modelinde neden tuzaklıdır? - varyant 3",
    "options": [
      {
        "text": "Hiç actual okunmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Başta kopyalama yapılır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Reference ile tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Reference anlık aliasing, value-result dönüş kopyasıdır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece functional dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Klasik parametre geçiş modelidir. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Konu: Pass-by-value-result. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-050",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-name",
    "question": "Pass-by-name nasıl çalışır? - varyant 3",
    "options": [
      {
        "text": "Sadece adres gönderilir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-reference olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Dönüşte kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu value-result ailesidir. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Konu: Pass-by-name. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "Başta bir kez kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-value olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-051",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "Activation record içinde ne bulunur? - varyant 3",
    "options": [
      {
        "text": "Yalnız inheritance ağacı.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Inheritance OOP konusudur. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "A"
      },
      {
        "text": "Parametreler, return address, yerel değişkenler ve geçici değerler bulunur.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Konu: Activation record. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 12.pdf.",
        "key": "B"
      },
      {
        "text": "Yalnız token listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Token listesi lexical analizdir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "C"
      },
      {
        "text": "Yalnız heap nesneleri listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: AR çağrıya özgü stack/linkage bilgisidir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 12.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-052",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure neden lifetime uzatır? - varyant 3",
    "options": [
      {
        "text": "İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Konu: Closure lifetime. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her zaman global değişken kullanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Closure lexical ortam yakalar. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Scope ve lifetime aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope görünürlük, lifetime varlık süresidir. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Coroutine ile aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine duraklama/devam mekanizmasıdır. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-053",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Kod yorumlama"
    ],
    "topic": "Coroutine",
    "question": "Coroutine'i subroutine'den ayıran nedir? - varyant 3",
    "options": [
      {
        "text": "Her zaman prosedürdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Prosedür/fonksiyon ayrımı değildir. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her çağrıda durumu sıfırlar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine durum korur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece type checking yapar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu tip sistemi konusudur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Durumunu koruyup durakladığı yerden resume ile devam edebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Konu: Coroutine. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-054",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Type system"
    ],
    "topic": "ADT",
    "question": "Stack ADT için doğru yorum nedir? - varyant 3",
    "options": [
      {
        "text": "Encapsulation'ı kaldırır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Tersine temsil gizler. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "A"
      },
      {
        "text": "Sadece Prolog kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT genel veri soyutlamadır. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "B"
      },
      {
        "text": "Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Konu: ADT. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 13.pdf.",
        "key": "C"
      },
      {
        "text": "ADT ham byte dizisidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT davranış ve işlem protokolüdür. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 13.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-055",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Scope / binding"
    ],
    "topic": "Dynamic binding",
    "question": "Overloading ile overriding/dynamic binding farkı nedir? - varyant 3",
    "options": [
      {
        "text": "Yalnız Prolog'da görülür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: OOP dispatch konusudur. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "A"
      },
      {
        "text": "Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Konu: Dynamic binding. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 14.pdf.",
        "key": "B"
      },
      {
        "text": "Tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: İsim/imza çoklama ile override farklıdır. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "C"
      },
      {
        "text": "Dynamic binding compile-time kesinleşir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çalışma zamanı seçimini vurgular. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 14.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-056",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Kod yorumlama"
    ],
    "topic": "Semaphore",
    "question": "Semaphore için doğru ifade nedir? - varyant 3",
    "options": [
      {
        "text": "`wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Konu: Semaphore. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 15.pdf.",
        "key": "A"
      },
      {
        "text": "Token tablosudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Runtime senkronizasyon yapısıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "B"
      },
      {
        "text": "Deadlock imkansızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yanlış kullanım deadlock yaratabilir. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "C"
      },
      {
        "text": "Inheritance aracıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Concurrency aracıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 15.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-057",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static vs dynamic scope",
    "question": "Static scope ve dynamic scope farkı nedir? - varyant 3",
    "options": [
      {
        "text": "Static heap, dynamic stack demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope bellek bölgesi değildir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "A"
      },
      {
        "text": "Dynamic her zaman daha okunabilirdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çağrı zinciri öngörülebilirliği azaltabilir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "B"
      },
      {
        "text": "Static sadece yorumlanan dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Derlenen dillerde de yaygındır. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "C"
      },
      {
        "text": "Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Konu: Static vs dynamic scope. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 5.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 5.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-058",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Kod yorumlama",
      "Klasik soru"
    ],
    "topic": "Short-circuit",
    "question": "`a != 0 && f()` ifadesinde a=0 ise ne olur? - varyant 3",
    "options": [
      {
        "text": "Yalnız aritmetikte olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Mantıksal operatörlerde tipiktir. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Syntax konusudur, runtime etkisi yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yan etki runtime davranışıdır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Konu: Short-circuit. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "f önce çağrılır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sol taraf false ise sağ taraf atlanır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 7.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-059",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Vize temeli",
      "Compile-time / run-time",
      "Paradigmalar"
    ],
    "topic": "Halting problem",
    "question": "Halting problemi compiler için ne gösterir? - varyant 3",
    "options": [
      {
        "text": "JIT halting'i çözer.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Gerçekleştirim modeli kararsızlığı çözmez. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "A"
      },
      {
        "text": "Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Konu: Halting problem. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "B"
      },
      {
        "text": "Compiler tüm sonsuz döngüleri yakalar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Halting problemi bunu reddeder. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "C"
      },
      {
        "text": "Syntax hataları karar verilemezdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Syntax genelde grammar ile karar verilebilir. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 2.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-060",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Type system",
      "Compile-time / run-time"
    ],
    "topic": "Type checking",
    "question": "Strong typing ile dynamic typing ilişkisi nedir? - varyant 3",
    "options": [
      {
        "text": "Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Konu: Type checking. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Dinamik her dil zayıftır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Python dinamik ama güçlü tipe yakındır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Statik her dil hatasızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Cast/union gibi kaçışlar olabilir. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "Strong typing hız demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Asıl konu tür hatalarını yakalamaktır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 7.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-061",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Compile-time / run-time"
    ],
    "topic": "Rust ownership",
    "question": "let s2 = s1; sonrasında s1 neden kullanılamaz? - varyant 4",
    "options": [
      {
        "text": "GC iki referansı takip eder, hata olmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust'ın temel farkı GC değil ownership modelidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız runtime uyarısıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Borrow/move hataları derleme zamanında yakalanır. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Sadece integer tiplerinde move olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Heap verisi taşıyan tiplerde move özellikle önemlidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Konu: Rust ownership. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap D. Mantık: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-062",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Type system"
    ],
    "topic": "Rust borrowing",
    "question": "İki `&mut` referans neden yasaktır? - varyant 4",
    "options": [
      {
        "text": "Çünkü Rust zayıf tipli dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust statik/güçlü tipli kabul edilir. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız Go channel kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu Rust borrowing kuralıdır. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Konu: Rust borrowing. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "Çünkü `mut` hiç kullanılamaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `mut` kullanılabilir; sorun aynı anda iki mutable borrow'dur. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap C. Mantık: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-063",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Dil tanıma"
    ],
    "topic": "Go channel",
    "question": "`go worker(ch); x := <-ch` ne anlatır? - varyant 4",
    "options": [
      {
        "text": "`go` generic tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `go` goroutine başlatır. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Konu: Go channel. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Class inheritance başlatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da class/extends yoktur. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Channel sıradan array'dir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Channel veri aktarımı ve senkronizasyon sağlar. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap B. Mantık: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "ch := make(chan int)\ngo worker(ch)\nx := <-ch"
  },
  {
    "id": "TST-064",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Proje konusu",
      "Type system",
      "Nesne yönelimli programlama"
    ],
    "topic": "Go interface",
    "question": "Go interface için doğru ifade nedir? - varyant 4",
    "options": [
      {
        "text": "Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Konu: Go interface. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Java gibi extends zorunludur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da extends/class hiyerarşisi yoktur. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Interface channel buffer boyutudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Interface tip soyutlamadır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Tip güvenliğini tamamen kapatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Statik tip sistemi içinde çalışır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap A. Mantık: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-065",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Nesne yönelimli programlama"
    ],
    "topic": "Scala trait/object",
    "question": "`trait` ve `object` için doğru yorum nedir? - varyant 4",
    "options": [
      {
        "text": "trait pointer türüdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala trait pointer değildir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "object Java Object sınıfıyla aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala object singleton yapıdır. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala OOP desteklemez.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scala güçlü OOP desteğine sahiptir. Konu: Scala trait/object. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "`trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Konu: Scala trait/object. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: `trait` mixin/davranış soyutlaması, `object` singleton/static benzeri ortak üyeler için kullanılır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "trait Speaker { def speak(): String }\nobject Main { def main(args: Array[String]) = println(\"ok\") }"
  },
  {
    "id": "TST-066",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Fonksiyonel programlama"
    ],
    "topic": "Scala pattern matching",
    "question": "`case class` ve `match` birlikte neyi gösterir? - varyant 4",
    "options": [
      {
        "text": "Erlang atom tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang nokta/receive/atom syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "A"
      },
      {
        "text": "C++ template'tir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: C++ template syntax'ı farklıdır. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "B"
      },
      {
        "text": "Scala'da veri modeli ve pattern matching kullanımını gösterir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Scala'da veri modeli ve pattern matching kullanımını gösterir. Konu: Scala pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala Dili-1.pdf.",
        "key": "C"
      },
      {
        "text": "Go channel okumasıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go channel `<-` ile ayırt edilir. Konu: Scala pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala Dili-1.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala Dili-1.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Scala'da veri modeli ve pattern matching kullanımını gösterir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-067",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Concurrency"
    ],
    "topic": "Erlang pattern matching",
    "question": "Erlang'da `X = 3, X = 4.` neden sorunludur? - varyant 4",
    "options": [
      {
        "text": "Bu Rust borrow örneğidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust syntax'ı farklıdır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "`=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Konu: Erlang pattern matching. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "X önce 3 sonra 4 olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang değişkenleri mutable atama gibi davranmaz. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Bu Go kısa değişken bildirimidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go `:=` kullanır. Konu: Erlang pattern matching. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap B. Mantık: `=` yeniden atama değil pattern matching'dir; X 3'e bağlandıktan sonra 4 ile eşleşmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "TST-068",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Fonksiyonel programlama"
    ],
    "topic": "Erlang process",
    "question": "Erlang concurrency yaklaşımı nedir? - varyant 4",
    "options": [
      {
        "text": "İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Konu: Erlang process. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang proje raporu.",
        "key": "A"
      },
      {
        "text": "Global belleği kilitsiz paylaşır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu race condition riskidir. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "B"
      },
      {
        "text": "Class inheritance ile concurrency kurar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang OOP inheritance'a dayanmaz. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "C"
      },
      {
        "text": "Concurrency desteği yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Erlang özellikle concurrent sistemler için tasarlanmıştır. Konu: Erlang process. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang proje raporu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang proje raporu",
    "answerExplanation": "Doğru cevap A. Mantık: İzole hafif süreçler mesajlaşır; actor benzeri model hata toleransını destekler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-069",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value-result",
    "question": "`p(x,x)` value-result modelinde neden tuzaklıdır? - varyant 4",
    "options": [
      {
        "text": "Hiç actual okunmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Başta kopyalama yapılır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Reference ile tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Reference anlık aliasing, value-result dönüş kopyasıdır. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece functional dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Klasik parametre geçiş modelidir. Konu: Pass-by-value-result. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Konu: Pass-by-value-result. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: İki formal aynı actual'a dönüşte geri yazılabilir; son kopyalanan değer sonucu belirler. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-070",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-name",
    "question": "Pass-by-name nasıl çalışır? - varyant 4",
    "options": [
      {
        "text": "Sadece adres gönderilir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-reference olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "A"
      },
      {
        "text": "Dönüşte kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu value-result ailesidir. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "B"
      },
      {
        "text": "Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Konu: Pass-by-name. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 10.pdf.",
        "key": "C"
      },
      {
        "text": "Başta bir kez kopyalanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu pass-by-value olur. Konu: Pass-by-name. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 10.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 10.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Actual ifade formal her kullanıldığında çağıranın ortamında yeniden değerlendirilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-071",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "Activation record içinde ne bulunur? - varyant 4",
    "options": [
      {
        "text": "Yalnız inheritance ağacı.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Inheritance OOP konusudur. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "A"
      },
      {
        "text": "Parametreler, return address, yerel değişkenler ve geçici değerler bulunur.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Konu: Activation record. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 12.pdf.",
        "key": "B"
      },
      {
        "text": "Yalnız token listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Token listesi lexical analizdir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "C"
      },
      {
        "text": "Yalnız heap nesneleri listesi.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: AR çağrıya özgü stack/linkage bilgisidir. Konu: Activation record. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 12.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 12.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Parametreler, return address, yerel değişkenler ve geçici değerler bulunur. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-072",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure neden lifetime uzatır? - varyant 4",
    "options": [
      {
        "text": "İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Konu: Closure lifetime. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her zaman global değişken kullanır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Closure lexical ortam yakalar. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Scope ve lifetime aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope görünürlük, lifetime varlık süresidir. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Coroutine ile aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine duraklama/devam mekanizmasıdır. Konu: Closure lifetime. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: İç fonksiyon dış değişken ortamını kullanmaya devam ettiği için değişken korunmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-073",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Kod yorumlama"
    ],
    "topic": "Coroutine",
    "question": "Coroutine'i subroutine'den ayıran nedir? - varyant 4",
    "options": [
      {
        "text": "Her zaman prosedürdür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Prosedür/fonksiyon ayrımı değildir. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "A"
      },
      {
        "text": "Her çağrıda durumu sıfırlar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Coroutine durum korur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "B"
      },
      {
        "text": "Sadece type checking yapar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu tip sistemi konusudur. Konu: Coroutine. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 11.pdf.",
        "key": "C"
      },
      {
        "text": "Durumunu koruyup durakladığı yerden resume ile devam edebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Konu: Coroutine. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 11.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 11.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Durumunu koruyup durakladığı yerden resume ile devam edebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-074",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Type system"
    ],
    "topic": "ADT",
    "question": "Stack ADT için doğru yorum nedir? - varyant 4",
    "options": [
      {
        "text": "Encapsulation'ı kaldırır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Tersine temsil gizler. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "A"
      },
      {
        "text": "Sadece Prolog kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT genel veri soyutlamadır. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "B"
      },
      {
        "text": "Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Konu: ADT. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 13.pdf.",
        "key": "C"
      },
      {
        "text": "ADT ham byte dizisidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: ADT davranış ve işlem protokolüdür. Konu: ADT. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 13.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 13.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Kullanıcı push/pop/top işlemlerini bilir; gerçek temsil gizlenir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-075",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Scope / binding"
    ],
    "topic": "Dynamic binding",
    "question": "Overloading ile overriding/dynamic binding farkı nedir? - varyant 4",
    "options": [
      {
        "text": "Yalnız Prolog'da görülür.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: OOP dispatch konusudur. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "A"
      },
      {
        "text": "Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Konu: Dynamic binding. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 14.pdf.",
        "key": "B"
      },
      {
        "text": "Tamamen aynıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: İsim/imza çoklama ile override farklıdır. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "C"
      },
      {
        "text": "Dynamic binding compile-time kesinleşir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çalışma zamanı seçimini vurgular. Konu: Dynamic binding. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 14.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 14.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Overloading imza/statik tipe, overriding ise runtime nesne tipine bağlı seçilebilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-076",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Kod yorumlama"
    ],
    "topic": "Semaphore",
    "question": "Semaphore için doğru ifade nedir? - varyant 4",
    "options": [
      {
        "text": "`wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Konu: Semaphore. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 15.pdf.",
        "key": "A"
      },
      {
        "text": "Token tablosudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Runtime senkronizasyon yapısıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "B"
      },
      {
        "text": "Deadlock imkansızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yanlış kullanım deadlock yaratabilir. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "C"
      },
      {
        "text": "Inheritance aracıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Concurrency aracıdır. Konu: Semaphore. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 15.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 15.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: `wait` kaynak yoksa bekletir; `release` bırakır/uyandırır; işlemler atomik olmalıdır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-077",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static vs dynamic scope",
    "question": "Static scope ve dynamic scope farkı nedir? - varyant 4",
    "options": [
      {
        "text": "Static heap, dynamic stack demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Scope bellek bölgesi değildir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "A"
      },
      {
        "text": "Dynamic her zaman daha okunabilirdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Çağrı zinciri öngörülebilirliği azaltabilir. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "B"
      },
      {
        "text": "Static sadece yorumlanan dillerde olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Derlenen dillerde de yaygındır. Konu: Static vs dynamic scope. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 5.pdf.",
        "key": "C"
      },
      {
        "text": "Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Konu: Static vs dynamic scope. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 5.pdf.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 5.pdf",
    "answerExplanation": "Doğru cevap D. Mantık: Static scope lexical kod yapısına, dynamic scope çağrı zincirine bakar. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-078",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Kod yorumlama",
      "Klasik soru"
    ],
    "topic": "Short-circuit",
    "question": "`a != 0 && f()` ifadesinde a=0 ise ne olur? - varyant 4",
    "options": [
      {
        "text": "Yalnız aritmetikte olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Mantıksal operatörlerde tipiktir. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Syntax konusudur, runtime etkisi yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Yan etki runtime davranışıdır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Konu: Short-circuit. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "f önce çağrılır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sol taraf false ise sağ taraf atlanır. Konu: Short-circuit. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 7.pdf",
    "answerExplanation": "Doğru cevap C. Mantık: Short-circuit nedeniyle `f()` çağrılmaz; yan etki oluşmaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-079",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Vize temeli",
      "Compile-time / run-time",
      "Paradigmalar"
    ],
    "topic": "Halting problem",
    "question": "Halting problemi compiler için ne gösterir? - varyant 4",
    "options": [
      {
        "text": "JIT halting'i çözer.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Gerçekleştirim modeli kararsızlığı çözmez. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "A"
      },
      {
        "text": "Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Konu: Halting problem. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "B"
      },
      {
        "text": "Compiler tüm sonsuz döngüleri yakalar.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Halting problemi bunu reddeder. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "C"
      },
      {
        "text": "Syntax hataları karar verilemezdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Syntax genelde grammar ile karar verilebilir. Konu: Halting problem. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 2.pdf.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 2.pdf",
    "answerExplanation": "Doğru cevap B. Mantık: Genel olarak bir programın durup durmayacağını kesin belirleyen program yazılamaz. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-080",
    "type": "test",
    "difficulty": "Kolay",
    "tags": [
      "Final ağırlıklı",
      "Type system",
      "Compile-time / run-time"
    ],
    "topic": "Type checking",
    "question": "Strong typing ile dynamic typing ilişkisi nedir? - varyant 4",
    "options": [
      {
        "text": "Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Konu: Type checking. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "A"
      },
      {
        "text": "Dinamik her dil zayıftır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Python dinamik ama güçlü tipe yakındır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "B"
      },
      {
        "text": "Statik her dil hatasızdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Cast/union gibi kaçışlar olabilir. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "C"
      },
      {
        "text": "Strong typing hız demektir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Asıl konu tür hatalarını yakalamaktır. Konu: Type checking. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Konu 1.pdf; Konu 7.pdf.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Konu 1.pdf; Konu 7.pdf",
    "answerExplanation": "Doğru cevap A. Mantık: Dinamik tipli dil güçlü tip denetimi yapabilir; güçlü/zayıf ve statik/dinamik ayrı eksenlerdir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-081",
    "type": "test",
    "difficulty": "Orta",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Compile-time / run-time"
    ],
    "topic": "Rust ownership",
    "question": "let s2 = s1; sonrasında s1 neden kullanılamaz? - varyant 5",
    "options": [
      {
        "text": "GC iki referansı takip eder, hata olmaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust'ın temel farkı GC değil ownership modelidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız runtime uyarısıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Borrow/move hataları derleme zamanında yakalanır. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Sadece integer tiplerinde move olur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Heap verisi taşıyan tiplerde move özellikle önemlidir. Konu: Rust ownership. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Konu: Rust ownership. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap D. Mantık: String gibi ownership taşıyan değerlerde sahiplik s2'ye move olur; s1 kullanımı compile-time hatadır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-082",
    "type": "test",
    "difficulty": "Zor",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Type system"
    ],
    "topic": "Rust borrowing",
    "question": "İki `&mut` referans neden yasaktır? - varyant 5",
    "options": [
      {
        "text": "Çünkü Rust zayıf tipli dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Rust statik/güçlü tipli kabul edilir. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "A"
      },
      {
        "text": "Bu yalnız Go channel kuralıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu Rust borrowing kuralıdır. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "B"
      },
      {
        "text": "Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Konu: Rust borrowing. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust proje raporu.",
        "key": "C"
      },
      {
        "text": "Çünkü `mut` hiç kullanılamaz.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `mut` kullanılabilir; sorun aynı anda iki mutable borrow'dur. Konu: Rust borrowing. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust proje raporu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust proje raporu",
    "answerExplanation": "Doğru cevap C. Mantık: Aynı anda iki mutable borrow aliasing + mutation riskini doğurur; borrow checker bunu engeller. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TST-083",
    "type": "test",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Dil tanıma"
    ],
    "topic": "Go channel",
    "question": "`go worker(ch); x := <-ch` ne anlatır? - varyant 5",
    "options": [
      {
        "text": "`go` generic tanımıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: `go` goroutine başlatır. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Konu: Go channel. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Class inheritance başlatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da class/extends yoktur. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Channel sıradan array'dir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Channel veri aktarımı ve senkronizasyon sağlar. Konu: Go channel. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap B. Mantık: Bir goroutine başlar ve ana akış channel'dan okurken senkronize/bloklanabilir. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır.",
    "code": "ch := make(chan int)\ngo worker(ch)\nx := <-ch"
  },
  {
    "id": "TST-084",
    "type": "test",
    "difficulty": "Tuzaklı",
    "tags": [
      "Proje konusu",
      "Type system",
      "Nesne yönelimli programlama"
    ],
    "topic": "Go interface",
    "question": "Go interface için doğru ifade nedir? - varyant 5",
    "options": [
      {
        "text": "Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Konu: Go interface. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go proje raporları.",
        "key": "A"
      },
      {
        "text": "Java gibi extends zorunludur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Go'da extends/class hiyerarşisi yoktur. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "B"
      },
      {
        "text": "Interface channel buffer boyutudur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Interface tip soyutlamadır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "C"
      },
      {
        "text": "Tip güvenliğini tamamen kapatır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Statik tip sistemi içinde çalışır. Konu: Go interface. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go proje raporları.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go proje raporları",
    "answerExplanation": "Doğru cevap A. Mantık: Bir tip gerekli metotlara sahipse interface'i örtük olarak sağlar; `implements` gerekmez. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "CLS-001",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 5.pdf",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}"
  },
  {
    "id": "CLS-002",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 10.pdf",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)"
  },
  {
    "id": "CLS-003",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Deep/shallow binding",
    "question": "Fonksiyon parametre geçişinde deep ve shallow binding sonuçlarını açıklayınız.",
    "expected": "Deep fonksiyonun taşınan/tanımlandığı ortamı, shallow çağrıldığı andaki ortamı kullanır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Deep/shallow binding"
    ],
    "commonMistake": "Function pointer'ı yalnız adres sanmak.",
    "shortAnswer": "Deep tanım/gönderim ortamı; shallow çağrı ortamı.",
    "longAnswer": "Soruda sadece fonksiyon adresi değil referans ortamı problemi olduğu belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 11.pdf",
    "code": "x=1\nf(){print(x)}\ng(h){x=2; h()}"
  },
  {
    "id": "CLS-004",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Closure lifetime",
    "question": "Closure örneğinde `count` neden kaybolmaz?",
    "expected": "İç fonksiyon dış değişkeni yakalar; fonksiyon döndükten sonra ortam korunur ve ikinci çağrı 2 olur.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Closure lifetime"
    ],
    "commonMistake": "Her çağrıda count 0 olur sanmak.",
    "shortAnswer": "Closure ortamı korur; count ikinci çağrıda 2.",
    "longAnswer": "Closure = fonksiyon + lexical environment; lifetime stack süresini aşabilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 11.pdf",
    "code": "make(){ count=0; return () => ++count }"
  },
  {
    "id": "CLS-005",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "`fact(3)` için activation record sırasını yazınız.",
    "expected": "fact(3), fact(2), fact(1), fact(0) ayrı kayıtlar oluşturur; dönüşler LIFO olur.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Activation record"
    ],
    "commonMistake": "Tek yerel değişkenle recursion takip etmek.",
    "shortAnswer": "Her recursive çağrı ayrı stack frame.",
    "longAnswer": "Parametre, return address, local ve temporary alanları belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 12.pdf",
    "code": "fact(n){ if n==0 return 1; return n*fact(n-1) }"
  },
  {
    "id": "CLS-006",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Klasik soru"
    ],
    "topic": "Dynamic binding OOP",
    "question": "`A obj = new B(); obj.draw();` hangi metodu çağırır?",
    "expected": "Override varsa gerçek nesne tipi B olduğundan B.draw çalışır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Dynamic binding OOP"
    ],
    "commonMistake": "Referans tipi A diye A.draw sanmak.",
    "shortAnswer": "Çıktı B; runtime dispatch.",
    "longAnswer": "Referans tipi ile nesne tipi ayrılır; overloading/overriding farkı yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 14.pdf",
    "code": "class A{draw(){A}}\nclass B extends A{draw(){B}}\nA obj=new B(); obj.draw();"
  },
  {
    "id": "CLS-007",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Klasik soru"
    ],
    "topic": "Race condition",
    "question": "`total = total + 1` iki thread'de neden tehlikelidir?",
    "expected": "Okuma-artırma-yazma atomik değildir; iki thread aynı eski değeri okuyabilir; critical section gerekir.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Concurrency",
      "Race condition"
    ],
    "commonMistake": "Tek satırı atomik sanmak.",
    "shortAnswer": "Atomik değil; mutual exclusion gerekir.",
    "longAnswer": "Interleaving adımları yazılır; wait/release veya monitor çözümü verilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 15.pdf",
    "code": "Thread1: total=total+1\nThread2: total=total+1"
  },
  {
    "id": "CLS-008",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Rust borrow checker",
    "question": "İki mutable borrow kodu neden hata verir?",
    "expected": "Aynı anda iki `&mut` borrow compile-time yasaktır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Bellek yönetimi",
      "Rust borrow checker"
    ],
    "commonMistake": "Runtime hatası sanmak.",
    "shortAnswer": "İki &mut yasak; compile-time hata.",
    "longAnswer": "Ownership/borrowing, aliasing ve data race bağlantısı açıklanır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Rust proje raporu",
    "code": "let mut x=5;\nlet a=&mut x;\nlet b=&mut x;"
  },
  {
    "id": "CLS-009",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Klasik soru"
    ],
    "topic": "Go channel",
    "question": "Go channel kodunda ana akış nerede bloklanabilir?",
    "expected": "`<-ch` okuması gönderim yoksa bloklanabilir; channel senkronizasyon noktasıdır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Concurrency",
      "Go channel"
    ],
    "commonMistake": "Channel'ı array sanmak.",
    "shortAnswer": "Channel okuma/gönderme bloklayabilir.",
    "longAnswer": "Goroutine ve channel ayrımı, paylaşarak iletişim yerine iletişimle paylaşım ilkesi yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Go proje raporu",
    "code": "ch:=make(chan int)\ngo worker(ch)\nx:=<-ch"
  },
  {
    "id": "CLS-010",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Klasik soru"
    ],
    "topic": "Erlang pattern matching",
    "question": "`X = 3, X = 4.` neden hata olur?",
    "expected": "`=` atama değil pattern matching; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Erlang pattern matching"
    ],
    "commonMistake": "C/Java ataması gibi okumak.",
    "shortAnswer": "Pattern match hatası.",
    "longAnswer": "Atom/değişken, tek atama ve nokta sözdizimi belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Erlang proje raporu",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "CLS-011",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Klasik soru"
    ],
    "topic": "Scala trait/object",
    "question": "Scala trait ve object kavramlarını açıklayınız.",
    "expected": "trait mixin/davranış soyutlama; object singleton/static benzeri yapı; case class/match pattern matching sağlar.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Scala trait/object"
    ],
    "commonMistake": "Object'i Java Object sınıfı sanmak.",
    "shortAnswer": "trait=mixin, object=singleton.",
    "longAnswer": "Java static ile Scala object farkı ve OOP+FP birleşimi yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Scala Dili-1.pdf",
    "code": "trait T\nobject Main"
  },
  {
    "id": "CLS-012",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 5.pdf",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}"
  },
  {
    "id": "CLS-013",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 10.pdf",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)"
  },
  {
    "id": "CLS-014",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Deep/shallow binding",
    "question": "Fonksiyon parametre geçişinde deep ve shallow binding sonuçlarını açıklayınız.",
    "expected": "Deep fonksiyonun taşınan/tanımlandığı ortamı, shallow çağrıldığı andaki ortamı kullanır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Deep/shallow binding"
    ],
    "commonMistake": "Function pointer'ı yalnız adres sanmak.",
    "shortAnswer": "Deep tanım/gönderim ortamı; shallow çağrı ortamı.",
    "longAnswer": "Soruda sadece fonksiyon adresi değil referans ortamı problemi olduğu belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 11.pdf",
    "code": "x=1\nf(){print(x)}\ng(h){x=2; h()}"
  },
  {
    "id": "CLS-015",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Closure lifetime",
    "question": "Closure örneğinde `count` neden kaybolmaz?",
    "expected": "İç fonksiyon dış değişkeni yakalar; fonksiyon döndükten sonra ortam korunur ve ikinci çağrı 2 olur.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Closure lifetime"
    ],
    "commonMistake": "Her çağrıda count 0 olur sanmak.",
    "shortAnswer": "Closure ortamı korur; count ikinci çağrıda 2.",
    "longAnswer": "Closure = fonksiyon + lexical environment; lifetime stack süresini aşabilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 11.pdf",
    "code": "make(){ count=0; return () => ++count }"
  },
  {
    "id": "CLS-016",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Activation record",
    "question": "`fact(3)` için activation record sırasını yazınız.",
    "expected": "fact(3), fact(2), fact(1), fact(0) ayrı kayıtlar oluşturur; dönüşler LIFO olur.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Activation record"
    ],
    "commonMistake": "Tek yerel değişkenle recursion takip etmek.",
    "shortAnswer": "Her recursive çağrı ayrı stack frame.",
    "longAnswer": "Parametre, return address, local ve temporary alanları belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 12.pdf",
    "code": "fact(n){ if n==0 return 1; return n*fact(n-1) }"
  },
  {
    "id": "CLS-017",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Klasik soru"
    ],
    "topic": "Dynamic binding OOP",
    "question": "`A obj = new B(); obj.draw();` hangi metodu çağırır?",
    "expected": "Override varsa gerçek nesne tipi B olduğundan B.draw çalışır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Dynamic binding OOP"
    ],
    "commonMistake": "Referans tipi A diye A.draw sanmak.",
    "shortAnswer": "Çıktı B; runtime dispatch.",
    "longAnswer": "Referans tipi ile nesne tipi ayrılır; overloading/overriding farkı yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 14.pdf",
    "code": "class A{draw(){A}}\nclass B extends A{draw(){B}}\nA obj=new B(); obj.draw();"
  },
  {
    "id": "CLS-018",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Concurrency",
      "Klasik soru"
    ],
    "topic": "Race condition",
    "question": "`total = total + 1` iki thread'de neden tehlikelidir?",
    "expected": "Okuma-artırma-yazma atomik değildir; iki thread aynı eski değeri okuyabilir; critical section gerekir.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Concurrency",
      "Race condition"
    ],
    "commonMistake": "Tek satırı atomik sanmak.",
    "shortAnswer": "Atomik değil; mutual exclusion gerekir.",
    "longAnswer": "Interleaving adımları yazılır; wait/release veya monitor çözümü verilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 15.pdf",
    "code": "Thread1: total=total+1\nThread2: total=total+1"
  },
  {
    "id": "CLS-019",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Bellek yönetimi",
      "Klasik soru"
    ],
    "topic": "Rust borrow checker",
    "question": "İki mutable borrow kodu neden hata verir?",
    "expected": "Aynı anda iki `&mut` borrow compile-time yasaktır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Bellek yönetimi",
      "Rust borrow checker"
    ],
    "commonMistake": "Runtime hatası sanmak.",
    "shortAnswer": "İki &mut yasak; compile-time hata.",
    "longAnswer": "Ownership/borrowing, aliasing ve data race bağlantısı açıklanır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Rust proje raporu",
    "code": "let mut x=5;\nlet a=&mut x;\nlet b=&mut x;"
  },
  {
    "id": "CLS-020",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Concurrency",
      "Klasik soru"
    ],
    "topic": "Go channel",
    "question": "Go channel kodunda ana akış nerede bloklanabilir?",
    "expected": "`<-ch` okuması gönderim yoksa bloklanabilir; channel senkronizasyon noktasıdır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Concurrency",
      "Go channel"
    ],
    "commonMistake": "Channel'ı array sanmak.",
    "shortAnswer": "Channel okuma/gönderme bloklayabilir.",
    "longAnswer": "Goroutine ve channel ayrımı, paylaşarak iletişim yerine iletişimle paylaşım ilkesi yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Go proje raporu",
    "code": "ch:=make(chan int)\ngo worker(ch)\nx:=<-ch"
  },
  {
    "id": "CLS-021",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Klasik soru"
    ],
    "topic": "Erlang pattern matching",
    "question": "`X = 3, X = 4.` neden hata olur?",
    "expected": "`=` atama değil pattern matching; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Erlang pattern matching"
    ],
    "commonMistake": "C/Java ataması gibi okumak.",
    "shortAnswer": "Pattern match hatası.",
    "longAnswer": "Atom/değişken, tek atama ve nokta sözdizimi belirtilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Erlang proje raporu",
    "code": "X = 3,\nX = 4."
  },
  {
    "id": "CLS-022",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Proje konusu",
      "Dil tanıma",
      "Klasik soru"
    ],
    "topic": "Scala trait/object",
    "question": "Scala trait ve object kavramlarını açıklayınız.",
    "expected": "trait mixin/davranış soyutlama; object singleton/static benzeri yapı; case class/match pattern matching sağlar.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Scala trait/object"
    ],
    "commonMistake": "Object'i Java Object sınıfı sanmak.",
    "shortAnswer": "trait=mixin, object=singleton.",
    "longAnswer": "Java static ile Scala object farkı ve OOP+FP birleşimi yazılır.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Scala Dili-1.pdf",
    "code": "trait T\nobject Main"
  },
  {
    "id": "CLS-023",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 5.pdf",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}"
  },
  {
    "id": "CLS-024",
    "type": "klasik",
    "difficulty": "Final tarzı",
    "tags": [
      "Final ağırlıklı",
      "Scope / binding",
      "Klasik soru"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "3 puan: doğru kavramı ve belirlenme zamanını yazma.",
      "3 puan: kod/değer/scope zincirini adım adım takip etme.",
      "2 puan: sınav tuzağını belirtme.",
      "2 puan: kısa sonucu net ifade etme."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Klasik sorular genellikle değer takibi, scope, binding, parametre geçişi ve activation record mantığı ister.",
    "source": "Konu 10.pdf",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)"
  },
  {
    "id": "LANG-001",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Proje konusu",
      "Kod yorumlama"
    ],
    "topic": "Rust dil tanıma",
    "question": "Rust için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Rust yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Rust için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: Ownership, borrowing, lifetime; GC yok; concurrency: thread/channel + Send/Sync. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "`let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`; Compile-time borrow checker sınavın en güçlü ipucu.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`; Compile-time borrow checker sınavın en güçlü ipucu. Konu: Rust dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`; Compile-time borrow checker sınavın en güçlü ipucu. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-002",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Proje konusu",
      "Kod yorumlama"
    ],
    "topic": "Go dil tanıma",
    "question": "Go için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Go için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC, escape analysis; concurrency: goroutine + channel. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "`package main`, `func`, `go f()`, `chan`, `<-`, `defer`; Kalıtım yerine composition/interface; channel üzerinden iletişim.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `package main`, `func`, `go f()`, `chan`, `<-`, `defer`; Kalıtım yerine composition/interface; channel üzerinden iletişim. Konu: Go dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Go yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: `package main`, `func`, `go f()`, `chan`, `<-`, `defer`; Kalıtım yerine composition/interface; channel üzerinden iletişim. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-003",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Proje konusu",
      "Kod yorumlama"
    ],
    "topic": "Scala dil tanıma",
    "question": "Scala için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "`val`, `var`, `trait`, `object`, `case class`, `match`; Java static yerine object/companion object; trait ile mixin.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `val`, `var`, `trait`, `object`, `case class`, `match`; Java static yerine object/companion object; trait ile mixin. Konu: Scala dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Scala yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Scala için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: JVM GC; concurrency: Future/Akka/JVM threadleri. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: `val`, `var`, `trait`, `object`, `case class`, `match`; Java static yerine object/companion object; trait ile mixin. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-004",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Proje konusu",
      "Kod yorumlama"
    ],
    "topic": "Erlang dil tanıma",
    "question": "Erlang için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "`receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match; Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match; Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır. Konu: Erlang dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Erlang yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Erlang için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: Process başına GC; concurrency: hafif process + message passing. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match; Telekom/hata toleransı; değişkenler yeniden atanmaz, pattern matching yapılır. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-005",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "Java dil tanıma",
    "question": "Java için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Java yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Java için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC, referanslar; concurrency: Thread, synchronized. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "`public static void main`, `class`, `extends`, `implements`; Pointer yok; JVM/JIT ve dynamic dispatch.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `public static void main`, `class`, `extends`, `implements`; Pointer yok; JVM/JIT ve dynamic dispatch. Konu: Java dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Java karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Java karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: `public static void main`, `class`, `extends`, `implements`; Pointer yok; JVM/JIT ve dynamic dispatch. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-006",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "C dil tanıma",
    "question": "C için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "C için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: Manuel malloc/free; concurrency: pthread kütüphanesi. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "`#include`, `*p`, `&x`, `struct`, `printf`; Pointer ve manuel bellek.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `#include`, `*p`, `&x`, `struct`, `printf`; Pointer ve manuel bellek. Konu: C dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: C karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "C yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "C karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: `#include`, `*p`, `&x`, `struct`, `printf`; Pointer ve manuel bellek. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-007",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "C++ dil tanıma",
    "question": "C++ için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "`template<typename T>`, `std::`, `virtual`, `cout`; Overloading/template/virtual dispatch.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `template<typename T>`, `std::`, `virtual`, `cout`; Overloading/template/virtual dispatch. Konu: C++ dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: C++ karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "C++ yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "C++ için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: RAII + smart/manual pointer; concurrency: std::thread. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "C++ karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: `template<typename T>`, `std::`, `virtual`, `cout`; Overloading/template/virtual dispatch. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-008",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "Python dil tanıma",
    "question": "Python için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "`def`, girinti, `self`, list comprehension; Girinti blok yapısı ve dinamik tip.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `def`, girinti, `self`, list comprehension; Girinti blok yapısı ve dinamik tip. Konu: Python dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Python karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Python yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Python için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC/ref counting; concurrency: asyncio/threading. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Python karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: `def`, girinti, `self`, list comprehension; Girinti blok yapısı ve dinamik tip. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-009",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "JavaScript dil tanıma",
    "question": "JavaScript için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "JavaScript yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "JavaScript için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC; concurrency: event loop, promise. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "`const`, `let`, `=>`, `Promise`, `prototype`; Closure ve async/event loop.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `const`, `let`, `=>`, `Promise`, `prototype`; Closure ve async/event loop. Konu: JavaScript dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: JavaScript karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "JavaScript karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: `const`, `let`, `=>`, `Promise`, `prototype`; Closure ve async/event loop. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-010",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "Prolog dil tanıma",
    "question": "Prolog için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Prolog için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: Runtime yönetimi; concurrency: sınırlı. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "`fact(a).`, `rule(X) :- other(X).`; Olgu, kural, hedef, unification.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `fact(a).`, `rule(X) :- other(X).`; Olgu, kural, hedef, unification. Konu: Prolog dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Prolog karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Prolog yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Prolog karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: `fact(a).`, `rule(X) :- other(X).`; Olgu, kural, hedef, unification. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-011",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "Lisp dil tanıma",
    "question": "Lisp için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "`(+ 1 2)`, `car`, `cdr`, çok parantezli prefix; Kod-veri benzerliği ve liste işleme.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `(+ 1 2)`, `car`, `cdr`, çok parantezli prefix; Kod-veri benzerliği ve liste işleme. Konu: Lisp dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Lisp karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Lisp yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Lisp için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC; concurrency: varyanta bağlı. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Lisp karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: `(+ 1 2)`, `car`, `cdr`, çok parantezli prefix; Kod-veri benzerliği ve liste işleme. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-012",
    "type": "dil_tanima",
    "difficulty": "Orta",
    "tags": [
      "Dil tanıma",
      "Vize temeli",
      "Kod yorumlama"
    ],
    "topic": "Haskell dil tanıma",
    "question": "Haskell için en güçlü kod/sınav ipucu hangisidir?",
    "options": [
      {
        "text": "`::`, `where`, pattern matching, lazy evaluation; Saflık, lazy evaluation, typeclass.",
        "correct": true,
        "explanation": "Doğru. Neden doğru: `::`, `where`, pattern matching, lazy evaluation; Saflık, lazy evaluation, typeclass. Konu: Haskell dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Haskell karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Haskell yalnız HTML markup dilidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bu ifade dilin kaynaklarda anlatılan programlama paradigmasını yansıtmaz. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Haskell için bellek/concurrency konusu yoktur.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Bellek: GC; concurrency: STM/async. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece popülerlik bilgisi yeterlidir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Sınav teknik kavram ister. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Haskell karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: `::`, `where`, pattern matching, lazy evaluation; Saflık, lazy evaluation, typeclass. Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X013",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Rust dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `let mut`, `&mut`, `impl Trait`, `match`, `Option<T>`?",
    "options": [
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Rust dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Rust karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Rust",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Rust Konu: Rust dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Rust karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Rust karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: Rust Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X014",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Go dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `package main`, `func`, `go f()`, `chan`, `<-`, `defer`?",
    "options": [
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Go",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Go Konu: Go dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Go karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Go dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Go karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Go karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: Go Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X015",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Scala dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `val`, `var`, `trait`, `object`, `case class`, `match`?",
    "options": [
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Scala",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Scala Konu: Scala dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Scala karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Scala dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Scala karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Scala karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: Scala Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X016",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Erlang dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `receive`, `spawn`, atomlar, `.` ile bitiş, `=` pattern match?",
    "options": [
      {
        "text": "Erlang",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Erlang Konu: Erlang dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Erlang karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Erlang dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Erlang karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Erlang karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: Erlang Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X017",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Java dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `public static void main`, `class`, `extends`, `implements`?",
    "options": [
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Java dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Java karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Java",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Java Konu: Java dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Java karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Java karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: Java Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X018",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "C dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `#include`, `*p`, `&x`, `struct`, `printf`?",
    "options": [
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "C",
        "correct": true,
        "explanation": "Doğru. Neden doğru: C Konu: C dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: C karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: C dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "C karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: C Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X019",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "C++ dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `template<typename T>`, `std::`, `virtual`, `cout`?",
    "options": [
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "C++",
        "correct": true,
        "explanation": "Doğru. Neden doğru: C++ Konu: C++ dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: C++ karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: C++ dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: C++ karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "C++ karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: C++ Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X020",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Python dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `def`, girinti, `self`, list comprehension?",
    "options": [
      {
        "text": "Python",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Python Konu: Python dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Python karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Python dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Python karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Python karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: Python Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X021",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "JavaScript dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `const`, `let`, `=>`, `Promise`, `prototype`?",
    "options": [
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: JavaScript dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: JavaScript karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "JavaScript",
        "correct": true,
        "explanation": "Doğru. Neden doğru: JavaScript Konu: JavaScript dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: JavaScript karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "D",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "JavaScript karşılaştırma notu",
    "answerExplanation": "Doğru cevap D. Mantık: JavaScript Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X022",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Prolog dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `fact(a).`, `rule(X) :- other(X).`?",
    "options": [
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Prolog",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Prolog Konu: Prolog dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Prolog karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Prolog dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Prolog karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "C",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Prolog karşılaştırma notu",
    "answerExplanation": "Doğru cevap C. Mantık: Prolog Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X023",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Lisp dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `(+ 1 2)`, `car`, `cdr`, çok parantezli prefix?",
    "options": [
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Lisp",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Lisp Konu: Lisp dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Lisp karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Lisp dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Lisp karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "B",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Lisp karşılaştırma notu",
    "answerExplanation": "Doğru cevap B. Mantık: Lisp Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "LANG-X024",
    "type": "dil_tanima",
    "difficulty": "Kolay",
    "tags": [
      "Dil tanıma",
      "Kod yorumlama"
    ],
    "topic": "Haskell dil tanıma",
    "question": "Aşağıdaki ipucu hangi dile aittir: `::`, `where`, pattern matching, lazy evaluation?",
    "options": [
      {
        "text": "Haskell",
        "correct": true,
        "explanation": "Doğru. Neden doğru: Haskell Konu: Haskell dil tanıma. Sınavdaki tuzak: kavramı benzer syntax veya başka bir aşama ile karıştırmak. Öğrenci neden bu şıkka güvenebilir? Cevap hem davranışı hem gerekçeyi veriyor. Kaynak: Haskell karşılaştırma notu.",
        "key": "A"
      },
      {
        "text": "Başka bir dildir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Verilen syntax bu dile özgü daha güçlü ipucu taşır. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "B"
      },
      {
        "text": "Sadece paradigma adıdır.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Soru dil tanıma sorusudur. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "C"
      },
      {
        "text": "Kaynak belirsizdir.",
        "correct": false,
        "explanation": "Yanlış. Neden yanlış: Karşılaştırma rehberinde açıkça listelenmiştir. Konu: Haskell dil tanıma. Sınavdaki tuzak: yüzeyde benzer görünen ama farklı kavrama ait bir ifadeyi seçmek. Öğrenci neden bu şıkka düşebilir? Ezbere bildiği dil modelini bu soruya yanlış aktarabilir. Kaynak: Haskell karşılaştırma notu.",
        "key": "D"
      }
    ],
    "answer": "A",
    "whyImportant": "Finalde ezberden çok kod davranışı, bağlama zamanı, dil tasarımı ve proje dili bağlantısı ölçülebilir.",
    "source": "Haskell karşılaştırma notu",
    "answerExplanation": "Doğru cevap A. Mantık: Haskell Yanlış seçenekler ya kavramı başka bir aşamaya taşıyor ya da farklı dil tasarımını genelliyor. Benzer sorularda önce hangi aşama, hangi scope/binding ve hangi dil ipucu sorulduğunu ayır."
  },
  {
    "id": "TRACE-001",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 5.pdf"
  },
  {
    "id": "TRACE-002",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 10.pdf"
  },
  {
    "id": "TRACE-003",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Deep/shallow binding",
    "question": "Fonksiyon parametre geçişinde deep ve shallow binding sonuçlarını açıklayınız.",
    "code": "x=1\nf(){print(x)}\ng(h){x=2; h()}",
    "expected": "Deep fonksiyonun taşınan/tanımlandığı ortamı, shallow çağrıldığı andaki ortamı kullanır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Deep/shallow binding"
    ],
    "commonMistake": "Function pointer'ı yalnız adres sanmak.",
    "shortAnswer": "Deep tanım/gönderim ortamı; shallow çağrı ortamı.",
    "longAnswer": "Soruda sadece fonksiyon adresi değil referans ortamı problemi olduğu belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-004",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure örneğinde `count` neden kaybolmaz?",
    "code": "make(){ count=0; return () => ++count }",
    "expected": "İç fonksiyon dış değişkeni yakalar; fonksiyon döndükten sonra ortam korunur ve ikinci çağrı 2 olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Closure lifetime"
    ],
    "commonMistake": "Her çağrıda count 0 olur sanmak.",
    "shortAnswer": "Closure ortamı korur; count ikinci çağrıda 2.",
    "longAnswer": "Closure = fonksiyon + lexical environment; lifetime stack süresini aşabilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-005",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Bellek yönetimi"
    ],
    "topic": "Activation record",
    "question": "`fact(3)` için activation record sırasını yazınız.",
    "code": "fact(n){ if n==0 return 1; return n*fact(n-1) }",
    "expected": "fact(3), fact(2), fact(1), fact(0) ayrı kayıtlar oluşturur; dönüşler LIFO olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Activation record"
    ],
    "commonMistake": "Tek yerel değişkenle recursion takip etmek.",
    "shortAnswer": "Her recursive çağrı ayrı stack frame.",
    "longAnswer": "Parametre, return address, local ve temporary alanları belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 12.pdf"
  },
  {
    "id": "TRACE-006",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Nesne yönelimli programlama"
    ],
    "topic": "Dynamic binding OOP",
    "question": "`A obj = new B(); obj.draw();` hangi metodu çağırır?",
    "code": "class A{draw(){A}}\nclass B extends A{draw(){B}}\nA obj=new B(); obj.draw();",
    "expected": "Override varsa gerçek nesne tipi B olduğundan B.draw çalışır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Dynamic binding OOP"
    ],
    "commonMistake": "Referans tipi A diye A.draw sanmak.",
    "shortAnswer": "Çıktı B; runtime dispatch.",
    "longAnswer": "Referans tipi ile nesne tipi ayrılır; overloading/overriding farkı yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 14.pdf"
  },
  {
    "id": "TRACE-007",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Concurrency"
    ],
    "topic": "Race condition",
    "question": "`total = total + 1` iki thread'de neden tehlikelidir?",
    "code": "Thread1: total=total+1\nThread2: total=total+1",
    "expected": "Okuma-artırma-yazma atomik değildir; iki thread aynı eski değeri okuyabilir; critical section gerekir.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Concurrency",
      "Race condition"
    ],
    "commonMistake": "Tek satırı atomik sanmak.",
    "shortAnswer": "Atomik değil; mutual exclusion gerekir.",
    "longAnswer": "Interleaving adımları yazılır; wait/release veya monitor çözümü verilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 15.pdf"
  },
  {
    "id": "TRACE-008",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Bellek yönetimi"
    ],
    "topic": "Rust borrow checker",
    "question": "İki mutable borrow kodu neden hata verir?",
    "code": "let mut x=5;\nlet a=&mut x;\nlet b=&mut x;",
    "expected": "Aynı anda iki `&mut` borrow compile-time yasaktır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Bellek yönetimi",
      "Rust borrow checker"
    ],
    "commonMistake": "Runtime hatası sanmak.",
    "shortAnswer": "İki &mut yasak; compile-time hata.",
    "longAnswer": "Ownership/borrowing, aliasing ve data race bağlantısı açıklanır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Rust proje raporu"
  },
  {
    "id": "TRACE-009",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Concurrency"
    ],
    "topic": "Go channel",
    "question": "Go channel kodunda ana akış nerede bloklanabilir?",
    "code": "ch:=make(chan int)\ngo worker(ch)\nx:=<-ch",
    "expected": "`<-ch` okuması gönderim yoksa bloklanabilir; channel senkronizasyon noktasıdır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Concurrency",
      "Go channel"
    ],
    "commonMistake": "Channel'ı array sanmak.",
    "shortAnswer": "Channel okuma/gönderme bloklayabilir.",
    "longAnswer": "Goroutine ve channel ayrımı, paylaşarak iletişim yerine iletişimle paylaşım ilkesi yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Go proje raporu"
  },
  {
    "id": "TRACE-010",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Dil tanıma"
    ],
    "topic": "Erlang pattern matching",
    "question": "`X = 3, X = 4.` neden hata olur?",
    "code": "X = 3,\nX = 4.",
    "expected": "`=` atama değil pattern matching; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Erlang pattern matching"
    ],
    "commonMistake": "C/Java ataması gibi okumak.",
    "shortAnswer": "Pattern match hatası.",
    "longAnswer": "Atom/değişken, tek atama ve nokta sözdizimi belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Erlang proje raporu"
  },
  {
    "id": "TRACE-011",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Dil tanıma"
    ],
    "topic": "Scala trait/object",
    "question": "Scala trait ve object kavramlarını açıklayınız.",
    "code": "trait T\nobject Main",
    "expected": "trait mixin/davranış soyutlama; object singleton/static benzeri yapı; case class/match pattern matching sağlar.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Scala trait/object"
    ],
    "commonMistake": "Object'i Java Object sınıfı sanmak.",
    "shortAnswer": "trait=mixin, object=singleton.",
    "longAnswer": "Java static ile Scala object farkı ve OOP+FP birleşimi yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Scala Dili-1.pdf"
  },
  {
    "id": "TRACE-012",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 5.pdf"
  },
  {
    "id": "TRACE-013",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 10.pdf"
  },
  {
    "id": "TRACE-014",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Deep/shallow binding",
    "question": "Fonksiyon parametre geçişinde deep ve shallow binding sonuçlarını açıklayınız.",
    "code": "x=1\nf(){print(x)}\ng(h){x=2; h()}",
    "expected": "Deep fonksiyonun taşınan/tanımlandığı ortamı, shallow çağrıldığı andaki ortamı kullanır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Deep/shallow binding"
    ],
    "commonMistake": "Function pointer'ı yalnız adres sanmak.",
    "shortAnswer": "Deep tanım/gönderim ortamı; shallow çağrı ortamı.",
    "longAnswer": "Soruda sadece fonksiyon adresi değil referans ortamı problemi olduğu belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-015",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure örneğinde `count` neden kaybolmaz?",
    "code": "make(){ count=0; return () => ++count }",
    "expected": "İç fonksiyon dış değişkeni yakalar; fonksiyon döndükten sonra ortam korunur ve ikinci çağrı 2 olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Closure lifetime"
    ],
    "commonMistake": "Her çağrıda count 0 olur sanmak.",
    "shortAnswer": "Closure ortamı korur; count ikinci çağrıda 2.",
    "longAnswer": "Closure = fonksiyon + lexical environment; lifetime stack süresini aşabilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-016",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Bellek yönetimi"
    ],
    "topic": "Activation record",
    "question": "`fact(3)` için activation record sırasını yazınız.",
    "code": "fact(n){ if n==0 return 1; return n*fact(n-1) }",
    "expected": "fact(3), fact(2), fact(1), fact(0) ayrı kayıtlar oluşturur; dönüşler LIFO olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Activation record"
    ],
    "commonMistake": "Tek yerel değişkenle recursion takip etmek.",
    "shortAnswer": "Her recursive çağrı ayrı stack frame.",
    "longAnswer": "Parametre, return address, local ve temporary alanları belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 12.pdf"
  },
  {
    "id": "TRACE-017",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Nesne yönelimli programlama"
    ],
    "topic": "Dynamic binding OOP",
    "question": "`A obj = new B(); obj.draw();` hangi metodu çağırır?",
    "code": "class A{draw(){A}}\nclass B extends A{draw(){B}}\nA obj=new B(); obj.draw();",
    "expected": "Override varsa gerçek nesne tipi B olduğundan B.draw çalışır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Dynamic binding OOP"
    ],
    "commonMistake": "Referans tipi A diye A.draw sanmak.",
    "shortAnswer": "Çıktı B; runtime dispatch.",
    "longAnswer": "Referans tipi ile nesne tipi ayrılır; overloading/overriding farkı yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 14.pdf"
  },
  {
    "id": "TRACE-018",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Concurrency"
    ],
    "topic": "Race condition",
    "question": "`total = total + 1` iki thread'de neden tehlikelidir?",
    "code": "Thread1: total=total+1\nThread2: total=total+1",
    "expected": "Okuma-artırma-yazma atomik değildir; iki thread aynı eski değeri okuyabilir; critical section gerekir.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Concurrency",
      "Race condition"
    ],
    "commonMistake": "Tek satırı atomik sanmak.",
    "shortAnswer": "Atomik değil; mutual exclusion gerekir.",
    "longAnswer": "Interleaving adımları yazılır; wait/release veya monitor çözümü verilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 15.pdf"
  },
  {
    "id": "TRACE-019",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Bellek yönetimi"
    ],
    "topic": "Rust borrow checker",
    "question": "İki mutable borrow kodu neden hata verir?",
    "code": "let mut x=5;\nlet a=&mut x;\nlet b=&mut x;",
    "expected": "Aynı anda iki `&mut` borrow compile-time yasaktır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Bellek yönetimi",
      "Rust borrow checker"
    ],
    "commonMistake": "Runtime hatası sanmak.",
    "shortAnswer": "İki &mut yasak; compile-time hata.",
    "longAnswer": "Ownership/borrowing, aliasing ve data race bağlantısı açıklanır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Rust proje raporu"
  },
  {
    "id": "TRACE-020",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Concurrency"
    ],
    "topic": "Go channel",
    "question": "Go channel kodunda ana akış nerede bloklanabilir?",
    "code": "ch:=make(chan int)\ngo worker(ch)\nx:=<-ch",
    "expected": "`<-ch` okuması gönderim yoksa bloklanabilir; channel senkronizasyon noktasıdır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Concurrency",
      "Go channel"
    ],
    "commonMistake": "Channel'ı array sanmak.",
    "shortAnswer": "Channel okuma/gönderme bloklayabilir.",
    "longAnswer": "Goroutine ve channel ayrımı, paylaşarak iletişim yerine iletişimle paylaşım ilkesi yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Go proje raporu"
  },
  {
    "id": "TRACE-021",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Dil tanıma"
    ],
    "topic": "Erlang pattern matching",
    "question": "`X = 3, X = 4.` neden hata olur?",
    "code": "X = 3,\nX = 4.",
    "expected": "`=` atama değil pattern matching; X 3'e bağlandıktan sonra 4 ile eşleşmez.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Erlang pattern matching"
    ],
    "commonMistake": "C/Java ataması gibi okumak.",
    "shortAnswer": "Pattern match hatası.",
    "longAnswer": "Atom/değişken, tek atama ve nokta sözdizimi belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Erlang proje raporu"
  },
  {
    "id": "TRACE-022",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Proje konusu",
      "Dil tanıma"
    ],
    "topic": "Scala trait/object",
    "question": "Scala trait ve object kavramlarını açıklayınız.",
    "code": "trait T\nobject Main",
    "expected": "trait mixin/davranış soyutlama; object singleton/static benzeri yapı; case class/match pattern matching sağlar.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Proje konusu",
      "Dil tanıma",
      "Scala trait/object"
    ],
    "commonMistake": "Object'i Java Object sınıfı sanmak.",
    "shortAnswer": "trait=mixin, object=singleton.",
    "longAnswer": "Java static ile Scala object farkı ve OOP+FP birleşimi yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Scala Dili-1.pdf"
  },
  {
    "id": "TRACE-023",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Static/dynamic scope değer takibi",
    "question": "Static ve dynamic scope için çıktıyı ayrı yazınız.",
    "code": "x=0\nbar(){print(x)}\nfoo(){x=1; bar()}",
    "expected": "Static lexical çevreye, dynamic çağrı zincirine bakar; x değeri buna göre değişir.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Static/dynamic scope değer takibi"
    ],
    "commonMistake": "Scope'u lifetime ile karıştırmak.",
    "shortAnswer": "Static: kod yapısındaki x; dynamic: çağrı zincirindeki en yakın x.",
    "longAnswer": "Önce `bar` fonksiyonunun tanımlandığı yer ile çağrıldığı yer ayrılır; scope zinciri çizilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 5.pdf"
  },
  {
    "id": "TRACE-024",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Pass-by-value/reference/value-result",
    "question": "`p(x,x)` çağrısını üç parametre geçiş modeliyle çözünüz.",
    "code": "procedure p(a,b){a=1; b=2}\nx=0\np(x,x)",
    "expected": "Value: actual değişmez; reference: aliasing ile aynı hücre anlık değişir; value-result: dönüş kopyalama sırası tuzaktır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Pass-by-value/reference/value-result"
    ],
    "commonMistake": "Value-result'ı reference sanmak.",
    "shortAnswer": "Value değişmez; reference alias; value-result sıra bağımlı.",
    "longAnswer": "Formal/actual eşleşmesi tabloyla gösterilir ve her atama adım adım izlenir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 10.pdf"
  },
  {
    "id": "TRACE-025",
    "type": "kod_yorumlama",
    "difficulty": "Orta",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Scope / binding"
    ],
    "topic": "Deep/shallow binding",
    "question": "Fonksiyon parametre geçişinde deep ve shallow binding sonuçlarını açıklayınız.",
    "code": "x=1\nf(){print(x)}\ng(h){x=2; h()}",
    "expected": "Deep fonksiyonun taşınan/tanımlandığı ortamı, shallow çağrıldığı andaki ortamı kullanır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Scope / binding",
      "Deep/shallow binding"
    ],
    "commonMistake": "Function pointer'ı yalnız adres sanmak.",
    "shortAnswer": "Deep tanım/gönderim ortamı; shallow çağrı ortamı.",
    "longAnswer": "Soruda sadece fonksiyon adresi değil referans ortamı problemi olduğu belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-026",
    "type": "kod_yorumlama",
    "difficulty": "Zor",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi"
    ],
    "topic": "Closure lifetime",
    "question": "Closure örneğinde `count` neden kaybolmaz?",
    "code": "make(){ count=0; return () => ++count }",
    "expected": "İç fonksiyon dış değişkeni yakalar; fonksiyon döndükten sonra ortam korunur ve ikinci çağrı 2 olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Fonksiyonel programlama",
      "Bellek yönetimi",
      "Closure lifetime"
    ],
    "commonMistake": "Her çağrıda count 0 olur sanmak.",
    "shortAnswer": "Closure ortamı korur; count ikinci çağrıda 2.",
    "longAnswer": "Closure = fonksiyon + lexical environment; lifetime stack süresini aşabilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 11.pdf"
  },
  {
    "id": "TRACE-027",
    "type": "kod_yorumlama",
    "difficulty": "Final tarzı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Bellek yönetimi"
    ],
    "topic": "Activation record",
    "question": "`fact(3)` için activation record sırasını yazınız.",
    "code": "fact(n){ if n==0 return 1; return n*fact(n-1) }",
    "expected": "fact(3), fact(2), fact(1), fact(0) ayrı kayıtlar oluşturur; dönüşler LIFO olur.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Bellek yönetimi",
      "Activation record"
    ],
    "commonMistake": "Tek yerel değişkenle recursion takip etmek.",
    "shortAnswer": "Her recursive çağrı ayrı stack frame.",
    "longAnswer": "Parametre, return address, local ve temporary alanları belirtilir.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 12.pdf"
  },
  {
    "id": "TRACE-028",
    "type": "kod_yorumlama",
    "difficulty": "Tuzaklı",
    "tags": [
      "Kod yorumlama",
      "Final ağırlıklı",
      "Nesne yönelimli programlama"
    ],
    "topic": "Dynamic binding OOP",
    "question": "`A obj = new B(); obj.draw();` hangi metodu çağırır?",
    "code": "class A{draw(){A}}\nclass B extends A{draw(){B}}\nA obj=new B(); obj.draw();",
    "expected": "Override varsa gerçek nesne tipi B olduğundan B.draw çalışır.",
    "rubric": [
      "4 puan: adım adım değer/scope takibi.",
      "3 puan: ilgili kavramı doğru adlandırma.",
      "2 puan: compile-time/run-time veya binding zamanını yazma.",
      "1 puan: kısa sonuç."
    ],
    "keywords": [
      "Final ağırlıklı",
      "Nesne yönelimli programlama",
      "Dynamic binding OOP"
    ],
    "commonMistake": "Referans tipi A diye A.draw sanmak.",
    "shortAnswer": "Çıktı B; runtime dispatch.",
    "longAnswer": "Referans tipi ile nesne tipi ayrılır; overloading/overriding farkı yazılır.",
    "whyImportant": "Kod yorumlama soruları finalde klasik ve test biçiminde gelebilir.",
    "source": "Konu 14.pdf"
  }
];
window.QUESTIONS = QUESTIONS;

const STORE_KEY="pd-final-progress-v2";
const state={search:"",type:"",difficulty:"",tags:new Set(),favOnly:false,wrongOnly:false,progress:JSON.parse(localStorage.getItem(STORE_KEY)||"{}")};
const $=id=>document.getElementById(id);
const allTags=[...new Set(QUESTIONS.flatMap(q=>q.tags||[]))].sort((a,b)=>a.localeCompare(b,"tr"));
const allDiffs=[...new Set(QUESTIONS.map(q=>q.difficulty))];
function save(){localStorage.setItem(STORE_KEY,JSON.stringify(state.progress))}
function record(id,status){state.progress[id]={...(state.progress[id]||{}),status,solved:true,last:new Date().toISOString()};save();render()}
function toggleFav(id){state.progress[id]={...(state.progress[id]||{}),favorite:!(state.progress[id]||{}).favorite};save();render()}
function filtered(){const term=state.search.trim().toLocaleLowerCase("tr");return QUESTIONS.filter(q=>{const p=state.progress[q.id]||{};const hay=[q.id,q.topic,q.question,q.source,q.code||"",q.expected||"",...(q.tags||[])].join(" ").toLocaleLowerCase("tr");if(term&&!hay.includes(term))return false;if(state.type&&q.type!==state.type)return false;if(state.difficulty&&q.difficulty!==state.difficulty)return false;if(state.favOnly&&!p.favorite)return false;if(state.wrongOnly&&p.status!=="wrong")return false;for(const t of state.tags)if(!q.tags.includes(t))return false;return true})}
function dashboard(){const solved=QUESTIONS.filter(q=>state.progress[q.id]?.solved).length;const good=QUESTIONS.filter(q=>state.progress[q.id]?.status==="correct").length;const bad=QUESTIONS.filter(q=>state.progress[q.id]?.status==="wrong").length;const fav=QUESTIONS.filter(q=>state.progress[q.id]?.favorite).length;$("dashboard").innerHTML=[["Toplam",QUESTIONS.length],["Çözülen",solved],["Doğru",good],["Yanlış",bad],["Favori",fav]].map(x=>`<div class="metric">${x[0]}<b>${x[1]}</b></div>`).join("")}
function escapeHtml(t){return (t||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toggleExplain(id){const el=$("exp-"+id); if(el) el.classList.toggle("visible")}
function toggleAnswer(id){const el=$("answer-"+id); if(el) el.classList.toggle("visible")}
function choose(qid,key){const q=QUESTIONS.find(x=>x.id===qid);record(qid,q.answer===key?"correct":"wrong");setTimeout(()=>{const a=$("answer-"+qid); if(a)a.classList.add("visible")},0)}
function optionHtml(q,o){const id=`${q.id}-${o.key}`;return `<div class="option"><strong>${o.key})</strong> ${o.text}<div><button onclick="choose('${q.id}','${o.key}')">Bu şıkkı seç</button><button onclick="toggleExplain('${id}')">Açıklamayı göster/gizle</button></div><div class="explanation" id="exp-${id}">${o.explanation}</div></div>`}
function qHtml(q){const p=state.progress[q.id]||{};let body=q.code?`<pre><code>${escapeHtml(q.code)}</code></pre>`:"";if(q.options){body+=q.options.map(o=>optionHtml(q,o)).join("")+`<div class="answerbox" id="answer-${q.id}">${q.answerExplanation}</div>`}else{body+=`<button onclick="toggleAnswer('${q.id}')">Beklenen cevabı göster/gizle</button><button onclick="record('${q.id}','correct')">Doğru say</button><button onclick="record('${q.id}','wrong')">Tekrar çalış</button><div class="answerbox" id="answer-${q.id}"><p><b>Beklenen:</b> ${q.expected}</p><p><b>Kısa:</b> ${q.shortAnswer}</p><p><b>Uzun:</b> ${q.longAnswer}</p><p><b>Yaygın hata:</b> ${q.commonMistake}</p><ul>${q.rubric.map(r=>`<li>${r}</li>`).join("")}</ul></div>`}return `<article class="question"><div class="meta"><span class="pill diff">${q.difficulty}</span><span class="pill">${q.type}</span>${q.tags.map(t=>`<span class="pill">${t}</span>`).join("")}</div><h2>${q.id} - ${q.topic}</h2><p>${q.question}</p>${body}<button onclick="toggleFav('${q.id}')">${p.favorite?"Favoriden çıkar":"Favorilere ekle"}</button>${p.solved?`<span class="pill">Durum: ${p.status}</span>`:""}<p class="source"><b>Neden önemli?</b> ${q.whyImportant}<br><b>Kaynak:</b> ${q.source}</p></article>`}
function render(){dashboard();const list=filtered();$("resultCount").textContent=`${list.length} soru gösteriliyor`;$("questions").innerHTML=list.map(qHtml).join("")}
function setup(){allDiffs.forEach(d=>$("difficultyFilter").innerHTML+=`<option value="${d}">${d}</option>`);$("tagFilters").innerHTML=allTags.map(t=>`<button class="chip" data-tag="${t}">${t}</button>`).join("");$("searchBox").oninput=e=>{state.search=e.target.value;render()};$("typeFilter").onchange=e=>{state.type=e.target.value;render()};$("difficultyFilter").onchange=e=>{state.difficulty=e.target.value;render()};$("favOnly").onchange=e=>{state.favOnly=e.target.checked;render()};$("wrongOnly").onchange=e=>{state.wrongOnly=e.target.checked;render()};$("tagFilters").onclick=e=>{if(!e.target.dataset.tag)return;const t=e.target.dataset.tag;state.tags.has(t)?state.tags.delete(t):state.tags.add(t);e.target.classList.toggle("active");render()};$("clearFilters").onclick=()=>{state.search=state.type=state.difficulty="";state.tags.clear();state.favOnly=state.wrongOnly=false;$("searchBox").value="";$("typeFilter").value="";$("difficultyFilter").value="";$("favOnly").checked=false;$("wrongOnly").checked=false;document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));render()};$("resetBtn").onclick=()=>{if(confirm("Tüm ilerleme silinsin mi?")){state.progress={};save();render()}};render()}
document.addEventListener("DOMContentLoaded",setup);
