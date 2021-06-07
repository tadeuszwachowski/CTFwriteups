---
layout: writeup
title: Hidden message
year: 2021
---
# Hidden message
Category: Miscellaneous

## Description

> This image looks familiar...

A file was attached.  

## Solution

We'll use a program called `zsteg`, used to detect hidden data in PNG and BMP. It can be installed with `gem install zsteg` or via GitHub. After running it, the first line in output returns our flag
```
dctf{sTeg0noGr4Phy_101}
```