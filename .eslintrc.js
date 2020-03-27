module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        // Basic settings
        'indent':               ['warn', 4],                // Indent with 4 spaces
        'no-tabs':              ['warn'],                   // Don't use tabs
        'no-trailing-spaces':   ['warn'],                   // Don't allow trailing spaces
        'linebreak-style':      ['error', 'unix'],          // End lines with UNIX line breaks
        'max-len':              ['warn', { 'code': 120 }],  // Line length is limited by 120 characters
        'semi':                 ['error', 'never'],         // Don't use semicolons if not necessary
        'semi-style':           ['error', 'first'],         // If necessary, write semicolon at the beginning of the line
        'eol-last':             ['error', 'always'],        // enforces at least one newline (or absence thereof) at the end of non-empty files

        // Code settings
        'no-use-before-define': ['error'],                  // Define functions, classes and variables before you use them
        'no-var':               ['warn'],                   // Don't allow var
        'prefer-const':         ['warn', { 'ignoreReadBeforeAssign': true }],  // If let is not assigned to, prefer const
        'no-return-assign':     ['error', 'always'],        // Don't allow assingment in return statement
        'eqeqeq':               ['error', 'smart'],         // Reqire use of === and !== instead of == and != (with a few exceptions)
        'complexity':           ['warn', 10],               // Maximum cyclomatic complexity

        // Spacing settings
        'space-before-blocks':  ['warn'],                   // Require at least one preceding space before blocks
        'keyword-spacing':      ['warn'],                   // Reqiure spacing around keywords
        'func-call-spacing':    ['error', 'never'],         // Don't allow spaces between function call and arguments
        'space-before-function-paren': ['error', 'never'],  // Don't allow spaces before function definition parenthesis
        'spaced-comment':       ['warn', 'always'],         // Require whitespace after //
        'space-in-parens':      ['warn', 'never'],          // Don't allow spaces in parenthesis
        'comma-spacing':        ['warn'],                   // Reqire space after comma, don't allow space before
        'space-infix-ops':      ['warn'],                   // Require spaces around infix operators (including =)
        'quotes':               ['warn', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }], // Requires the use of single quotes, allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise, allows strings to use backticks
        'comma-dangle':         ['warn', 'always-multiline'],  // Require for the last item in multiline object to be followed by comma

        // Vue specific settings
        'vue/html-indent':      ['error', 4],               // Indent with 4 spaces in Vue templates
        'vue/html-closing-bracket-newline': ['error', {singleline: 'never', multiline: 'always'}],  // Enforce tag closing bracket position
        'vue/html-closing-bracket-spacing': ['warn', {selfClosingTag: 'never'}],  // No space before self closing tag end
        'vue/prop-name-casing': ['error', 'snake_case'],    // Enforce property names in props to snake case
        'vue/max-attributes-per-line': ['error', {singleline: 5, multiline: 1}],  // Allow max 5 attributes on single line (helpful for xs2, pa-1 etc.)

        // TypeScript specific settings
        '@typescript-eslint/camelcase': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/**/*.test.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
}
