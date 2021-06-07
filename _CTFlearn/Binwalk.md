---
layout: writeup
title: Binwalk
---
# Binwalk
Category: Forensics

## Description

> Here is a file with another file hidden inside it. Can you extract it? [https://mega.nz/#!qbpUTYiK!-deNdQJxsQS8bTSMxeUOtpEclCI-zpK7tbJiKV0tXYY](https://mega.nz/#!qbpUTYiK!-deNdQJxsQS8bTSMxeUOtpEclCI-zpK7tbJiKV0tXYY)

## Solution

Downloaded file is an image. Running `binwalk --dd='.*'` command on the image extracts all files hidden in the .jpeg. One of them is a PNG, containing the flag
```
ABCTF{b1nw4lk_is_us3ful}
```  