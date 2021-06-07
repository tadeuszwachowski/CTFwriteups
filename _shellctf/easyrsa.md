---
layout: writeup
title: EASY-RSA
year: 2021
---
# {{ page.title }}
Category: [CATEGORY]

## Description

> n = 1763350599372172240188600248087473321738860115540927328389207609428163138985769311
> e = 65537
> c = 33475248111421194902497742876885935310304862428980875522333303840565113662943528

A file was attached.  

## Solution

To decrypt the flag we have to get `p` and `q` - two factors that multiply to `n`. Using [factor.db](http://www.factordb.com/) we get 

```
p = 31415926535897932384626433832795028841
q = 56129192858827520816193436882886842322337671
```

Now we have to compute `phi = (p-1)*(q-1)`, `d` - inverse of `e` modulo `phi` and then we can compute our plaintext. Example script in Python:

```python
from Crypto.Util.number import long_to_bytes
import libnum
import sys

def compute_gcd(x, y):

   while(y):
       x, y = y, x % y
   return x

def compute_lcm(x, y):
   lcm = (x*y)//compute_gcd(x,y)
   return lcm

def decrypt(pk, ciphertext):
    #Unpack the key into its components
    key, n = pk
    #Generate the plaintext based on the ciphertext and key using a^b mod m
    plain = [chr((char ** key) % n) for char in ciphertext]
    #Return the array of bytes as a string
    return ''.join(plain)

n = 1763350599372172240188600248087473321738860115540927328389207609428163138985769311
e = 65537
c = 33475248111421194902497742876885935310304862428980875522333303840565113662943528

# from factordb
p = 31415926535897932384626433832795028841
q = 56129192858827520816193436882886842322337671

phi = (p-1)*(q-1)
d = pow(e,-1,phi)

plaintext = pow(c,d,n)
print(long_to_bytes(plaintext))
```

Our flag

```
shell{switchin_to_asymmetric}
```