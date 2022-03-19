#!/bin/bash

source './styling.lib.sh'

for branch in $(git --no-pager branch | cut -c 3-); do
    if [ "$branch" != "master" ]; then

        LOG "status for '$branch'"

        pushd "$branch" >/dev/null || exit 1
        git status
        popd >/dev/null || exit 1

        NEWLINE
    fi
done