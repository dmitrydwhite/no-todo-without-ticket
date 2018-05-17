/**
 * @fileoverview prevents fix or warning comments without associated ticket numbers
 * @author Dmitry White
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/require-issue-ref"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("require-issue-ref", rule, {

  valid: [
      { code: "// any comment", options: [{ terms: ["fixme"] }] },
      { code: "// any comment", options: [{ terms: ["fixme", "todo"] }] },
      "// any comment",
      {
          code: "// with start specified, buried TODO, FIXME or XXX are safe",
          options: [{ location: "start" }]
      },
      {
          code: "// any comment with buried TODO and savior number-9",
          options: [{ saviorTerms: ["number"]}]
      },
      {
          code: "/* TODO Number-9: Leading block comment with savior */",
          options: [{ saviorTerms: ["number"] }]
      },
      { code: "/* any block comment */", options: [{ terms: ["fixme"] }] },
      { code: "/* any block comment */", options: [{ terms: ["fixme", "todo"] }] },
      "/* any block comment */",
      { code: "/* any block comment */", options: [{ location: "anywhere" }] },
      {
          code: "/* when location is start, any block comment with buried TODO, FIXME or XXX */",
          options: [{ location: "start" }]
      },
      {
          code: "// comments containing terms as substrings like TodoMVC",
          options: [{ terms: ["todo"], location: "anywhere" }]
      },
      {
          code: "// special regex characters don't cause problems",
          options: [{ terms: ["[aeiou]"], location: "anywhere" }]
      },
      "/*eslint require-issue-ref: [2, { \"terms\": [\"todo\", \"fixme\", \"any other term\"], \"location\": \"anywhere\" }]*/\n\nvar x = 10;\n",
      {
          code: "/*eslint require-issue-ref: [2, { \"terms\": [\"todo\", \"fixme\", \"any other term\"], \"location\": \"anywhere\" }]*/\n\nvar x = 10;\n",
          options: [{ location: "anywhere" }]
      }
    ],
    
    invalid: [
        {
            code: "// TODO: Refactor This!",
            errors: [{
                message: "Unexpected TODO comment without associated issue reference (e.g. jira-###)"
            }]
        },
        {
            code: "/* any block comment with TODO: This Needs Work */",
            errors: [{
                message: "Unexpected TODO comment without associated issue reference (e.g. jira-###)"
            }]
        }
    ]
});
