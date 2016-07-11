import { IControl } from './IControl';
import { BTreeNode } from './BTreeNode';
export declare class Decorator extends BTreeNode implements IControl {
    node: BTreeNode;
    constructor(config: any);
    setNode(node: any): void;
    start(): void;
    end(): void;
    run(blackboard: any): void;
}
