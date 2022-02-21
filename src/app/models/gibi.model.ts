export class Gibi {
  Id!: number;
  Titulo: string;
  Editora: string;
  DataPub: Date;

  constructor() {
      //this.Id = 0;
      this.Titulo = "";
      this.Editora = "";
      this.DataPub = new Date();
  }
}
