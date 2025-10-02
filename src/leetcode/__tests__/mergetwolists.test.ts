import { createLinkedList, linkedListToArray } from '../../common/ListNode'
import { mergeTwoLists } from '../mergetwolists'

describe('mergeTwoLists', () => {
  it('should merge two non-empty sorted lists', () => {
    const l1 = createLinkedList([1, 2, 4])
    const l2 = createLinkedList([1, 3, 4])
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4])
  })

  it('should handle when one list is empty', () => {
    const l1 = createLinkedList([])
    const l2 = createLinkedList([0])
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual([0])
  })

  it('should handle when both lists are empty', () => {
    const l1 = createLinkedList([])
    const l2 = createLinkedList([])
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual([])
  })

  it('should merge lists with different lengths', () => {
    const l1 = createLinkedList([5, 10, 15])
    const l2 = createLinkedList([2, 3, 20])
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual([2, 3, 5, 10, 15, 20])
  })

  it('should merge lists with duplicates correctly', () => {
    const l1 = createLinkedList([1, 1, 2])
    const l2 = createLinkedList([1, 1, 3])
    const merged = mergeTwoLists(l1, l2)
    expect(linkedListToArray(merged)).toEqual([1, 1, 1, 1, 2, 3])
  })
})
