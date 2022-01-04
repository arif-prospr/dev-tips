
Follow standard conventions. E.g. eslint standard configs (airbnb etc.)

%%%%

Keep it simple stupid. Simpler is always better. Reduce complexity as much as possible.

%%%%

Boy scout rule. Leave the campground cleaner than you found it.

%%%%

Always find the root cause. Always look for the root cause of a problem.
%%%%


Keep configurable data at high levels.

%%%%

Separate multi-threading code.

%%%%

Prevent over-configurability.

%%%%

Use dependency injection.

%%%%

Follow the Law of Demeter. A class should know only its direct dependencies. Never change things inside dependencies.

%%%%
 
Be consistent. If you do something a certain way, do all similar things in the same way.

%%%%

Encapsulate boundary conditions. Boundary conditions are hard to keep track of. Put the processing for them in one place.

%%%%

Avoid logical dependency. Don't write methods which works correctly depending on something else in the same class.

%%%%

Avoid negative conditionals. Makes it hard to understand

%%%%

Choose descriptive and unambiguous names. IDEs can help in autocompletion so avoid shorter names.

%%%%

Use searchable names. Makes it possible to find and replace if needed.

%%%%

Replace magic numbers with named constants.

%%%%

# Functions

* Small. (Cognitive complexity rule)
* Use descriptive names.
* Prefer fewer arguments.
* Prefer one object argument to enclose more than three args. To help achieve backwards compatibility later on easily.
* Have no side effects. Do one thing. Prefer returning the value instead of updating directly.
* Don't use flag arguments. Split the method into several independent methods that can be called from the client without the flag.\


%%%%


# Comments

* Always try to explain yourself in code. Use as clarification of code.
* Don't be redundant.
* Don't comment out code. Just remove.
* Use as warning of consequences.
* Source code structure
* Separate concepts vertically. (Folder structure should have logically related items closer. All files related to a view or route should live close.)
* Declare variables close to their usage.
* Dependent functions should be close.
* Similar functions should be closed.
* Use white space to associate related things and disassociate weakly related things.

%%%

# Tests

* Readable.
* Fast.
* Independent.
* Repeatable.


**Code smell** Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.

%%%%

**Code smell** Fragility. The software breaks in many places due to a single change.

%%%%

**Code smell** Immobility. You cannot reuse parts of the code in other projects because of the risks involved and high effort.

%%%%


