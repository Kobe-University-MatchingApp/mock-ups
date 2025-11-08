# マッチングアプリ モックアップ作成プロジェクト

このプロジェクトは、マッチングアプリのUIを色々試してみるためのモックアップ環境です。

## 目的

各自がマッチングアプリのモックアップを作成し、アイデアを視覚的に確認することができます。

## 使い方

### 1. 開発サーバーの起動

```bash
npm install
npm run dev
```

### 2. 新しいモックアップの作成手順

`ExampleSample` フォルダを複製して、あなた独自のモックアップを作成してください。

#### 手順:

1. **フォルダをコピー**
   - `src/pages/ExampleSample` フォルダをコピー
   - `Example4`, `Example5` などの名前に変更

2. **index.jsx を編集**
   - コンポーネント名を変更（例: `Example4`, `Example5`）
   - `title` と `description` を変更
   - `prevLink` と `nextLink` を適切に設定

3. **PhoneContent.jsx を編集**
   - あなたのモックアップのUIを実装

4. **App.jsx にルートを追加**
   ```jsx
   <Route path="/example4" element={<Example4 />} />
   ```

5. **Home.jsx にボタンを追加**
   - ホーム画面から新しいページに遷移できるようにする

### 設定項目

各モックアップで設定する項目:

- **title**: ページのタイトル
- **description**: ページの説明
- **PhoneContent**: スマートフォン画面のコンテンツ
- **prevLink**: 前のページへのリンク
- **nextLink**: 次のページへのリンク
