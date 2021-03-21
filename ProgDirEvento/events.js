const EventEmitter = require('events');

class Evento extends EventEmitter{}

const meuEvento = new Evento();

meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento 'SEGURANÇA': ${x} ${y}`);
});

meuEvento.emit('seguranca', 'user', 'excluiu 1');








//meuEvento()