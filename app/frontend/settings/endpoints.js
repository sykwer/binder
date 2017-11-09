/* eslint-disable global-require, import/no-dynamic-require */

export const {
  binderApiEndpoint,
  binderRootUrl,
} = require(`./endpoints.${process.env.NODE_ENV === "production" ? "prod" : "dev"}.js`)

export const {
  googleBookApiEndpoint,
} = require("./endpoints.shared.js")

/* eslint-enable */
