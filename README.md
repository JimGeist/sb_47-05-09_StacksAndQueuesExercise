# sb_47-05-09_StacksAndQueuesExercise

## Technology Stack
- **Front-end**: n/a
- **Back-end**: NodeJS script

## Assignment Details

Create and test a `Queue` and a `Stack` Class.

## Additional Details

**Enhancements**
- The `Stack` class uses the `LinkedList` class.

**Difficulties**
- I would have liked to use the `LinkedList` class in the `Queue` and `Stack` classes, and I definitely stumbled. After getting the `Queue` class running, the `LinkedList` class was added, `enqueue(val)` called the `LinkedList` `this._list.push(val)` method, and a console.log was added to see whether `length`, `head`, and `tail` were getting updated in the `LinkedList` and they were. The `Queue` class was not altered, but the `Stack` class was build fully utilizing the `LinkedList` class and a method `setStack` was added to set `first`, `last`, and `size` values for the `Stack` to the respective `head`, `tail`, and `length` values from the `LinkedList`.

