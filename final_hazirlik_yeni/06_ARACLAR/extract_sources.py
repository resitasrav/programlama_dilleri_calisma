from build_final_system import ensure_dirs, collect_sources

if __name__ == "__main__":
    ensure_dirs()
    inventory, extracts = collect_sources()
    print({"inventory": len(inventory), "extracts": len(extracts)})
