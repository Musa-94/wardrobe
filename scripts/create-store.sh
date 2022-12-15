#!/bin/bash

if [ "$1" == "" ]
  then
    echo "! WARNING please write store name"
    exit 0
fi

ROOT_DIR="$( cd . && pwd)"

folder_path="$ROOT_DIR/stores"

function make_folder() {
    echo "CREATE FOLDER: ✨ $1 ✨ at path: $folder_path"
    templates="$ROOT_DIR/templates/stores"

    mkdir "$folder_path/$1"

    cat "$templates/index.ts" >> "$folder_path/$1/index.ts"

    echo "✨✨✨ STORE FOR ✨✨✨ $1 ✨✨✨ HAS BEEN CREATED ✨✨✨"
}

make_folder "$1"
