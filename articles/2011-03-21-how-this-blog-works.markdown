--- 
title: How this blog works
date: 21/03/2011


After having used [Tumblr](http://www.tumblr.com/) for a while, I've decided to switch to something completely different.

Here's what I wanted:

- No distinction between writing and publishing. I just want to write in [Markdown](http://daringfireball.net/projects/markdown/).
- No multi-user support, I don't need it.
- No configuration hassle.
- No DB backend, as I want to have speed and ease of management and backup.
- Solid foundation that can withstand an eventual [fireball](http://blog.23x.net/216/anatomy-of-a-fireballing.html) (hopefully it will happen one day or another).
- I wondered a lot about searchable content. I don't need it for now, but I'll eventualy prepare an addon myself.

<more>

I've come across [Toto](http://cloudhead.io/toto) and I completely fell in love with it: it's got a lightweight ruby backend that seamlessly integrates with Heroku.
Every article is stored in plain text format, with native support for Markdown. I can have a simple layout, rock-solid HTML5 without slowdowns that benefits from a responsive layout that caters for desktop and mobile.

Here are the steps I followed to get it up and running.

### A bit of intro

Toto is a blog engine for hackers, which may sound a bit hardcore, but in the end it's got a structure and philosophy that doesn't fit an average computer user. You definitely need to know your way around development, especially in the Ruby world.
I'll make some assumptions (there are links for each one of them):

- You're not scared of the Command line ([Nettuts Tutorial](http://net.tutsplus.com/tutorials/tools-and-tips/terminal-git-and-github-for-the-rest-of-us-screencast/))
- You have a properly Ruby-enabled system based on a Unix architecture ([Hivelogic how-to on Mac](http://hivelogic.com/articles/compiling-ruby-rubygems-and-rails-on-snow-leopard))
- You have Rubygems up and running (if you don't have them installed, see [Nettuts](http://net.tutsplus.com/tutorials/ruby/ruby-for-newbies-working-with-gems/) )
- You know GIT and have it running
- You know Markdown ([Tutorial](http://daringfireball.net/projects/markdown/basics))
- You have an [Heroku](http://heroku.com/) account

As you can see, it's quite a bit of stuff. It's not really hard, but it's still a bit of an effort.

First of all, let's install Toto and some needed gems to work properly.

	$ gem install heroku toto unicorn
	
Heroku and Toto are compulsory. As I use [RVM](http://rvm.beginrescueend.com/), I don't need to use **sudo**. I also use [Unicorn](http://raa.ruby-lang.org/project/unicorn/) as it lets me run the blog on my Mac without any issues.

As suggested by its author, it's a good idea to download a copy of [Dorothy](https://github.com/cloudhead/dorothy) to have a barebone system to work on. Let's do it.

	$ git clone git://github.com/cloudhead/dorothy.git weblog
	$ cd weblog/

Now you have a complete Toto barebone system to start.

### Managing articles

Toto uses static files for posts, so every post is a Markdown-flavoured, independent text file. This means that you can have a folder full with posts in a portable and safe format. All posts are stored in the **article** folder.

To create a new article, you simply can type on the command line:

	rake new

It will create a new text file inside the articles folder, properly name it with a timestamp and the title you specified during the command execution.

Editing and deletion is done directly on article files.

### Publishing

Deployment on the Heroku platform is dead simple.

	heroku create mynewweblog

This creates an empty skeleton for your app. Once you've made a local commit with GIT, you can push it to Heroku:

	rake publish

The above command is an alias for:

	git push heroku master
	
This clearly defines a workflow:

- create a new post
- write it
- make a local commit
- push everything to heroku

While this may sound more complicated that the corresponding workflow in Tumblr or Wordpress, it's not. After the first push, updates on Heroku are fast as we don't need to install new gems or change a lot of files.

### Blog customization

Similarly to other Ruby frameworks, there are **templates**.
The layout.rhtml file is your site's structure, while the files inside **pages** take care of the specific sections. At the root level, the **layout** loads the **index** page and the index page iterates the **article** template for every post found in the article folder.

The **config.ru** file lets you customize different options: the Toto website really covers in detail what they do.

### Steps I've followed to customize the blog

- I've changed the templates to implement the [HTML5 boilerplate](http://html5boilerplate.com/), so my version of Toto is boilerplate ready. As a matter of fact, Toto was already HTML5 based, however the bells and whistles in the boilerplate are awesome for resets, compatibility and standards.
- I've also migrated the actual CSS to a [LESS](http://lesscss.org/) version, as I'll be changing it and updating it. Not really much, but I find LESS a better tool to work with.

### Open-source blogging

I'll keep to blog published also on GitHub, which is an unusual choice but has got good side effects:

- Reliable backup
- All the changes I make to the Dorothy barebone structure will be available
- It's cool to see if something will happen with content, as all the posts will be available under the source tree