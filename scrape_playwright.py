from playwright.sync_api import sync_playwright
import urllib.request
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Try Nikki
        try:
            page.goto("https://csm.fresnostate.edu/about/directory/ees/inglis-nicole.html", timeout=15000)
            img = page.locator("img[alt*='Nikki Inglis']")
            if img.count() > 0:
                src = img.first.get_attribute("src")
                if src:
                    if not src.startswith("http"):
                        src = "https://csm.fresnostate.edu" + src
                    print("Found Nikki:", src)
                    urllib.request.urlretrieve(src, "/mnt/c/Users/gears/git/www.gigafire.org/public/images/people/nikki-inglis.jpg")
        except Exception as e:
            print("Failed Nikki:", e)
            
        browser.close()

if __name__ == "__main__":
    run()
