---
layout: writeup
title: Under Development
year: 2021
---
# {{ page.title }}
Category: Web

## Description

> [http://3.142.122.1:8885/](http://3.142.122.1:8885/)

## Solution

The only thing we can see after entering the site is the information, that it is still under development. After inspecting the source, we notice *<!--TODO: Develop auth, buy some cookies from the supermarket-->*

We have a cookie! We can decode the contents of it (using **CyberChef** for example) if we simply use *URL Decode* and then *Base64 Decode*. The given string is `user`. Switch it to `admin`, encode with Base64 and supply to the cookie. Refresh and get the flag.

```
SHELL{0NLY_0R30_8e1a91a632ecaf2dd6026c943eb3ed1e}
```