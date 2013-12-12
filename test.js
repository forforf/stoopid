var stoopid = require('./index')

stoopid.info('info')
stoopid.warn('warn')
stoopid.error('error')
stoopid.log('log')
stoopid.trace('trace')
var manyNewlines = [
 'Lets count newlines', '1', '2', '3', '4', '5', '6', '7', '8', '8', '10',
 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'
 ].join("\n")
stoopid.verbose(manyNewlines)
