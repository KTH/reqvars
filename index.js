const dotenv = require('dotenv')
module.exports = {
  throwIfMissing (required = [], objWithVariables) {
    // Double check that required environment variables are set
    for (const key of required) {
      if (objWithVariables[key] === undefined) {
        const msg = `Missing required environment variable: ${key}`
        throw new Error(msg)
      }
    }
  }
}
