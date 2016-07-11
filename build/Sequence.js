var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BranchNode_1 = require('./BranchNode');
var Sequence = (function (_super) {
    __extends(Sequence, _super);
    function Sequence(config) {
        _super.call(this, config);
    }
    Sequence.prototype._run = function (obj) {
        if (this._nodeRunning) {
            this._nodeRunning.run(this.blackboard);
        }
        else {
            _super.prototype._run.call(this);
        }
    };
    Sequence.prototype.success = function () {
        _super.prototype.success.call(this);
        this._actualTask += 1;
        if (this._actualTask < this.children.length) {
            this._run(this.blackboard);
        }
        else {
            this._control.success();
        }
    };
    Sequence.prototype.fail = function () {
        _super.prototype.fail.call(this);
        this._control.fail();
    };
    return Sequence;
}(BranchNode_1.BranchNode));
exports.Sequence = Sequence;
