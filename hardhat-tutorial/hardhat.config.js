require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

const ALCHEMY_API_KEY_URL = process.env.QUICKNODE_HTTP_URL

const RINKEBY_PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  }
}
