# Introduction to JavaScript

To run JavaScript outside of a browser use Node.js.

Variable delcaration is done by three means each controling the scope and mutability of the variable ([freeCodeCamp](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)):
- `var` can have any scope (defined by location of declaration) and is mutatable (both re-declarable and updatable).
- `let` has spercific _"block"_ scope, again, defined by location of declaration. 
The variable is updatable, but not re-declareable!
```
let greeting = "say Hi"; // kosher
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```
- `const` has spercific _"block"_ scope, an is immutable!


## Package/Module development

This is structured explicitly in JavaScript throught a `package.json` file which lists the scripts that can have _exportable_ functions ([Solving Import errors - StackOverflow](https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import#:~:text=The%20possible%20reasons%20for%20the%20SyntaxError%3A%20Cannot%20use,in%20your%20runscript%20is%20wrong%2Fnot%20the%20compiled%20file.)).

Useful links:
<!-- - [Advanced R](https://adv-r.hadley.nz/index.html)  -->