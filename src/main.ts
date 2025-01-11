import { wake } from 'wake_on_lan'


wake("bc:17:b8:ce:92:b7", {address: '192.168.1.64', port: 7, num_packets: 10}, (error: any) => {
  console.log('Wakie wakie')
  console.log(error)
})
wake("bc:17:b8:ce:92:b7", {address: '192.168.1.64', port: 9, num_packets: 10}, (error: any) => {
  console.log('Wakie wakie')
  console.log(error)
})

wake("bc:17:b8:ce:92:b7", (error) => {
  console.log('Wakie wakie')
  console.log(error)
})

wake("BC-17-B8-CE-92-B7", (error) => {
  console.log('Wakie wakie')
  console.log(error)
})
