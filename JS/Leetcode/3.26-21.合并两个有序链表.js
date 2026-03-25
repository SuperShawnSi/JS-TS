// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//   const list3 = new ListNode();
//   let i = list1;
//   let j = list2;
//   let k = list3;

//   while (i !== null && j !== null) {
//     if (i.val < j.val) {
//       const node = new ListNode(i.val, null);
//       k.next = node;
//       i = i.next;
//       k = k.next;
//     } else {
//       const node = new ListNode(j.val, null);
//       k.next = node;
//       j = j.next;
//       k = k.next;
//     }
//   }

//   if (i === null) {
//     for (let v = j; v !== null; v = v.next) {
//       const node = new ListNode(v.val, null);
//       k.next = node;
//       k = k.next;
//     }
//   } else {
//     for (let v = i; v !== null; v = v.next) {
//       const node = new ListNode(v.val, null);
//       k.next = node;
//       k = k.next;
//     }
//   }

//   return list3.next;
// };

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let cur = dummy;

  let i = list1;
  let j = list2;

  while (i !== null && j !== null) {
    if (i.val < j.val) {
      cur.next = i;
      i = i.next;
    } else {
      cur.next = j;
      j = j.next;
    }
    cur = cur.next;
  }

  cur.next = i !== null ? i : j;

  return dummy.next;
};
