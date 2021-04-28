# Where Can My Robot Go?
Category: Miscellaneous

## Description

> Where do robots find what pages are on a website?
> Hint:
*What does disallow tell a robot?*

# Solution

According to Google, `robots.txt` is a file that blocks search engines from indexing pages and assets on your site. With that knowledge, let's visit [https://ctflearn.com/robots.txt](https://ctflearn.com/robots.txt). We can see that page `70r3hnanldfspufdsoifnlds.html` is hidden from indexing. Visiting [the page](https://ctflearn.com/70r3hnanldfspufdsoifnlds.html) gives us our flag
```
CTFlearn{r0b0ts_4r3_th3_futur3}
```
