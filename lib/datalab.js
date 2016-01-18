var request = require('request')
var cheerio = require('cheerio')
var moment = require('moment')

var _KEYS = {
  TV: 'TV오락',
  BOOK: '책',
  MOVIE: '영화',
  CONCERT: '공연',
  CAR: '자동차',
  GAME: '게임',
  SINGLE_MAN: '싱글남',
  SINGLE_WOMAN: '싱글녀',
  HOUSEWIFE: '주부',
  COLLEGE_STUDENT: '대학생',
  TEENAGER: '청소년'
}

var KEYS = {}
var TARGETS = {}
for (var key in _KEYS) {
  KEYS[_KEYS[key]] = key.toLowerCase()
  TARGETS[key] = key.toLowerCase()
}

var load = function (cb) {
  return request({
    method: 'GET',
    url: 'http://datalab.naver.com'
  }, function (err, res, body) {
    if (err) {
      return cb(err)
    }

    var $ = cheerio.load(body)
    var $items = $('div.keyword_rank')
    var items = {}

    for (var i = 0, title = null, key = null; i < $items.length; i++) {
      title = $($items[i]).find('strong.rank_title').text().trim()
      key = extractKey(title)

      items[key] = {
        title: title,
        key: key,
        items: extractList($($items[i]).find('li.list span.title'), $),
        ctime: extractDate($($items[i]).find('.rank_time time').text())
      }
    }

    cb(null, items)
  })
}

var extractKey = function (txt) {
  return KEYS[txt]
}

var extractList = function ($items, $) {
  var items = []
  for (var i = 0; i < $items.length; i++) {
    items.push($($items[i]).text())
  }
  return items
}

var extractDate = function (str) {
  var date = moment(str, 'YYYY.MM.DD HH:mm').utc()
  return date.format()
}

module.exports = {
  TARGETS: TARGETS,
  load: function (filter, cb) {
    if (filter instanceof Array === false) {
      filter = [filter]
    }

    load(function (err, items) {
      if (err) {
        return cb(err)
      }

      var result = []
      for (var i = 0; i < filter.length; i++) {
        if (typeof items[filter[i]] !== 'undefined') {
          result.push(items[filter[i]])
        }
      }
      cb(null, result)
    })
  }
}
