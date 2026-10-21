# آسیا فاکتور - نسخه ویندوز

## ساخت روی کامپیوتر ویندوز
1. Node.js (نسخه 20 به بالا) را نصب کنید.
2. در پوشه پروژه:
   npm install
   npm run build
3. فایل‌های نصب در پوشه `dist` ساخته می‌شوند:
   - AsiaFactor-1.0.0-nsis.exe  (نصب‌کننده)
   - AsiaFactor-1.0.0-portable.exe (بدون نیاز به نصب)

برای اجرای آزمایشی: `npm start`

## ساخت با GitHub Actions
پروژه را در یک ریپازیتوری بگذارید و push کنید (یا Actions → Build Windows App → Run workflow).
خروجی در بخش Artifacts به نام AsiaFactor-Windows قرار می‌گیرد.

## نکات
- کتابخانه‌های html2canvas و jsPDF داخل برنامه قرار می‌گیرند، پس برنامه بدون اینترنت هم کار می‌کند.
- آیکون: build/icon.ico (از تصویر شما ساخته شده)
- داده‌ها (localStorage) در پوشه کاربر ذخیره می‌شوند و با بستن برنامه پاک نمی‌شوند.
