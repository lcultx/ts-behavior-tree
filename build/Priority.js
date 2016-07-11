var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BranchNode_1 = require('./BranchNode');
var Priority = (function (_super) {
    __extends(Priority, _super);
    function Priority() {
        _super.apply(this, arguments);
    }
    Priority.prototype.success = function () {
        _super.prototype.success.call(this);
        this._control.success();
    };
    Priority.prototype.fail = function () {
        _super.prototype.fail.call(this);
        this._actualTask += 1;
        if (this._actualTask < this.children.length) {
            this._run(this.blackboard);
        }
        else {
            this._control.fail();
        }
    };
    return Priority;
}(BranchNode_1.BranchNode));
exports.Priority = Priority;
