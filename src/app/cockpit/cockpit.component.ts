import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  @Output() serverEmitter = new EventEmitter<{serverName : string, typeName:string}>(); 
  serverName:string;
  typeName:string;
  ngOnInit() {
  }

  AddServer(){
    this.serverEmitter.emit({
      serverName : this.serverName,
      typeName : this.typeName
    })
  }
}