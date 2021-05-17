---
layout: writeup
title: This one is really basic
year: 2021
---
# This one is really basic
Category: Cryptography

## Description

> The answer to life, the universe, and everything.

A file was attached.  

# Solution

The string in our file looks like *Base64* encoded. One iteration is not enough, so we can do it manually with a tool like [CyberChef](https://gchq.github.io/CyberChef/) or write a simple script to do it for us
```
import base64
message = open("cipher.txt").read()

while True:
    try:
        message = base64.b64decode(message)
    except Exception:
        break

print(bytes.decode(message))
```

We get our flag
```
dctf{Th1s_l00ks_4_lot_sm4ll3r_th4n_1t_d1d}
```