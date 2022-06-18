---
title: Own your Firefox sidebar width
date: 2022-06-17
description: Change the width and other aspects of your Firefox sidebar using userChrome.css.
---

Is your Firefox sidebar resetting its width on each launch? No? Well, I guess it's just me then. Either way, it can be solved with the good old userChrome.css. 

## What's a userChrome.css?

It's a CSS file. More specifically, one that lets us change the styles of Firefox itself, such as the tab bar or the toolbar buttons. It lives in the profile directory which you can open from `about:support`. If `chrome/userChrome.css` doesn't exist, create it.

The feature is disabled by default so we'll need to enable it. Go to `about:config`, tell the warning to fuck off, and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`. Restart Firefox and that's it. 

We can tell Firefox Sync to sync the setting by adding a boolean, `services.sync.prefs.sync.toolkit.legacyUserProfileCustomizations.stylesheets`, and setting it to `true`.

This applies to all preferences: `services.sync.prefs.sync.<pref>`.

## Changing the sidebar

We can now screw up the UI as much as we want! Let's set a default width:

```css
#sidebar {
  width: 350px !important;
}
```

Restart Firefox and we're done.

To remove the maximum and minimum widths, add a couple of lines:

```css
#sidebar {
  max-width: none !important;
  min-width: 0 !important;
  width: 350px !important;
}
```

## Down the rabbit hole

Pretty much every aspect of the UI can be changed. But how do you know what to change, and how?

Searching the web is one way, but you'd be working blind. Instead inspect the styles on your own and play around with changes on-the-fly. First hit `Ctrl-Shift-I`, `F1`, and tick "Enable browser chrome and add-on debugging toolboxes" and "Enable remote debugging." Now open the "Browser Toolbox" with `Ctrl+Shift+Alt+I`. Enjoy!

To also disable hundreds of hours of your life, check out [r/FirefoxCSS](https://reddit.com/r/FirefoxCSS) on Reddit. It's a treat. My own tweaks are less of a treat, but nonetheless available [on GitHub](https://github.com/dnordstrom/dotfiles/tree/main/config/firefox).
