// problem622.js

class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.q = new Array(k);
        this.head = 0;
        this.count = 0;
    }

    enQueue(value) {
        if (this.isFull()) return false;
        const tailIndex = (this.head + this.count) % this.size;
        this.q[tailIndex] = value;
        this.count++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) return false;
        this.head = (this.head + 1) % this.size;
        this.count--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.q[this.head];
    }

    Rear() {
        if (this.isEmpty()) return -1;
        const tailIndex = (this.head + this.count - 1) % this.size;
        return this.q[tailIndex];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }
}

module.exports = MyCircularQueue;
