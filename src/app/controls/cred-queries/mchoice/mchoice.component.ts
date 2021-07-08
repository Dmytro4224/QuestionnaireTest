import { Component, Input, NgModule, OnInit } from '@angular/core';
import {MChoiceItemComponent} from 'src/app/controls/cred-queries/mchoice-item/mchoice-item.component'
import {IMChoiceModel} from 'src/app/dataProviders/interfaces/IMChoiceModel'

@Component({
  selector: 'app-mchoice',
  templateUrl: './mchoice.component.html',
  styleUrls: ['./mchoice.component.css']
})

export class MChoiceComponent implements OnInit {
  currentKey:number=1;

  @Input() model:IMChoiceModel={
    ansvers:[],
    type:-1,
    text:''
  };

  addNewQueryBlock() {
    //alert('new-query');
    this.model.ansvers.push(
      { 
        index:this.currentKey,
        value:''
      }
    );
    this.currentKey++;

console.log('addNewQueryBlock',this.model);

      }

  GetAnswerById(index:number){

    for(let item of this.model.ansvers)
    {
      if(item.index==index)
      {
        return item;
      }
    }
    return null;
  }

      removeQueryBlock(index:number){

          var answer=this.GetAnswerById(index);

          if(answer==null){return;}
          if(answer.value.trim().length>1)
          {
            if(!confirm('remove answer from list?'))
            {
            return;
            }

          }
         
        let _answers=[];
        for(let item of this.model.ansvers)
        {
        if(item.index!=index)
        {
          _answers.push(item);
        }
        }

        this.model.ansvers=_answers;

      }

  ///отримати значення
  public get Value(){
    return this.model??null;
  }
  ///присвоїти значення
public set Value(val:IMChoiceModel){
  this.model.ansvers=[];
    this.model.ansvers.push(val.ansvers);
    this.model.type=val.type;
}

  constructor() { }

  ngOnInit(): void {
  }

}
