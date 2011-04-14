--- 
title: An update on the VIM switch
date: 14/04/2011


**Spoiler alert: this is extremely nerdy.**

Yesterday I spent quite some time trying to solve a bug I couldn't figure out. Maybe it was inexperience.

I was working on a Rails application and I copied some files from a tutorial I did. From that moment on, all my running tests that involved those files were running red, they were badly failing due to a file encoding problem.

Long story short, the copied files were saved in **us-ascii**, while all my configurations were running in **utf-8**.

I've tried multiple times to rewrite the files with Textmate forcing the encoding to utf-8, but it simply didn't work. Then I switched to VIM to do the same.

Here's what I did ([thank to this post on Stack Overflow](http://stackoverflow.com/questions/778069/how-can-i-change-a-files-encoding-with-vim/810490#810490)) after opening the file in VIM:

    :set bomb
    :set fileencoding=utf-8
    :wq

All files were correctly converted, making all my tests green again.

**Spoiler end: here comes the less nerdy part.**

I'm glad I'll be using VIM full time from now on. I've taken the time to set it up with some plugins (thanks to a [good starting point by Jeffrey Way](https://github.com/JeffreyWay/My-Vim-Repo)), customize appearance and integration, fine tune some commands. And for 95%, it works exactly the same on any OS. It takes some effort, but I've been shown that it's worth it.

It still surprises me that a software may last all these years getting always better (that goes for UNIX as well, but it's another story) and still being the best tool available.
