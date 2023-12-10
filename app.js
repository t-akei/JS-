let hello = 'Hello World';
alert(hello);

let int1 = 1;
alert(int1);

alert(4 + 3);

alert('Hello' + 'World');


let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);


// 条件分岐
let orange = 100;
let apple = 120;

if(orange<apple){
    alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
    alert('みかんとりんごが同じ値段');
} else{
    alert('みかんの値段がりんごより高い');
}


// 繰り返し処理-while文とdo...while文とfor文-
// while文
let max = 100;
let num = 1;
let count = 0;

while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// do...while文
let melon = 150;
let strbery = 130;

do{
    alert('メロンもいちごも美味しい');
}while(melon < strbery);

alert('メロン高い');


// for文
let i;
// letがついているからiは変数=変数iを宣言
let numm = 0;
// 「変数numm」を宣言し、初期値を０に設定

for(i = 1; i < 11; i++){
// 変数iの初期値を１に設定し、変数iが11未満の時は
// 変数iに１を足す('i++'は'i=i+１'と同じ)
    numm = numm + i;
    // 変数nummに「numm + i 」を代入
}

alert('1から10まで足し算した結果は' + numm + 'です');
// アラートウィンドウに計算結果を表示