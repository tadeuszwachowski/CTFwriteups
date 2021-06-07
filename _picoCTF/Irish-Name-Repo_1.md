---
layout: writeup
title: Irish-Name-Repo 1
year: 2019
---
# Irish-Name-Repo 1
Category: Web Exploitation

## Description

> There is a website running at [https://jupiter.challenges.picoctf.org/problem/33850/](https://jupiter.challenges.picoctf.org/problem/33850/) or [http://jupiter.challenges.picoctf.org:33850](http://jupiter.challenges.picoctf.org:33850). Do you think you can log us in? Try to see if you can login!

## Solution

The place where we should look for potential flag is the *Admin login*. Inspecting the page reveals that we are sending three parameters - `username`, `password` and `debug`. We can modify the request with Burp and set `debug=1`. The response looks like this
```
username: user
password: pass
SQL query: SELECT * FROM users WHERE name='user' AND password='pass'
Login failed.
```
That looks like a classic SQL injection. To perform the attack we send `admin` as username and `' or 1=1;--` as password. As a response we recieve
```
Logged in!
Your flag is: picoCTF{s0m3_SQL_f8adf3fb}
```