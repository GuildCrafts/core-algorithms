# Core Algorithms

Tests and implementations for algorithms commonly used in job interviews. See the full list in the [algorithms.md](algorithms.md) file.

Base repository for the [Core Algorithms](http://jsdev.learnersguild.org/goals/123) goal.

## Installation and Setup

_Fill this out_

## Description

Write tests and implementations for algorithms commonly used in job interviews.

An "algorithm" is a technical term for "a particular set of steps to solve a defined problem". At the smallest scale, a `sum()` function is an example of an algorithm. At a large scale, the method by which Netflix recommends movies to its users is also called an algorithm.

Fork the the [core-algorithms repository][core-algorithms] and use the fork as your project artifact.

Use the list in the [algorithms.md][algorithms-list] file as a reference for each algorithm.

In addition, consider doing one or more of the [Courses](#courses) on algorithms listed in the [Resources](#resources).

## Context

Being able to design, implement, and test algorithms is a key skill for all programmers. Most of the algorithms you'll encounter on the job will not fall neatly into the set of "common algorithms" specified here, but will be new problems for which you will have to find new solutions and adapt existing ones.

For this reason, developing the ability to do **algorithmic thinking** is a high-value skill.

In addition, many job interview processes will include some algorithmic problem-solving component, and it is useful to be familiar with some of the most common problems and good approaches to find their solutions.

To be totally clear, the algorithms you design here are _totally contrived_. They are useful to know because interviewers may ask you to solve problems like this (a controversial fact of the software engineering industry), but beyond that it is unlikely that you will _ever_ write a merge sort algorithm as part of a web development job.

_However_, that doesn't mean that they have no learning value. They are still useful as exercises in **critical thinking**, **logic**, and **program design**.

## Specifications


- [x] Artifact produced is a fork of the [core-algorithms][core-algorithms] repo.
- [x] Can run all tests with `npm test`.
- [x] `makeChange()` algorithm is correctly implemented.
- [x] Tests for `makeChange()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] `fizzBuzz()` algorithm is correctly implemented.
- [x] Tests for `fizzBuzz()` exist.
- [x] `isPalindrome()` algorithm is correctly implemented.
- [x] Tests for `isPalindrome()` exist with at least 2 unit tests using valid inputs.
- [x] `factorial()` algorithm is correctly implemented.
- [x] Tests for `factorial()` exist with at least 2 unit tests using valid inputs.
- [x] `fibonacci()` algorithm is correctly implemented.
- [x] Tests for `fibonacci()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `collatzConjecture()` algorithm is correctly implemented.
- [ ] Tests for `collatzConjecture()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `setUnion()` algorithm is correctly implemented.
- [ ] Tests for `setUnion()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `setIntersection()` algorithm is correctly implemented.
- [ ] Tests for `setIntersection()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `setComplement()` algorithm is correctly implemented.
- [ ] Tests for `setComplement()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `setSymmetricDifference()` algorithm is correctly implemented.
- [ ] Tests for `setSymmetricDifference()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `binarySearch()` algorithm is correctly implemented.
- [ ] Tests for `binarySearch()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `bubbleSort()` algorithm is correctly implemented.
- [ ] Tests for `bubbleSort()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `mergeSort()` algorithm is correctly implemented.
- [ ] Tests for `mergeSort()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `closestPair()` algorithm is correctly implemented.
- [ ] Tests for `closestPair()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [ ] `isConnectedGraph()` algorithm is correctly implemented.
- [ ] Tests for `isConnectedGraph()` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in `package.json`.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Code uses a linter and there are no linting errors.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

### Stretch

Pick a _different_ programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java...) and write tests & implementations for each.

- [ ] Can run all non-JavaScript tests with a single command.
- [ ] For each algorithm identified above, there exists:
  - [ ] a test file with multiple unit tests for each algorithm  _in a language other than JavaScript_.
  - [ ] an implementation file with a correct implementation of the algorithm _in a language other than JavaScript_.
