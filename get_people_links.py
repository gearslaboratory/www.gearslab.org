from bs4 import BeautifulSoup

html = open('/home/jgreenberg/.gemini/antigravity/brain/531ea5a7-2bdc-4aaf-8778-64acc5676cef/scratch/weebly_export/www.gearslab.org/people.html').read()
soup = BeautifulSoup(html, 'html.parser')

for a in soup.find_all('a'):
    text = a.get_text().strip()
    href = a.get('href')
    if href and ('Linkedin' in text or 'Profile' in text or 'Website' in text or 'CV' in text or 'LinkedIn' in text):
        print(f"{text}: {href}")
