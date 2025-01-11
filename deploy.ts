#!/usr/bin/node

import { readFileSync } from 'fs';
import { Client } from 'node-scp';
import { homedir } from 'os';

Client({
  host: 'raspberrypi.local',
  port: 22,
  username: 'tidiusff',
  privateKey: readFileSync(`${homedir()}/.ssh/id_rsa`),
}).then(async (client) => {
  console.log('Client connected');

  await client.rmdir('/home/tidiusff/server/dist');

  await client.uploadDir('./dist', '/home/tidiusff/server/dist');
  await client.uploadFile('./package.json', '/home/tidiusff/server/package.json');
  await client.uploadFile('./.env', '/home/tidiusff/server/.env');

  console.log('Upload successful');

  client.close();
});
