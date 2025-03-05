#!/bin/bash

# Install Bun if not already installed
if ! command -v bun &> /dev/null
then
    echo "Bun is not installed. Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc
fi

# Install dependencies
bun install

# Build Tailwind CSS
bun run tw

mkdir -p dist
cp -r src/* dist/
cp -r tailwind-gen/ dist/tailwind-gen/
 