#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE_DIR="$REPO_ROOT/.agents/skills"
DEST_DIR="${CODEX_HOME:-$HOME/.codex}/skills"

SKILLS=(
  gtmbrain
  openmart-prospecting
  local-list-enriching
  local-emailing
  local-cold-calling
  b2b-prospecting
  b2b-enriching
  b2b-emailing
  b2b-cold-calling
  seo
)

mkdir -p "$DEST_DIR"

for skill in "${SKILLS[@]}"; do
  src="$SOURCE_DIR/$skill"
  dest="$DEST_DIR/$skill"

  if [[ ! -d "$src" ]]; then
    echo "Skipping missing skill: $skill" >&2
    continue
  fi

  if [[ -L "$dest" || -e "$dest" ]]; then
    rm -rf "$dest"
  fi

  ln -s "$src" "$dest"
  echo "Installed $skill -> $dest"
done

echo
echo "Installed Codex skills to $DEST_DIR"
echo "Restart Codex to pick up the new skills."
