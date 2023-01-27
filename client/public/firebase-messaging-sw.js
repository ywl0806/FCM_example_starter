/* eslint-disable no-undef */
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js"
);

const config = {
  /**
   * プロジェクト作成後 Firebase console でアプリを追加
   * プロジェクトの設定 -> 全般 -> マイアプリ -> SDK の設定と構成
   * firebaseConfig 内容をコピー
   */
};

firebase.initializeApp(config);

const isSupported = firebase.messaging.isSupported();
if (isSupported) firebase.messaging();
