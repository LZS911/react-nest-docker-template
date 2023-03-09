import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  timeLog(message: string) {
    this.log(`timestamp: ${new Date().toISOString()}. ${message}`);
  }
}
