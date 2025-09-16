# DevFest Modena

DevFest Modena Website.

Built using Hugo Extended and Dart Sass.

# Rules for developers

We want to avoid the cookie banner, so please:
- Download all assets locally, not from the CDN.
- We already have an alternative Analytics installed, that's privacy friendly,
so don't add other scripts.

We are using a brand kit, so please:
- Use the only colors provided in the `assets/css/_default/_colors.scss` file.
- Use the only fonts provided in the `assets/css/_default/_fonts.scss` file.

We like to work at our best quality, so please:
- Use images in high resolution, then resize them using the template engine or
the `img` shortcode.
- Review the content for typos and grammar before committing.

The UI is built using the following rules:
- For CSS use BEM, avoid using IDs. The syntax is shortened to
`myBlock-myElement--myModifier` instead of `my-block__my-element--my-modifier`.
- For styling third-party libraries, put the CSS files inside the
`assets/css/_widgets` directory. Always start the name with the underscore and
use the name of the library.

We don't have a SaaS or a single-page application, so please:
- No JavaScript, unless it's a widget or absolutely necessary.
- Many things can be done with just CSS (a guy eventually built Minecraft with
it https://simonwillison.net/2025/May/26/css-minecraft/).
- If you really need to use JavaScript, use jQuery.


# Structure

The goal is to have an SEO structure that can host past events without having to
rebuild the site every year.

The graphics remain the same throughout the site, across all years. For previous
years, conditions are used to display a warning or the logo for that year to
alert users.

The structure follows a few basic rules in the following sub-chapters.

## SEO

To maintain SEO, pages must keep the same URLs from one year to the next.

## Content related to the current event

There are pages that are only relevant to the current event: the content changes
from one event to another.

Examples: location, contact page, etc.

The pages that only concern the current year are placed in the root of the site.

## Content related to the specific year

There are pages that remain in the event history, including the current year:
these are placed in URLs related to the year of the event.

Examples: sessions, and rooms.

These pages are placed in directories with the year's date. For example,
`content/2024/`. Inside, there are, for example, the rooms `content/2024/rooms/`
and the sessions `content/2024/sessions/`.

Each year also has its own database file with specific data and indexes. For
example, `data/2024.toml`.

Assets are divided in the same way, one directory per year. Example:
`assets/2024/`.

A summary page is then placed in `content/2024/_index.md`.

## Content that have to be kept up to date

There is content that must always be updated from year to year, but which
shows differences between one event and another.

Examples: speakers, team, and communities.

This content live partly in databases and partly on pages. For example, the team
is in the database `data/team.toml`. Profiles can thus be updated every year.
Within the database for the year, for example in `data/2024.toml`, there are
instructions on which team members to display.

The final page showing the team members filtered by year is located within the
directory for that year, for example `content/2024/team.md`.

## How to add a new year

To add a new year, for example 2030, simply create the directory `content/2023/`
and its database `data/2030.toml`, taking inspiration from previous years.

Then update the `currentEdition` parameter in `hugo.toml`.

Hugo will take care of the rest.


# Content

Mandatory rules for all file names: lower case, no accented chars, use
hyphens not underscores.

Use [slugify-online](https://slugify.online/), or similar, for generating slugs
to be used for file names.

## Images

You can use fonts or SVG for icons, but please don't inline SVG on HTML.

Use `.jpg` files for photos and `.png` files for logos.

Use the highest resolution possibile.

Resise and crop using Hugo. Use `webp` format for all images.

## People

Never use pseudonyms or nik names.

Format files as `name-surname.jpg` or `name-surname.md`.

Keep consistency because the file name is the ID of the person, so the photo
must be the same.


# Setup

## Install Hugo

Download **Hugo Extended** from
[GitHub](https://github.com/gohugoio/hugo/releases/), use the version mentioned
at the beginning of the `Makefile` file.

Rename the `hugo` binary file as `hugo-{version}`. Replace `version`, omit the
third number. Example: `hugo-0.148`.

Then the Hugo binary in your local path, reachable by the shell. If you have
concerns about your operating system, try looking at the
[instructions](https://katiek2.github.io/path-doc/).

Open a shell and try running Hugo using the version you installed, it should
work:

```bash
hugo-0.148
```

## Install Dart Sass

The binary version of Dart Sass is the most reliable and recommended one.

Download the Dart Sass binary from
[GitHub](https://github.com/sass/dart-sass/releases/).

Don't rename the `sass` binary, just the `sass` binary in your local path.

Open a shell and try running sass using the version you installed, it should
work:

```bash
sass
```

## Commands

Common commands are available through `make`.

Example for running the Hugo server:

```bash
make serve
```

# FTP content

The directories `static/share/` and `static/media/` are reserved for content not
versioned on Git but uploaded via FTP.
