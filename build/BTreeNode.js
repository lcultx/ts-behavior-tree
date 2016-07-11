var BTreeNode = (function () {
    function BTreeNode(config) {
        this.title = config.title;
    }
    BTreeNode.prototype.start = function (obj) {
    };
    BTreeNode.prototype.end = function (obj) {
    };
    BTreeNode.prototype.setControl = function (control) {
        this._control = control;
    };
    BTreeNode.prototype.running = function (obj) {
        this._control.running(this);
    };
    BTreeNode.prototype.success = function () {
        this._control.success();
    };
    BTreeNode.prototype.fail = function () {
        this._control.fail();
    };
    return BTreeNode;
}());
exports.BTreeNode = BTreeNode;
