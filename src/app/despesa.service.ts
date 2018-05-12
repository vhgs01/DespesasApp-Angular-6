import { Injectable }           from '@angular/core';
import { Despesa }              from './despesa';
import { LocalStorageService }  from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[] = new Array();

  constructor(private lss: LocalStorageService) { }

  public getDb(): void {
    this.despesas = new Array();
    if (this.lss.get("despesas") != null) {
      this.despesas = JSON.parse(this.lss.get("despesas"));
    }
  }

  public getAll(): Despesa[] {
    /*this.despesas = [
      new Despesa(1, "Mercado", "Compra do mês", new Date("2018-05-06T12:00:00Z"), 384.90),
      new Despesa(2, "Lazer", "Cinema", new Date("2018-05-12T12:00:00Z"), 65.00),
      new Despesa(3, "Saúde", "Dipirona", new Date("2018-03-08T12:00:00Z"), 12.90)
    ];*/
    this.getDb();
    return this.despesas;
  }

  public save(despesa: Despesa): void {
    this.getDb();
    this.despesas.push(despesa);
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }

  public delete(despesaId: number): void {
    for (let i = 0; i < this.despesas.length; i++) {
        if (this.despesas[i].id == despesaId) {
          this.despesas.splice(i, 1);
        }
    }
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }

}
