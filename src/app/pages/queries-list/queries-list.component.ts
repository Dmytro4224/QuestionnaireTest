import { Component, EventEmitter, OnInit } from '@angular/core';
import {dbTable} from 'src/app/dataProviders/interfaces/TdbTable'
import {queriesStorage} from 'src/app/dataProviders/localStorage'

@Component({
  selector: 'app-queries-list',
  templateUrl: './queries-list.component.html',
  styleUrls: ['./queries-list.component.css']
})
export class QueriesListComponent implements OnInit {

  constructor() { }

  storage=new queriesStorage();
  queries=Array<dbTable>();

  ngOnInit(): void {
    this.storage.Fill();
    this.queries=this.storage.storage;
  }

}
