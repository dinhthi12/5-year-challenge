import { reverseList } from '../reverseLinkedList'
import { createLinkedList, linkedListToArray } from '../../common/listNode'

describe('reverseList', () => {
  it('should reverse a linked list with multiple nodes', () => {
    const head = createLinkedList([1, 2, 3, 4, 5])
    const result = reverseList(head)
    expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1])
  })

  it('should return the same list if only one node', () => {
    const head = createLinkedList([42])
    const result = reverseList(head)
    expect(linkedListToArray(result)).toEqual([42])
  })

  it('should return null for an empty list', () => {
    const head = createLinkedList([])
    const result = reverseList(head)
    expect(result).toBeNull()
  })
})
