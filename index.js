const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

function throwIfMissing (variableName) {
  if (process.env[variableName] === undefined) {
    throw new Error(`Missing required environmental variable ${variableName}`)
  }
}

module.exports = {
  throwIfMissing,

  /**
   * Check if the environmental variables are set according to the
   * "specification file"
   */
  check (specificationFilePath) {
    const filePath = specificationFilePath || path.resolve(process.cwd(), '.env.in')
    const requirements = dotenv.parse(fs.readFileSync(filePath))

    for (const [requiredVariable] in requirements) {
      throwIfMissing(requiredVariable)
    }
  }
}
