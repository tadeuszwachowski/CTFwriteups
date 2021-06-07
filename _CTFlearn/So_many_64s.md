---
layout: writeup
title: So many 64s
---
# So many 64s
Category: Cryptography

## Description

> Help! My friend stole my flashdrive that had the flag on it. When he gave it back the flag was changed! Can you help me decrypt it? [https://mega.nz/#!OHhUyIqA!H9WxSdG1O7eVcCm0dffggNB0-dBemSpBAXiZ0OXJnLk](https://mega.nz/#!OHhUyIqA!H9WxSdG1O7eVcCm0dffggNB0-dBemSpBAXiZ0OXJnLk)

## Solution

We download a *.txt* file containing a long string. Each Base64 decode makes the string shorter, so we can try to decode it manually, feeding the output into input using tools like [CyberChef](https://gchq.github.io/CyberChef/) or write a simple script to automate the work.

```python
import base64
message = open("flag.txt").read()

# decode if possible, if not - we decoded what we could, just print the message
while True:
    try:
        message = base64.b64decode(message)
    except Exception:
        break

print(bytes.decode(message))
```

We get our flag
```
ABCTF{pr3tty_b4s1c_r1ght?}
```