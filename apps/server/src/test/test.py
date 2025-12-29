# pip install ankisync2

import json
import gc
import time
import os
import shutil
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
    apkg = None
    
    try:
        apkg = Apkg(apkg_path)
        
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
        
        # Força fechamento da conexão do banco
        if hasattr(apkg.db, 'database') and hasattr(apkg.db.database, 'close'):
            apkg.db.database.close()
            
    except Exception as e:
        print(f"Erro durante processamento: {e}")
        raise
    finally:
        # Limpeza manual mais robusta
        if apkg:
            try:
                # Força fechamento de recursos
                if hasattr(apkg.db, 'database') and hasattr(apkg.db.database, 'close'):
                    apkg.db.database.close()
                    
                # Força garbage collection
                gc.collect()
                
                # Aguarda um pouco para liberar recursos no Windows
                time.sleep(0.1)
                
                # Tenta limpar manualmente
                if hasattr(apkg, 'folder') and os.path.exists(apkg.folder):
                    try:
                        shutil.rmtree(apkg.folder)
                    except PermissionError as pe:
                        print(f"Aviso: Não foi possível limpar pasta temporária {apkg.folder}: {pe}")
                        # Tenta forçar remoção após aguardar
                        time.sleep(0.5)
                        try:
                            shutil.rmtree(apkg.folder)
                        except:
                            print(f"Pasta temporária {apkg.folder} pode precisar ser removida manualmente")
                            
            except Exception as cleanup_error:
                print(f"Erro na limpeza: {cleanup_error}")

    return json.dumps(result, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    caminho = "./teste2-python.apkg"
    print(apkg_to_json(caminho))
