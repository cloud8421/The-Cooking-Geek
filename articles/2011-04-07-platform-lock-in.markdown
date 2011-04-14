--- 
title: Platform lock-in
date: 07/04/2011

Despite the fact that there’s no chance to avoid platform lock-in, I’m spending some time thinking about how to avoid that considering my actual usage patterns. I also need to say that in this context platform lock-in means a situation where I would not be able to switch from Mac to any other platform without losing sensible data, that means stuff that I made (software, pictures, etc.) or downloaded (movies, music).

<more>

### Text and code

The good thing about being a web developer is that you essentially have to deal with text. It doesn’t matter if it’s Php, Ruby or Javascript, it’s always text that can be read by any machine in the world.

Same goes for any other important piece of text I write. Even if it’s something that needs to be processed (uploaded, pasted in a layout, sent by email) it starts as a text that will be stored in a plain format in a specific folder. While this may seem paranoid at first, it saves from a series of specific issues:

- content is separated from its representation. It can be reused in another form, for example.
- it’s easy to backup, small and portable.
- can be open and edited from any operating system and hardware.
- can be synced at blazing speed with [Dropbox](http://www.dropbox.com/).

Any tool I use needs to comply with this system. Lucky for me, there are some great ones out there that can sit on top of this configuration ([nvALT](http://brettterpstra.com/project/nvalt/) on the Mac and [iA Writer](http://www.informationarchitects.jp/en/writer-for-ipad/) on the iPad).

### Pictures

I'm not really into photography of any kind, so I have a limited amount of pictures. They're stored in iPhoto, however it's easy to open the [iPhoto](http://www.apple.com/ilife/iphoto/) library folder and get out the files. In case of platform change, I'd lose albums and some metadata, but I don't think there's a way to have these same features without a software (maybe with a clever folder structure, but's still an incomplete procedure).

### Videos

My videos are all on an external drive I replace every two years. None of them is in a particularly locked format and I've successfully opened them in any os I'd use in case of platform change.

### Other data

I don't use any data collection software (like [Evernote](http://www.evernote.com/) or [Yojimbo](http://www.barebones.com/products/yojimbo/)) and rely on [Pinboard](http://pinboard.in/) for anything web related. I don't have any concerns as Pinboard offers cool exporting options and in the worst case I could build myself a small tool to store this data.

### Being paranoid

While this may sound being paranoid, it's not if you make a living using software you choose. There's no company to blame if you find yourself with a useless chunk of data you can't open anymore. I've seen some friends locked down in formats they don't control anymore, forced to buy upgrades they'd have avoided if possible.
As a final piece, I also spend a few hours every month to catch up with Linux desktops to see if they would be a valid alternative for my needs. What comes out is that the main difference would be my code editor of choice, and that's why I should dig deep again in [Vim](http://www.vim.org/), especially on the Linux platform.
