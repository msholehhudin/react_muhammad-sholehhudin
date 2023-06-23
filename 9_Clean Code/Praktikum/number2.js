class Kendaraan {
  constructor() {
    this.totalRoda = 0;
    this.kecepatanPerJam = 0;
  }
}

class Mobil extends Kendaraan {
  berjalan() {
    this.tambahKecepatan(10);
  }

  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }
}

function main() {
  const mobilCepat = new Mobil();
  mobilCepat.berjalan();
  mobilCepat.berjalan();
  mobilCepat.berjalan();

  const mobilLamban = new Mobil();
  mobilLamban.berjalan();
}

main();
