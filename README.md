Kademlia implementation in WebRTC
=================================

The implementation uses WebRTC and Peer.js library. The library has some issues with the memory usage when it comes to opening and closing connections. Thus the library used here is a fork to the original. A pull request will be submitted promptly.

The management of the 160-bit keys is used using Tom Wu's extraordinary library for large numbers.

The hashing function is SHA1 as it produces exactly 160-bit keys. The hashing is spiced with the node identifier to avoid collisions as much as posible. Keep in mind that this implementation is an experiment mostly to check if the signal server is a perfrormance bottleneck. The hashing SHA1 is taken from Chris Veness and his fantastic implementation. You can find it on GitHub as well.
