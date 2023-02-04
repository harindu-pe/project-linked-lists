function createNode(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

function LinkedList() {
  return {
    HEAD: null,
    length: null,

    // append a node to the end of the list
    append(value) {
      // create a new node using factory function
      let newNode = createNode(value);
      // if HEAD is null then set new node to HEAD
      // else find the last node and set its nextNode to the new node
      if (this.HEAD === null) {
        this.HEAD = newNode;
      } else {
        let temp = this.HEAD;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
        }
        temp.nextNode = newNode;
      }
    },

    // prepend a node to the start of the list
    prepend(value) {
      // create a new node using factory function
      let newNode = createNode(value, this.HEAD);
      // update HEAD
      this.HEAD = newNode;
    },

    size() {
      if (this.HEAD === null) {
        this.length = 0;
      } else if (this.HEAD.nextNode === null) {
        this.length = 1;
      } else {
        this.length = 1;
        let temp = this.HEAD;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
          this.length += 1;
        }
      }
      return this.length;
    },

    head() {
      return this.HEAD;
    },

    tail() {
      let temp = this.HEAD;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        if (temp.nextNode === null) {
          return temp;
        }
      }
    },

    at(index) {
      let temp = this.HEAD;
      if (index === 1) {
        return temp;
      }

      for (let i = 1; i <= index; i++) {
        temp = temp.nextNode;
      }
      return temp;
    },

    pop() {
      let temp = this.HEAD;
      while (temp.nextNode !== null) {
        if (temp.nextNode.nextNode === null) {
          temp.nextNode = null;
        } else {
          temp = temp.nextNode;
        }
      }
    },

    contains(value) {
      let temp = this.HEAD;
      while (temp.nextNode !== null) {
        if (temp.value === value) {
          return true;
        }
        temp = temp.nextNode;
      }
      if (temp.value === value) {
        return true;
      }
      return false;
    },

    find(value) {
      let temp = this.HEAD;
      let counter = 0;
      while (temp.nextNode !== null) {
        counter += 1;
        if (temp.value === value) {
          return counter;
        }
        temp = temp.nextNode;
      }
      counter += 1;
      if (temp.value === value) {
        return counter;
      }
    },

    toString() {
      let temp = this.HEAD;
      let string = "";
      while (temp.nextNode !== null) {
        string += `( ${temp.value} ) -> `;
        temp = temp.nextNode;
      }
      string += `null`;
      console.log(string);
    },
  };
}

const list = LinkedList();
list.append(2);
list.append(3);
list.append(4);
list.prepend(1);
console.log("Size: ", list.size());
console.log("Head: ", list.head());
console.log("Tail: ", list.tail());
console.log("At: ", list.at(1));
// list.pop();
// console.log("Head: ", list.head());
console.log(list.contains(4));
console.log(list.find(1));
list.toString();
