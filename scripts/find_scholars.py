import urllib.request
import urllib.parse
import re

people = [
    "Taylor Brown",
    "Adriano Matos",
    "Theodore Hartsook",
    "Gunner Stone",
    "Johanson Onyegbula",
    "Nikki Inglis",
    "Laura Wade",
    "Adriana Parra",
    "Lee Easson",
    "Katelyn Josifko",
    "Bailey D. Morrison",
    "Courtney Reents",
    "Nathan Pavlovic",
    "Yi Zou"
]

for person in people:
    try:
        query = person + " ecology OR remote sensing OR forestry google scholar profile"
        url = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote(query)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        # Look for scholar.google.com/citations?user=
        match = re.search(r'href="[^"]*(https://scholar\.google\.[a-z\.]+/citations\?user=[a-zA-Z0-9_-]+)[^"]*"', html)
        if match:
            print(f"{person}: {match.group(1)}")
        else:
            print(f"{person}: Not found")
    except Exception as e:
        print(f"{person}: Error - {e}")
