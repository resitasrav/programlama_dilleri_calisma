import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INV_PATH = ROOT / "04_VERI_VE_SORU_BANKASI" / "source_inventory.json"

PATHS = {
    "Ders Sunumları.zip": "03_KAYNAKLAR/04_EK_MATERYALLER/Proje_Odevleri_Orijinal_Arsiv.zip",
    "Ders Sunumları.zip::Ders Sunumları/25360859334programlamadilleridonemproesi.pdf": "03_KAYNAKLAR/03_PROJE_DILLERI_RUST_GO_SCALA_ERLANG/Proje_Raporu_01_Go_Goroutine_Channel.pdf",
    "Ders Sunumları.zip::Ders Sunumları/ProgramlamaDilleriProje_23360859051_İsmailBİLGİN.pdf": "03_KAYNAKLAR/03_PROJE_DILLERI_RUST_GO_SCALA_ERLANG/Proje_Raporu_02_Rust_Ownership_Borrowing.pdf",
    "Ders Sunumları.zip::Ders Sunumları/Programlama_Dilleri_Ödev_Raporu_MadinaYusupova_24360859922.pdf": "03_KAYNAKLAR/03_PROJE_DILLERI_RUST_GO_SCALA_ERLANG/Proje_Raporu_03_Erlang_Process_Message_Passing.pdf",
    "Ders Sunumları.zip::Ders Sunumları/Scala Dili-1.pdf": "03_KAYNAKLAR/03_PROJE_DILLERI_RUST_GO_SCALA_ERLANG/Proje_Raporu_04_Scala_Trait_Object_Pattern_Matching.pdf",
    "index.html": "03_KAYNAKLAR/04_EK_MATERYALLER/Ek_Materyal_Eski_Index.html",
    "Konu 1.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_01_Programlama_Dillerine_Giris.pdf",
    "Konu 2.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_02_Dil_Tasarimi_ve_Degerlendirme.pdf",
    "Konu 3.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_03_Syntax_Semantics_BNF.pdf",
    "Konu 4.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_04_Syntax_Analizi_Agaclar.pdf",
    "Konu 5.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_05_Isimler_Binding_Scope.pdf",
    "Konu 6.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_06_Veri_Tipleri_Bellek_Lifetime.pdf",
    "Konu 7.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_07_Ifadeler_Type_Checking_Side_Effect.pdf",
    "Konu 8.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_08_Kontrol_Yapilari_Secim.pdf",
    "Konu 9.pdf": "03_KAYNAKLAR/01_VIZE_TEMELI_KONU_01_09/Konu_09_Donguler_Kontrol_Akisi.pdf",
    "Konu 10.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_10_Alt_Programlar_Parametre_Gecisi.pdf",
    "Konu 11.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_11_Function_Parameter_Binding_Closure_Coroutine.pdf",
    "Konu 12.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_12_Activation_Record_Stack_Frame.pdf",
    "Konu 13.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_13_ADT_Veri_Soyutlama.pdf",
    "Konu 14.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_14_OOP_Inheritance_Dynamic_Binding.pdf",
    "Konu 15.pdf": "03_KAYNAKLAR/02_FINAL_AGIRLIKLI_KONU_10_15/Konu_15_Concurrency_Synchronization.pdf",
    "programlama_dilleri.pdf": "03_KAYNAKLAR/04_EK_MATERYALLER/Ek_Materyal_Programlama_Dilleri.pdf",
    "programlama_dilleri_kısa.pdf": "03_KAYNAKLAR/04_EK_MATERYALLER/Ek_Materyal_Programlama_Dilleri_Kisa.pdf",
    "PROMPT.md": "03_KAYNAKLAR/04_EK_MATERYALLER/Prompt_Uretim_Talimati.md",
}


def main():
    inventory = json.loads(INV_PATH.read_text(encoding="utf-8"))
    for item in inventory:
        item["stored_as"] = PATHS.get(item["source"], item.get("stored_as", ""))
    INV_PATH.write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding="utf-8")

    lines = ["# Kaynak Envanteri", ""]
    for item in inventory:
        lines.append(f"- {item['source']} -> `{item['stored_as']}` ({item['category']})")
    (ROOT / "05_RAPORLAR" / "KAYNAK_ENVANTERI.md").write_text(
        "\n".join(lines) + "\n", encoding="utf-8"
    )

    report_path = ROOT / "05_RAPORLAR" / "URETIM_RAPORU.json"
    report = json.loads(report_path.read_text(encoding="utf-8"))
    report["klasor_yapisi"] = {
        "uygulama": "01_INTERAKTIF_CALISMA_SISTEMI",
        "notlar": "02_CALISMA_NOTLARI",
        "kaynaklar": "03_KAYNAKLAR",
        "veri": "04_VERI_VE_SORU_BANKASI",
        "raporlar": "05_RAPORLAR",
        "araclar": "06_ARACLAR",
    }
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
