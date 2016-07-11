var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BehaviorTree_1 = require('./BehaviorTree');
var BTreeNode_1 = require('./BTreeNode');
var Decorator = (function (_super) {
    __extends(Decorator, _super);
    function Decorator(config) {
        _super.call(this, config);
        if (this.node) {
            this.node = BehaviorTree_1.BehaviorTree.getNode(this.node);
        }
    }
    Decorator.prototype.setNode = function (node) {
        this.node = BehaviorTree_1.BehaviorTree.getNode(node);
    };
    Decorator.prototype.start = function () {
        this.node.setControl(this);
        this.node.start();
    };
    Decorator.prototype.end = function () {
        this.node.end();
    };
    Decorator.prototype.run = function (blackboard) {
        this.node.run(blackboard);
    };
    return Decorator;
}(BTreeNode_1.BTreeNode));
exports.Decorator = Decorator;
