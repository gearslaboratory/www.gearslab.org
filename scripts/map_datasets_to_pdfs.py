import fitz
import glob
import os

pdf_dirs = [
    "/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/05_Published_Research/",
    "/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/04_Theses_and_Dissertations/"
]

keywords = {
    "dataset_1_khanna_delta": "Sacramento-San Joaquin Delta genus and community",
    "dataset_2_khanna_sav": "Submersed Aquatic Vegetation community multi-year",
    "dataset_3_kruse_houston": "MASTER: Houston Airborne Campaign",
    "dataset_4_parra_lifeform": "Vegetative Lifeform Cover from Landsat",
    "dataset_5_morrison_alaska": "Alaska Downscaled 30-year climate normals",
    "dataset_6_xu_biomass": "LiDAR-Derived Aboveground Biomass"
}

def find_pdf_for_dataset():
    found_pdfs = {k: None for k in keywords}
    
    for pdf_dir in pdf_dirs:
        for pdf_path in glob.glob(os.path.join(pdf_dir, "*.pdf")):
            try:
                doc = fitz.open(pdf_path)
                # just read first 3 pages
                text = ""
                for i in range(min(3, len(doc))):
                    text += doc.load_page(i).get_text()
                
                text_lower = text.lower()
                
                # Check for matches
                if "khanna" in text_lower and "delta" in text_lower:
                    found_pdfs["dataset_1_khanna_delta"] = pdf_path
                if "aquatic" in text_lower and "vegetation" in text_lower:
                    if not found_pdfs["dataset_2_khanna_sav"]:
                        found_pdfs["dataset_2_khanna_sav"] = pdf_path
                if "houston" in text_lower and "airborne" in text_lower:
                    found_pdfs["dataset_3_kruse_houston"] = pdf_path
                if "fractional" in text_lower and "lifeform" in text_lower:
                    found_pdfs["dataset_4_parra_lifeform"] = pdf_path
                if "alaska" in text_lower and "downscale" in text_lower:
                    found_pdfs["dataset_5_morrison_alaska"] = pdf_path
                if "biomass" in text_lower and "california" in text_lower and "lidar" in text_lower:
                    found_pdfs["dataset_6_xu_biomass"] = pdf_path
            except Exception as e:
                pass
                
    for k, v in found_pdfs.items():
        print(f"{k}: {os.path.basename(v) if v else 'NOT FOUND'}")

if __name__ == '__main__':
    find_pdf_for_dataset()
