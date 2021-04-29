# flag_shop
Category: General Skills

## Description

> There's a flag shop selling stuff, can you buy a flag?
Connect with `nc jupiter.challenges.picoctf.org 4906`

A file was attached. 

# Solution

After connecting to the server and selecting option nr **2** we can see 
```
Currently for sale
1. Defintely not the flag Flag
2. 1337 Flag
```

The second flag cost is too high for our balance, so we have to find a way to make it go higher. The easiest option would be to input negative value in the **1** option, but unfortunately our program is prepared for that. However, if we type in the *int* maximum value `2147483647` we get:
```
The final cost is: -900

Your current balance after transaction: 2000
```

To make our balance higher, we simply subtract from the maximum value. Inserting `2147482000` should do the trick.
```
The final cost is: -1483200

Your current balance after transaction: 1485200
```

Indeed, our balance is now sufficient to buy the second flag. We get the answer:
```
YOUR FLAG IS: picoCTF{m0n3y_bag5_9c5fac9b}
```