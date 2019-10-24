const fs = require('fs')
module.exports = {
  /** List all the variables in the "filePath" */
  listVariables (filePath) {
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const re = /process\.env\.(\w+)/g
    const vars = []
    for (const m of content.matchAll(re)) {
      vars.push(m[1])
    }

    return vars
  },

  /** Check if "variable" is present in the "filePath" */
  presentIn(filePath) {
    return variable => true
  }
}
