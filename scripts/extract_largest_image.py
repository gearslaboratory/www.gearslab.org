import fitz # PyMuPDF

def extract_largest_image(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    largest_image = None
    largest_size = 0
    
    for i in range(len(doc)):
        page = doc.load_page(i)
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            size = len(image_bytes)
            if size > largest_size:
                largest_size = size
                largest_image = image_bytes
    
    if largest_image:
        with open(output_path, "wb") as f:
            f.write(largest_image)
        print(f"Successfully extracted image of size {largest_size} bytes to {output_path}")
    else:
        print("No images found.")

if __name__ == '__main__':
    extract_largest_image(
        "/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/04_Theses_and_Dissertations/05_EASSON-THESIS-2021.pdf",
        "/mnt/c/Users/gears/git/www.gigafire.org/public/images/news/real_point_cloud.png"
    )
