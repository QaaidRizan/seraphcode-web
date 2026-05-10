import pathlib

p = pathlib.Path(r"d:/aug repo/seraphcode-web/public/assets/sc_logo.svg")
s = p.read_text(encoding="utf-8")
old = 'meet"/></g></g></g>\n</g>\n<g id="hud-frame"'
new = 'meet"/></g></g>\n</g>\n<g id="hud-frame"'
if old not in s:
    raise SystemExit("pattern not found")
s = s.replace(old, new, 1)
p.write_text(s, encoding="utf-8")
print("repaired")
