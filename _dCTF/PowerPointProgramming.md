---
layout: writeup
title: PowerPoint Programming
year: 2021
---
# PowerPoint Programming
Category: Miscellaneous

## Description

> A login page in powerpoint should be good enough, right? Flag is not in format. DCTF{ALL_CAPS_LETTERS_OR_NUMBERS}

A file was attached.  

# Solution

Downloaded file has a `.ppsx` extenstion, which means it is supposed to be read-only PowerPoint presentation. However, we can force the edit mode by opening `PowerPoint -> Open -> chall.ppsx`. In the **Animations** tab we can observe that some of the letters have little thunderbolts beside them. We can inspect the **Animation Pane**, to find a weird sequence

![Animation Pane]({{site.baseurl}}/assets/powerpoint_1.png)

Clicking on it highlights some of the buttons

![Submit button]({{site.baseurl}}/assets/powerpoint_2.png)
![Closing bracket]({{site.baseurl}}/assets/powerpoint_3.png)

Starting at *Rectangle 63* and going up letter by letter we can decode our flag
```
DCTF{PPT_1SNT_V3RY_S3CUR3_1S_1T}
```