#!/bin/bash

echo " -> status of all branches"
git --no-pager branch -v -v -a

echo " -> git push --all origin"
git push --all origin

echo " -> git push --tags"
git push --tags
