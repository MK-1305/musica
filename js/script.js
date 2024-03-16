//logoの表示
$(window).on('load',function(){
  $("#loading").delay(1400).fadeOut('slow');
  $("#loading_title").delay(1400).fadeOut('slow');
});

           // オーバーレイ
            document.addEventListener('DOMContentLoaded', function(){
                const overlay = document.getElementById('overlay');
                function overlayToggle() {
                  overlay.classList.toggle('overlay-on');
                }
                const clickArea = document.getElementsByClassName('overlay');
                for(let i = 0; i < clickArea.length; i++) {
                  clickArea[i].addEventListener('click', overlayToggle, false);
                }
                function stopEvent(event) {
                  event.stopPropagation();
                }
                const overlayInner = document.getElementById('overlay-inner');
                overlayInner.addEventListener('click', stopEvent, false);
              }, false);       
              
              
// ハンバーガーメニュー
function toggle() {
  document.querySelector('.menubutton').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('open');
}
function toggle() {
  document.querySelector('.menubutton').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('open');
}



// ページや画像が読み込みが完了した時点でイベントfunction()を実行するための定義
window.onload=function () {
    //「change_ruby」の名前がついた要素がクリックされたときに、処理をします。
    document.getElementById('change_ruby').onclick=function () { 
    // show_block関数を呼び出します。
      show_block();
    }
  }
  // show_block関数を定義します。
  function show_block() {
    // 特定の要素のクラス名を追加したり、削除したりします。
    document.body.classList.toggle('ruby_flag');
  }