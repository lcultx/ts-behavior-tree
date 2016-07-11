var BTreeNode_1 = require('./BTreeNode');
var countUnnamed = 0;
var BehaviorTree = (function () {
    function BehaviorTree(config) {
        this._started = false;
        countUnnamed += 1;
        this.title = config.title || 'btree' + (countUnnamed);
        this._rootNode = config.tree;
        this._object = config.object;
    }
    BehaviorTree.prototype.setObject = function (obj) {
        this._object = obj;
    };
    BehaviorTree.prototype.step = function () {
        if (this._started) {
            console.log('the BehaviorTree "' + this.title + '" did call step but one Task did not finish on last call of step.');
        }
        this._started = true;
        var node = BehaviorTree.getNode(this._rootNode);
        this._actualNode = node;
        node.setControl(this);
        node.start(this._object);
        node.run(this._object);
        console.log(node);
    };
    BehaviorTree.prototype.run = function () {
    };
    BehaviorTree.prototype.running = function (node) {
        this._started = false;
    };
    BehaviorTree.prototype.success = function () {
        this._actualNode.end(this._object);
        this._started = false;
    };
    BehaviorTree.prototype.fail = function () {
        this._actualNode.end(this._object);
        this._started = false;
    };
    BehaviorTree.register = function (name, node) {
        this._registeredNodes[name] = node;
    };
    BehaviorTree.getNode = function (name) {
        var node = name instanceof BTreeNode_1.BTreeNode ? name : this._registeredNodes[name];
        if (!node) {
            throw new Error('The node "' + name + '" could not be looked up. Maybe it was never registered?');
        }
        return node;
    };
    BehaviorTree._registeredNodes = {};
    return BehaviorTree;
}());
exports.BehaviorTree = BehaviorTree;
