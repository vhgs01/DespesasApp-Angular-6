import { Component, OnInit }  from '@angular/core';

/* Serviços */
import { DespesaService }     from '../despesa.service';
import { Router }             from '@angular/router';

/* Classes */
import { Despesa }            from '../despesa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  despesas: Despesa[] = new Array();

  constructor(private despesaService: DespesaService,
              private router: Router) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll();
  }

  add(): void {
    this.router.navigate(['/add']);
  }

  del(despesaId: number): void {
    this.despesaService.delete(despesaId);
  }

}
