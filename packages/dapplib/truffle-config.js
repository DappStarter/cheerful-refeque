require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind erosion grid clog front slide'; 
let testAccounts = [
"0xd268509ed828f684d0dcf597b578afed8fbb49cb2edc0be355cc885d065a1fab",
"0xb6eb726eaee9fd69bcb4ae9d637e6b9b4304eb8a75c76a97fef3180a0e48d280",
"0xf3b5ba2e316c6f90b36224e4981061d2e60cd047feff5bd5eeae503b3b495ecd",
"0xa8bbb7092a267ef6e492f6dbdf0653d1030a19a337df4a1721b50e04b9c85f65",
"0xcc8131cbbfe8f62a0ff5f3ae21c74eb032da602573c750a5e1f825775088178c",
"0x5a3f13a8865a20c1b9a20845358cccaa5f67e69c9f4353925bda0b72d3f37238",
"0x3dec20398c27be85a0f78fa250a498d4ad35246c6db4cc1b335eab2f1bdcb7fb",
"0x3900995de6025e3800085fc2892706745dbc77600794105b9e531f8cbedf26b7",
"0x9b00b18ddd9e87701c7c8db0e331502c64f079cc8b377349c23213cc613e8a0d",
"0x5c1d6e063e58b0e5d55991a2b6f6dded8fa3f1aa5ab97874dbdf3370fb1a02d4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

