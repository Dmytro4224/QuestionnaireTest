import {IMChoiceModel} from 'src/app/dataProviders/interfaces/IMChoiceModel'
import {dbTable} from 'src/app/dataProviders/interfaces/TdbTable'

export class queriesStorage {
    storageName='myQueries';
    storage:Array<dbTable>=[];
    
    constructor(){

    }
    
    ///Отримати дані зі сторейджу
    _getData(){
        let _data= localStorage.getItem(this.storageName);
        if(_data==null){
            this.storage=[];
                return;          
        }

        _data= localStorage.getItem(this.storageName);
        this.storage=(_data==null? [] : JSON.parse(_data));
    }

    ///Отримати наступний запис
    GetNextIndex()
    {
        this._getData(); 
        let index=this.storage.length;
        return index++;           
    }

    ///отримати запис по ідентифікатору
    Get(index:number)
    {
        this._getData();
        var result=null;
        for(let item of this.storage)
        {
                if(item.index==index)
                {
                    result= item;
                }

        }

        return result;
    }

    _add(index:number,data:IMChoiceModel)
    {
        let item:dbTable={
            index:index,
            data:data,
            dateCreate:new Date(),
            dateUpdate:new Date()
        }

        this.storage.push(item);
        this._update();

    }

    Fill(){
        this._getData();
    }
    ///Додати запис
    Set(index:number,data:IMChoiceModel)
    {
        this._getData();
        var item=this.Get(index);
        
        if(item==null)
        {
            this._add(index,data);
            return;
        }

        item.dateUpdate=new Date();
        item.data=data;
        this._update();
    }

    //видалити запис
    Remove(index:number)
    {
        this._getData();
        let _newArr=[];
        for(let item of this.storage)
        {
            if(item.index!=index)
            {
                _newArr.push(item);
            }

        }
        this.storage=_newArr;
        this._update();
    }

    ///зберезти дані сторейджу
    _update()
        {
            let json_=JSON.stringify(this.storage);
            localStorage.setItem(this.storageName,json_);
        }

}