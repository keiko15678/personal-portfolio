#!/bin/bash

AZURE_STORAGE_ACCOUNT_NAME=ire1
AZURE_STORAGE_ACCOUNT_PASSWORD=G+BL17l8is6IGHvIz1deTibh6ydSp2WYtLiKW5nvh379bXKJJtEq1FjmRY+MLn7BlpqsEP/XMSaOQPlwvQnkpw==

OUTPUT_STR=""
for file in static/*; do
  echo "$(basename "$file")"
  ./azure-blob-upload.sh /"$file" "$file" $AZURE_STORAGE_ACCOUNT_NAME $AZURE_STORAGE_ACCOUNT_PASSWORD
  OUTPUT_STR+="⭐ "$file" uploaded.\n"
done

printf $OUTPUT_STR
echo 🤘 Deploy Azure Blob Storage complete.
