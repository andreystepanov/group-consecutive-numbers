# group-consecutive-numbers

> groups all consecutive numbers in `array`

## Installation

```
npm install group-consecutive-numbers --save
```

## Usage

```javascript
import group from 'group-consecutive-numbers'

const numbers = [1, 2, 4, 6, 8, 11, 7]
const grouped = group(numbers)

console.log(grouped)
```

`grouped` variable would be:

```json
[
  [1, 2],
  [6, 7, 8]
]
```

If you want to receive only groups that have 3 or more items (`array.length`) you can provide second argument:

```javascript
const grouped = group(numbers, 3)
```

This time `grouped` variable would be:

```json
[[6, 7, 8]]
```
