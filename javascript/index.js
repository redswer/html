'use strict';

// 구구단

//  for (초기식; 조건식; 증감식)

for (let i = 1; i < 10; i++) {
    // continue
    /* for : 증감식 부분으로 점핑 */
    /* while, do-while : 증감식이 없기 때문에 조건식으로 점핑 */
    
    for (let j = 1, result; j < 10; j++) {
        result = i * j;

        // 정렬
        document.write(`${i} X ${j} =${result / 10 >= 1 ? '' : '&nbsp;'}${result} &nbsp; &nbsp;`);
        // = document.write(`${i} X ${j} =${String(result).length >= 2 ? '' :'&nbsp;'}${result} `);
    }
    // 줄바꿈
    document.write('<br/>');

    if (i >= 6) continue;
    /* continue 코드는 밑의 코드를 무시하고 증감식으로 점프하는 코드인데 밑에 코드가 없으므로 의미 없는 코드 */
}