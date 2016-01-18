# datalab

[naver data lab](http://datalab.naver.com/) crawler for Node.js

The unofficial module to crawl the content of the site.
Therefore, whenever it may not be a normal operation, if problems occur, please add the issue.

[![version](https://img.shields.io/npm/v/datalab.svg) ![download](https://img.shields.io/npm/dm/datalab.svg)](https://www.npmjs.com/package/datalab)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Usage

```javascript
var datalab = require('./')

datalab.load([
  datalab.TARGETS.SINGLE_MAN,
  datalab.TARGETS.BOOK
], function (err, result) {
  console.log(err, JSON.stringify(result))
})
```

```javascript
[
  {
    "title": "싱글남",
    "key": "single_man",
    "items": [
      "국세청 홈텍스",
      "쯔위사태 대만반응",
      "응답하라 1988",
      "기아 k7 풀체인지",
      "복면가왕 캣츠걸",
      "셀트리온",
      "이란 경제 제재 해제",
      "eq900",
      "레버넌트:죽음에서 돌아온 자",
      "민원24 주민등록등본"
    ],
    "ctime": "2016-01-18T05:00:00+00:00"
  },
  {
    "title": "책",
    "key": "book",
    "items": [
      "미움받을용기",
      "나미야잡화점의기적",
      "데미안",
      "이기적유전자",
      "비밀의정원",
      "나는단순하게살기로했다",
      "지적대화를위한넓고얕은지식",
      "나의라임오렌지나무",
      "영단기토익rc",
      "오베라는남자"
    ],
    "ctime": "2016-01-16T15:00:00+00:00"
  }
]
```

## TARGETS
````
{
  "TV": "tv",
  "BOOK": "book",
  "MOVIE": "movie",
  "CONCERT": "concert",
  "CAR": "car",
  "GAME": "game",
  "SINGLE_MAN": "single_man",
  "SINGLE_WOMAN": "single_woman",
  "HOUSEWIFE": "housewife",
  "COLLEGE_STUDENT": "college_student",
  "TEENAGER": "teenager"
}
````


## LICENSE

datalab is licensed under the MIT license.
