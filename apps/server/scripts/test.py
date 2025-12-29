# pip install ankisync2

import json
from collections import defaultdict
from ankisync2 import Apkg

def apkg_to_json(apkg_path: str) -> str:
    """
    Lê um arquivo .apkg e retorna um JSON com:
    {
      "notes": [
        {"id": 123, "fields": ["Front", "Back", ...], "tags": ["tag1","tag2"]}
      ]
    }
    """
    result = {"notes": []}

    with Apkg(apkg_path) as apkg:
        # Notas: campos em 'flds' separados por \x1f; tags geralmente como string com espaços
        sql = """
        SELECT n.id, n.flds, n.tags
        FROM notes n
        """
        cur = apkg.db.database.execute_sql(sql)

        for nid, flds, tags in cur.fetchall():
            # Campos do Anki vêm concatenados por \x1f (SOH)
            fields = flds.split("\x1f") if isinstance(flds, str) else []
            # Tags geralmente são string com espaços; filtra vazios
            tag_list = []
            if isinstance(tags, str):
                tag_list = [t for t in tags.strip().split() if t]

            result["notes"].append({
                "id": int(nid),
                "fields": fields,
                "tags": tag_list
            })

    return json.dumps(result, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    caminho = "../src/test/teste-python.apkg"
    print(apkg_to_json(caminho))
