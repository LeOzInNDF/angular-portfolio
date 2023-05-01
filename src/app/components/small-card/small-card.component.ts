import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  contentDescription:string =""
  @Input()
  cardDescription:string =""
  @Input()
  Id: string = "0"

 constructor () {}
  ngOnInit(): void {

  }

}
