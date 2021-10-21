import { Component, OnInit } from '@angular/core';
import { jamesService, jamesR } from 'src/app/service/james.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html'
})
export class JamesComponent implements OnInit 
{
  james:jamesR[]=[];

  constructor(private serviciosJames:jamesService) 
  { }

  ngOnInit(): void 
  {
    this.james=this.serviciosJames.getjames();
  }

}
