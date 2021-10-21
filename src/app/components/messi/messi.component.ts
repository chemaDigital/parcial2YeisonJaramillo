import { Component, OnInit } from '@angular/core';
import { Lmessi, MessiService } from 'src/app/service/messi.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html'
})
export class MessiComponent implements OnInit {
  Messi:Lmessi[]=[];
  constructor(private serviciosMessi:MessiService) { }

  ngOnInit(): void {
    this.Messi=this.serviciosMessi.getmessi();
  }

}
