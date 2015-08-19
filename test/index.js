/*global describe, it*/

import assert from 'virtual-element-assertions'
import * as Table from '..'

describe('Table', function () {
  it('should return a table', function () {
    let props = {}
    let node = Table.render({props})
    assert.isNode(node, 'table')
  })
  it('should return a table with children', function () {
    let rows = [
      ['Foo', 'Bar'],
      ['Baz', 'Qux']
    ]
    let props = {rows}
    let node = Table.render({props})
    console.log(node)
    assert.hasChildren(node.children[0])
  })
  it('should allow setting custom class name', function () {
    let props = {tableClassName: 'Foo'}
    let node = Table.render({props})
    assert.hasClass(node, 'Foo')
  })
})
