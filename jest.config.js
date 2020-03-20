module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testMatch: [
        '**/tests/**/*.test.[jt]s?(x)',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/tests/helpers/setup-vue.ts',
    ],
}
