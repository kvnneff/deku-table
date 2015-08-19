/** @jsx dom */

import dom from 'magic-virtual-element'

export function render ({props}) {
  let {rows} = props
  let tableRows = []
  let tableClassName = props.tableClassName || ''

  if (!rows) rows = []

  tableRows = rows.map(function (row) {
    let rowCells = row.map(function (cell) {
      let cellProps = {
        class: 'dk-Table-cell',
        'colspan': '1',
        'rowspan': '1'
      }
      return dom('td', cellProps, [
        dom('span', [cell])
      ])
    })

    return dom('tr', {class: 'dk-Table-row'}, [rowCells])
  })

  let tableProps = {
    class: 'dk-Table ' + tableClassName,
    cellpadding: '0',
    cellspacing: '0'
  }

  let tableBodyProps = {
    class: 'dk-TableBody'
  }

  return dom('table', tableProps, [
    dom('tbody', tableBodyProps, [tableRows])
  ])
}
