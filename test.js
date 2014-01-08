var stoopid = require('./index')

function allLevels(logger){
  logger.silly('silly')
  logger.verbose('verbose')
  logger.debug('debug')
  logger.info('info')
  logger.warn('warn')
  logger.error('error')
  logger.log('log')
  logger.trace('trace')
  var manyNewlines = [
   'Lets count newlines', '1', '2', '3', '4', '5', '6', '7', '8', '8', '10',
   '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'
   ].join("\n")
  logger.verbose(manyNewlines)
}

console.log('All levels')
allLevels(stoopid);

var filterNumber = 350;
console.log('Levels above ' + filterNumber);
stoopid.filterAll(filterNumber);
allLevels(stoopid);

var filterString = 'info';
console.log('Levels above ' + filterString);
stoopid.filterAll(filterString);
allLevels(stoopid);
