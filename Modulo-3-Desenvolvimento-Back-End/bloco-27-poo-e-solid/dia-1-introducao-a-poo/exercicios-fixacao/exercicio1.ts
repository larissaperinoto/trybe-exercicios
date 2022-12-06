class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand} com resolução ${this._resolution}, ${this._size}`);
  }

  get connectedTo() {

    return this._connectedTo;
  }

  set connectedTo(conection: string) {
    if (this._connections.includes(conection)) {
      this._connectedTo = conection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}
