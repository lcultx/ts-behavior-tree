export interface IControl {
    running(blackboard?:any);
    success(blackboard?:any);
    fail(blackboard?:any);
    run(blackboard?:any);
}