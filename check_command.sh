#!/bin/sh
#yorkie 2.0.0

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# check command node is exist? for git-cz command
check_node () {
  command_exists node || {
    echo
    echo "command 'node' is not exists and skip the hook"
    exit 0
  }
}

check_node
