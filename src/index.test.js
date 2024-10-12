import plugin from "./index.js"
import {testRule} from "stylelint-test-rule-node";

const {
    rule: {messages, ruleName}
} = plugin;

testRule({
    ruleName,
    config: [true],
    plugins: [plugin],

    accept: [
        {
            code: ".class { letter-spacing: 0; }"
        },
        {
            code: ".class { letter-spacing: 0px; }"
        },
        {
            code: ".class { letter-spacing: 1px; }"
        },
        {
            code: ".class { letter-spacing: 0.5em; }"
        },
        {
            code: ".class { letter-spacing: 100%; }"
        },
        {
            code: `
            .class {
              --foo: -10px;
              letter-spacing: var(--foo);
            }
            `
        }
    ],

    reject: [
        {
            code: "a { letter-spacing: -1px; }",
            message: messages.expected("-1px"),
            line: 1,
            column: 5,
            description: "Value letter-spacing in negative"
        },
        {
            code: "a { letter-spacing: -0.5em; }",
            message: messages.expected("-0.5em"),
            line: 1,
            column: 5,
            description: "Value letter-spacing in negative"
        },
        {
            code: "a { letter-spacing: -100%; }",
            message: messages.expected("-100%"),
            line: 1,
            column: 5,
            description: "Value letter-spacing in negative"
        }
    ]
});
