# Wireshark doo dooo do doo...
Category: Forensics

## Description

> Can you find the flag?

A file was attached.  

# Solution

After opening `shark.pcapng` with Wireshark we can see several captured packets. 
After sorting them by Source IP, selecting `192.168.38.104` and using option *Follow TCP Stream* we discover something similar to our flag, but the letters seem shifted.
```
Gur synt vf cvpbPGS{c33xno00_1_f33_h_qrnqorrs}
```
It's clearly a caesar cipher. After running `rot13` on it we get
```
$ rot13
Gur synt vf cvpbPGS{c33xno00_1_f33_h_qrnqorrs}
The flag is picoCTF{p33kab00_1_s33_u_deadbeef}
```

