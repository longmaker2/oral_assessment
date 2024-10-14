// Node class
class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList<T> {
  head: ListNode<T> | null = null;

  // Method to add an element to the end of the linked list
  add(value: T): void {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove an element from the linked list
  remove(value: T): void {
    if (!this.head) return;

    // If the element to remove is the head
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    // If the element is found
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // Method to find an element in the linked list
  find(value: T): ListNode<T> | null {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Method to print the linked list
  printList(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.printList(); // Output: 1 2 3
list.remove(2);
list.printList(); // Output: 1 3
console.log(list.find(1)); // Output: ListNode { value: 1, next: ListNode { value: 3, next: null } }
