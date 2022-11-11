
'use strict';

(() => {

  /**
   * 三本線アイコン
   * @type {Shower}
   */
  const iconBars = new Shower('.header__icon-bars');
  /**
   * 検索アイコン
   * @type {Shower}
   */
  const iconSearch = new Shower('.header__icon-search');
  /**
   * バツ印アイコン
   * @type {Shower}
   */
  const iconCancel = new Shower('.header__icon-cancel');
  /**
   * タイトル
   * @type {Shower}
   */
  const title = new Shower('.header__title');
  /**
   * 検索用form
   * @type {Shower}
   */
  const formSearch = new Shower('.header__form-search');
  /**
   * 左から出てくるドロワー
   * @type {Shower}
   */
  const leftDrawer = new Shower('.header__left-drawer');
  /**
   * 検索結果のリスト
   * @type {Shower}
   */
  const searchResult = new Shower('.header__search-result');
  /**
   * マスク
   * @type {Shower}
   */
  const mask = new Shower('.mask');
  /**
   * 全Showerインスタンスを格納する配列
   * @type {Array<Shower>}
   */
  const showerList = [
    iconBars,
    iconSearch,
    iconCancel,
    title,
    formSearch,
    leftDrawer,
    searchResult,
    mask
  ];



  // メインロジック
  // ページの読み込みが終わったら、
  window.addEventListener('load', () => {
    // イベントを設定
    eventSetting();
  });

  

  /**
   * イベントを設定する
   */
  function eventSetting() {
    // 三本線アイコンがクリックされたら、
    iconBars.dom.addEventListener('click', () => {
      // ドロワーとマスクが表示されているなら、初期画面に戻す
      if(leftDrawer.isShowing && mask.isShowing) {
        initialize();
      // ドロワーとマスクが表示されていないなら、
      } else {
        // 初期画面に戻す
        initialize();
        // ドロワーを表示する
        leftDrawer.show();
        // マスクを表示する
        mask.show();
      }
    });
    // 検索アイコンがクリックされたら、
    iconSearch.dom.addEventListener('click', () => {
      // 初期画面に戻す
      initialize();
      // 検索アイコンを隠す
      iconSearch.hide();
      // 検索formを表示する
      formSearch.show();
      // バツ印アイコンを表示する
      iconCancel.show();
      // 検索結果を表示する
      searchResult.show();
      // マスクを表示する
      mask.show();
      // 検索用inputにフォーカスする
      document.form1.input1.focus();
    });
    // バツ印アイコンがクリックされたら、初期画面に戻す
    iconCancel.dom.addEventListener('click', () => {
      initialize();
    });
    // マスクがクリックされたら、初期画面に戻す
    mask.dom.addEventListener('click', () => {
      initialize();
    });
  }

  /**
   * 初期状態に戻す
   */
  function initialize() {
    // 全インスタンスのinitメソッドを実行する
    showerList.map((shower) => {
      shower.init();
    });
  }

})();