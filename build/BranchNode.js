var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BehaviorTree_1 = require('./BehaviorTree');
var BTreeNode_1 = require('./BTreeNode');
var BranchNode = (function (_super) {
    __extends(BranchNode, _super);
    function BranchNode(config) {
        _super.call(this, config);
        this.children = config.nodes || [];
    }
    BranchNode.prototype.start = function () {
        this._actualTask = 0;
    };
    BranchNode.prototype.run = function (blackboard) {
        if (this.children.length == 0) {
            this._control.fail();
        }
        else {
            this.blackboard = blackboard;
            this.start();
            if (this._actualTask < this.children.length) {
                this._run();
            }
        }
        this.end();
    };
    BranchNode.prototype._run = function (obj) {
        var node = BehaviorTree_1.BehaviorTree.getNode(this.children[this._actualTask]);
        this._runningNode = node;
        node.setControl(this);
        node.start(this.blackboard);
        node.run(this.blackboard);
    };
    BranchNode.prototype.running = function (node) {
        this._nodeRunning = node;
        this._control.running(node);
    };
    BranchNode.prototype.success = function () {
        this._nodeRunning = null;
        this._runningNode.end(this.blackboard);
    };
    BranchNode.prototype.fail = function () {
        this._nodeRunning = null;
        this._runningNode.end(this.blackboard);
    };
    return BranchNode;
}(BTreeNode_1.BTreeNode));
exports.BranchNode = BranchNode;
