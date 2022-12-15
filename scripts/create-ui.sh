#!/bin/bash

if [ "$1" == "" ] || [ "$2" == "" ]
  then
    echo "! WARNING please write path component or pages and name"
    exit 0
fi

ROOT_DIR="$( cd . && pwd)"

folder_pages="$ROOT_DIR/ui"

function make_folder() {
    echo "CREATE FOLDER $2 in $folder_pages/$1"

    mkdir "$folder_pages/$1/$2"

    echo "FOLDER WITH NAME ✨ $1 ✨ HAS BEEN CREATED BY PATH $folder_pages/$1/$2"
}

function make_structure() {
    echo "CREATE STRUCTURE $2"
    export_file="export * from './$2'"

    templates="$ROOT_DIR/templates/$1"
    current_ui="$folder_pages/$1/$2"

    echo "templates: $templates"
    echo "folder_pages: $folder_pages"

    cat "$templates/index.tsx" >> "$current_ui/index.tsx"
    cat "$templates/styled.tsx" >> "$current_ui/styled.tsx"
    cat "$templates/hooks.ts" >> "$current_ui/hooks.ts"
    echo "$export_file" >> "$folder_pages/$1/index.ts"

    echo "✨✨✨ STRUCTURE for folder ✨ $1 ✨ CREATED SUCCESSFULLY ✨✨✨"
}

make_folder "$1" "$2"

make_structure "$1" "$2"
