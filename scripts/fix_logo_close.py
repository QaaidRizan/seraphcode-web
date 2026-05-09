import pathlib

p = pathlib.Path(__file__).resolve().parents[1] / "assert" / "sc_logo.svg"
s = p.read_text(encoding="utf-8")
needle = '</g></g></g>\n<g id="hud-frame"'
if needle in s:
    s = s.replace(needle, '</g></g></g></g>\n<g id="hud-frame"', 1)
    p.write_text(s, encoding="utf-8")
    print("Inserted closing </g> for logo-mark")
else:
    i = s.find('<g id="hud-frame"')
    print("Needle not found. Context:", repr(s[i - 50 : i + 35]))
