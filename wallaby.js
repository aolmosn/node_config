module.exports = function (wallaby) {

    // process.env.PORT = 3000
    // process.env.MONGODB_URL = 'mongodb://localhost/task-manager-api'
    // process.env.JWT_SECRET = 'thisismynewcourse'


    return {
        files: [
            '**/*.ts',
            '!wallaby.js',
            '!tests/**/*.test.ts',
            '!node_modules/**/*'
        ],
        tests: [
            'tests/**/*test.ts'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({ useStandardDefaults: true })
        },
        testFramework: 'jest'
    };
};