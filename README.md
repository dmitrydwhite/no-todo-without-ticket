# eslint-plugin-no-todo-without-ticket

fix or warnings must have issue number referenced

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-todo-without-ticket`:

```
$ npm install eslint-plugin-no-todo-without-ticket --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-todo-without-ticket` globally.

## Usage

Add `no-todo-without-ticket` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-todo-without-ticket"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-todo-without-ticket/require-issue-ref": 2
    }
}
```

## Supported Rules

* [require-issue-ref](https://github.com/dmitrydwhite/no-todo-without-ticket/blob/master/docs/rules/require-issue-ref.md)





