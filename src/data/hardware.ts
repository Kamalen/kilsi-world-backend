const NOCTALI_IP_ADDRESS = '5.48.149.204';

export enum HardwareId {
  KAMALEN = 'kama',
  YUNA = 'yuna',
  KILSICA = 'kilsi',
}

export const HARDWARE = [
  {
    id: HardwareId.KAMALEN,
    label: 'PC de bureau Kama',
    macAddress: '04-92-26-4D-A1-91',
    ipAddress: NOCTALI_IP_ADDRESS,
  },
  {
    id: HardwareId.YUNA,
    label: 'PC Yuna',
    macAddress: 'c8:94:02:14:79:7f',
    ipAddress: NOCTALI_IP_ADDRESS,
  },
  {
    id: HardwareId.KILSICA,
    label: 'PC serveur de Kilsi',
    macAddress: '',
    ipAddress: 'kilsica.duckdns.org',
  },
];
