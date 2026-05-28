# cell-architecture

Nền tảng học liệu 3D tương tác (Sinh học — tế bào) với gallery công khai và trang quản trị.

## Cấu trúc monorepo

| Thư mục | Mô tả |
|---------|--------|
| [`cell-architecture-studio/`](cell-architecture-studio/) | Frontend — React 19, Vite, Three.js, admin user |
| [`cell-architecture-backend/`](cell-architecture-backend/) | Backend — Spring Boot 3, JWT, MySQL, API `:7070` |

## Chạy nhanh

### Backend

```bash
cd cell-architecture-backend
copy .env.example .env
gradlew.bat bootRun
```

API: `http://localhost:7070/api/v1`

### Frontend

```bash
cd cell-architecture-studio
copy .env.example .env
npm install
npm run dev
```

Mặc định FE gọi API qua `VITE_API_URL=http://localhost:7070/api/v1`.

## Tài liệu

- FE: `cell-architecture-studio/docs/REVIEW.html`, `docs/STRUCTURE.md`, `docs/ASSETS.md`
- FE (review pack mới): `cell-architecture-studio/docs/review/README.md`
- BE: `cell-architecture-backend/README.md`

## License

MIT (xem từng package nếu có khác biệt).
