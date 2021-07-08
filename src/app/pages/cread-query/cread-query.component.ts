import { Component, NgModule, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {MChoiceComponent} from 'src/app/controls/cred-queries/mchoice/mchoice.component'
import {queriesStorage} from 'src/app/dataProviders/localStorage'
import {IMChoiceModel} from 'src/app/dataProviders/interfaces/IMChoiceModel'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cread-query',
  templateUrl: './cread-query.component.html',
  styleUrls: ['./cread-query.component.css']
})



export class CreadQueryComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) {
    
  }

  @ViewChild(MChoiceComponent) mChoiceComponent: any;

  queryId:string ="-1";
  queriesType = [
    {id:-1,name:"- -select question type- -"},
    {id:1,name: "Single choice"},
    {id:2,name: "Multiple Choice"},
    {id:3,name: "Open"}
  ];

questionModel:IMChoiceModel={
  ansvers:[],
  type:-1,
  text:''
};

saveQuery(){

if(typeof this.mChoiceComponent!='undefined')
{
  this.questionModel.ansvers=this.mChoiceComponent.model.ansvers;
}

console.log('questionModel',this.questionModel);
let s=new queriesStorage();
console.log('s.storage',s.storage) ;
console.log('s.storage',s.GetNextIndex()) ;

let index=-1;

if(this.queryId=="-1")
{
  index=s.GetNextIndex();
} else{

  index=parseInt(this.queryId);

}

if(this.questionModel.text.trim().length<5)
{
  alert('The text of the question must consist of at least 5 characters!');
  return;
}

if(this.questionModel.type==-1)
{
  alert('You have to choose Answer type!');
  return;
}

if(
    (this.questionModel.type==1 
    ||
    this.questionModel.type==2)
    && 
    this.questionModel.ansvers.length<2
  )
{
  alert('You must provide at least 2 answers to the questions!');
  return;
}


s.Set(index,this.questionModel);

this.router.navigate(['/manage']);

}

  ngOnInit(): void {
   ///забираємо дані з роуту
   this.route.paramMap.subscribe( paramMap => {
    this.queryId = paramMap.get('id')??"-1";

    if(this.queryId!="-1")
    {
      let storage=new queriesStorage();
      let  model=storage.Get(parseInt(this.queryId));
      if(model!=null)
      {
        //debugger
        this.questionModel=model.data;
        this.questionModel.type=model.data.type;
      }
    }


  });
  }

  questionTypeChange(event:any):void {
    
    this.questionModel.type=event.target.value;
  }
  questionTypeChange_v2(sel: NgModel) {
    
    this.questionModel.type= sel.viewModel;
  }
}
