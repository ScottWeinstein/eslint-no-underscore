/**
 * @fileoverview Rule to flag use of _ object
 * @author Scott Weinstein
 */


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    var obsoleteMethods = {
        "each": 1,
        "every": 1,
        "filter": 1,
        "forEach": 1,
        "indexOf": 1,
        "lastIndexOf": 1,
        "map": 1,
        "reduce": 1,
        "reduceRight": 1,
        "some": 1
    };

    return {

        "MemberExpression": function(node) {

            if (node.object.name === "_" && obsoleteMethods[node.property.name]) {
                context.report(node, "Unexpected use of _." + node.property.name);
            }
        },

        "CallExpression": function(node) {
            if (node.callee.object && node.callee.object.callee &&
                node.callee.property &&
                node.callee.object.callee.name === "_" &&
                obsoleteMethods[node.callee.property.name] ) {
                context.report(node, "Unexpected use of _." + node.callee.property.name);
            }
        }
    };

};
