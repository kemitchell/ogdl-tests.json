var result = require('tv4')
  .validateMultiple(require('.'), require('./schema'))

if (!result.valid) {
  process.stderr.write(
    JSON.stringify(result.errors, null, 2))
  process.exit(1) }
else {
  process.exit(0)}
