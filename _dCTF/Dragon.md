---
layout: writeup
title: Dragon
---
# Dragon
Category: Miscellaneous

## Description

> Hiding in plain sight

A file was attached.  

# Solution

The downloaded file is a `.png`, the dCTF mascot <br>

<img src="{{site.baseurl}}/assets/dragon.png" width="40vw">

After tweaking the image in Gimp for a while (or Photoshop), we can notice that the flag emerges after turning off red and green alpha channels and adjusting color levels

<img src="{{site.baseurl}}/assets/dragon-solved.png" width="40vw">
```
dctf{N0w_Y0u_s3e_m3}
```