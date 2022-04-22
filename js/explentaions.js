export let EXPLANATIONS = [
    {
        title: "Javascipt Data Types",
        text: [
            {
                sub_title: "String",
                sub_text: `Represents textual data. 'hello', "hello world!" etc.`,
            },
            {
                sub_title: "Number",
                sub_text: `An integer or a floating-point number.`,
            },
            {
                sub_title: "BigInt",
                sub_text: `An integer with arbitrary precision. 900719925124740999n , 1n etc.`,
            },
            {
                sub_title: "Boolean",
                sub_text: `Any of two values: true or false.`,
            },
            {
                sub_title: "undefined",
                sub_text: `A data type whose variable is not initialized.`,
            },
            {
                sub_title: "null",
                sub_text: `Denotes a null value. A null value has no value.`,
            },
            {
                sub_title: "Symbol",
                sub_text: `Data type whose instances are unique and immutable. A unique identifier.`,
            },
            {
                sub_title: "Object",
                sub_text: `Key-value pairs of collection of data.`,
            },
        ],
        example: [
            {
                input: `let myString = "Hello World;`,
                output: `Hello World`,
            },
            {
                input: `let myNumber = 123;`,
                output: 123,
            },
            {
                input: `let myBigInt = BigInt(9007199254740991);`,
                output: `9007199254740991n`,
            },
            {
                input: `let myBoolean = true;`,
                output: true,
            },
            {
                input: `let myUndefined;`,
                output: undefined,
            },
            {
                input: `let myNull = null;`,
                output: null,
            },
            {
                input: `let mySymbol = Symbol('hello');`,
                output: `Symbol(hello)`,
            },
            {
                input: `let myObject = { name: "Steve" }`,
                output: {
                    name: "Steve",
                },
            },
        ],
    },
    {
        title: "Javascript Comments",
        text: [
            {
                sub_title: "One-line comment",
                sub_text:
                    "One-line comments are just as it says, comments that are on 1 row. They are made by typing // at the start of the comment. Comments are ignored by the compiler.",
            },
            {
                sub_title: "Multi-line comments",
                sub_text:
                    "Multi-line comments are comments that can span multiple rows. They are made by typing /* at the start of the comment. Finished the comment by closing it with */. Comments are ignored by the compiler",
            },
        ],
        example: [
            {
                input: "// My one-line comment.",
                output: "Nothing.",
            },
            {
                input: "/* This is my multi-line comment! This needs to be very long so it definently is long enough to cover more than one row. */",
                output: "Nothing.",
            },
        ],
    },
];
