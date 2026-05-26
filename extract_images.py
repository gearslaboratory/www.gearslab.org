import fitz # PyMuPDF

doc = fitz.open("/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/01_Application/01_greenberg_tenure_application.pdf")
for i in range(len(doc)):
    page = doc.load_page(i)
    # Check if page contains "News" or similar text
    text = page.get_text()
    if "news" in text.lower() or "media" in text.lower() or "point cloud" in text.lower():
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"/mnt/c/Users/gears/git/www.gigafire.org/public/images/news/pdf_img_page{i}_{img_index}.{image_ext}"
            with open(image_filename, "wb") as f:
                f.write(image_bytes)
            print(f"Extracted {image_filename}")

