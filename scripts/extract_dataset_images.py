import fitz
import os

def extract_largest_image(pdf_path, output_path):
    try:
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
            print(f"Extracted {output_path} ({largest_size} bytes)")
        else:
            print(f"No images in {os.path.basename(pdf_path)}")
    except Exception as e:
        print(f"Error extracting from {pdf_path}: {e}")

if __name__ == '__main__':
    base_dir = "/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/05_Published_Research/"
    out_dir = "/mnt/c/Users/gears/git/www.gigafire.org/public/images/datasets/"
    
    mapping = {
        "35_Santos_et_al-2016-Ecological_Applications (1).pdf": "dataset_1_khanna_delta.png",
        "14_Santos et al. - 2009 - Use of Hyperspectral Remote Sensing to Evaluate Efficacy of Aquatic Plant Management.pdf": "dataset_2_khanna_sav.png",
        "31_journal.pone.0114648.PDF": "dataset_3_kruse_houston.png"
    }
    
    for pdf, out_name in mapping.items():
        extract_largest_image(os.path.join(base_dir, pdf), os.path.join(out_dir, out_name))
