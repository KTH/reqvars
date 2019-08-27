const dotenv = require('dotenv')
module.exports = {
  throwIfMissingEnvVar (requiredVars = {}, logger = { error: console.error.bind(this) }) {
    // Double check that required environment variables are set
    for (const dotEnvDotInKey of Object.keys(requiredVars)) {
      if (process.env[dotEnvDotInKey] === undefined) {
        // TODO: log with logger
        const msg = `Missing required environment variable: ${dotEnvDotInKey}`
        log.error(msg)
        throw new Error(msg)
      }
    }
  }
}
