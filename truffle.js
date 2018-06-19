module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // localhost
      port: 8545,
      network_id: "*",
    },

ropsten: {
      host: "localhost",
      port: 8546,
      network_id: "3",
      from: "0x851d3a3c8eb879775e2c59b53b8099a8d199f683",
      gas: 4600000,
    }

  },
};
