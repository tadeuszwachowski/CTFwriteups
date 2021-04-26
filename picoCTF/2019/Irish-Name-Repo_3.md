# Irish-Name-Repo 1
Category: Web Exploitation

## Description

> There is a secure website running at [https://jupiter.challenges.picoctf.org/problem/54253/](https://jupiter.challenges.picoctf.org/problem/54253/) or [http://jupiter.challenges.picoctf.org:54253](http://jupiter.challenges.picoctf.org:54253). Try to see if you can login as admin!

# Solution

This is the follow-up to [part nr 1](./Irish-Name-Repo_1.md). Once again, we'll focus on the *Admin login*. Thsi time, we only have a `password` input available. Setting `debug=1` in Burp reveals the following response
```
password: password
SQL query: SELECT * FROM admin where password = 'cnffjbeq'
```
We can easily check that the password is rot13 encoded. To insert `' or 1=1;--` as a password we simply use some rot13 tool to get `' be 1=1;--`. Inputting this solves the challenge
```
Logged in!
Your flag is: picoCTF{3v3n_m0r3_SQL_7f5767f6}
```