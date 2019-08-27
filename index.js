const dotenv = require('dotenv')
const fs = require('fs')
module.exports = {
  throwIfMissing (required = [], objWithVariables) {
    // Double check that required environment variables are set
    for (const key of required) {
      if (objWithVariables[key] === undefined) {
        const msg = `Missing required environment variable: ${key}`
        throw new Error(msg)
      }
    }
  },
  throwIfMissingRequiredEnvVariable (filename = '') {
    const requiredFile = dotenv.parse(fs.readFileSync(filename))
    const requiredVariables = Object.keys(requiredFile)
    this.throwIfMissing(requiredVariables, process.env)
  }

}
