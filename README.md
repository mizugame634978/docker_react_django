# Docker React Django

React + Django REST Framework を使用した Todo アプリケーション

## セットアップ

```bash
docker-compose up
```

- Frontend: http://localhost:5173
- Backend: http://localhost:8000

## API ドキュメント

バックエンドAPIのドキュメントは以下のURLで確認できます：

- **Swagger UI**: http://localhost:8000/api/docs/
  - インタラクティブにAPIをテスト可能
  - 各エンドポイントの詳細情報を確認
  - ブラウザから直接APIリクエストを送信

- **ReDoc**: http://localhost:8000/api/redoc/
  - 読みやすいドキュメント形式
  - APIの全体像を把握

- **OpenAPI Schema**: http://localhost:8000/api/schema/
  - JSON形式のAPIスキーマ
  - 他のツールとの連携に使用
