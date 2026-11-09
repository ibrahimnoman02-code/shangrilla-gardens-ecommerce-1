import pypdf

reader = pypdf.PdfReader(r'C:\Users\Pc\.gemini\antigravity-ide\brain\0d4603c9-53cf-454a-98db-23d1a74ed7c0\.user_uploaded\media_1792400788929.pdf')
page = reader.pages[0]
res = page.get('/Resources', {})
xobj = res.get('/XObject', {})
if hasattr(xobj, 'get_object'):
    xobj = xobj.get_object()

print("XObjects found:", len(xobj))
for name, obj in xobj.items():
    o = obj.get_object()
    subtype = o.get('/Subtype')
    print(name, subtype)
    if subtype == '/Image':
        try:
            img = pypdf.filters.GenericFilter()
            data = o.get_data()
            ext = 'jpg' if o.get('/Filter') == '/DCTDecode' else 'png'
            out_file = f'extracted_menu_{name.replace("/", "")}.{ext}'
            with open(out_file, 'wb') as f:
                f.write(data)
            print(f'Successfully wrote {out_file} ({len(data)} bytes)')
        except Exception as e:
            print('Error extracting image:', e)
