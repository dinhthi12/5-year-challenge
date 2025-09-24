import { reverseList } from '../reverselinkedlist';
import { ListNode } from '../../common/ListNode';

function listToArray(head: ListNode | null): number[] {
  let arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

describe('reverseList', () => {
  it('reverses a list with multiple nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    );

    const reversed = reverseList(head);

    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  it('handles single node list', () => {
    const head = new ListNode(42);
    const reversed = reverseList(head);

    expect(listToArray(reversed)).toEqual([42]);
  });

  it('handles empty list', () => {
    const head: ListNode | null = null;
    const reversed = reverseList(head);

    expect(listToArray(reversed)).toEqual([]);
  });
});
