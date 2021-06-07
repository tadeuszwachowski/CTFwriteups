---
layout: writeup
title: encoder
year: 2021
---
# {{ page.title }}
Category: Cryptography

## Description

> can you decrypt this text : "ZOLSS{W1G_D3HY_4_T45R}"

> NOTE: do not shift the numbers and the special charecters( '{' , '}' , '_' ).
 
## Solution

We can notice that same letters in the plaintext (LL in shell) correspond to same letters in ciphertext (SS in ZOLSS). We deduct that it is probably some ROT cipher. Some trial and error and we see that ROT19 gives us good answer

```
SHELL{P1Z_W3AR_4_M45K}
```