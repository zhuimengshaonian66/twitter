const UserStorage = artifacts.require('UserStorage');
const TweetStorage = artifacts.require('TweetStorage'); // <-- Add this...

module.exports = (deployer) => {
  deployer.deploy(UserStorage);
  deployer.deploy(TweetStorage); // <-- ...and this!
}
