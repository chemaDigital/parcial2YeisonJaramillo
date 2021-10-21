import { Component, OnInit } from '@angular/core';
import { homeService, homes } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit 
{
  Home:homes[]=[];

  constructor(private serviceHome:homeService) { }
  ngOnInit(): void 
  {
    this.Home=this.serviceHome.gethome()
  }

}
