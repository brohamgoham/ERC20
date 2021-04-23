
const HDWalletProvider = require('@truffle/hdwallet-provider');
const sokol = 'https://sokol.poa.network';
const fs = require('fs');
const mnemonic = fs.readFileSync("rookie athlete can analyst sound gift predict way harbor broccoli wheel sugar").toString().trim();

module.exports = {


  networks: {
    
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },

    sokol: {
    provider: () => new HDWalletProvider(mnemonic, sokol),
    network_id: 77,   // This network is yours, in the cloud.
    production: true    // Treats this network as if it was a public net. (default: false)
    }
  },



  // Configure your compilers
  compilers: {
    solc: {
       version: "0.7.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
