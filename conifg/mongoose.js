const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    console.log('success')
  await mongoose.connect('mongodb://127.0.0.1:27017/issue-tracker-db');
  

}