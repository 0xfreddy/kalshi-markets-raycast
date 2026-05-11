/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Favorite Topics - Comma-separated topics or teams to show first, for example Sports, NBA, Lakers. */
  "favoriteTopics"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-markets` command */
  export type SearchMarkets = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-markets` command */
  export type SearchMarkets = {}
}

