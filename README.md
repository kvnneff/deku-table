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
        ['Last Name', 'First Name'],   // first row is header row
        ['Doe', 'Jane'],
        ['Smith', 'John'],
        ['Neff', 'Kevin']
      ]}/>
  )
}

```

## License

[MIT](LICENSE)
