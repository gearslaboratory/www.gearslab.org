import urllib.request
import urllib.parse
import json
import re

def search(query):
    try:
        url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        snippets = re.findall(r'<a class="result__snippet[^>]*>(.*?)</a>', html, re.IGNORECASE | re.DOTALL)
        # clean html tags
        snippets = [re.sub(r'<[^>]+>', '', s).strip() for s in snippets]
        return snippets[:3]
    except Exception as e:
        return [str(e)]

alumni = [
    "Bailey Morrison ecology",
    "Johanson Onyegbula remote sensing",
    "Courtney Reents GIS",
    "Gunner Stone Microsoft",
    "Nathan Pavlovic Sonoma Technology"
]

for person in alumni:
    print(f"--- {person} ---")
    for s in search(person):
        print("  -", s)
