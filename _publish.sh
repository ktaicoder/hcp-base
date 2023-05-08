#!/usr/bin/env bash

set -e

SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
cd "${SCRIPT_DIR}"

yarn build

yarn prepare-publish
cd _tmp

npm publish . --access=public

cd ..
rm -rf _tmp
