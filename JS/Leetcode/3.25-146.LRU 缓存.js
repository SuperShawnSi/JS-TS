//https://leetcode.cn/problems/lru-cache/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.head = {
    key: 0,
    value: 0,
    next: null,
    prev: null,
  };

  this.tail = {
    key: 0,
    value: 0,
    next: null,
    prev: null,
  };

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};

LRUCache.prototype.removeTail = function () {
  const node = this.tail.prev;
  this.removeNode(node);
  return node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  const node = this.map.get(key);
  this.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.value = value;
    this.moveToHead(node);
  } else {
    const newNode = {
      key: key,
      value: value,
      prev: null,
      next: null,
    };
    this.map.set(key, newNode);
    this.addToHead(newNode);

    if (this.map.size > this.capacity) {
      const tailNode = this.removeTail();
      this.map.delete(tailNode.key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
