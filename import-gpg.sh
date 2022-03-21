#!/bin/bash

source './styling.lib.sh'

# more about gpg keys:
# https://wiki.archlinux.org/title/GnuPG

IMPORT-GPG-KEY-FROM() {
        COMMAND "curl -s $1 | gpg --import"
        curl -s $1 | gpg --import
        NEWLINE
}

#
# github's webui's gpg key
# https://github.community/t/where-can-i-find-the-gpg-key-github-uses-for-merges/563
LOG "5DE3 E050 9C47 EA3C F04A  42D3 4AEE 18F8 3AFD EB23"
IMPORT-GPG-KEY-FROM https://github.com/web-flow.gpg

#
# zoorat's gpg key
LOG "0000 0586 360F 8791 A549  2251 1298 02DD A807 4345"
IMPORT-GPG-KEY-FROM https://raw.githubusercontent.com/z00rat/z00rat/master/00000586360F8791A5492251129802DDA8074345.public.gpg

#
#
#

LOG "to trust a key 'gpg --edit-key <email/key> trust quit'"
LOG "to locally sign the imported key a key 'gpg --lsign-key <email/key>'"
LOG "to see log with signatures 'git log --show-signature'"
