"""One-off: enhance public/assets/sc_logo.svg for dark navbar visibility."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "assets" / "sc_logo.svg"
OUT = SRC  # overwrite in place

PAD = 85  # padding around original 375×375 art for viewBox expansion
VB_W = 375 + 2 * PAD
VB_MIN_X = -PAD
VB_MIN_Y = -PAD

NEW_SVG_OPEN = (
    f'<svg class="logo-cyber" xmlns="http://www.w3.org/2000/svg" '
    f'xmlns:xlink="http://www.w3.org/1999/xlink" '
    f'width="512" height="512" '
    f'viewBox="{VB_MIN_X} {VB_MIN_Y} {VB_W} {VB_W}" '
    f'preserveAspectRatio="xMidYMid meet" version="1.0">'
)

STYLE_BLOCK = """
<style type="text/css"><![CDATA[
  .logo-cyber #logo-mark {
    filter: url(#neonGlow);
    transition: filter 0.22s ease;
  }
  .logo-cyber:hover #logo-mark {
    filter: url(#neonGlowStrong);
  }
]]></style>
"""

EXTRA_DEFS = """
<filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceAlpha" stdDeviation="2.8" result="blur1"/>
  <feFlood flood-color="#00F5D4" flood-opacity="0.72" result="flood1"/>
  <feComposite in="flood1" in2="blur1" operator="in" result="glow1"/>
  <feGaussianBlur in="glow1" stdDeviation="1.2" result="glow2"/>
  <feMerge>
    <feMergeNode in="glow2"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
<filter id="neonGlowStrong" x="-120%" y="-120%" width="340%" height="340%" color-interpolation-filters="sRGB">
  <feGaussianBlur in="SourceAlpha" stdDeviation="4.5" result="blur1"/>
  <feFlood flood-color="#00F5D4" flood-opacity="0.92" result="flood1"/>
  <feComposite in="flood1" in2="blur1" operator="in" result="glow1"/>
  <feGaussianBlur in="glow1" stdDeviation="2" result="glow2"/>
  <feMerge>
    <feMergeNode in="glow2"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
"""

# HUD around original art 0..375 (in user space before viewBox shift, art is still 0-375)
# With expanded viewBox starting at -PAD, frame at 0,0 size 375×375
HUD = f"""
<g id="hud-frame" pointer-events="none">
  <rect x="0" y="0" width="375" height="375" fill="none" stroke="#163040" stroke-width="1.5"/>
  <g stroke="#00F5D4" stroke-width="2" fill="none" stroke-linecap="square">
    <polyline points="2,18 2,2 18,2"/>
    <polyline points="357,2 373,2 373,18"/>
    <polyline points="373,357 373,373 357,373"/>
    <polyline points="18,373 2,373 2,357"/>
  </g>
</g>
"""


def luminance(hex6: str) -> float:
    h = hex6.strip("#").lower()
    if len(h) != 6:
        return 0.5
    r = int(h[0:2], 16) / 255.0
    g = int(h[2:4], 16) / 255.0
    b = int(h[4:6], 16) / 255.0
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def map_fill(hex_color: str) -> str:
    h = hex_color.lower()
    if h in ("#ffffff", "#fff"):
        return "#FFFFFF"
    if h in ("#00f5d4",):
        return "#00F5D4"
    lum = luminance(h[1:])
    if lum < 0.45:
        return "#00F5D4"
    return "#FFFFFF"


def recolor_body(body: str) -> str:
    def repl_fill(m):
        c = m.group(1)
        if not re.match(r"^[0-9a-fA-F]{6}$", c):
            return m.group(0)
        return f'fill="{map_fill("#" + c)}"'

    body = re.sub(r'fill="#([0-9a-fA-F]{6})"', repl_fill, body)

    def repl_stroke(m):
        c = m.group(1)
        if not re.match(r"^[0-9a-fA-F]{6}$", c):
            return m.group(0)
        return f'stroke="{map_fill("#" + c)}"'

    body = re.sub(r'stroke="#([0-9a-fA-F]{6})"', repl_stroke, body)

    def bump_sw(m):
        try:
            v = float(m.group(1))
        except ValueError:
            return m.group(0)
        v = max(1.5, v)
        if v == int(v):
            return f'stroke-width="{int(v)}"'
        return f'stroke-width="{v}"'

    body = re.sub(r'stroke-width="([\d.]+)"', bump_sw, body)
    body = re.sub(
        r'(<path\b[^>]*\bstroke="#[^"]+")(?![^>]*\bstroke-width=)([^>]*>)',
        r'\1 stroke-width="1.5"\2',
        body,
    )
    return body


def main():
    raw = SRC.read_text(encoding="utf-8")
    m = re.match(r"^<svg\b[^>]*>", raw)
    if not m:
        raise SystemExit("No opening svg tag")
    rest = raw[m.end() :]

    defs_end = rest.find("</defs>")
    if defs_end == -1:
        raise SystemExit("No </defs>")
    defs_end += len("</defs>")
    defs_part = rest[:defs_end]
    body = rest[defs_end:]
    body_stripped = body.rstrip()
    if not body_stripped.endswith("</svg>"):
        raise SystemExit("Unexpected structure")
    # Do not use rfind("</svg>") — the base64 image payload can contain that substring.
    body_core = body_stripped[: -len("</svg>")].rstrip()

    # Insert our defs right after <defs>
    defs_insert_at = defs_part.find("<defs>") + len("<defs>")
    new_defs = (
        defs_part[:defs_insert_at] + EXTRA_DEFS + defs_part[defs_insert_at:]
    )

    body_core = recolor_body(body_core)

    out = (
        NEW_SVG_OPEN
        + STYLE_BLOCK
        + new_defs
        + '<g id="logo-mark">'
        + body_core
        + "</g>"
        + HUD
        + "</svg>"
    )
    OUT.write_text(out, encoding="utf-8")
    print("Wrote", OUT, "chars", len(out))


if __name__ == "__main__":
    main()
