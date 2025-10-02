export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// Helper: create linked list to array
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  let head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

// Helper: linked list -> array
export function linkedListToArray(head: ListNode | null): number[] {
  let result: number[] = []
  let cur = head
  while (cur) {
    result.push(cur.val)
    cur = cur.next
  }
  return result
}
