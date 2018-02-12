const uport_lib = require('uport-connect');
const qrcode = require('qrcode-terminal');
const SimpleSigner = uport_lib.SimpleSigner;
const Connect = uport_lib.Connect;

const UPORT_APP_ADDRESS = '2ozvpTyYSEs4RACXwHSckTnhkK81wtnCbQQ'
const SIGNING_KEY = '72dbb7f7df255550bd4ab4f257545900ae19af0d1e06f28061dce00d30f28152'

async function main() {

  const uport = new Connect('ETHLend Integration', {
    clientId   : UPORT_APP_ADDRESS,
    network    : 'rinkeby',
    signer     : SimpleSigner(SIGNING_KEY),
    uriHandler : uri => qrcode.generate(uri, { small : true })
  })

  try {

    userProfile = await uport.requestCredentials({
      requested     : ['name', 'phone', 'country'],
      notifications : true // We want this if we want to recieve credentials
    })

    console.log(userProfile)

  }
  catch (err) {
    console.log(err)
  }

}

main()
