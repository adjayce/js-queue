// circular queue
class CircleQueue {
    constructor (capacity = 0) {
        this.capacity = capacity; // capacity
        this.clean()
    }

    // empty queue
    clean () {
        this.head = 0; // queue head
        this.tail = 0; // queue tail
        this.length = 0; // length of the queue
        this.queue = []
    }

    // add the element to the queue tail
    push (element) {
        // if the queue is full
        // if yes return false
        if (this.isFull()) return false;
        // add the element to the tail
        this.queue[this.tail] = element;
        this.length++;
        // modify the queue tail
        // +1 to the original queue tail then take the remaining capacity to pervent the
        // tail exceed the length of the array to achieve the tail of the circular queue
        this.tail = ++this.tail % this.capacity;
        return this.length
    }

    // remove the element from the queue
    shift () {
        // if the queue is empty
        // if yes return
        if (this.isEmpty()) return;
        // get the queue head and remove the queue head(left blank)
        let temp = this.queue[this.head];
        this.queue[this.head] = null;
        this.length--;
        // modify the queue head
        // +1 to the original queue head then take the remaining capacity to pervent the
        // head exceed the length of the array to achieve the head of the circular queue
        this.head = ++this.head % this.capacity;
        return temp
    }

    // if is full
    isFull () {
        if (this.length === this.capacity) return true;
        return false
    }

    // if is empty
    isEmpty () {
        if (this.length === 0) return true;
        return false
    }

    // traverse all the element
    travel (cb) {
        for (let i = this.head; i < this.length + this.head; i++) {
            cb && cb(this.queue[i % this.capacity])
        }
    }
}