const Client =require('./Client');


const client = new Client();
client.sendMessage('A')
    .then((data)=> { console.log(`Received: ${data}`);  return client.sendMessage('B');} )
    // .then((data)=> { console.log(`Received: ${data}`);  return client.sendMessage('C');} )
    // .then((data)=> { console.log(`Received: ${data}`);  return client.sendMessage('exit');} )
    .catch((err) =>{ console.error(err); })