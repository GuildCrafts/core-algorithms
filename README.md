# Core Algorithms: Sorting, Searching, Graphing, Geometry

Tests and implementations for algorithms commonly used in job interviews. See the full list in the [algorithms.md](algorithms.md) file.

Base repository for the [Core Algorithms](http://jsdev.learnersguild.org/goals/123) goal.

Modified to include only sorting, searching, graphing, and geometry algorithms.

## Installation and Setup

0. These instructions presuppose that npm (https://nodejs.org/en/) is installed.

1. Clone this repository into a local directory.

2. In the local directory, install required dependencies (see package.json) by executing:

    npm i

3. In the local directory, perform the provided tests by executing:

    npm test

## Usage and Examples

0. Existing tests.

The output of “npm test” should be:

=====================================

    > core-algorithms@0.0.0 test «path/to/local/directory»
    > mocha --compilers js:babel-register

    binarySearch()
      ✓ should be a function
      ✓ returns 4 when searching [-44, 11.1, 30, 99.99, 100.0, 202] for 100
      ✓ returns undefined when searching [-44, 11.1, 30, 99.99, 100.0, 202] for 99.9
      ✓ returns 0 when searching [100, 202] for 100
      ✓ returns 1 when searching [100, 202] for 202
      ✓ returns 1 when searching [100, 202] for 202.0
      ✓ returns 0 when searching [100.0, 202] for 100
      ✓ returns undefined when searching [100, 202] for 99
      ✓ returns 0 when searching [-1] for -1
      ✓ returns undefined when searching [-1] for 1
      ✓ returns undefined when searching [] for 0
      ✓ returns undefined when searching [5, 4, 3, 2] for 0
      ✓ returns undefined when searching [5, 4, 3, 2] for 4
      ✓ returns undefined when searching [-44, 11.1, 30, 99.99, 100.0, "202"] for 100

    bubbleSort()
      ✓ should be a function
      ✓ returns [1, 4, 10, 10, 28.76] when sorting [4, 10, 1, 28.76, 10]
      ✓ returns [1, 4, 10, 28.76] when sorting [1, 4.0, 10, 28.76]
      ✓ returns undefined when sorting [4, 10, "1", 28.76, 10]

    closestPair()
      ✓ should be a function
      ✓ returns [[4, 0], [5, 0]] when analyzing [[4, 0], [5, 0], [5, 2]]
      ✓ returns [[4, 0], [5, 0]] when analyzing [[4, 0], [5, 0], [5, 2.6]]
      ✓ returns [[5, 0], [4, 0]] when analyzing [[5, 0], [4, 0], [5, 2]]
      ✓ returns [[5, 0], [4, 0]] when analyzing [[5, 0], [4, 0]]
      ✓ returns [[5, 6.5], [5, 6.5]] when analyzing [[5, 6.5], [5, 6.5]]
      ✓ returns [[5, 6.5], [5, 6.5]] when analyzing [[5, 6.5], [5, 6.5], [5, 6.5]]
      ✓ returns undefined when analyzing [[5, 0]]
      ✓ returns undefined when analyzing [[5, 0], [6, 7, 8]]
      ✓ returns undefined when analyzing [[5, 0], 6, 7]]
      ✓ returns undefined when analyzing [[5, 0], [6, "7"]]

    isConnectedGraph()
      ✓ should be a function
      ✓ returns true when analyzing {}
      ✓ returns true when analyzing {"a": []}
      ✓ returns true when analyzing {"a": ["b"], "b": ["a"]}
      ✓ returns false when analyzing {"a": [], "b": []}
      ✓ returns false when analyzing {"a": ["b"], "b": ["a"], "c": []}
      ✓ returns true when analyzing {"a": ["b"], "b": ["a", "c"], "c": ["b"]}
      ✓ returns true when analyzing {"a": ["b", "c"], "b": ["a", "c"], "c": ["a", "b"]}
      ✓ returns undefined when analyzing {"a": ["b", "c"], "b": ["a", "c", "d"], "c": ["a", "b"]}
      ✓ returns undefined when analyzing {"a": ["b", "c"], "b": ["a", "b", "c"], "c": ["a", "b"]}
      ✓ returns undefined when analyzing {"a": ["b", "c"], "b": "nothing", "c": ["a", "b"]}

    mergeSort()
      ✓ should be a function
      ✓ returns [1, 4, 10, 10, 28.76] when sorting [4, 10, 1, 28.76, 10]
      ✓ returns [1, 4, 10, 28.76] when sorting [1, 4.0, 10, 28.76]
      ✓ returns undefined when sorting [4, 10, "1", 28.76, 10]

    44 passing (18ms)

=====================================

1. New tests.

You can add tests to, or modify tests in, any of the files in the “test” directory and execute “npm test” again.
