import {BranchNode} from './BranchNode';
//fail next ,success return
export class Selector extends BranchNode {


    public _run(obj?: any) {
        if (this._nodeRunning) {
            this._nodeRunning.run(this.blackboard);
        } else {
            super._run();
        }
    }

    constructor(config) {
        super(config);
    }

    public success() {
        super.success()
        this._control.success();
    }
    public fail() {

        super.fail()
        this._actualTask += 1;
        if (this._actualTask < this.children.length) {
            this._run(this.blackboard);
        } else {
            this._control.fail();
        }
    }
}
