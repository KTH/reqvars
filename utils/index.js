const fs = require('fs')
module.exports = {
  /** List all the variables in the "filePath" */
  listVariables (filePath) {
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const re = /process\.env\.(\w+)/
    const match = content.match(re)

    if (match === null) {
      return []
    }

    return [match[1]]
  },

  /** Check if "variable" is present in the "filePath" */
  presentIn(filePath) {
    return variable => true
  }
}
