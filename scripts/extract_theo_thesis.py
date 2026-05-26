import fitz
doc = fitz.open('/mnt/c/Users/gears/git/www.gigafire.org/docs/greenberg_promotion/04_Theses_and_Dissertations/07-HARTSOOK-THESIS-2021.pdf')
print(doc.load_page(0).get_text())
