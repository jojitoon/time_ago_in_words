# Time_Past [![Build Status](https://travis-ci.org/JojiAndela/time_ago_in_words.svg?branch=master)](https://travis-ci.org/JojiAndela/time_ago_in_words) [![Maintainability](https://api.codeclimate.com/v1/badges/34be48802bb6a87ea376/maintainability)](https://codeclimate.com/github/JojiAndela/time_ago_in_words/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/34be48802bb6a87ea376/test_coverage)](https://codeclimate.com/github/JojiAndela/time_ago_in_words/test_coverage)

Time past is a simple package that helps compute the time that has elapsed since a particular date. It converts dates to elapsed time.

It can be headache to write all that code that computes the time that has passed since the current date, hence this package.

## Current Features

1. Compute time elapsed from specific date till now.

## Intended Features

1. Compute time elapsed between two dates.

## Get Started

- Simply download the package as a development dependency with `npm i time_past`.
- Import and use
  
```javascript
import TimePast from 'time_past';

function() {
  const date = '2012-10-10'

  const elapsedTime = TimePast.inWords(data);
  console.log(elapsedTime); // '7 years ago'
}
```

## Documentation

### Methods

**inWords**: This method computes the elapsed time from a previous date till now. The previous date can either be a string or a Javascript Date object. Returned value will be a string.

| Parameters | Type           | Description       | Example      |
|------------|----------------|-------------------|--------------|
| date       | Date || string | The previous date | '2012-10-10' |

#### Example (inWords)

```javascript
const elapsedTime = TimePast.inWords(
  '2012-10-10',
);

console.log(elapsedTime); // '7 years ago'
```

### Contributors

_Jojitoon_: 👨🏿[Profile](https://github.com/JojiAndela)<br />
_Opeoluwa Iyi-Kuyoro_: 👨🏿[Profile](https://github.com/IyiKuyoro) - [WebSite](https://iyikuyoro.com)

### Contributions

**PR Style**: Please use the template you find in the PR message to compose one.
