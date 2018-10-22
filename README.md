# Vulcan More - Helpers

## More Vulcan.js Helpers

This package provides exposes some [Vulcan.js](http://vulcanjs.org/) reusable helpers that are not (yet) into the core.

See [Awesome Vulcan](https://www.awesome-vulcan.com) for usage examples.

**/!\ This is an experimental package, API will certainly evolve in the months to come**.

## Installation

Clone this repo:

```sh
git clone https://github.com/lbke/vulcan-more-helpers
```

You can clone it directly in your app `packages` folder. You can also clone it in an isolated `vulcan-packages` folder outside of your app, and then set the `METEOR_PACKAGE_DIRS` environment variable to `"/some-dir/vulcan-packages"`. This way, you can put all your reusable package in this `vulcan-packages` folder without polluting your own app.

Then use the package in your app:

```js
import { theFunctionYouNeed } from "vulcan:more-helpers";
```

This package won't be published on Atmosphere or npm until it is a bit more mature.

## Contributing

This package will evolve and improve depending on the use cases we encounter. Best way to contribute is to use it in your own app, and propose ideas, suggestions and PR based on your experience.

We seek for maximum reusability, so each method should be as configurable as possible, and split into independant functions whenever possible.

_[Built with love by LBKE](https://github.com/lbke)_
