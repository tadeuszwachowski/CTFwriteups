---
layout: writeup
title: Secure website
year: 2021
---
# Secure website
Category: Web

## Description

> Some students have built their most secure website ever. Can you spot their mistake? [http://dctf1-chall-very-secure-site.westeurope.azurecontainer.io/](http://dctf1-chall-very-secure-site.westeurope.azurecontainer.io/)

# Solution

So we are given the source code of the site 
```
<?php
    if (isset($_GET['username']) and isset($_GET['password'])) {
        if (hash("tiger128,4", $_GET['username']) != "51c3f5f5d8a8830bc5d8b7ebcb5717df") {
            echo "Invalid username";
        }
        else if (hash("tiger128,4", $_GET['password']) == "0e132798983807237937411964085731") {
            $flag = fopen("flag.txt", "r") or die("Cannot open file");
            echo fread($flag, filesize("flag.txt"));
            fclose($flag);
        }
        else {
            echo "Try harder";
        }
    }
    else {
        echo "Invalid parameters";
    }
?> 
```

We can decrypt the **username** hash (for example on [this](http://hashmash.info) site) to get `admin`. The password is not as simple to crack. However, the code contains a vulnerability - the `==` sign can be exploited with *Magic* - specifically *Magic Hashes*. They can be found [here](https://www.whitehatsec.com/blog/magic-hashes/). Search for `tiger128,4` to get `479763000`. Input it as the password and boom - we get the flag

<img src="{{site.baseurl}}/assets/secure_website_magichash.png" width="500vw">

```
dctf{It's_magic._I_ain't_gotta_explain_shit.}
```
