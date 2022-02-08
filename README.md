# Glasstone & Dolan - The Effects of Nuclear Weapons - 1977 edition
This project to manage the conversion of the available PDFs of the 1977 edition into HTML. If you have worked with the PDFs, you will know while readable in PDF format, text selection is difficult. In addtion, the scan is purely black and white, so any photographs found in the printed edition are very poor in the PDF version. 

## Project Plan
The base project plan is complete each step before moving on. This focuses on having the base document complete before enhancing it. 
1. Convert the text portion from the PDFs into pure text. This will allow a review for errors that may have been introduced in the OCR process. For example, the OCR system likes to convert 1 into I. Most equations will be skipped during this process, as will tables, graphs and photos.
2. Create the base HTML documents from the text files. Some discussion will be needed for the proper semantic structre of headings, and some other elements as well. Generic graph and photos assets will be used as placeholders
3. There are some tables in the document, their conversion might happen during step 2, or as its own task cycle. 
4. The equations in the book will be a challenge. The current plan is to use https://github.com/mathjax/ as the solution to display them
5. Adding in the various graphs will be done in two phases. The first phase will be just displaying them as images taken from the PDFs. Phase 2 would be recreating them as SVGs. This will be a large undertaking, and would occur later in the project.
6. The photographs will be added last. While some already exist in digital form, others will need to reaquired. This may be scans from the printed book, or contact the DOD/DOE for source images. 
