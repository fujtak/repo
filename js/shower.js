

class Shower{

  /**
   * @constructor
   * @param {string} selector - DOM要素のクラスセレクター
   */
  constructor(selector){
    /**
     * DOM要素
     * @type {HTMLElement}
     */
     this.dom = document.querySelector(selector);
    /**
     * DOM要素に付け替えして、DOM要素の表示・非表示を切り替えるクラスセレクター
     * @type {string}
     */
    this.hider = `${selector.replace('.', '')}--hidden`;
    /**
     * 初期画面で表示しているかどうかを保持
     * @type {boolean}
     */
    this.defaultIsShowing = !this.dom.classList.contains(this.hider);
    /**
     * 現在表示中かどうかを表すフラグ
     * @type {boolean}
     */
    this.isShowing = this.defaultIsShowing;
  }

  /**
   * 現在表示中かどうかを設定する
   * @param {boolean} isShowing - isShowingにセットする真偽値
   */
  setIsShowing(isShowing) {
    if(typeof isShowing === "boolean"){
      this.isShowing = isShowing;
    }
  }

  /**
   * 表示する
   */
  show() {
    if(this.isShowing === true) {return;}
    this.dom.classList.remove(this.hider);
    this.setIsShowing(true);
  }

  /**
   * 隠す
   */
  hide() {
    if(this.isShowing !== true) {return;}
    this.dom.classList.add(this.hider);
    this.setIsShowing(false);
  }

  /**
   * 初期状態に戻す
   */
  init() {
    if(this.defaultIsShowing === true) {
      this.show();
    } else {
      this.hide();
    }
  }

}