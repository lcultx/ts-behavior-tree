var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts_behavior_tree_1 = require('ts-behavior-tree');
var MyTask = (function (_super) {
    __extends(MyTask, _super);
    function MyTask() {
        _super.apply(this, arguments);
    }
    MyTask.prototype.run = function () {
        console.log(this.title + ' running');
        this.success();
    };
    return MyTask;
}(ts_behavior_tree_1.Task));
ts_behavior_tree_1.BehaviorTree.register('previouslyGeneratedTask', new MyTask({
    title: 'previouslyGeneratedTask'
}));
var tree = new ts_behavior_tree_1.BehaviorTree({
    'tree': new ts_behavior_tree_1.Sequence({
        title: 'growing',
        nodes: [
            new MyTask({
                title: 'task1'
            }),
            'previouslyGeneratedTask',
            new ts_behavior_tree_1.Selector({
                title: 'shrinking',
                nodes: []
            })
        ]
    })
});
tree.setObject({});
setInterval(function () {
    tree.step();
}, 1000);
