---
layout: writeup
title: Collide
year: 2021
---
# {{ page.title }}
Category: Web

## Description

> [http://3.142.122.1:9335/](http://3.142.122.1:9335/)

## Solution

Our goal is to somehow supply two different parameters (`shell` and `pwn`) which hash is the same. Normally, we'll look for something like Magic Hashes or known collisions, but SHA256 has none of that whatsoever. The values are supplied via GET parameter, so we can control the *type* of the variable. If we input our variables as arrays, we can bypass the SHA256 check. Our payload looks like this

```
http://3.142.122.1:9335/?shell[]=x&pwn[]=y
```

We get our flag

```
SHELL{1nj3ct_&_coll1d3_9d25f1cfdeb38a404b6e8584bec7a319}
```