import { Component, EventEmitter, OnInit } from '@angular/core';
import {dbTable} from 'src/app/dataProviders/interfaces/TdbTable'
import {queriesStorage} from 'src/app/dataProviders/localStorage'

@Component({
  selector: 'app-management-queries',
  templateUrl: './management-queries.component.html',
  styleUrls: ['./management-queries.component.css']
})
export class ManagementQueriesComponent implements OnInit {

  constructor() { 

  }
  storage=new queriesStorage();
  queries=Array<dbTable>();

  deleteQuestion(event:any, item:dbTable){
    if(!confirm('Delete Question from your storage?')){return;}
    this.storage.Remove(item.index);
    this.storage.Fill();
    this.queries=this.storage.storage;
  }

  ngOnInit(): void {
    this.storage.Fill();
    this.queries=this.storage.storage;
   
  }

}
