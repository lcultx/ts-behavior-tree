import {IControl} from './IControl'
export abstract class BTreeNode implements IControl{

    protected _control:IControl
    public title:string;
    public constructor(config){
     this.title = config.title
    }

    public start(obj?:any){

    }

    public end(obj?:any){

    }

    public abstract run(obj?:any);

    public setControl(control:IControl){
        this._control = control;
    }

    public running(obj?:any){
        this._control.running(this);
    }

    public success(){
        this._control.success();
    }

    public fail(){
         this._control.fail();
    }
}