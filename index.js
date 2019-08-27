const dotenv = require('dotenv')
module.exports = {
  throwIfMissingEnvVar (required = {}, environmentVariables = process.env) {
    // Double check that required environment variables are set
    for (const dotEnvDotInKey of Object.keys(required)) {
      if (process.env[dotEnvDotInKey] === undefined) {
        const msg = `Missing required environment variable: ${dotEnvDotInKey}`
        throw new Error(msg)
      }
    }
  }
}
