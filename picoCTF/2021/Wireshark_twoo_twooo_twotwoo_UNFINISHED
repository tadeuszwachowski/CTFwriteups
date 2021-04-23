# Wireshark twoo twooo two twoo...
Category: Forensics

## Description

> Can you find the flag?

A file was attached.  

# Solution
We start similarly to <a href=Wireshark_doodooo_do_doo.md> part 1 </a>.
After opening `shark2.pcapng` with Wireshark we can see several captured packets. 
After searching for `pico` we discover some potential flags like
```
picoCTF{bfe48e8500c454d647c55a4471985e776a07b26cba64526713f43758599aa98b}
picoCTF{e1d0a752dc71121200f4bcb1b8cc2e03e84488df229b82196afbe0045ef025c4}
```
There's a lot more of them, so we can try to download all packets with this format and try to process it.
To do that, we export HTTP objects, with *flag* filter and merge them all into one file.
```
for f in flag*; do (cat "${f}"; echo) >> flags.txt; done
```
Now that we have all potential flags we'll try to process it with Python.
