let a = [
    [
        1,
        2,
        3
    ],
    [
        3,
        2,
        1
    ],
    [
        1,
        3,
        2
    ]
]
let b = [
    [
        1,
        1,
        1
    ],
    [
        1,
        1,
        1
    ],
    [
        1,
        1,
        1
    ]
]

let c = [
    [],
    [],
    []
]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        c[i][j] = a[i][j] + b[i][j]
    }
}

console.log(c)