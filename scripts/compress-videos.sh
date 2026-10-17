#!/bin/bash
# Re-encodes background videos in public/ in place (H.264, no audio, web fast-start).
# Usage: npm install --no-save ffmpeg-static && bash scripts/compress-videos.sh public/purpose.mp4 ...
set -e
FFMPEG="node_modules/ffmpeg-static/ffmpeg.exe"

for f in "$@"; do
  before=$(stat -c%s "$f")
  tmp="${f}.tmp.mp4"
  "$FFMPEG" -hide_banner -loglevel error -y -i "$f" -vf "scale='min(1920,iw)':-2" -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart -an "$tmp"
  after=$(stat -c%s "$tmp")
  if [ "$after" -lt "$before" ]; then mv "$tmp" "$f"; else rm "$tmp"; after=$before; fi
  pct=$(awk -v b="$before" -v a="$after" 'BEGIN { printf "%.1f", 100*(1-a/b) }')
  echo "$f: $((before/1024))KB -> $((after/1024))KB (-${pct}%)"
done
