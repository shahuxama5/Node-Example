const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log('data recieved');
});

customEmitter.on('response', (name, id) => {
    console.log(`user is : ${name} with id : ${id}`);
});

customEmitter.emit('response', 'uxama', 1919);