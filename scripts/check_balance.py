import pathlib
import re

s = pathlib.Path(r"d:/aug repo/seraphcode-web/public/assets/sc_logo.svg").read_text(encoding="utf-8")
# From logo-mark to hud
a = s.find('<g id="logo-mark">') + len('<g id="logo-mark">')
b = s.find('<g id="hud-frame"')
chunk = s[a:b]
print("prefix:", repr(chunk[:400]))
open_g = len(re.findall(r"<g\b", chunk))
close_g = len(re.findall(r"</g>", chunk))
print("Between logo-mark and hud: <g count", open_g, "</g> count", close_g, "delta", open_g - close_g)
suffix = chunk[-120:]
print("suffix:", repr(suffix))
