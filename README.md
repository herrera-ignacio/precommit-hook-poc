# Precommit Hook POC

## Motivation

We want to support git hooks without bitbucket plugins so that we can lint code & run tests when you commit or push. We'll use [husky](https://typicode.github.io/husky) to do this.

## Setup

* 
* `yarn install`

## Create a hook

```
npx husky add .husky/pre-commit "yarn test"
# husky - created .husky/pre-commit
```
