# deku-table

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/deku-table.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/deku-table
[travis-image]: https://img.shields.io/travis/kvnneff/deku-table.svg?style=flat-square
[travis-url]: https://travis-ci.org/kvnneff/deku-table

Deku component for a table

## Install

```
npm install deku-table
```

## Usage

```js
import Table from 'kvnneff/deku-table'

export function render ({props}) {
  return (
    <Table
      rows={[
        ['Full Name', 'Age'],       // first row is header row
        ['Steven Miller', '25'],
        ['Tamara Jordan', '23'],
        ['John Smith', '28']
      ]}/>
  )
}

```

## License

[MIT](LICENSE)
