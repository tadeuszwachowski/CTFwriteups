---
layout: writeup
title: haxxor
year: 2021
---
# {{ page.title }}
Category: Cryptography

## Description

> Encrypted string : 0x2-0x19-0x14-0x1d-0x1d-0x2a-0x9-0x61-0x3-0x62-0x15-0xe-0x60-0x5-0xe-0x19-0x4-0x19-0x2c

## Solution

We'll use xortool to solve this challenge. Delete all `0x` and `-`, compliment single numbers with zeros to get `0219141d1d2a09610362150e60050e1904192c`. Save it in a file (I used file.hex). The command should look like this

```
xortool -x -b -p "SHELL" file.hex
```

`-x` means that the input is hex-encoded, `-b` stands for brute-force and `-p` is for supplying known plaintext. Run the command and read the output to get the flag

```
SHELL{X0R3D_1T_HUH}
```