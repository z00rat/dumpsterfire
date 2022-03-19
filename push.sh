#!/bin/bash

source './styling.lib.sh'

LOG "Status of all branches"
git --no-pager branch -v -v -a

NEWLINE
LOG "Pushing commites to origin"
COMMAND "git push --all origin"
git push --all origin

NEWLINE
LOG "Pushing tags to origin"
COMMAND "git push --tags"
git push --tags

NEWLINE