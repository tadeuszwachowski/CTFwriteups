---
layout: writeup
title: login
year: 2021
---
# {{ page.title }}
Category: Web

## Description

> Sam really need to get past this login portal but isn't able too, can you help him? [http://3.142.122.1:8889/](http://3.142.122.1:8889/)

# Solution

We can see a standard login page. Inspecting the source or more specifically `main.js` we notice the username (`din_djarin11`) and some password hash (`9ef71a8cd681a813cfd377817e9a08e5`). We could try reverse engineering the hashing function, but to me it seemed too complicated. We can copy the hash into some hash analyzer (I used [https://hashes.com/en/tools/hash_identifier](https://hashes.com/en/tools/hash_identifier)). Our hash is probably **MD5**. Paste it into [Crackstation](https://crackstation.net/) to get the password - `ir0nm4n`. Log in, download the file and get the flag
```
SHELL{th1s_i5_th3_wa7_845ad42f4480104b698c1e168d29b739}
```
