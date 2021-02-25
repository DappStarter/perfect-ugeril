require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth stereo uncover include enter army giggle'; 
let testAccounts = [
"0x38fd6fe2cfdf10c18231c7acb7b1543f0813947abf33776853a70abb69e3c5e4",
"0x95b1012b1e911050bacdd7c9d74a319e9ac13a6cdffd5d0ba520f10f230aedf7",
"0xdfa039dfa5a109fb927c2dc9a11287b8a120db45d173c1f530e30f87c02b6c00",
"0x7d07ea4466e2bcb141f0e65bbe0a8e62f98368deee0893a662921d1ca8c1c399",
"0x8883abe6b3c3371487c508d4a9ef263a8888818226f69041d22fa10affa22e42",
"0x043845aa44c2ffd72578b379e77ef2dc2bc63249c176977f54cd57f7beacc033",
"0xba64def6c5c89a358bdbfb58da94c70b8f14704840af212d2912465c4d8d32fa",
"0xe44cc77bec1fe25383130eb7e5a2a9f11790bf8d183b6bbd481e3d8ed30bab19",
"0x35056c263193ed0f15422b5bbfde4374dda81b8f1a3b7395c4498deda5f368c9",
"0xb6c31b335895b5f83d72c4c053224ea02351ec7607bc2d0b62c167e5c210a585"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
