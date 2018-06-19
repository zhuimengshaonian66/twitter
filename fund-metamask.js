const sender = web3.eth.accounts[2];
const receiver = "0x6B830ACf0F507173bfaba7075726036d9C805A90";
const amount = web3.toWei(10, 'ether');

module.exports = function(callback) {
  web3.eth.sendTransaction({
    from: sender,
    to: receiver,
    value: amount
  }, callback)
}
