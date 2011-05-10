--- 
title: My backup strategy
date: 10/05/2011

Backups are an evergreen topic and luckily for everyone, it’s becoming much easier to take care of them without much effort. There’s indeed a bit of work involved, but cost-wise, it’s a fair price to pay.

<more>

### As always, a bit of background

It took me a while to get to this setup, which is effective, tested, safe and quite cheap. I combine physical backups and online ones with different services in order to achieve a good redundancy (same data in different places around the world).

It’s also important to specify that I deal mainly with text-based data (code, writing and such) so I don’t create a huge amount of GB when I work (if you work with video or graphical files, you know that it’s substantially different).

I also wanted a setup with minimal intrusion and performance impact. As it’s something that constantly runs in the background, it needs to be silent, fast and lightweight. Yes, I know I’m picky.

### Physical backups

I perform daily, incremental backups using [SuperDuper][2] on an external hard drive. As I use a SSD and backup to a 7200 rpm hard disk, the process is usually quite fast. I don’t even store media on the SSD (I’ve got another external hard drive for music, video and such), so changes are not big and everything usually takes around 15 minutes.

Why SuperDuper?
- My backups are scheduled monday to friday at 9pm, usually when I’m not using the computer.
- It creates bootable copy: in case of SSD failure, I can swap out the disk, put back in the backup one and start using it immediately. As a matter of fact, that’s what I did when I installed the SSD itself.
- SuperDuper performs some maintenance tasks as well during the backup process.

### Online backups

This is where the fun begins. I use different pieces of software depending also on what needs to be backed up.

On a general level, I depend on the excellent [JungleDisk][8]. Here’s how it works: I choose the folders to backup and every hour it automatically uploads incremental changes to Amazon S3 (you can also use Rackspace). Every backup is stored for 90 days and can be restored independently by choosing the corresponding timestamp.
It’s got a basic 4$ monthly fee + the cost associated with Amazon S3 bandwidth (I usually spend 1-2$ every month). It’s awesome and [plays well with all the extended metadata that OsX applies to files][1].
Lucky for me, I used the restore function just once, as I completely screwed up an unversioned Wordpress installation. The restore functionality worked flawlessly, so I’m sure it would work fine even with more data.
I don’t backup the whole system with JungleDisk simply because I don’t need it. I can get to a basic fresh Snow Leopard install to a machine I can work with in an hour or so, so it’s just important that I keep work files under online backup.

For preferences, contacts, calendar and similar: I use [MobileMe][3]. It’s not really cheap but it works well enough and syncs everything with iPad and iPhone as well. On a clean Snow Leopard install it lets me import preferences, licenses, all that is needed to restore the application state of those software I use. It’s an automated process that runs in the background.

For code: code is stored in folders that are backed up with Jungle Disk, but in addition I use [GIT][3] as a version control system for every project I work on, whether it’s small or big. I use [GitHub][4] for open-source code and [Assembla][5] with the rest of the team for free and private repositories. There are some limits, but we’re comfortable with them and the service is top notch. By using GIT, code is stored outside my machine, therefore I’ve got at least 3 copies for every file (SuperDuper, Jungle Disk and GIT repo).

Writings: I write everything in plain text, store it in a [Dropbox][6] folder, back it up with Jungle Disk. If it’s a blog post, it’s also under version control on GitHub. So 4 different backup locations for each post. Everything is handled automatically (aside from GIT, but it’s a required step for publishing).

I’ve also setup a [GitHub repository with my VIM configuration][7], including plugins. As customizing a VIM environment is a continuous and big effort, I want to make sure never to lose a single step. Moreover, I can port my settings to other platforms.

### Additional storage

I’ve also got an external hard drive used for music and video. It’s not continuously backed up, but I change it every two years. I also periodically run diagnostics on it to see its status. In an ideal world, I’d like to have a raid setup for this, but it’s a bit expensive.

### The final result and next steps

It took time to set it up, but now it’s a hassle free process that requires minimal intervention. The good side effect is that except SuperDuper (which is a Mac Only software) all the other tools I use could easily let me restore my file on any OS and start back from there. My next step will be to set up a backup machine itself in case of physical failure of my Macbook.

[1]: http://blog.jungledisk.com/2009/11/13/what-does-extended-metadata-backup-mean/
[2]: http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html
[3]: http://www.apple.com/mobileme/
[4]: http://github.com/
[5]: http://www.assembla.com/
[6]: http://www.dropbox.com/
[7]: https://github.com/cloud8421/vimconf
[8]: http://www.jungledisk.com/
