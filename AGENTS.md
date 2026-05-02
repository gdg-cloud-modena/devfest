# DevFest Website
This is the official Modena DevFest website, organized by GDG Cloud Modena

## Guide lines
- We try to keep the code DRY and simple
- We want to use HUGO elements and characteristics whenever is possible
- The UI is built using the following rules:
    - For CSS use a custom BEM implementation, avoid using IDs. The syntax is shortened to
    `myBlock-myElement--myModifier` instead of `my-block__my-element--my-modifier`.
    - For styling third-party libraries, put the CSS files inside the
    `assets/css/_widgets` directory. Always start the name with the underscore and
    use the name of the library.
    - Most of the needed style and utils already exist. Try to reuse it whenever is possibile.
- We are using a brand kit, so please:
    - Use the only colors provided in the `assets/css/_default/_colors.scss` file.
    - Use the only fonts provided in the `assets/css/_default/_fonts.scss` file.
- No JavaScript, unless it's a widget or absolutely necessary. We want a static website SEO optimized.
