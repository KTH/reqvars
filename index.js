const dotenv = require('dotenv')
module.exports = {
  throwIfMissing (required = [], objWithVariables) {
    // Double check that required environment variables are set
    for (const dotEnvDotInKey of required) {
      if (objWithVariables[dotEnvDotInKey] === undefined) {
        const msg = `Missing required environment variable: ${dotEnvDotInKey}`
        throw new Error(msg)
      }
    }
  }
}
