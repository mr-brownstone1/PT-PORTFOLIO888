# SPP UX Portfolio

Portfolio site (Next.js + Tailwind). Layout: sidebar + main content.

## รันโปรเจกต์

```bash
npm install
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## ถ้าเจอ Internal Server Error (500)

1. **ดู error ในเทอร์มินัล** — ตอนที่เปิด localhost:3000 ดูที่หน้าต่างที่รัน `npm run dev` ว่ามีข้อความ error สีแดงหรือ stack trace ขึ้นหรือไม่
2. **ลองรันแบบไม่ใช้ Turbopack** — ถ้ารัน `npm run dev` แล้วยัง 500 ให้ลอง:
   ```bash
   npm run dev:turbo
   ```
   หรือในทางกลับกัน ถ้าใช้ `dev:turbo` อยู่แล้ว ให้ลองใช้ `npm run dev`
3. **Patch เรื่อง network** — โปรเจกต์มี patch สำหรับ Next.js เพื่อไม่ให้ crash ตอนเริ่มเซิร์ฟเวอร์ในบางเครื่อง หลัง `npm install` จะรัน `patch-package` อัตโนมัติ

## สคริปต์

- `npm run dev` — รัน dev server (ไม่ใช้ Turbopack)
- `npm run dev:turbo` — รัน dev พร้อม Turbopack
- `npm run build` — build สำหรับ production
- `npm run start` — รัน production server
