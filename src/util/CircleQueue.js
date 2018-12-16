class CircleQueue {
  constructor(size) {
    this.data = new Array(size+1)
    this.clear()
  }

  clear() {
    this.start = 0
    this.end = 0
    this.data.fill(null)
  }

  enqueue(item) {
    this.data[this.end] = item
    if ( (this.end + 1) % this.data.length !== this.start ) {
      this.end = (this.end + 1) % this.data.length
    } else {
      this.end = (this.end + 1) % this.data.length
      this.start = (this.start + 1) % this.data.length
    }
  }

  size() {
    return (this.end - this.start + this.data.length) % this.data.length
  }

  dequeue() {
    const size = this.size()
    if (size < 1) throw new Error('没有元素')
    const item = this.data[this.start]
    this.start = (this.start + 1) % this.data.length
    return item
  }

  pop() {
    const size = this.size()
    if (size < 1) throw new Error('没有元素')
    const end = (this.end - 1 + this.data.length) % this.data.length
    const item = this.data[end]
    this.end = end
    this.data[end] = null
    return item
  }
}

export default CircleQueue
