--- 
title: Revising Tools pt. 1 - VIM
date: 23/04/2011

As I've already pointed out many times, I'm in the process of revising the tools I use in search for a sweet spot where I can be extremely productive, fast and possibly platform agnostic.
That's a challenge, mostly because there are some specific pieces of software that I rely on that are Mac only.

This series of posts will focus on a specific software per post, trying to summarize the reasons why it works for me, what I've replaced by choosing it and how long it took me to reach a decent level of confidence and productivity with it.

<more>

Let's start with [VIM][8].

### Useless forewords

It's a software that it's decades old but still being actively developed and with an active community behind it. It's cross-platform and (to make it simple) completely text based, so you can run it inside a terminal (even without a graphical environment and - really important - without a mouse).

There are a lot of primers to start using VIM, good screencast series and an endless series of links that point out why it can be considered the best editor of all time. I won't talk about that here.

It's a complex piece of software that requires dedication and patience before starting to pay off. Bear it in mind if you plan to give it a try.

### My path

I started using VIM a few months ago after seeing the [Getting started with VIM series on Nettuts][1]. I downloaded [MacVim][9], a Mac version that wraps around VIM some useful additional features (like global shortcuts that follow the platform convention) without getting in the way of learning the more traditional commands.

There were some ideas that I had some difficulties with: buffers and modes. My previous editor, Textmate, is far more straightforward (like all other editors). You open a file, edit that file typing, save it, close it. With VIM, it's not that simple. You open a file, the content gets loaded into a buffer, you switch between different modes to manipulate text and write that buffer back into the file (if it doesn't sound clear, it's normal).

Vim uses different tools and commands to manipulate text in a far more powerful way than any other editor I've seen so far and to do that it uses A LOT of keyboard commands, which are not simple shortcuts but more similar to a language. A language to manipulate text in different modes (normal, insert, command and visual).

As with other languages, you don't need to learn everything at once.

I started with replicating what I was able to do with Textmate, therefore living only in insert mode. I learnt that I needed some plugins to get the editor up to speed: when you install Vim it's fairly barebones and needs to be customized. That process never stops. I've looked for some plugins, screwed up stuff and started back. It worked in the end, but I had an editor bloated with stuff I didn't need (mostly because I couldn't use it).

I started over using one plugin at a time. I also started to customize my configuration following some suggestions given in the Nettuts tutorial and it slowly started to make sense.

Shifting modes became gradually natural and with some specific plugins, I managed to become more productive than what I was in Textmate. VIm concepts started to be part of my workflow, resulting in automatic movements and actions (moving between modes was the biggest achievement)

By that time I started learning Ruby and Rails. The [tutorials I followed][10] were based in Textmate, so I left MacVim aside. It may sound silly, but I preferred to use a more consolidated tool (which was coincidentally the same used by Michael Hartl, the author of the tutorials) to focus on the object of the tutorial and not the tool itself. I didn't miss many features as I wasn't really coding that hard for most of the time.

It took me a bit to dig back into Vim. I think it's a natural process: there's a seed planted in your workflow and it blooms when you're ready.

As I did before, I started again with a blank slate. I've been lucky, as the already mentioned Jeffrey Way shares on GitHub his Vim setup. We work on similar stuff and I could start on his shoulders. A bit of cleanup, some small additions for Rails development and I'm back on track.

### Why VIM (in convenient bullet points)

- Cross-platform: already talked about it, but I like the idea of having the possibility to use this tool on any other operating system.
- Solid, well documented, actively developed: there's support and updates that address any possible issue.
- Extensibility: there are plugins and extensions for everything. There's a language to use to produce macros and text manipulation. You can tailor it's behavior to mimic some specific IDE features (like real-time JavaScript debugging). What more could I want?
- Works from Terminal and SSH: it's a remote option, but theoretically I could set it up on the web and be able to work from a remote server.
- Low hardware requirements: it's lightweight and damn fast.

### What I'm removing

- [Textmate][10]
- Any IDE I've used ([Netbeans][11], [Aptana][12])
- Any fullscreen text editor ([Writeroom][13], [Byword][14])

### The path from now on

I'm planning to settle with plugins and extensions for now. I've got much stuff to dig deep into and real work to do, so I'll balance things out.
I'm collecting different tips and tricks from various sources to create my own cheat sheet with specific commands to use, with the specific focus on solving one issue at a time.

I've also started using Vim to write non-code, e.g. blog posts or some other Markdown-based pieces of text. Syntax highlight is perfect, I can benefit from some shortcuts and use a similar fullscreen mode that takes away distractions (even if I find more effective closing any source of interference rather than hiding it).

### Useful links

Let's start with screencasts:

- [Nettuts][1] (a very good primer series, but requires a paid membership)
- [PeepCode's tutorials][2] (read good reviews about them, but I haven't bought them - they have previews by the way and PeepCode's screencasts are usually top notch)
- [Vimcasts][3] (a bit more advanced, but covering a wider range of topics)

Alternatively, you can search on YouTube but I'd suggest to invest some money and use one of the suggested primers.

Resources:

- [My VIM configuration on GitHub][4] inspired by [Jeffrey Way's][7]
- [Janus's MacVim distro][5] a complete feature set for VIM
- [Vim Tweets][6] a collection of tweets with tips and tricks for VIM (requires prior knowledge, but full of cool stuff)


[1]: http://net.tutsplus.com/tutorials/other/venturing-into-vim-new-premium-video-series/
[2]: http://peepcode.com/products/smash-into-vim-i
[3]: http://vimcasts.org/
[4]: https://github.com/cloud8421/vimconf
[5]: https://github.com/carlhuda/janus
[6]: http://vimtweets.com/
[7]: https://github.com/JeffreyWay/My-Vim-Repo
[8]: http://www.vim.org/
[9]: http://code.google.com/p/macvim/
[10]: http://macromates.com/
[11]: http://netbeans.org/
[12]: http://aptana.com/products/studio3
[13]: http://www.hogbaysoftware.com/products/writeroom
[14]: http://bywordapp.com/
