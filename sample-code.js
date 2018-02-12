
import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('Roman\'s new app', {
  clientId: '2ozvpTyYSEs4RACXwHSckTnhkK81wtnCbQQ',
  network: 'rinkeby or ropsten or kovan',
  signer: SimpleSigner('72dbb7f7df255550bd4ab4f257545900ae19af0d1e06f28061dce00d30f28152')
})

// Request credentials to login
uport.requestCredentials({
  requested: ['name', 'phone', 'country'],
  notifications: true // We want this if we want to recieve credentials
})
.then((credentials) => {
  // Do something
})

// Attest specific credentials
uport.attestCredentials({
  sub: THE_RECEIVING_UPORT_ADDRESS,
  claim: {
    CREDENTIAL_NAME: CREDENTIAL_VALUE
  },
  exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
})
