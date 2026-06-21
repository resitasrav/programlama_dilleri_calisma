# Programlama Dilleri Final Hazirlik

Bu klasor final calismasi icin derli toplu son yapidir. Dosyalar konu ve kullanim amacina gore ayrildi; kok dizinde yalniz baslangic sayfasi, README ve final raporu tutulur.

## Ilk Acilacak Dosya

`index.html`

Interaktif soru sistemine dogrudan girmek icin:

`01_INTERAKTIF_CALISMA_SISTEMI/index.html`

Internet gerekmez. Sistem tamamen offline calisir.

## Klasor Yapisi

- `01_INTERAKTIF_CALISMA_SISTEMI`: Offline HTML/CSS/JS soru bankasi.
- `02_CALISMA_NOTLARI`: Final ozetleri, konu konu notlar, dil karsilastirma, kod tanima rehberi ve tahmini sorular.
- `03_KAYNAKLAR`: Ders slaytlari, final agirlikli konular, proje dili raporlari ve ek materyaller.
- `04_VERI_VE_SORU_BANKASI`: Kaynak envanteri ve cikarilmis metin verileri.
- `05_RAPORLAR`: Kaynak envanteri ve uretim raporlari.
- `06_ARACLAR`: Yeniden uretim ve validasyon scriptleri.

## Kaynak Klasorleri

- `03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09`: Vize temeli ama finalle baglantili slaytlar.
- `03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15`: Final agirlikli slaytlar.
- `03_KAYNAKLAR/03_PROJE_DILLERI_RUST_GO_SCALA_ERLANG`: Proje odevlerinden cikan dil raporlari.
- `03_KAYNAKLAR/04_EK_MATERYALLER`: Ek PDF, eski HTML, prompt ve orijinal zip arsivi.

## Soru Bankasi

- Toplam soru: 161
- Test: 85
- Klasik: 24
- Dil tanima: 24
- Kod yorumlama: 28

Tarayici ilerlemesi `localStorage` icinde saklanir:

- `pd-final-progress-v2`: cozulme, dogru/yanlis, favori bilgileri
- `pd-final-filters-v2`: son filtre ve arama tercihleri

## Onerilen Calisma Sirasi

1. `02_CALISMA_NOTLARI/06_FINAL_ICIN_EN_KRITIK_50_BILGI.md`
2. `02_CALISMA_NOTLARI/01_GENEL_FINAL_OZETI.md`
3. `02_CALISMA_NOTLARI/04_KOD_PARCA_DIL_TANIMA_REHBERI.md`
4. `01_INTERAKTIF_CALISMA_SISTEMI/index.html`
5. Yanlis yapilan ve favori sorularin tekrari
6. `02_CALISMA_NOTLARI/07_HOCA_TARZI_TAHMINI_SORULAR.md`

## Validasyon

Kok klasorden:

```powershell
python 06_ARACLAR/validate_system.py
node 06_ARACLAR/validate_interactions.js
```

Kontroller soru sayisi, cevap anahtari, bos aciklama, ID tekrari, etiket/kaynak varligi, localStorage, favori ve aciklama goster/gizle islevlerini kapsar.
