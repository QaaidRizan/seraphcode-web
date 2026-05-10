import pathlib

s = pathlib.Path(r"d:/aug repo/seraphcode-web/public/assets/sc_logo.svg").read_text(encoding="utf-8")
idx = 0
while True:
    i = s.find("</defs>", idx)
    if i < 0:
        break
    print("</defs> at", i)
    idx = i + 1
