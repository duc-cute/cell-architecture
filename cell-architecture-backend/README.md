# Cell Architecture Studio — Backend API

Backend Spring Boot phục vụ **Cell Architecture Studio** (frontend): xác thực JWT, quản trị người dùng, upload file. **Không** có module email/mailer.

## Chạy nhanh

- Cổng mặc định: **7070** (base API: `http://localhost:7070/api/v1`)
- MySQL: database `cell_architecture` (xem `.env.example`)
- Lưu file: `STORAGE_LOCATION` (mặc định `C:/DucNguyen/cell-architecture-storage`)

```bash
# Windows
gradlew.bat bootRun

# Hoặc build
gradlew.bat compileJava
```

## API chính (giữ cho FE)

- `AuthController` — đăng ký, đăng nhập, refresh token, đổi mật khẩu
- `UserController` — CRUD người dùng (admin)
- `FileController` — upload / phục vụ file tĩnh

## Cấu hình

Sao chép `.env.example` thành `.env` (hoặc export biến môi trường) cho `DB_*`, `JWT_SECRET`, `STORAGE_*`.

Package Java: `com.cellarchitecture.api` — lớp chính: `CellArchitectureApplication`.
