import { BranchNode } from './BranchNode';
export declare class Selector extends BranchNode {
    _run(obj?: any): void;
    constructor(config: any);
    success(): void;
    fail(): void;
}
