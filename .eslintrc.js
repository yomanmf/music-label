module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "browser": false,
        "step": false,
        "mstep": false,
        "moment": false,
        "assert": false,
        "errmsg": false,
        "skipspec": true,
        "$": false,
        "$$": false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "prefer-const":
            "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["error", { allow: ["log"] }] //delete after test develop complete
    }
};