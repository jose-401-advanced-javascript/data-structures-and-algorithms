const { AnimalShelter } = require('../fifo-animal-shelter');

describe('Animal shelter queue', () => {
  const animalShelter = new AnimalShelter();

  const dog1 = {
    type: 'dog',
    name: 'Mouse'
  };
  const dog2 = {
    type: 'dog',
    name: 'Thorin'
  };
  const dog3 = {
    type: 'dog',
    name: 'Runkle'
  };

  const cat1 = {
    type: 'cat',
    name: 'Hank'
  };
  const cat2 = {
    type: 'cat',
    name: 'Cholula'
  };
  const cat3 = {
    type: 'cat',
    name: 'Lucy'
  };

  it('crate an empty animal shelter', () => {
    expect(animalShelter).toEqual({
      dogQueue: { front: null },
      catQueue: { front: null },
    });
  });

  it('can queue a dog', () => {
    animalShelter.enqueue(dog1);
    expect(animalShelter.dogQueue.front.value).toEqual('Mouse');
  });

  it('can queue a cat', () => {
    animalShelter.enqueue(cat1);
    expect(animalShelter.catQueue.front.value).toEqual('Hank');
  });

  it('can queue different animals in succession', () => {
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(cat3);
    animalShelter.enqueue(dog3);
    expect(animalShelter.dogQueue.front.next.value).toEqual('Thorin');
    expect(animalShelter.dogQueue.front.next.next.value).toEqual('Runkle');
    expect(animalShelter.catQueue.front.next.value).toEqual('Cholula');
    expect(animalShelter.catQueue.front.next.next.value).toEqual('Lucy');
  });

  it('can dequeue a dog', () => {      
    expect(animalShelter.dequeue('dog')).toBe('Mouse');
    expect(animalShelter.dogQueue.front.value).toBe('Thorin');
  });

  it('can dequeue a cat', () => {      
    expect(animalShelter.dequeue('cat')).toBe('Hank');
    expect(animalShelter.catQueue.front.value).toBe('Cholula');
  });

  it('can empty a queue', () => {
    animalShelter.dequeue('dog');
    animalShelter.dequeue('dog');
    animalShelter.dequeue('cat');
    animalShelter.dequeue('cat');
    expect(animalShelter.dequeue('dog')).toBe('Que is empty');
    expect(animalShelter.dequeue('cat')).toBe('Que is empty');
  });
});