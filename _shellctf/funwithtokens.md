---
layout: writeup
title: Fun with Tokens
year: 2021
---
# {{ page.title }}
Category: Web

## Description

> I have got secret information that this webapp is vulnerable. Did i fail in verifying passwords ?
[http://3.142.122.1:9334/](http://3.142.122.1:9334/)

# Solution

The site contains two links - **Admins** and **Login**. For some, simply clicking the links doesn't work - to get to the subsite you have to change the URL by hand. 

In the `/login` page we have a simple login form. Let's start **BurpSuite** to see what happens under the hood. I supplied `user` and `pass` as the credentials. Submitting the form brings us back to main page, like nothing happened. BurpSuite however reveals, that we recieved a token in the response

<img src="{{site.baseurl}}/assets/shell_burp.png" width="500vw">

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhmcmUiLCJwYXNzd29yZCI6ImNuZmYiLCJhZG1pbiI6InNueWZyIiwiaWF0IjoxNjIzMDQ4NDY4fQ.Zzu_yPrjAIGVJyCCIwRYGWCTbQOg6spD98OVT9bxSik
```

We can decode it using [jwt.io](https://jwt.io) for example.

<img src="{{site.baseurl}}/assets/shelljwt1.png" width="500vw">

If we decode the username and password in the token with ROT13 we'll get the credentials we typed in earlier. Decoding *snyfr* as the "admin" parameter gives *false*. We still are missing the username and the secret used to sign the tokens. 

Inspecting the main page shows us these comments:

```
<!-- /admin is where the fun's at XD -->
<!--The secret you seek is in the environment-->
```

Little bit of googling, trial and error and if we input `.env` as the subsite (http://3.142.122.1:9334/.env) we get this response:

```
Cannot GET /.env
```

We somehow have to find a way to download the **.env** file.


If we enter the `/adminNames` page, we recieve a prompt for downloading a file containing names of the admins (duh...). BurpSuite reveals that the file name is supplied via a parameter `(GET /getFile?file=admins HTTP/1.1)`. If we switch the file name to `../.env` we can download the suspicious document. Open it to get

```
secret=G00D_s0ld13rs_k33p_s3cret5
```

Combine all the information we've got, ROT13 encode one of the admin usernames (din_djarin11 -> qva_qwneva11), change the admin parameter to **true** (gehr in ROT13) and supply the secret to get the token

<img src="{{site.baseurl}}/assets/shelljwt2.png" width="500vw">

Now, request the `/admin` subsite, add header

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InF2YV9xd25ldmExMSIsInBhc3N3b3JkIjoiY25mZiIsImFkbWluIjoiZ2VociIsImlhdCI6MTYyMzA0ODQ2OH0.wRp_JD6wk6bRxffubCPrDQMTcHxVFU8VWl4lcaBQ4i0
```

and send! (If you have problems with recieving the response, use cURL or Postman). We get the response

```
Hey din_djarin11! Here's your flag: FURYY{G0x3af_q0_z4gg3e_4r91ns4506s384q460s0s0p6r9r5sr4n}
```

Decode the flag with ROT13 to get

```
SHELL{T0k3ns_d0_m4tt3r_4e91af4506f384d460f0f0c6e9e5fe4a}
```