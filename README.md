# UUID Panel View Button for Kirby

![Plugin Preview](src/assets/kirby-uuid-button.jpg)

A customizable View Button for Kirby 5 that can be used to quickly copy a page's (linK: https://getkirby.com/docs/guide/uuids text: UUID) in the (page://UUID) format.


## Requirements

This plugin requires Kirby 5.x and newer. It will not work with earlier versions of Kirby.


## Installation

### [Kirby CLI](https://github.com/getkirby/cli)

    kirby plugin:install scottboms/kirby-uuid-button

### Git submodule

    git submodule add https://github.com/scottboms/kirby-uuid-button.git site/plugins/uuid-button

### Copy and Paste

1. [Download](https://github.com/scottboms/kirby-uuid-button/archive/master.zip) the contents of this repository as Zip file.
2. Rename the extracted folder to `uuid-button` and copy it into the `site/plugins/` directory in your project.


## Blueprint Configuration

There are multiple methods to add [View Buttons](https://getkirby.com/releases/5/view-buttons) to your Kirby installation. The button can be added to any page by adding the `buttons` [option](https://getkirby.com/docs/reference/panel/blueprints/page#view-buttons) in Page Blueprints.

```yml
buttons:
  copy-page-uuid: true
```


## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test before using it in a production environment. If you identify an issue, typo, etc, please [create a new issue](/issues/new) so I can investigate.


## License

[MIT](https://opensource.org/licenses/MIT)
