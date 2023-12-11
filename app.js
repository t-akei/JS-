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

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
// prompt関数を呼び出すと、ウェブブラウザがダイアログボックスを表示し
// ユーザーはテキストボックスに情報を入力することができます。
// ユーザーが入力した情報は、prompt関数の返り値(出力された値)として
// 変数user_hand に格納されます。返り値は文字列として扱われます。

// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// getJShandは155行目で関数として定義されたもの
// getJShand関数下の処理内容がjs_handに代入される

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し
// 結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);
// winLoseは175行目で定義されている関数だが
// これはJavaScriptの組み込み関数ではなく、ユーザーが定義した関数。
// 今回のwinLoseは引数として(user_hand, js_hand)を持っているが
// 175行目のwinLoseは引数として(user, js)を持っている。
// JavaScriptでは、引数を変えることができる関数を
// 複数回呼び出すことができるため

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// \n はJavaScriptの文字列内で改行を表す特殊なエスケープシーケンスです

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    let js_hand_num = Math.floor(Math.random() * 3);
// Math.floor関数は、JavaScriptの組み込みの数学関数の一つです。
// この関数は、引数で与えられた数値以下で最大の整数を返します。
// つまり、小数点以下を切り捨てる事になる
// また、Math.random関数は、JavaScriptの組み込みの数学関数の一つ。
// この関数は、0以上1未満の範囲で擬似乱数を生成します。
// Math.floor(Math.random() * 3)の処理内容としては
// 1. `Math.random()`は0以上1未満のランダムな小数を生成します。
// この値はたとえば、0.5487や0.1234などといった値が取得されます。
// 2. このランダムな小数に`3`を掛けます。これにより、0以上3未満のランダムな小数が得られます。
// 例えば、0.5487 * 3 = 1.6461や0.1234 * 3 = 0.3702などの値が取得されます。
// 3. `Math.floor()`は、与えられた数値以下で最大の整数を返す関数です。
// これにより、`1.6461`は切り捨てられて`1`、`0.3702`は切り捨てられて`0`となります。
// つまり、結果としては整数の0または1が得られます。
// 要するに、`Math.floor(Math.random() * 3)`は0から2までの整数をランダムに得るための式です。
// ちなみに何故3を掛けたかというと
// グー・チョキ・パーに0から番号を振ると、0・1・2となる。
// 関数内の「3」は、ランダム生成したい整数値(=0,1,2)の2+1を指定しているから
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
// return hand_nameで、関数getJShanの処理内容は
// hand_nameとそれにランダムに代入された値


// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
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

// ↑ここまで3章