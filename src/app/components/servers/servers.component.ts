import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName='';
  serverCreated=false;
  servers=['Testserver', 'Testserver 2'];

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

}
