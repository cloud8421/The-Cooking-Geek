--- 
title: My Coffeescript overview
date: 26/06/2011

[1]: http://jashkenas.github.com/coffee-script/#installation
[2]: https://github.com/alisey/CoffeeScript-Compiler-for-Windows
[3]: http://coffeescriptbeans.tumblr.com
[4]: http://jashkenas.github.com/coffee-script/
[5]: http://sass-lang.com/
[6]: http://weblog.rubyonrails.org/2011/5/22/rails-3-1-release-candidate
[7]: http://lesscss.org/

This post will be extremely technical and programming focused. Leave now if you don't care.

A few weeks ago a [news created a bit of a ruckus][6] in the Rails community: the upcoming Rails 3.1 will have out-of-the-box support for [Sass][5] and [Coffeescript][6].

Both of them are intermediate tools, super languages that aim to ease respectively CSS and Javascript development. While I was familiar with Sass (and [Less][7] before him) I never really cared about Coffeescript, mainly because I was focused on learning Javascript itself.

As I trust the decisions taken by the Rails team, I've decided to give Coffeescript a try: I've seen a couple of screencasts, bought the PeepCode tutorial, run through the documentation (extensive and really good) on the website.

Here are my thoughts on it.

<more>

### A global look

First of all, as the website says, Coffeescript is a language that compiles into plain Javascript: that means that every piece of logic you write gets translated in an equivalent piece of Javascript. It lets you write the same things in a different, more compact way.

Consider the following piece of code:

    greet = ->
      alert 'hello world'
    greet()

When converted into Javascript by the Coffeescript interpreter, it becomes:

    var greet;
    greet = function() {
      return alert('hello world');
    };
    greet();

It's a process that becomes clear when done backwards:

- the variable `greet` gets declared as a function in one line;
- the keyword `function` is substituted by `->`;
- all unnecessary punctuation is lost: that includes `{}` to wrap the function body, `()` around the `alert` argument, the semicolon at the end of every command.

Coffeescript uses significant whitespace: indentation defines hierarchy: that's why you can lose curly braces for the function body. It's a design choice that lets you write a less visually cluttered code but requires you to be extremely strict and precise with code formatting. A best practice becomes a requirement.

The Javascript output is clean and well written, in most cases better than most of the code you see around (especially if it's written using libraries like jQuery).

### Additions

The biggest addition made by Coffeescript is the support for writing OOP in classes instead of prototypes. From my perspective, this is easier and faster, especially because it's a consistend mindset with other languages I use (like Ruby or PHP).
A class definition in Coffeescript is pretty straightforward:

    class Knife

      constructor: (@name) ->

      cuts: (food) ->
        alert "Now you have 2 of #{food}"

    class Ceramic_Knife extends Knife

      cuts: (food) ->
        super food
        alert "And you have 3 of #{food} as a bonus"

    knife = new Knife "A standard knife"
    ceramic_knife = new Ceramic_Knife "A cool ceramic Knife"

    knife.cuts 'apple'
    ceramic_knife.cuts 'melon'

Here's the Javascript output:

    var Ceramic_Knife, Knife, ceramic_knife, knife;
    var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
      for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
      function ctor() { this.constructor = child; }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor;
      child.__super__ = parent.prototype;
      return child;
    };
    Knife = (function() {
      function Knife(name) {
        this.name = name;
      }
      Knife.prototype.cuts = function(food) {
        return alert("Now you have 2 of " + food);
      };
      return Knife;
    })();
    Ceramic_Knife = (function() {
      __extends(Ceramic_Knife, Knife);
      function Ceramic_Knife() {
        Ceramic_Knife.__super__.constructor.apply(this, arguments);
      }
      Ceramic_Knife.prototype.cuts = function(food) {
        Ceramic_Knife.__super__.cuts.call(this, food);
        return alert("And you have 3 of " + food + " as a bonus");
      };
      return Ceramic_Knife;
    })();
    knife = new Knife("A standard knife");
    ceramic_knife = new Ceramic_Knife("A cool ceramic Knife");
    knife.cuts('apple');
    ceramic_knife.cuts('melon');

Here's where we start to see real benefits: the example defines a Knife class with a constructor and a 'cuts' method. It then defines a subclass Ceramic Knife that inherits from the Knife class the 'cuts' method and extends it with additional logic. At the end, we instantiate both classes to see the effects.

This pattern may be extremely common when you deal with a fairly complex logic. Coffeescript helps you write in a far more easier to read and maintain way. At a glance, it's just 18 lines of code (the output is 33 lines ). Function scopes are also auto-managed (notice that the output uses `apply` and `call`) and the lack of punctuation makes it far simpler to scan through and understand the underlying logic.

The question is: if you should to come back on this code in 3 months, wouldn't you be happy to find something that simple to read? I would.

Personally speaking, I've also found myself breaking my logic in more methods because it's more comfortable to do it in Coffeescript than in pure Javascript, as the resulting code is cleaner to scan and follow (as an habit, I also use explicit variable and methods naming) and requires less commenting (once again, this is true only if you use explicit naming).

### The dash-rocket

`->` and `=>` are two extremely powerful features in Coffeescript: you use them instead of writing `function()`. What they do is also declare the scope of the function itself: with => you can lock it, so any usage of `@` (which is transformed into `this.`) can be correctly scope to the new function or the parent method.

Consider the following example:

	class Overlay

  		is_visible = false

  		constructor: (name) ->
  
  		show: ->
    		#show animation
    		is_visible = true

  		hide: ->
    		#hide animation
    		is_visible = false

  		toggle: ->
    		if is_visible then @show() else @hide()

		overlay = New Overlay 'sample overlay'
		overlay.toggle

The logis is pretty clear: we have an overlay, it shows and hides depending on a control variable (`is_visible`). Note that I've omitted the logic for show and hide, as you'd probably use something like jQuery to manage that.

In the `toggle` method we use both `show` and `hide`, calling them with @. As we're not dealing with a nested function, we use -> to declare the function.

But let's look at the following case (taken from the Coffeescript website - uses jQuery):

	Account = (customer, cart) ->
  		@customer = customer
  		@cart = cart

  	$('.shopping_cart').bind 'click', (event) =>
    	@customer.purchase @cart

Notice we use a `=>` in the callback function invoked by the `bind` event: that's because inside that function, @ would refer to the clicked object, not to the Account variable. By using `=>` we apply the correct scope and we're able to call @customer and @cart.

As the documentation says, this feature is extremely powerful when you deal with frameworks like jQuery, where you have many functions that use callbacks.

It's a lifesaver, however it's important not to forget that it becomes extremely easy to pollute the DOM with unnecessary event listeners, but that's a whole different topic.

### Ranges, iterators

This is one of my favourite features: ranges make your code extremely readable and can be applied to different uses. Consider the following:

    arr = ['foo', 'bar', 'baz']
    arr[0..1] # returns ['foo', 'bar']
    arr[0...1] # returns ['foo']
    
As we can see from the compiled version, it simply uses the `splice` method, so no particular magic is involved.

    var arr;
    arr = ['foo', 'bar', 'baz'];
    arr.slice(0, 2);
    arr.slice(0, 1);
    
As expected, it works on strings as well.

You can use a range as a traditional for loop:

    console.log index for index in [0...3]
    
It compiles to:

    var index;
    for (index = 0; index < 3; index++) {
      console.log(index);
    }

Talking about iterators, Coffeescript uses different structures to manage iterations over collections and comprehensions, making everything much more similar to Ruby or PHP.

Here are a few examples:

    fruits = ['orange', 'banana', 'apple']
    
    eat = (fruit) ->
      console.log fruit
      
    eat fruit for fruit in fruits # useful if you have a named function to call
    
    for fruit in fruits
      do (fruit) ->
        console.log "Peeling a #{fruit}"
        
Note that if you use an anonymous function, it gets wrapped and gets its own scope.

You can also iterate over objects:

    friends =
      joe : 'plumber'
      mike : 'woodcutter'
      harry : 'mage'

    for name, job of friends
      do (name, job) ->
        console.log "#{name} is a #{job}"
        
Note the usage of the keyword 'of'. It compiles down to:

    var friends, job, name, _fn;
    friends = {
      joe: 'plumber',
      mike: 'woodcutter',
      harry: 'mage'
    };
    _fn = function(name, job) {
      return console.log("" + name + " is a " + job);
    };
    for (name in friends) {
      job = friends[name];
      _fn(name, job);
    }
    
### Splats ###

Splats let you execute a function on multiple variables at once.

    console.log Math.max [1, 4, 5, 6, 1, 8, 2]... # 8
    
In the example above, we execute the `max` function on all the array elements at once.
    
### The destructuring assignment ###

I've been using this feature especially with jQuery. Consider the following example:

    str = 'course-21'
    [type, id] = str.split '-' # returns ['course', '21']
    console.log type # 'course'
    console.log id # '21'
    
The destructuring assignment lets you process arrays that get returned from other functions in a simple way, storing the values you need in named variables instead of having you deal with array indexes.
It works also in combination with splats:

    str = 'lorem ipsum dolor sit amet'

    [first, second, third...] = str.split ' '

    console.log first # 'lorem'
    console.log second # 'ipsum'
    console.log third # [ 'dolor', 'sit', 'amet' ]

### Tools and resources

The are a few ways to deal with Coffeescript, but the easiest on is to install the command line tool. If you're on OS X or Linux, it's available as a Node.js module. [The official instructions][1] explain in detail how to install and run it. On Windows, there are other tools available, like [this project on GitHub][2] (I haven't tried it out).

As for other resources, I encourage you to follow [Coffeescript Beans][3] (spoiler - I'm the author there) for tips and tricks, plus resources and manuals I link to.

### Conclusion ###

It's powerful, elegant and extremely efficient. My suggestion is to use it when you have to deal with some complex structures (applications and interactions). If you just need to plug some jQuery magic on a website, it's not worth it as there are no real benefits (provided you have some solid Javascript knowledge).
