// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
 let current = list.head; // your code here

 while (current !== null) {
  let nextNode = current.next

  if (current.data === value) {
    // Si el nodo a eliminar es el head
    if (current === list.head) {
      list.head = current.next;
      if (list.head) {
        list.head.prev = null;
      }
    }

    // Si el nodo a eliminar es el tail
    if (current === list.tail) {
      list.tail = current.prev;
      if (list.tail) {
        list.tail.next = null;
      }
    }

    // Si el nodo está en medio
    if (current.prev) {
      current.prev.next = current.next;
    }
    if (current.next) {
      current.next.prev = current.prev;
    }

    // Reducir el tamaño de la lista
    list.size--;
  }

  current = nextNode; // Mover al siguiente nodo
}

}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5