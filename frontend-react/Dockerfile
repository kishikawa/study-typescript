#Dockerfile

# ベースイメージの指定
FROM node:20-slim

# コンテナ内の作業ディレクトリ
WORKDIR /app

# パッケージ管理ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションソースをコピー（開発時はマウントするので、これは主に初期化用）
COPY . .

# Vite のデフォルトポートを開放
EXPOSE 5173

# 開発サーバーの起動
CMD ["npm", "run", "dev"]