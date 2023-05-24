import {ref} from "vue";

//My Data Code
export const iterationData = ref([
    [
        //Preset Record Array Data - Iteration 1, Horizontal + Perpendicular
        //Mid
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [1,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,1],

        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,1,0],
        [0,1,0,0,1,0,0,0,0],

        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0],

        //Mid Left
        [0,0,0,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0],

        //Mid Right
        [0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0,0]
    ],
    [
        //Preset Record Array Data - Iteration 2, Diagonal
        //Top Left
        [1,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],

        //Top Right
        [0,0,1,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],

        //Bottom Right
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],

        //Bottom Left
        [0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0],
        //Top Left
        [1,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],

        //Top Right
        [0,0,1,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],

        //Bottom Right
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],

        //Bottom Left
        [0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,1,0,0]
    ],
    [
        //Preset Record Array Data - Iteration 3, Complementary Horizontal + Perpendicular
        //Perpendicular
        [1,0,0,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,1,0],
        [0,0,1,0,0,0,0,0,1],
        [1,0,0,1,0,0,0,0,0],
        [0,1,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,0,0],
        [0,0,0,1,0,0,1,0,0],
        [0,0,0,0,1,0,0,1,0],
        [0,0,0,0,0,1,0,0,1],

        //Horizontal
        [1,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,1],
        [1,1,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,0],
        [0,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1]
    ],
    [
        //Preset Record Array Data - Iteration 4, Complementary Diagonal
        //Top Left to Bottom Right
        [1,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,1],

        //Top Right to Bottom Left
        [0,0,1,0,0,0,1,0,0],
        [0,0,1,0,1,0,0,0,0],
        [0,0,0,0,1,0,1,0,0]
    ],
    [
        //Preset Record Array Data - Iteration 5, Optimal Complementary Horizontal + Perpendicular
        //Angled
        [1,0,1,0,0,0,0,1,0],
        [1,0,0,0,0,1,1,0,0],
        [0,1,0,0,0,0,1,0,1],
        [0,0,1,1,0,0,0,0,1],

        //Double Sided
        [1,0,1,0,0,0,0,0,1],
        [1,0,1,0,0,0,0,0,1],

        [0,0,1,0,0,0,1,0,1],
        [0,0,1,0,0,0,1,0,1],

        [1,0,0,0,0,0,1,0,1],
        [1,0,0,0,0,0,1,0,1],

        [1,0,1,0,0,0,1,0,0],
        [1,0,1,0,0,0,1,0,0],

        //Quadruple Sided
        [1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,0,1,0,1],
        [1,0,1,0,0,0,1,0,1],

        //Cornered
        [1,1,0,1,0,0,0,0,0],
        [1,1,0,1,0,0,0,0,0],

        [0,1,1,0,0,1,0,0,0],
        [0,1,1,0,0,1,0,0,0],

        [0,0,0,0,0,1,0,1,1],
        [0,0,0,0,0,1,0,1,1],

        [0,0,0,1,0,0,1,1,0],
        [0,0,0,1,0,0,1,1,0],
    ],
    [
        //Preset Record Array Data - Iteration 6, Optimal Complementary Diagonal
        //Four Sided
        [1,0,1,0,1,0,0,0,0],
        [1,0,1,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,1,0],
        [0,0,1,0,0,1,0,1,0],
        [0,0,0,0,1,0,1,0,1],
        [0,0,0,0,1,0,1,0,1],
        [1,0,0,0,1,0,1,0,0],
        [1,0,0,0,1,0,1,0,0],
    ],
    [
        //[0,0,0,0,0,0,0,0,0],
        //Preset Record Array Data - Iteration 7, Counteracting Complementary Horizontal + Perpendicular
        //Horizontal
        [0,1,1,0,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0],
        [1,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0],
        [0,0,0,1,0,1,0,0,0],
        [0,0,0,0,0,0,0,1,1],
        [0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,1,0,1],

        //Vertical
        [1,0,0,1,0,0,0,0,0],
        [0,0,0,1,0,0,1,0,0],
        [1,0,0,0,0,0,1,0,0],
        [0,1,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,0,0,1,0],
        [0,0,1,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0,1],
        [0,0,1,0,0,0,0,0,1],

        //Diagonal
        [1,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,1],
        [0,0,1,0,1,0,0,0,0],
        [0,0,0,0,1,0,1,0,0],
        [0,0,1,0,0,0,1,0,0],

        //Miscellaneous
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,2],
        [1,0,0,0,1,0,0,0,2],
        [1,0,0,0,1,0,0,2,2],
        [1,0,0,0,1,0,1,2,2],
        [1,0,2,0,1,0,1,2,2],

        [1,2,1,0,0,0,2,0,1],
        [0,0,0,1,0,0,0,0,0],
        [0,0,1,2,1,0,0,0,0],

        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],

        [ 0, 0, 0, 0, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 2, 0, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 0, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 2, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 2, 0, 1 ], [ 2, 0, 1, 0, 1, 2, 2, 0, 1 ], [ 2, 0, 1, 1, 1, 2, 2, 0, 1 ],

        [2,0,0,0,0,0,1,0,1],
        [2,0,0,0,0,0,1,0,1],
        [2,0,0,0,0,0,1,0,1],
        [2,0,0,0,0,0,1,0,1],

        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 2, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 2, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 2, 0, 0, 2, 0, 0, 0, 1 ], [ 1, 2, 0, 0, 2, 0, 0, 1, 1 ], [ 1, 2, 0, 0, 2, 0, 2, 1, 1 ]
    ]
]);
export const iterationLabels = ref([
    [
        //Preset Record Labels - Iteration 1, Horizontal + Perpendicular
        //Init Mid
        [1,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,1],

        [0,0,0,0,1,0,0,1,0],
        [0,1,0,0,1,0,0,0,0],
        [0,1,0,0,1,0,0,1,0],
        [0,1,0,0,1,0,0,1,0],

        [0,0,0,0,1,1,0,0,0],
        [0,0,0,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,1,1,1,0,0,0],

        //Init Mid Left
        [0,0,0,1,1,1,0,0,0],
        [1,0,0,1,0,0,1,0,0],

        //Init Mid Right
        [0,0,0,1,1,1,0,0,0],
        [0,0,1,0,0,1,0,0,1]
    ],
    [
        //Preset Record Labels - Iteration 2, Diagonal
        //Init Top Left
        [1,0,0,1,0,0,1,0,0],
        [1,0,0,0,1,0,0,0,1],
        [1,1,1,0,0,0,0,0,0],

        //Init Top Right
        [0,0,1,0,0,1,0,0,1],
        [0,0,1,0,1,0,1,0,0],
        [1,1,1,0,0,0,0,0,0],

        //Init Bottom Right
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [0,0,0,0,0,0,1,1,1],

        //Init Bottom Left
        [1,0,0,1,0,0,1,0,0],
        [0,0,1,0,1,0,1,0,0],
        [0,0,0,0,0,0,1,1,1],

        //Init Top Left
        [1,0,0,1,0,0,1,0,0],
        [1,0,0,0,1,0,0,0,1],
        [1,1,1,0,0,0,0,0,0],

        //Init Top Right
        [0,0,1,0,0,1,0,0,1],
        [0,0,1,0,1,0,1,0,0],
        [1,1,1,0,0,0,0,0,0],

        //Init Bottom Right
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [0,0,0,0,0,0,1,1,1],

        //Init Bottom Left
        [1,0,0,1,0,0,1,0,0],
        [0,0,1,0,1,0,1,0,0],
        [0,0,0,0,0,0,1,1,1]
    ],
    [
        //Preset Record Labels - Iteration 3, Complementary Horizontal + Perpendicular
        //Init Perpendicular
        [1,0,0,1,0,0,1,0,0],
        [0,1,0,0,1,0,0,1,0],
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0],
        [0,1,0,0,1,0,0,0,0],
        [0,0,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0],
        [0,1,0,0,1,0,0,1,0],
        [0,0,1,0,0,1,0,0,1],

        //Init Horizontal
        [1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1],
        [1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1],
        [1,1,1,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,1,1,1]
    ],
    [
        //Preset Record Labels - Iteration 4, Complementary Diagonal
        //Init Top Left to Bottom Right
        [1,0,0,0,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,0,0,1,0,0,0,1],

        //Init Top Right to Bottom Left
        [0,0,1,0,1,0,1,0,0],
        [0,0,1,0,1,0,1,0,0],
        [0,0,1,0,1,0,1,0,0]
    ],
    [
        //Preset Record Labels - Iteration 5, Optimal Complementary Horizontal + Perpendicular
        //Init Angled
        [1,1,1,0,0,0,0,1,0],
        [1,0,0,1,0,1,1,0,0],
        [0,1,0,0,0,0,1,1,1],
        [0,0,1,1,0,1,0,0,1],

        //Init Double Sided
        [1,1,1,0,0,0,0,0,1],
        [1,0,1,0,0,1,0,0,1],

        [0,0,1,0,0,0,1,1,1],
        [0,0,1,0,0,1,1,0,1],

        [1,0,0,0,0,0,1,1,1],
        [1,0,0,1,0,0,1,0,1],

        [1,1,1,0,0,0,1,0,0],
        [1,0,1,1,0,0,1,0,0],

        //Init Quadruple Sided
        [1,1,1,0,0,0,1,0,1],
        [1,0,1,0,0,1,1,0,1],
        [1,0,1,0,0,0,1,1,1],
        [1,0,1,1,0,0,1,0,1],

        //Cornered
        [1,1,1,1,0,0,0,0,0],
        [1,1,0,1,0,0,1,0,0],

        [1,1,1,0,0,1,0,0,0],
        [0,1,1,0,0,1,0,0,1],

        [0,0,0,0,0,1,1,1,1],
        [0,0,1,0,0,1,1,0,1],

        [0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,1,1,0],
    ],
    [
        //Preset Record Labels - Iteration 6, Optimal Complementary Diagonal
        //Init Four Sided
        [1,0,1,0,1,0,1,0,0],
        [1,0,1,0,1,0,0,0,1],
        [1,0,1,0,1,0,0,0,1],
        [0,0,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,1,0,1],
        [0,0,1,0,1,0,1,0,1],
        [1,0,0,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,0],
    ],
    [
        //Preset Record Labels - Iteration 7, Counteracting Complementary Horizontal + Perpendicular
        //Init Horizontal
        [2,1,1,0,0,0,0,0,0],
        [1,1,2,0,0,0,0,0,0],
        [1,2,1,0,0,0,0,0,0],
        [0,0,0,2,1,1,0,0,0],
        [0,0,0,1,1,2,0,0,0],
        [0,0,0,1,2,1,0,0,0],
        [0,0,0,0,0,0,2,1,1],
        [0,0,0,0,0,0,1,1,2],
        [0,0,0,0,0,0,1,2,1],

        //Init Vertical
        [1,0,0,1,0,0,2,0,0],
        [2,0,0,1,0,0,1,0,0],
        [1,0,0,2,0,0,1,0,0],
        [0,1,0,0,1,0,0,2,0],
        [0,2,0,0,1,0,0,1,0],
        [0,1,0,0,2,0,0,1,0],
        [0,0,1,0,0,1,0,0,2],
        [0,0,2,0,0,1,0,0,1],
        [0,0,1,0,0,2,0,0,1],

        //Init Diagonal
        [1,0,0,0,1,0,0,0,2],
        [2,0,0,0,1,0,0,0,1],
        [1,0,0,0,2,0,0,0,1],
        [0,0,1,0,1,0,2,0,0],
        [0,0,2,0,1,0,1,0,0],
        [0,0,1,0,2,0,1,0,0],

        //Init Miscellaneous
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,0,0,0,2],
        [1,0,0,0,1,0,0,0,2],
        [1,0,0,0,1,0,0,2,2],
        [1,0,0,0,1,0,1,2,2],
        [1,0,2,0,1,0,1,2,2],
        [1,0,2,1,1,0,1,2,2],

        [1,2,1,0,2,0,2,0,1],
        [0,0,0,1,2,0,0,0,0],
        [0,0,1,2,1,0,2,0,0],

        [1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,0,0,0,1],

        [ 0, 0, 0, 0, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 1, 2, 0, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 0, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 2, 0, 0 ], [ 0, 0, 1, 0, 1, 2, 2, 0, 1 ], [ 2, 0, 1, 0, 1, 2, 2, 0, 1 ], [ 2, 0, 1, 1, 1, 2, 2, 0, 1 ],

        [2,0,0,0,0,0,1,2,1],
        [2,0,0,0,0,0,1,2,1],
        [2,0,0,0,0,0,1,2,1],
        [2,0,0,0,0,0,1,2,1],

        [ 1, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 2, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 2, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 2, 0, 0, 2, 0, 0, 0, 1 ], [ 1, 2, 0, 0, 2, 0, 0, 1, 1 ], [ 1, 2, 0, 0, 2, 0, 2, 1, 1 ], [ 1, 2, 1, 0, 2, 0, 2, 1, 1 ]
    ]
]);
