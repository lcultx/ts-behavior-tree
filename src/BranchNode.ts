import {BehaviorTree} from './BehaviorTree';
import {BTreeNode} from './BTreeNode';

export abstract class BranchNode extends BTreeNode {
  public children: Array<BTreeNode>;
  protected _actualTask: number;
  protected blackboard: any;
  protected _runningNode: BTreeNode;
  protected _nodeRunning: BTreeNode;
  public constructor(config) {
    super(config);
    this.children = config.nodes || [];
  }

  public start() {
    this._actualTask = 0;
  }
  public run(blackboard?: any) {

    if (this.children.length == 0) {//没有子任务直接视为执行失败
      //this.fail();
      this._control.fail();
    } else {
      this.blackboard = blackboard;
      this.start();
      if (this._actualTask < this.children.length) {
        this._run();
      }
    }

    this.end();
  }


  protected _run(obj?: any) {
    var node = BehaviorTree.getNode(this.children[this._actualTask]);
    this._runningNode = node;
    node.setControl(this);
    node.start(this.blackboard);
    node.run(this.blackboard);
  }
  public running(node) {
    this._nodeRunning = node;
    this._control.running(node);
  }
  public success() {
    this._nodeRunning = null;
    this._runningNode.end(this.blackboard);
  }
  public fail() {
    this._nodeRunning = null;
    this._runningNode.end(this.blackboard);
  }
}
