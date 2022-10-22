// const fs = require('fs');
'use strict';
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
    
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nnice to meet you!');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
}

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// })

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fileOps();

console.log("hello");

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), /*'utf-8', default*/'Nice to meet you!', (err) => {
//   if (err) throw err;
//   console.log('Write complete');
// });


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
//   if (err) throw err;
//   console.log('Write Complete');
  
//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
//     if (err) throw err;
//     console.log('Append to write Complete');

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//       if (err) throw err;
//       console.log('Rename Complete');
//     })
//   })
// })



process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})