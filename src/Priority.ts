import {BranchNode} from './BranchNode';

export class Priority extends BranchNode {
    success() {
        super.success();
        this._control.success();
    }

    fail() {
        super.fail();
        this._actualTask += 1;
        if (this._actualTask < this.children.length) {
            this._run(this.blackboard);
        } else {
            this._control.fail();
        }
    }
}
