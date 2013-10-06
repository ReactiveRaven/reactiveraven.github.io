You'll need a few things to get comfortable coding done, in decreasing order of scale:

 * Good environment (see [Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html))
 * Good editor
 * Good theme
 * Good font

Your environment is either entirely under your control, or vastly out of your control, so lets go through the others.

## Editor

My preferred editor is Netbeans. Yes, its a Java IDE, and a massive memory hog. But with that you get masses of plugins to enhance the functionality, git change highlighting built in, auto-completion and its much leaner than Eclipse if you're only going to code for the web.

Make sure you have a reasonable version of Java installed (On MacOS you'll be prompted when you try and run a java program, on most desktop linux distros you'll have a free version included but you might be better off installing an official sun package if you have issues) and download the installer script from [netbeans.com](https://netbeans.org/downloads/) - Word of warning, skip the beta/RC versions. I repeat: **DO NOT USE BETA OR RC VERSIONS**. They're more hassle than they're worth, and will go stable soon enough. You don't want to have to debug the _editor_ while you're trying to debug _your code_.

Once you have the installer downloaded, if you're on Win or Mac, just run the installer. If you're on linux, you're given a script to run. Fire up a terminal, and `cd` to your downloads folder, you'll need to do the following:

    chmod u+x netbeans*.sh
    ./netbeans*.sh

.. Make sure you only have one copy of the Netbeans installer in there though! Otherwise you'll have windows opening all over the place.

The installer itsself is pretty simple. Just run through it.

## Theme

My preference here is for one of the built-ins to Netbeans, 'Norway Today'. To change themes, open the Netbeans options dialogue (normally located under "Tools &gt; Options" menu, or "Netbeans &gt; Preferences" menu), click to the Fonts &amp; Colors tab, then flick around in the Profile dropdown.

Norway Today is a dark-background theme which strikes a sweet spot between super-vibrant and too-low-contrast. One setting I did have to modify was the Javascript 'Global Variable' color:

 * Select JavaScript from the Language dropdown
 * Find 'Global Variable' in the Category list
 * Click the Foreground color dropdown, select a color that is obvious on the dark blue background (I chose magenta)
 * Click 'OK' to confirm

And you're good to go.

## Font

Monaco.

If you don't have it (linux users), [get it like this](http://jorrel.blogspot.co.uk/2007/11/monaco-on-ubuntu.html).

You'll want to turn off anti-aliasing to get it to look good at small sizes, because for whatever reason, Java ignores the system setting by default, which is great. You'll need to open the netbeans.conf file, which is stored either wherever you installed Netbeans, or in the Netbeans-7.X.X folder in your home directory. Once you've found it, locate the line that starts with `netbeans_default_options` and add this: ` -J-Dswing.aatext=true -J-Dawt.useSystemAAFontSettings=on ` to the end of that line, inside the quotes that are already there. Make sure it isn't butting up against other options (eg: 'aaabbcc -J-Dswing' good, 'aaabbcc-J-Dswing' bad).

If you just had to install Monaco or turn off anti-aliasing, restart your copy of Netbeans so it picks up the new settings.

To pick the font out, open your options window again and go back to the Fonts &amp; Colors tab:

 * Select 'All Languages' from the language dropdown
 * Select 'Default' from the top of the Category list
 * Click the dots next to the Font option
 * Select Monaco from the list
 * Set the font size to something readable (I go with 10)
 * Click OK to close the font window
 * Click OK again in the Options window to confirm

And you're up and running with my preferred dev stack.

So there!