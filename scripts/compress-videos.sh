#!/bin/bash
set -e
FFMPEG="node_modules/ffmpeg-static/ffmpeg.exe"
FILES=("public/LB1.mp4" "public/related-video aslpc.mp4" "public/video/aslpc-overview.mp4")

for f in "${FILES[@]}"; do
  before=$(stat -c%s "$f")
  tmp="${f}.tmp.mp4"
  "$FFMPEG" -y -i "$f" -vf "scale='min(1920,iw)':-2" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -an "$tmp" 2>&1 | tail -2
  mv "$tmp" "$f"
  after=$(stat -c%s "$f")
  pct=$(awk -v b="$before" -v a="$after" 'BEGIN { printf "%.1f", 100*(1-a/b) }')
  echo "$f: $((before/1024))KB -> $((after/1024))KB (-${pct}%)"
done
