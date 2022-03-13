---
layout: writeup
title: ICMP
year: 2022
---
# ICMP
Category: Stegnanography

## Description

> none 

A file was attached.  

## Solution

The downloaded file is a `.pcap`. To get the flag, sort the packets by **seq**, gather data from **id** and decode to get the flag.  <br>

Code:
```python
import pyshark
import base64
cap = pyshark.FileCapture('icmp.pcap')

packets = [0] * 32

flag = ''

for packet in cap:
    try:
        seq = int(packet.icmp.seq)
        packets[seq-1] = chr(int(packet.icmp.ident))
    except:
        pass

print(base64.b64decode(''.join(packets) + "=").decode())
```

```
dvCTF{h1dden_1n_the_1d}
```