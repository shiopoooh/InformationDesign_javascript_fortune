
const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

// ボタンがクリックされたら、動作させる
drawButton.addEventListener('click', () => {
  // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent = randomNumber;

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    //  未満だったら
    if (randomNumber < 6) {
      resultDisplay.textContent = 'クリティカル！';
      resultDisplay.classList.add('rainbow-text');
      resultDisplay.style.fontWeight = 'bold';
      resultDisplay.style.fontSize = '2em';
    }else if (randomNumber < 95) {
      resultDisplay.textContent = '普通！！！';
      resultDisplay.style.color = 'black'; // 文字色を黒に変更する
      resultDisplay.style.fontWeight = 'normal'; // 文字を通常にする
      resultDisplay.style.fontSize = '1em'; // 文字サイズを通常にする
      resultDisplay.classList.remove('rainbow-text'); // レインボーテキストのクラスを削除する
    } else {
      resultDisplay.textContent = 'ファンブル';
      resultDisplay.style.color = 'blue'; // 文字色を青に変更する
      resultDisplay.style.fontWeight = 'bold'; // 文字を太字にする
      resultDisplay.style.fontSize = '2em'; // 文字サイズを大きくする
      resultDisplay.classList.remove('rainbow-text'); // レインボーテキストのクラスを削除する
    }
});