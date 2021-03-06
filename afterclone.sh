#!/bin/bash

source './styling.lib.sh'

LOG "Setting up worktree..."

LOG "All branches..."

git --no-pager branch

NEWLINE
LOG "Current worktree:"

git worktree list

NEWLINE
LOG "Adding other branches useing worktree..."

COMMAND "git worktree prune"
git worktree prune
COMMAND "git worktree add ./dev dev"
git worktree add ./dev dev
COMMAND "git worktree add ./shipyard shipyard"
git worktree add ./shipyard shipyard
COMMAND "git worktree add ./lab lab"
git worktree add ./lab lab
# remove those folders `trash dev lab shipyard && git worktree prune`

NEWLINE
LOG "Worktree now:"

git worktree list

NEWLINE