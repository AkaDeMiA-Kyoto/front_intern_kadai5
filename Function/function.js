"use strict";

const TREE = [0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]]]
const HUGE_TREE = [0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, 1, [3, 1, [1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]]], 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, [1, 1, 1, [0, [1, 1]]], 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 0, 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, 1, [3, 1, [1, 8, 1, 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, [1, 1, 1, [0, [1, 1]]], 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]] [0, [1, 1]]], [0, 1, 1, 1, 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, [1, 1, 1, [0, [1, 1]]], 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]]]]], 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, 1, [3, 1, [1, 0, 1, [0, [1, 1]]], [0, 1, 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, [1, 1, 1, [0, [1, 1]]], 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 1, 1]]], 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1, 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 5, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]], 0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]],
0, 1, [2, 1, 1, [3, 1, [1, 1, 1, [0, [1, 1]]], [0, 1, 1, 1]]]]]]]]

function countNumOfOne(entity_list) {
    // カウントする変数を初期化
    let counter = 0

    // リストを走査
    function searchNumOfOne(list) {
        list.forEach((value) => {
            if(value === 1) {
                counter++
            } else if(Array.isArray(value)) {
                searchNumOfOne(value)
            };
        });
    };

    searchNumOfOne(entity_list)
    console.log(counter)
};

countNumOfOne(TREE)
countNumOfOne(HUGE_TREE)

// 実は以下のようにメソッドで簡単に書くことができる
const SUM_HUGE_TREE = HUGE_TREE.flat(Infinity).reduce((counter, currentValue) => {
                    if(currentValue === 1) {
                        counter++
                    };
                    return counter
}, 0)

console.log(SUM_HUGE_TREE)
