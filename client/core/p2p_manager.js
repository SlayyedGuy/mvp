const { createLibp2p } = require('libp2p')
const { TCP } = require('@libp2p/tcp')
const { WebSockets } = require('@libp2p/websockets')
const { PeerId } = require('@libp2p/peer-id')
const { Bootstrap } = require('@libp2p/bootstrap')
const { Mdns } = require('@libp2p/mdns')

async function startP2P() {
  // Generate a new Peer ID
  const peerId = await PeerId.create()

  // Setup libp2p
  const node = await createLibp2p({
    peerId: peerId,
    transports: [
      new TCP(),
      new WebSockets()
    ],
    streamMuxers: [
      // Add stream muxers (if required for your app)
    ],
    connectionEncryption: [],
    peerDiscovery: [
      new Mdns(), // Local network discovery
      new Bootstrap({
        list: [
          // Replace with your peer bootstrap node addresses if needed
          '/ip4/127.0.0.1/tcp/4001',
        ],
      }),
    ]
  })

  // Start the node
  await node.start()

  console.log(`P2P Node started! Peer ID: ${peerId.toB58String()}`)
  return node
}

module.exports = { startP2P }
