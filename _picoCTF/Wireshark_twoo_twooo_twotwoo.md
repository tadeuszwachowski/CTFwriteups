---
layout: writeup
title: Wireshark twoo twooo two twoo...
year: 2021
---
# Wireshark twoo twooo two twoo...
Category: Forensics

## Description

> Can you find the flag?

A file was attached.  

## Solution
We start similarly to <a href=Wireshark_doodooo_do_doo.md> part 1 </a>.
After opening `shark2.pcapng` with Wireshark we can see several captured packets. 
After searching for `pico` we discover some potential flags like
```
picoCTF{bfe48e8500c454d647c55a4471985e776a07b26cba64526713f43758599aa98b}
picoCTF{e1d0a752dc71121200f4bcb1b8cc2e03e84488df229b82196afbe0045ef025c4}
```
There's a lot more of them, so we can try to download all packets with this format and try to process it.
To do that, we export HTTP objects, with *flag* filter and merge them all into one file. One way to do it is;
```
for f in flag*; do (cat "${f}"; echo) >> flags.txt; done
```
<br>
Ufortunately, an attempt to decode any of the flags leaves us with no answer.
<h3>WARNING: As of date (25 April 2021) the website `reddshrimpandherring.com` is unfortunately DOWN.</h3>
<br>
After searching a bit longer, we notice lots of queries for different subdomains of `reddshrimpandherring.com`. After visiting this website, before our eyes emerges this text

```
Congrats! Was that tooooo easy?

Flag: cGljb0NURntmMXNoeV9zMXR1NHRpMG5fc2VsYmF0X3liYm9iX2VsdHRpbH0=
```
After decoding it with Base64 we get `picoCTF{f1shy_s1tu4ti0n_selbat_ybbob_elttil}`. Sadly, as the domain name might suggest, it is a red herring.
Analysing the DNS traffic further, we notice `fQ==` in one of the subdomains. It resembles the ending of Base64 encoding. 
To combine suspected message, we apply this filter `dns and ip.dst == 18.217.1.57`, sort by `No.` and type the subdomains into a Base64 decoder.

```
cGljb0NURntkbnNfM3hmMWxfZnR3X2RlYWRiZWVmfQ==
picoCTF{dns_3xf1l_ftw_deadbeef}
```
Then we paste our flag into picoCTF website to get the points.
