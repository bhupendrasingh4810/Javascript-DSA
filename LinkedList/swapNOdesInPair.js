var swapPairs = function (head) {
    const dummy = new ListNode(0);
    let current = dummy;
    dummy.next = head;
    while (current.next !== null && current.next !== undefined && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }
    return dummy.next;
};