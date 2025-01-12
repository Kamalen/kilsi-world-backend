import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { wake } from 'wake_on_lan';
import { HARDWARE } from '../../data/hardware';

@Injectable()
export class HardwareService {
  getHello(): any {
    return { result: 'Hello World de gauche!' };
  }

  wakeUp(id: string): Observable<boolean> {
    const hardware = HARDWARE.find((hardware) => hardware.id === id);
    return new Observable((subscriber) => {
      if (hardware) {
        wake(
          hardware.macAddress,
          {
            address: hardware.ipAddress,
            port: 7,
            num_packets: 20,
            interval: 200,
          },
          (error: any) => {
            if (error) {
              subscriber.error(error);
            } else {
              subscriber.next(true);
            }
            subscriber.complete();
          },
        );
      } else {
        subscriber.error({ message: 'Hardware not found' });
        subscriber.complete();
      }
    });
  }
}
