# Task-app — Claude Code ガイド

## プロジェクト概要

タスク管理アプリケーション。テキスト入力によるタスクの追加・完了切り替え・削除ができる。タスクは localStorage に永続化される。

---

## デプロイ先

**GitHub Pages:** https://ma10mat.github.io/task-app/

`main` ブランチへのプッシュで GitHub Actions が自動ビルド＆デプロイする（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。

---

## 技術スタック

| 種別 | 技術 |
|------|------|
| UI ライブラリ | React 19 |
| ビルドツール | Vite 6 |
| スタイリング | CSS Modules |
| 状態管理 | React `useState` / `useEffect`（外部ライブラリなし） |
| データ永続化 | `localStorage` |
| 言語 | JavaScript (JSX) |
| パッケージ管理 | npm |

---

## コンポーネント設計

### ファイル・ディレクトリ構成

```
src/
├── App.jsx                   # ルート。tasks の状態管理と localStorage 読み書き
├── App.css                   # アプリ全体レイアウト
├── index.css                 # グローバルスタイル・CSS 変数（ライト/ダークテーマ）
├── main.jsx                  # エントリーポイント
└── components/
    ├── TaskInput.jsx         # テキスト入力フォーム
    ├── TaskInput.module.css
    ├── TaskList.jsx          # タスク一覧（空状態メッセージも担当）
    ├── TaskList.module.css
    ├── TaskItem.jsx          # 個別タスク行（チェックボックス・削除ボタン）
    └── TaskItem.module.css
```

### 命名規約

- **コンポーネントファイル**: PascalCase（例: `TaskItem.jsx`）
- **CSS Modules ファイル**: コンポーネント名に `.module.css` を付ける（例: `TaskItem.module.css`）
- **コンポーネント関数**: PascalCase の名前付き `export default`
- **クラス名（CSS Modules 内）**: camelCase（例: `.deleteButton`, `.completed`）
- **props**: camelCase（例: `onAdd`, `onToggle`, `onDelete`）
- **状態変数**: camelCase の名詞（例: `tasks`, `text`）
- **イベントハンドラ**: `handle` プレフィックス（例: `handleSubmit`）

---

## Git 運用ルール

### 基本方針

**コードを変更するたびに、必ず GitHub にプッシュする。**
変更をローカルに溜め込まず、こまめにコミット＆プッシュすることで作業履歴を常に GitHub 上に保つ。

### コミット手順

1. 変更内容を確認する
   ```powershell
   git status
   git diff
   ```

2. 関連ファイルをステージングする（`git add .` は避け、ファイルを明示する）
   ```powershell
   git add <ファイル名>
   ```

3. 変更内容を端的に表すコミットメッセージを付けてコミットする
   ```powershell
   git commit -m "変更内容の要約"
   ```

4. **即座に GitHub へプッシュする**
   ```powershell
   git push origin main
   ```

### コミットメッセージ規約

- 日本語・英語どちらでも可
- 動詞から始める（例: `Add`, `Fix`, `Update`, `Remove`, `追加`, `修正`, `削除`）
- 何を・なぜ変えたかを簡潔に書く
- 1 行目は 72 文字以内を目安にする

例:
```
Add task creation form with validation
Fix: 完了タスクのフィルタが動作しない問題を修正
Update README with setup instructions
```

### ブランチ戦略

- `main` — 常にデプロイ可能な状態を維持する
- 機能追加・バグ修正はフィーチャーブランチで行う（任意）
  ```
  feature/<機能名>
  fix/<バグ内容>
  ```

### やってはいけないこと

- `--force` プッシュは原則禁止（共同作業時は特に厳守）
- `--no-verify` でフックをスキップしない
- 機密情報（`.env`、APIキーなど）をコミットしない

---

## 開発ルール

### コード品質

- コメントは「なぜ」その実装をしたかが自明でない場合にのみ書く（「何をしているか」は書かない）
- 不要な抽象化・将来のための設計は行わない
- セキュリティ: ユーザー入力は必ずバリデーションする、SQL インジェクション・XSS に注意

---

## セットアップ

```powershell
npm install
npm run dev   # http://localhost:5173
```

---

## 備考

- `.env` ファイルは `.gitignore` に必ず含める
- 依存パッケージの追加後も `package.json` / `lock` ファイルをコミット＆プッシュする
