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
