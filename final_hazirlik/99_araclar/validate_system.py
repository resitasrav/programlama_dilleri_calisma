import json, re
from pathlib import Path
root = Path(__file__).resolve().parents[1]
app = root / "02_INTERAKTIF_SISTEM" / "app.js"
text = app.read_text(encoding="utf-8")
m = re.search(r"const QUESTIONS = (\[.*?\]);\nwindow\.QUESTIONS", text, re.S)
assert m, "QUESTIONS bulunamadi"
qs = json.loads(m.group(1))
ids = set()
counts = {}
for q in qs:
    assert q["id"] not in ids, q["id"]
    ids.add(q["id"])
    counts[q["type"]] = counts.get(q["type"], 0) + 1
    assert q.get("tags"), q["id"]
    assert q.get("source"), q["id"]
    if q["type"] in ("test", "dil_tanima"):
        correct = [o for o in q["options"] if o.get("correct")]
        assert len(correct) == 1, q["id"]
        assert q["answer"] == correct[0]["key"], q["id"]
        for o in q["options"]:
            e = o.get("explanation", "")
            assert "Neden" in e and "Konu" in e and "tuzak" in e.lower(), q["id"] + o.get("key","")
    else:
        for f in ["expected", "rubric", "commonMistake", "shortAnswer", "longAnswer"]:
            assert q.get(f), q["id"] + f
assert len(qs) >= 140, len(qs)
assert counts.get("test", 0) >= 80, counts
assert counts.get("klasik", 0) >= 20, counts
assert counts.get("dil_tanima", 0) >= 20, counts
assert counts.get("kod_yorumlama", 0) >= 20, counts
print(json.dumps({"status":"ok","questions":len(qs),"counts":counts}, ensure_ascii=False, indent=2))
