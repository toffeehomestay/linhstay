# Hướng dẫn ảnh dự án — SEO cơ bản

## Cách đặt tên file

Dùng chữ thường không dấu, ngăn cách bằng dấu gạch ngang. Tên nên mô tả đúng **địa điểm/thương hiệu + khu vực hoặc chủ thể ảnh**, không nhồi nhiều từ khoá.

Mẫu: `thuong-hieu-dia-diem-noi-dung-01.jpg`

Ví dụ tốt:

- `hotel-trung-gia-phat-phong-deluxe-01.jpg`
- `hotel-trung-gia-phat-khu-vuc-le-tan.jpg`
- `homestay-ha-noi-phong-ngu-ban-cong.jpg`
- `nha-hang-ha-noi-mon-an-sang.jpg`
- `san-pham-healthy-life-chai-nuoc-ep.jpg`

Tránh: `IMG_0281.jpg`, `anh-dep.jpg`, `hotel-photography-best-cheap-2026-final.jpg`.

## Định dạng và kích thước

- Dùng JPG chất lượng cao, nén trước khi tải lên.
- Ảnh ngang: khoảng 2400 px chiều rộng. Ảnh dọc: khoảng 1800 px chiều cao.
- Nén trước khi tải lên; cố gắng dưới 400 KB/ảnh, trừ khi ảnh cần chi tiết cao.
- Không dùng tên file có dấu tiếng Việt, khoảng trắng hoặc ký tự đặc biệt.

## Alt text

Alt mô tả nội dung ảnh tự nhiên, khác filename và không nhồi từ khoá.

Ví dụ: `Phòng Deluxe nhiều ánh sáng tự nhiên tại Hotel Trung Gia Phát`.

## Thay ảnh vào trang

1. Copy ảnh vào thư mục `dist/assets/`.
2. Dùng filename như trên.
3. Trong `du-an.html`, thay một ô `asset-slot` bằng ví dụ:

```html
<img src="assets/hotel-trung-gia-phat-phong-deluxe-01.jpg"
     alt="Phòng Deluxe nhiều ánh sáng tự nhiên tại Hotel Trung Gia Phát">
```

4. Đẩy thay đổi lên GitHub; Cloudflare Pages sẽ tự deploy lại.

