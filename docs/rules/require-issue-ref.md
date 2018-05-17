# Prevents fix or warning comments without associated ticket numbers (require-issue-ref)

This rule disallows comments with words like "TODO" or "FIXME" etc. into your codebase without referring in the same comment to an issue tracking number.

## Rule Details

This rule aims to prevent situations where a developer recognizes work needs to be done or a problem needs to be solved, makes a note in the code itself, but never ensures that an Issue or Ticket is created, so that work can be tracked and the problem identified can eventually be resolved.

Examples of **incorrect** code for this rule:

```js
// TODO: This code is terrible, we need to fix it, we'll refactor it sometime soon
const messyFunction = (horrible, terrible) => {
  ...
}
```

Examples of **correct** code for this rule:

```js
// TODO: This code needs refactoring, see requirements in MYPROJECT-108
const messyFunction = (horrible, terrible) => {
  ...
}
```

### Options

#### `{String[]} terms`
You may specify which terms will trigger this rule.  Default terms are `TODO`, `FIXME`, and `XXX`.  Terms passed are case-insensitive.

#### `{String[]} saviorTerms`
As the prop name implies, these terms will save you from erroring out.  These terms should be the pattern(s) for your project issue trackers, are required to be followed by an optional dash (`-`) and 1 to 6 digits (no spaces).

For example, if you track your project issues in Jira, under the scope `MYPROJECT`, you would pass in `MYPROJECT`, and all `TODO`s in your code would have to be accompanied by something like `MYPROJECT-123`.  If you track simply using issue numbers, you could save yourself from error by commenting something like

```js
// TODO #9 Need to refactor this
```

Default saviorTerms are `JIRA` and `#`, and are also case-insensitive.

## When Not To Use It

If you're not concerned with having your codebase peppered with `TODO`s that hang around for months or years, then don't worry about including this rule.
