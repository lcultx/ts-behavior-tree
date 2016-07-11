import { BranchNode } from './BranchNode';
export declare class Sequence extends BranchNode {
    _run(obj?: any): void;
    constructor(config: any);
    success(): void;
    fail(): void;
}
