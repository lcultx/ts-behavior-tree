import {BTreeNode} from './BTreeNode';

export class Task extends BTreeNode{
    run(){
        console.log('task run ',this)
    }
}
