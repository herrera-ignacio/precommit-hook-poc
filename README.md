# Precommit Hook POC

## Motivation

We want to support git hooks without bitbucket plugins so that we can lint code & run tests when you commit or push. We'll use [husky](https://typicode.github.io/husky) to do this.

## How to Setup

> Please see [husky docs](https://typicode.github.io/husky/#/?id=manual) for a setup from scratch.

* `yarn add -D husky`
* `yarn husky install`
* `yarn install`

## Create a hook

```sh
npx husky add .husky/pre-commit "yarn test"
# husky - created .husky/pre-commit
```
