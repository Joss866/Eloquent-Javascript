#!/bin/bash
FILE="$1"
externalprogram "$FILE"

sed -E '$FILE/console.(log|debug|info|...|count)\((.*)\);?//g'
