---
layout: writeup
title: anonym
year: 2021
---
# {{ page.title }}
Category: Web

## Description

> Anonymous are back and they really hate robots.

[http://3.142.122.1:8887](http://3.142.122.1:8887)

## Solution

So we can take a hint from the description and look for something connected to robots. The first thing that comes to mind is `robots.txt` file. 

Wikipedia states
*Robots.txt is a standard used by websites to communicate with web crawlers and other web robots. The standard specifies how to inform the web robot about which areas of the website should not be processed or scanned.*

Browse for `http://3.142.122.1:8887/robots.txt` and find **Disallow: /yfhdgvs.txt**. Visit given subsite and get the flag

```
SHELL{n0_ro80t5_4llow3d_50886509749a98ef14ec2bc45c57958e}
```