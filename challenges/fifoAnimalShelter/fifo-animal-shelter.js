const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog') {
      this.dogQueue.enqueue(animal.name);
    }

    if(animal.type === 'cat') {
      this.catQueue.enqueue(animal.name);
    }
  }

  dequeue(pref) {
    if(pref === 'dog') {
      if(!this.dogQueue.peek()) 'there are no more dogs';
      if(this.dogQueue.peek()) this.dogQueue.dequeue();
    }

    if(pref === 'cat') {
      if(!this.catQueue.peek()) 'there are no more cats';
      if(this.catQueue.peek()) this.catQueue.dequeue();
    }
  }
}

module.exports = { AnimalShelter };