import { Component, OnInit } from '@angular/core';
import { Cronaldo, RonaldoService } from 'src/app/service/ronaldo.service';
@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html'
})
export class RonaldoComponent implements OnInit {
  Ronaldo:Cronaldo[]=[];
  constructor(private serviciosRonaldo:RonaldoService) { }

  ngOnInit(): void {
    this.Ronaldo=this.serviciosRonaldo.getronaldo();
  }

}
