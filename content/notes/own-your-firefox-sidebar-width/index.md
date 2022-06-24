---
title: Own your Firefox sidebar width
date: 2022-06-17
description: "Change the width and other aspects of your Firefox sidebar using userChrome.css."
keywords:
- firefox
---

Does the width of your Firefox sidebar reset on each launch? Is it *just a bit* too small for Bitwarden and other cool stuff you constantly use? Our good old friend `userChrome.css` is here to help.

## What's a userChrome.css?

Rather than web content, it lets us style Firefox itself. We'll need to create it since it doesn't exist by default. Go to `about:support`, open your profile folder, then add a `chrome` folder with an empty `userChrome.css`.

```sh
cd ~/.mozilla/firefox/myprofile.whatever
mkdir chrome
cd chrome
touch userChrome.css
```

Next we need to tell Firefox to actually use it, since Firefox 69 made it disabled by default. Go to `about:config`, tell the warning to kindly fuck off, and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.

If you use Firefox Sync like me and want the setting synced, add a boolean `services.sync.prefs.sync.toolkit.legacyUserProfileCustomizations.stylesheets` set to `true`.

<aside class="alert alert--info">
  <strong>By the way,</strong> <code>services.sync.prefs.sync.[pref]</code> works for any preference.
</aside>

## Changing the sidebar

We can now screw up the UI as much as we want! Let's set a default width:

```css
#sidebar {
  width: 350px !important;
}
```

Restart Firefox and we're done!

Let's add two lines to remove any dumb-ass size restrictions as well:

```css
#sidebar {
  max-width: none !important;
  min-width: 0 !important;
  width: 350px !important;
}
```

## Down the rabbit hole

Pretty much every aspect of the UI can be changed. But how do you know what to change, and how?

Searching the web is one way, but you'd be working blind. Instead inspect the structure and styles on your own and play around with changes on-the-fly.

You'll need the full "Browser Toolbox" for this. Hit `Ctrl-Shift-I` for devtools, then `F1`. Tick "Enable browser chrome and add-on debugging toolboxes" and "Enable remote debugging." Open it with `Ctrl-Shift-Alt-I`. Enjoy!

To also disable hundreds of hours of your life, check out [r/FirefoxCSS](https://reddit.com/r/FirefoxCSS) on Reddit. It's a treat. My own tweaks are less of a treat, but nonetheless available [on GitHub](https://github.com/dnordstrom/dotfiles/tree/main/config/firefox).
