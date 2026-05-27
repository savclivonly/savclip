#!/bin/bash

# Target folder
DEST_DIR="/Users/ramzan/Pictures/savclip/public/images/blog"
mkdir -p "$DEST_DIR"

# Source folder (artifact folder)
SRC_DIR="/Users/ramzan/.gemini/antigravity-ide/brain/49a0d2f7-63c3-4d3c-89e1-4cb31f124077"

# Copy files
cp "$SRC_DIR/reels_guide_blog_1779817906827.png" "$DEST_DIR/reels-guide.png"
cp "$SRC_DIR/tiktok_guide_blog_1779817940760.png" "$DEST_DIR/tiktok-guide.png"
cp "$SRC_DIR/hashtags_guide_blog_1779817985195.png" "$DEST_DIR/hashtags-guide.png"
cp "$SRC_DIR/youtube_shorts_blog_1779818048844.png" "$DEST_DIR/youtube-shorts.png"
cp "$SRC_DIR/viral_reels_blog_1779818116472.png" "$DEST_DIR/viral-reels.png"
cp "$SRC_DIR/ig_bio_blog_1779818278898.png" "$DEST_DIR/ig-bio.png"

echo "All blog images copied successfully to $DEST_DIR!"
