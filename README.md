Q1: Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll?

getElementById: Selects a specific element by its unique id.

getElementsByClassName: Selects all elements with the same class (returns an HTMLCollection).

querySelector: Returns the first element that matches a CSS selector.

querySelectorAll: Returns all elements that match a CSS selector (NodeList).


Q2: Create & insert new element in DOM?
First create the element using createElement, then insert it into a parent.

const div = document.createElement("div");
const parent = document.getElementById("container");
parent.appendChild(div);

So, first create → then append to parent.


Q3: Event Bubbling?
Events go through three phases:

1. Capturing: From root down to the target.

2. Target: Event reaches the actual element.

3. Bubbling: Then travels back up from the target to the root through its parents.



Q4: Event Delegation?
Attaching a single event listener to a parent element to handle events on its child elements.
Why useful:

Improves performance.

Works with dynamically added elements.


Q5: preventDefault() vs stopPropagation()?

preventDefault(): Stops the browser’s default behavior (e.g., link navigation).

stopPropagation(): Stops the event from propagating to parent elements.