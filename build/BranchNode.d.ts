import { BTreeNode } from './BTreeNode';
export declare abstract class BranchNode extends BTreeNode {
    children: Array<BTreeNode>;
    protected _actualTask: number;
    protected blackboard: any;
    protected _runningNode: BTreeNode;
    protected _nodeRunning: BTreeNode;
    constructor(config: any);
    start(): void;
    run(blackboard?: any): void;
    protected _run(obj?: any): void;
    running(node: any): void;
    success(): void;
    fail(): void;
}
