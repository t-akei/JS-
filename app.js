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


// 簡単な関数の記述
// function addString(strA){
// functionでaddStringを関数として定義して、引数にはstrAを定義している
    // let addStr = "Hello" + strA;
// letでaddStrを変数として定義し、文字列"Hello"と
// 引数strAの文字列を変数に代入している
    // return addStr;
// 結合結果の格納された「addStr」を、関数の戻り値としています。
// returnを記述することで、出力結果が表示されます。
// }
// これで与えられた引数を基にして
// 特定の文字列を結合する関数が作成できました


let alertString;
// メイン部分。alertStringを変数として宣言
alertString = addString("WebCamp");
// 関数addStringを呼び出し、変数alertStringに代入
alert(alertString);
// 変数の中身ををアラートウィンドウで表示
// ↓作成した関数
function addString(strA){
    let addStr = "Hello " + strA;
    return addStr;
}


// 複数の関数で表示できるようにする
let promptStr = prompt('何か好きな文字を入力してください');
// 何か好きな文字を~という入力ダイアログが表示される。
// それに文字を打ち込むと、入力された文字列はpromot関数の戻り値(=出力される値)
// として変数「promptStr」に格納されてアラートウィンドウに表示される。
alert(promptStr);

// prompt()関数はJavaScriptで利用できる関数の一つ
// ウェブページ上でユーザーに対話的に情報を入力してもらうために使用します。
// prompt関数を呼び出すと、ウェブブラウザがダイアログボックスを表示し
// ユーザーはテキストボックスに情報を入力することができます。
// ユーザーが入力した情報は、prompt関数の返り値として取得できます。
// 返り値は文字列として扱われます。


// 複数の関数を定義する
// 今回は、ユーザが入力したじゃんけんの手（グー・チョキ・パー）と
// JavaScriptがランダムに出すじゃんけんの手を比較し
// 勝ち負けの結果を表示させる関数を定義します。
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// alert('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
    // let js_hand_num = Math.floor(Math.random() * 3 );
    
    // if(js_hand_num == 0){
        // js_hand = "グー";
    // } else if(js_hand_num == 1){
        // js_hand = "チョキ";
    // } else if(js_hand_num == 2){
        // js_hand = "パー";
    // }
    
    // return js_hand;
// }


let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

function getJShand(){
    let js_hand_num = Math.floor(Math.random() * 3);
    let hand_name;
    
    if(js_hand_num == 0){
        hand_name = "グー";
    } else if(js_hand_num == 1){
        hand_name = "チョキ";
    } else if(js_hand_num == 2){
        hand_name = "パー";
    }
    
    return hand_name;
}


function winLose(user, js){
    let winLoseStr;
    
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        } else if(js == "チョキ"){
            winLoseStr = "勝ち";
        } else if(js == "パー"){
            winLoseStr = "負け";
        }
    } else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        } else if(js == "チョキ"){
            winLoseStr = "あいこ";
        } else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    } else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        } else if(js == "チョキ"){
            winLoseStr = "負け";
        } else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
    
    return winLoseStr;
}
