import fitz # PyMuPDF
import glob
import os

def extract_news_images():
    pdf_dir = "/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/08_Popular_Press_Coverage/"
    out_dir = "/mnt/c/Users/gears/git/www.gigafire.org/public/images/news/"
    pdfs = glob.glob(os.path.join(pdf_dir, "*.pdf"))
    
    count = 1
    for pdf_path in pdfs:
        doc = fitz.open(pdf_path)
        extracted = False
        for i in range(len(doc)):
            if extracted: break
            page = doc.load_page(i)
            image_list = page.get_images(full=True)
            for img_index, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                ext = base_image["ext"]
                
                # skip very small images (like logos)
                if len(image_bytes) < 10000:
                    continue
                    
                image_filename = f"{out_dir}/news_real_{count}.{ext}"
                with open(image_filename, "wb") as f:
                    f.write(image_bytes)
                print(f"Extracted {image_filename} from {os.path.basename(pdf_path)}")
                count += 1
                extracted = True
                if count > 3: return

if __name__ == '__main__':
    extract_news_images()
