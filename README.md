# Core Algorithms

Tests and implementations for algorithms commonly used in job interviews.

Base repository for the [Core Algorithms](https://github.com/GuildCrafts/web-development-js/issues/123) goal.

## Specifications

List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing a feature of the final product.

This is a core goal. The specifications are non-negotiable. To complete this goal, you must complete all specs listed below.

- [x] Artifact produced is a fork of the core-algorithms repo.
- [ ] Can run all tests with npm test.
- [ ] All tests are passing.
- [ ] For each algorithm identified above, there exists:
  - [ ] a test file with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
  - [ ] an implementation file with a correct implementation of the algorithm.

## Required

Do not remove these specs - they are required for all goals.

  - [x] The artifact produced is properly licensed, preferably with the MIT license.

## Quality Rubric
### Well formatted code

   - Code uses a linter, which can be invoked with a command (e.g. npm run lint). [50 points]
   - Running the linter on all source code files generates no linting errors. [50 points]


## Clear and useful README

   - Repository includes a README file with installation and setup instructions. [25 points]
   - Repository includes a README file with usage instructions and at least one example use case. [25 points]

### Good project management

   - Commit messages are concise and descriptive. [25 points]
   - All features are added via pull requests. [25 points]
   - Every pull request has a description summarizing the changes made. [25 points]
   - Every pull request has been reviewed by at least one other person. [25 points]


## Installation and Setup
  - [x] Must include in the package.json file: author, git repo, expect, the right version of npm, and MIT license.
  - [x] Install all dependencies in the terminal by entering the command "npm i". [50 points]
  - [x] Create two separate files for every given function: one for testing and the other to store code.

## Usage and Examples

Once you have all your dependencies installed ("npm i") you can start testing by entering in the terminal "npm test".

If all working tests passed you will get all checks and number of passings in green:

```
makeChange()
  ✓ should be a function
  ✓ returns an object with all coin types (quarters, dimes, nickels, and pennies)
  ✓ returns correct change
  ✓ minimizes the number of coins given by using the most high-value coins


4 passing (46ms)
```
