---
layout: writeup
title: Taking LS
---
# Taking LS
Category: Forensics

## Description

> Just take the Ls. Check out this zip file and I be the flag will remain hidden. [https://mega.nz/#!mCgBjZgB!_FtmAm8s_mpsHr7KWv8GYUzhbThNn0I8cHMBi4fJQp8](https://mega.nz/#!mCgBjZgB!_FtmAm8s_mpsHr7KWv8GYUzhbThNn0I8cHMBi4fJQp8)


## Solution

Downloaded file is a .zip archive. Unzip and we can find a folder called `The Flag`. Enter it, run `ls -la` command to find `.ThePassword` directory. Enter again and view `ThePassword.txt` with help of `cat` or similar command
```
Nice Job!  The Password is "Im The Flag".
```
Wrapping the password into our flag format we get
```
CTFlearn{Im The Flag}
```