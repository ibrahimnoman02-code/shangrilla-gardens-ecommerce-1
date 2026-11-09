import pypdf

reader = pypdf.PdfReader(r'C:\Users\Pc\.gemini\antigravity-ide\brain\0d4603c9-53cf-454a-98db-23d1a74ed7c0\.user_uploaded\media_1792400788929.pdf')
page = reader.pages[0]
contents = page.get_contents()
if contents:
    data = contents.get_data()
    print("Content stream bytes:", len(data))
    with open("content_stream.txt", "wb") as f:
        f.write(data)
    print("Saved content_stream.txt")
else:
    print("No contents")
