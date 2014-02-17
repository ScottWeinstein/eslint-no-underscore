/**
 * @fileoverview Tests for no underscore rule where ES5 methods exist
 * @author Scott Weinstein
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("lib/rules/no-underscore", {
    valid: [
        "_.clone({})"
    ],
    invalid: [
        { code: "_.map([],function(arg) {})", errors: [{ message: "Unexpected use of _.map", type: "MemberExpression"}] },
        { code: "_([]).map(function(){})", errors: [{ message: "Unexpected use of _.map", type: "CallExpression"}] }
    ]
});


