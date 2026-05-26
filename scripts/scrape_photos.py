import requests
from bs4 import BeautifulSoup
import os
import urllib.parse

def download_image(url, save_path):
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        response.raise_for_status()
        with open(save_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded: {save_path}")
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def scrape_fresno_state(save_dir):
    url = "https://csm.fresnostate.edu/about/directory/ees/inglis-nicole.html"
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        soup = BeautifulSoup(response.text, 'html.parser')
        img_tag = soup.find('img', {'alt': 'Nikki Inglis'})
        if img_tag and img_tag.get('src'):
            img_url = urllib.parse.urljoin(url, img_tag.get('src'))
            download_image(img_url, os.path.join(save_dir, "nikki-inglis.jpg"))
    except Exception as e:
        print(f"Error scraping Fresno State: {e}")

def scrape_csiro(save_dir):
    url = "https://people.csiro.au/p/a/adriana-parraruiz"
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        soup = BeautifulSoup(response.text, 'html.parser')
        # find the profile image. It usually has a class like 'profile-image' or is the first img inside main content
        img_tag = soup.find('img', class_='avatar') # guessing class
        if not img_tag:
            # try to find an img with 'Adriana' in alt
            img_tag = soup.find('img', alt=lambda x: x and 'Adriana' in x)
        if img_tag and img_tag.get('src'):
            img_url = urllib.parse.urljoin(url, img_tag.get('src'))
            download_image(img_url, os.path.join(save_dir, "adriana-parra-new.jpg"))
    except Exception as e:
        print(f"Error scraping CSIRO: {e}")

def scrape_gunner(save_dir):
    url = "https://gunnerstone.github.io/"
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        soup = BeautifulSoup(response.text, 'html.parser')
        img_tag = soup.find('img') # usually the first image on a personal site is the profile pic
        if img_tag and img_tag.get('src'):
            img_url = urllib.parse.urljoin(url, img_tag.get('src'))
            download_image(img_url, os.path.join(save_dir, "gunner-stone-new.jpg"))
    except Exception as e:
        print(f"Error scraping Gunner's site: {e}")

if __name__ == "__main__":
    out_dir = "/mnt/c/Users/gears/git/www.gigafire.org/public/images/people"
    scrape_fresno_state(out_dir)
    scrape_csiro(out_dir)
    scrape_gunner(out_dir)
