/* eslint-disable global-require, import/no-dynamic-require */

let fileEnv
switch (process.env.NODE_ENV) {
  case "production":
    fileEnv = "prod"
    break
  case "staging":
    fileEnv = "stg"
    break
  case "development":
    fileEnv = "dev"
    break
  default:
}

export const {
  binderApiEndpoint,
  binderRootUrl,
} = require(`./endpoints.${fileEnv}.js`)

export const {
  googleBookApiEndpoint,
} = require("./endpoints.shared.js")

/* eslint-enable */
