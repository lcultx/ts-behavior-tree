import { IControl } from './IControl';
export declare abstract class BTreeNode implements IControl {
    protected _control: IControl;
    title: string;
    constructor(config: any);
    start(obj?: any): void;
    end(obj?: any): void;
    abstract run(obj?: any): any;
    setControl(control: IControl): void;
    running(obj?: any): void;
    success(): void;
    fail(): void;
}
