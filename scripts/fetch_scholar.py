import json
from scholarly import scholarly

def fetch_publications():
    author_id = 'M3AZCp0AAAAJ'
    print(f"Fetching author profile for {author_id}...")
    try:
        author = scholarly.search_author_id(author_id)
        scholarly.fill(author, sections=['publications'])
        
        pubs = []
        for pub in author.get('publications', []):
            pubs.append({
                'title': pub.get('bib', {}).get('title', ''),
                'year': pub.get('bib', {}).get('pub_year', ''),
                'citation': pub.get('bib', {}).get('citation', ''),
                'num_citations': pub.get('num_citations', 0),
                'url': pub.get('pub_url', '')
            })
            
        # Sort by year descending
        pubs.sort(key=lambda x: str(x['year']) if x['year'] else '0', reverse=True)
        
        out_path = '/mnt/c/Users/gears/git/www.gigafire.org/src/data/publications.json'
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(pubs, f, indent=2)
            
        print(f"Successfully saved {len(pubs)} publications to {out_path}")
    except Exception as e:
        print(f"Error fetching from Google Scholar: {e}")

if __name__ == "__main__":
    fetch_publications()
