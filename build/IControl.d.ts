export interface IControl {
    running(blackboard?: any): any;
    success(blackboard?: any): any;
    fail(blackboard?: any): any;
    run(blackboard?: any): any;
}
