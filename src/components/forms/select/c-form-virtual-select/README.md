# Virtual Select Component

Problem this component solves:

A customer has a select multiple field that has over 33,000 entries on it. There are multiple select components on the page. We need to use virtualization to optimize page load. The aurelia-virtualization does not support select components. This components builds a select input based on lists instead of form components and allows for much more data. See POC at [codesandbox](https://codesandbox.io/s/ui-virtualization-poc-forked-072mz?file=/src/app.js).
