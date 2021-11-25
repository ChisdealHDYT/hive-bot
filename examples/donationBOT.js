const { HiveBot } = require('hive-bot');

const username = 'BOT USERNAME';
const postingKey = 'BOT POSTING KEY';
const activeKey = 'BOT ACTIVE KEY';

const targetUsername = 'username money goes to user when bot accepted and sends HIVE / HBD to Account';


const bot = new HiveBot({username, postingKey, activeKey});

bot.onDeposit(username, handlePost);

function handlePost(data, responder) {

  console.log(`Transactions Recived From: ${data.from} with ${data.amount}`);
  
  var paymentstxt = data.amount;
  
  var payment = paymentstxt.split(" ");
  
  if (payment[1] == "HIVE") {
    responder.sendHiveTo(targetUsername, payment[0], `You Recived Donation from ${data.from} for ${data.amount}`);
  } else {
    responder.sendHbdTo(targetUsername, payment[0], `You Recived Donation from ${data.from} for ${data.amount}`);
  }
}

bot.start();
