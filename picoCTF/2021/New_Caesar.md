# New Caesar
Category: Cryptography

## Description

> We found a brand new type of encryption, can you break the secret code? (Wrap with *picoCTF{}*) 

A file was attached.  

# Solution

```
LOWERCASE_OFFSET = 97
ALPHABET = 'abcdefghijklmnop'
```
After analysing the Python file we know it works like this:
1. Take the plain text and key, check if key is of length `1` and in range `a-p`.
2. Encode with Base16 (take the letter, represent it with binary, split into higher 4 bits and lower 4 bits, change their base to decimal and check which letter from **ALPHABET** variable it is)
3. For each letter, check its integer representation. Do it for the key also. Calculate the difference between **LOWERCASE_OFFSET** (97), add the diffenences together, make it modulo 16 and check which letter from **ALPHABET** variable it is

To decode it, we must reverse this process and brute-force the key. Example script may look like this
```python
import string

LOWERCASE_OFFSET = ord("a")  # 97
ALPHABET = string.ascii_lowercase[:16]  # a-p

def b16_decode(ciphered,key):
    dec = ""
    for i in range( int( len(ciphered)/2 ) ):
        b1 = "{0:04b}".format(ALPHABET.index(ciphered[2*i]))
        b2 = "{0:04b}".format(ALPHABET.index(ciphered[2*i+1]))
        dec += chr(int(b1+b2,2))
    return dec

def rev_shift(ciphered,key):
    dec = ""
    for c in ciphered:
        i = ALPHABET.index(c)
        t1 = i - (ord(key)-97)
        if t1 < 0:
            t1 += 16
        return chr(t1+97)
        

def main():
    enc = "mlnklfnknljflfjljnjijjmmjkmljnjhmhjgjnjjjmmkjjmijhmkjhjpmkmkmljkjijnjpmhmjjgjj"
    for key in ALPHABET:
        dec = ""
        for c in enc:
            dec += rev_shift(c,key)
        flag = b16_decode(dec,key)
        print(key,": ",flag)


if __name__ == '__main__':
    main()

```
Most of the keys return gibberish, but the `g` key returns `et_tu?_5723f4e71a0736d3b1d19dde4279ac03`. It is a reference tof William Shakespeare's play *Julius Caesar*.
Wrapping the answer into flag format, we get our answer
```
picoCTF{et_tu?_5723f4e71a0736d3b1d19dde4279ac03}
``` 