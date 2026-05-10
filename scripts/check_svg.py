s = open(r"d:\aug repo\seraphcode-web\public\assets\sc_logo.svg", encoding="utf-8").read()
needle = "<g id=\"logo-mark\">"
i = s.find(needle)
print("logo-mark idx", i)
j = s.find("</defs>")
print("after defs snippet:", repr(s[j:j+250]))
# count g opens after defs
k = s.find(needle)
if k < 0:
    print("MISSING logo-mark wrapper!")
tail = s[-600:]
print("tail", tail)
