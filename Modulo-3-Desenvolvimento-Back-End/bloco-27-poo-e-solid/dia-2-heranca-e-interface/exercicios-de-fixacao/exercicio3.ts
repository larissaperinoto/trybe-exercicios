interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param);
  }
}

class ConsoleLogger2 extends ConsoleLogger {};

