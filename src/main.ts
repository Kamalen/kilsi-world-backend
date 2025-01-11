import { wake } from 'wake_on_lan'

const laptop = "bc:17:b8:ce:92:b7"
const desktop = "04-92-26-4D-A1-91"
const remoteIP = "5.48.149.204"

wake(desktop, {address: remoteIP, port: 7, num_packets: 10}, (error: any) => {
  console.log('Wakie wakie')
  console.log(error)
})

// wake(desktop, (error: any) => {
//  console.log('Wakie local wakie')
//  console.log(error)
// })
