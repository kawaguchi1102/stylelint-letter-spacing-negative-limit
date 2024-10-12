import stylelint from "stylelint";
import valueParser from "postcss-value-parser";

const {
    createPlugin,
    utils: { report, ruleMessages, validateOptions }
} = stylelint;

const ruleName = "plugin/stylelint-letter-spacing-negative-limit";
const messages = ruleMessages(ruleName, {
    expected: (value) => `Expected letter-spacing in negative "${value}"`
});
const meta = {
    url: "https://github.com/kawaguchi1102/stylelint-letter-spacing-negative-limit#readme"
};

/**@type {import('stylelint').StylelintPlugin} */
const rule = (primary) => (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
        actual: primary,
        possible: [true]
    });

    if (!validOptions) return;

    root.walkDecls("letter-spacing", decl => {
        const parsedValue = valueParser(decl.value);

        parsedValue.walk(node => {
            const {value, type} = node;

            if (type === "word") {
                const numberUnit = valueParser.unit(value);

                if (!numberUnit) return;

                const number = Number.parseFloat(numberUnit.number);

                if (number < 0) {
                    report({
                        message: messages.expected(decl.value),
                        node: decl,
                        result,
                        ruleName,
                    });
                }
            }
        });
    });
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;

export default createPlugin(ruleName, rule);
