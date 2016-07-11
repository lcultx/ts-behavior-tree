var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BTreeNode_1 = require('./BTreeNode');
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        _super.apply(this, arguments);
    }
    Task.prototype.run = function () {
        console.log('task run ', this);
    };
    return Task;
}(BTreeNode_1.BTreeNode));
exports.Task = Task;
