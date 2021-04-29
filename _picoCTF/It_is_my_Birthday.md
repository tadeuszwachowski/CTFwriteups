---
layout: writeup
title: It is my Birthday
year: 2021
---
# It is my Birthday
Category: Web exploitation

## Description

> I sent out 2 invitations to all of my friends for my birthday! I'll know if they get stolen because the two invites look similar, and they even have the same md5 hash, but they are slightly different! You wouldn't believe how long it took me to find a collision. Anyway, see if you're invited by submitting 2 PDFs to my website. 

[link](http://mercury.picoctf.net:57247/)


# Solution

After entering the site we can see two file uploads. Name of the challenge is a reference to the [Birthday paradox](https://en.wikipedia.org/wiki/Birthday_problem). It gives us a hint, that we somehow have to obtain or make two .pdf files, that should produce the same MD5 hash.

A little bit of googling, and we encounter two messages, that have the same hash. [message1.bin](marc-stevens.nl/research/md5-1block-collision/message1.bin),[message2.bin](marc-stevens.nl/research/md5-1block-collision/message2.bin). After renaming it to `message1.pdf` and `message2.pdf` we can upload it on the site. Now we can see some PHP code with our flag commented out

```
// FLAG: picoCTF{c0ngr4ts_u_r_1nv1t3d_40d81ca2}
```