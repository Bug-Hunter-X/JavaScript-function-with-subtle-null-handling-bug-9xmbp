# JavaScript Function with Subtle Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null handling in a function. The `foo` function in `bug.js` is designed to add two numbers.  However, it does not correctly handle the scenario where *both* input parameters are null. The `bugSolution.js` file provides a corrected version.

## Bug Description

The original function only handles the cases where either `a` or `b` is null.  If both are null, it might not produce the expected behavior. In this specific case, there is no explicit handling, leading to an implicit addition of null + null. Javascript might produce unexpected results in such a scenario. 

## Bug Solution

The solution explicitly checks for both `a` and `b` being null and handles this case appropriately, ensuring robust null handling.