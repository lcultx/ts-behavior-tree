
import {Task,BehaviorTree,Sequence,Priority,BTreeNode,Selector} from 'ts-behavior-tree'

class MyTask extends Task{
  
  public run(){
      console.log(this.title + ' running')
      this.success();
  }
}

BehaviorTree.register('previouslyGeneratedTask', new MyTask({
  title:'previouslyGeneratedTask'
}));


var tree = new BehaviorTree({
  'tree': new Sequence({
    title: 'growing',
    nodes: [
      new MyTask({
        title: 'task1'
      }),
      'previouslyGeneratedTask',
      new Selector({
        title: 'shrinking',
        nodes: [
          // new MyTask({
          //    title: 'task11'
          // })
        ]
      })
    ]

  })
});

// Set object the behavior is meant to work on
tree.setObject({});

/*
  In this Tree, we use registered Nodes for the Tasks
  Sequences and Selectors can be generated on the fly, using the given nodes and title
  Given nodes can also be decorators or filters
*/
// var tree2 = new BehaviorTree({
//   tree: {
//     title: 'planner',
//     type: 'Sequence',
//     nodes: [
//       {
//         title: 'fight',
//         type: 'Selector',
//         nodes: [
//           'sword',
//           'bareHands'
//         ]
//       },
//       {
//         title: 'idle',
//         type: 'Selector',
//         nodes: [
//           'walkAround',
//           'standStill'
//         ]
//       }
//     ]
//   }
// });

setInterval(function() {
  tree.step();
}, 1000);