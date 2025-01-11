import { wake } from 'wake_on_lan';

const yuna = 'c8-94-02-14-79-7f';

wake(yuna, (error: any) => {
  console.log('Wakie wakie');
  console.log(error);
});

wake(yuna, { address: '192.168.1.120', port: 7 }, (error: any) => {
  console.log('Wakie wakie');
  console.log(error);
});
