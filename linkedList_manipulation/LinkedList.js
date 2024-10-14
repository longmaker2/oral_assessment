// Node class
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
// LinkedList class
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    // Method to add an element to the end of the linked list
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    // Method to remove an element from the linked list
    LinkedList.prototype.remove = function (value) {
        if (!this.head)
            return;
        // If the element to remove is the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
        // If the element is found
        if (current.next !== null) {
            current.next = current.next.next;
        }
    };
    // Method to find an element in the linked list
    LinkedList.prototype.find = function (value) {
        var current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    // Method to print the linked list
    LinkedList.prototype.printList = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
// Example usage:
var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.printList(); // Output: 1 2 3
list.remove(2);
list.printList(); // Output: 1 3
console.log(list.find(1)); // Output: ListNode { value: 1, next: ListNode { value: 3, next: null } }
