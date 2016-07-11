import {BehaviorTree} from './BehaviorTree';
import {IControl} from './IControl'
import {BTreeNode} from './BTreeNode';

export class Decorator extends BTreeNode implements IControl {
    public node:BTreeNode;
    constructor(config) {
        super(config)
        if (this.node) {
            this.node = BehaviorTree.getNode(this.node);
        }
    }

    public setNode(node) {
        this.node = BehaviorTree.getNode(node)
    }

    public start() {
        this.node.setControl(this);
        this.node.start();
    }
    public end() {
        this.node.end();
    }
    public run(blackboard) {
        this.node.run(blackboard);
    }
}
