import {BTreeNode} from './BTreeNode';
var countUnnamed = 0;
import {IControl} from './IControl'
export class BehaviorTree implements IControl{
    public title: string;
    private _rootNode: any;
    private _object: any;
    private _started: boolean = false;
    private _actualNode: BTreeNode;
    public constructor(config: {
        title?: string,
        tree: any,
        object?: any,
    }) {
           countUnnamed += 1;
    this.title = config.title || 'btree' + (countUnnamed);
        this._rootNode = config.tree;
        this._object = config.object;
    }

    public setObject(obj) {
        this._object = obj;
    }

    public step() {
        if (this._started) {
            console.log('the BehaviorTree "' + this.title + '" did call step but one Task did not finish on last call of step.');
        }
        this._started = true;
        var node = BehaviorTree.getNode(this._rootNode);
        this._actualNode = node;
        node.setControl(this);
        node.start(this._object);
        node.run(this._object);
        console.log(node)
    }

    public run(){

    }

    public running(node:Node) {
        this._started = false;
    }

    public success() {
        this._actualNode.end(this._object);
        this._started = false;
    }

    public fail() {
        this._actualNode.end(this._object);
        this._started = false;
    }

    static _registeredNodes = {};
    static register(name: string, node: BTreeNode) {
        this._registeredNodes[name] = node;
    }

    static getNode(name: string | BTreeNode): BTreeNode {
        var node = name instanceof BTreeNode ? name : this._registeredNodes[name as string];
        if (!node) {
            throw new Error('The node "' + name + '" could not be looked up. Maybe it was never registered?');
        }
        return node;
    }
}
