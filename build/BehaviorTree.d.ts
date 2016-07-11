import { BTreeNode } from './BTreeNode';
import { IControl } from './IControl';
export declare class BehaviorTree implements IControl {
    title: string;
    private _rootNode;
    private _object;
    private _started;
    private _actualNode;
    constructor(config: {
        title?: string;
        tree: any;
        object?: any;
    });
    setObject(obj: any): void;
    step(): void;
    run(): void;
    running(node: Node): void;
    success(): void;
    fail(): void;
    static _registeredNodes: {};
    static register(name: string, node: BTreeNode): void;
    static getNode(name: string | BTreeNode): BTreeNode;
}
