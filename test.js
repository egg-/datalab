var datalab = require('./')

datalab.load([
  datalab.TARGETS.SINGLE_MAN,
  datalab.TARGETS.BOOK
], function (err, result) {
  console.log(err, JSON.stringify(result))
})
