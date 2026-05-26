import json
from bs4 import BeautifulSoup

def parse_people():
    with open('/home/jgreenberg/.gemini/antigravity/brain/531ea5a7-2bdc-4aaf-8778-64acc5676cef/scratch/weebly_export/www.gearslab.org/people.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    people = []
    
    # Weebly people are often in paragraph tags or headers near images.
    # A robust way is to just find all images and look at the text near them.
    # Wait, the user has a specific list of people.
    
    # Let's just hardcode the JSON with the image paths we know from weebly_content.json and the CV, 
    # but I'll write the script to just output the raw text blocks and images to help me build it perfectly.
    
    for img in soup.find_all('img'):
        src = img.get('src')
        alt = img.get('alt', '')
        parent = img.find_parent('div', class_='wsite-image')
        # actually Weebly uses spans and divs.
        
    # Better approach: dump all text blocks and images to a text file so I can map them accurately.
    pass

if __name__ == '__main__':
    parse_people()
