// Stack
class Stack {
    constructor (capacity) {
        this.capacity = capacity;
        this.clean()
    }

    push (element) {
        if (isFull) return;
        this.stack.push(element);
        return ++this.top
    }

    pop () {
        if (this.isEmpty) return;
        this.top--;
        return this.stack.pop()
    }

    isFull () {
        if (this.length >= this.capacity) return true;
        return false
    }

    isEmpty () {
        if (this.length === 0) return true;
        return false
    }

    clean () {
        this.top = 0;// top of the stack
        // this.bottom = 0 // bottom of the stack 'remain unchanged'
        this.length = 0;
        this.stack = []
    }

    travel (fromTop, cb) {
        if (fromTop) {
            this.stack.reverse().forEach(item => {
                cb && cb(item)
        })
        } else {
            this.stack.forEach(item => {
                cb && cb(item)
        })
        }
    }
}