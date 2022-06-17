---
title: Own your Firefox sidebar width
date: 2022-06-17
description: Change the width and other aspects of your Firefox sidebar using userChrome.css.
draft: true
---

# Own your Firefox sidebar width

Is your Firefox sidebar resetting its width on each launch? No? Well, I guess it's just me then. Either way, it can be solved with the good old userChrome.css. 

## What's a userChrome.css?

It's a CSS file. More specifically, it's a CSS file that lets you change the styles of Firefox itself, such as the tab bar or the toolbar buttons. It lives in the Firefox profile directory which you'll find at `about:support`. If `<profile>/chrome/userChrome.css` doesn't exist, create it.

There's also userContent.css for overriding web page styles, but this can be done easier with an add-on. Stylus is a popular choice. Personally I use Firemonkey since it focuses on using the WebExtension API fully and does both user styles (CSS) and user scripts (JS).

Mozilla disables these by default nowadays so you'll need to enable them. Go to `about:config`, tell the warning to fuck off, and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`. Restart Firefox and that's it. 

If you use Firefox Sync, you may want to sync the setting as well. Add a new "boolean" preference named `services.sync.prefs.sync.toolkit.legacyUserProfileCustomizations.stylesheets` and set it to `true`. This applies to all preferences: `services.sync.prefs.sync.<preference>` to `true` enables sync.

## Changing the sidebar

We can now screw up the UI as much as we want! Let's add a default sidebar width:

```css
#sidebar {
  width: 350px !important;
}
```

Restart Firefox and we're done. We can continue and remove the maximum and minimum widths of the sidebar as well:

```css
#sidebar {
  max-width: none !important;
  min-width: 0px !important;
  width: 350px !important;
}
```

## Down the rabbit hole

Pretty much every aspect of the UI can be changed. But how do you know what to change, and how?

Searching the web is one way, but you'd be working blind. Instead you can inspect existing styles on your own and play around with changes on-the-fly. First hit `Ctrl-Shift-I`, `F1`, and tick "Enable browser chrome and add-on debugging toolboxes" and "Enable remote debugging." Now you've enabled the full "Browser Toolbox." Open it with `Ctrl+Shift+Alt+I`. Enjoy!

To also disable hundreds of hours of your life, check out [r/FirefoxCSS](https://reddit.com/r/FirefoxCSS) on Reddit. It's a treat. My own tweaks are less of a treat, but nonetheless available [on GitHub](https://github.com/dnordstrom/dotfiles/tree/main/config/firefox).
