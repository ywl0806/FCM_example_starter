import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  /**
   * プロジェクト作成後 Firebase console でアプリを追加
   * プロジェクトの設定 -> 全般 -> マイアプリ -> SDK の設定と構成
   * firebaseConfig 内容をコピー
   */
};

export const initFirebase = () => initializeApp(firebaseConfig);

export const requestForToken = () => {
  return getToken(getMessaging(), {
    vapidKey: "プロジェクトの設定 -> Cloud Messaging -> ウェブの構成 -> 鍵ペア",
  });
};
