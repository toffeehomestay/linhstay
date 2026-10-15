# Hướng dẫn tải ảnh lên GitHub — SEO cơ bản

## 1. Quy tắc đặt tên file

Dùng chữ thường không dấu, ngăn cách bằng dấu gạch ngang. Tên nên mô tả đúng **thương hiệu + địa điểm + khu vực/chủ thể ảnh**. Không nhồi từ khoá.

Mẫu: `thuong-hieu-dia-diem-noi-dung-01.jpg`

Ví dụ tốt:

- `hotel-trung-gia-phat-ha-noi-phong-deluxe-01.jpg`
- `hotel-trung-gia-phat-ha-noi-phong-tam-01.jpg`
- `homestay-sapa-phong-ngu-ban-cong-01.jpg`
- `nha-hang-ha-noi-mon-an-sang-01.jpg`
- `san-pham-healthy-life-chai-nuoc-ep-01.jpg`

Tránh: `IMG_0281.jpg`, `anh-dep.jpg`, `hotel-photography-best-cheap-2026-final.jpg`.

## 2. Định dạng và kích thước

- Dùng JPG chất lượng cao, nén trước khi tải lên.
- Ảnh ngang: khoảng 2400 px chiều rộng. Ảnh dọc: khoảng 1800 px chiều cao.
- Cố gắng dưới 400 KB/ảnh, trừ khi ảnh cần chi tiết cao.
- Không dùng tên file có dấu tiếng Việt, khoảng trắng hoặc ký tự đặc biệt.

## 3. Trang dịch vụ chụp ảnh phòng

Ảnh cho trang này nằm trong `dist/assets/`, sau đó được gọi bằng đường dẫn `../assets/` trong file:

`dist/dich-vu/chup-anh-khach-san-homestay.html`

Các ô ảnh trên trang hiện là placeholder. Khi có ảnh thật, thay đúng ô theo tên bên dưới và đổi thẻ `<div class="photo-slot">...</div>` thành thẻ `<img>`.

| Vị trí trên trang | Filename nên dùng | Nội dung ảnh | Kích thước gợi ý |
| --- | --- | --- | --- |
| 01 / Ảnh mở đầu — ảnh hero | `thuong-hieu-dia-diem-phong-deluxe-hero-01.jpg` | Phòng đẹp nhất, bố cục rộng | 2400 × 1350 px |
| 01 / Ảnh mở đầu — chi tiết | `thuong-hieu-dia-diem-tien-nghi-phong-01.jpg` | Giường, amenities hoặc chi tiết phòng | 1600 × 1200 px |
| 01 / Ảnh mở đầu — không gian chung | `thuong-hieu-dia-diem-sanh-hoac-view-01.jpg` | Sảnh, bếp, nhà hàng hoặc view | 1600 × 1200 px |
| 04 / Dự án 01 | `thuong-hieu-dia-diem-phong-ngu-01.jpg` | Phòng ngủ / hạng phòng | 1600 × 1200 px |
| 04 / Dự án 02 | `thuong-hieu-dia-diem-phong-tam-01.jpg` | Phòng tắm | 1600 × 1200 px |
| 04 / Dự án 03 | `thuong-hieu-dia-diem-ban-cong-view-01.jpg` | Ban công hoặc view | 1600 × 1200 px |
| 04 / Dự án 04 | `thuong-hieu-dia-diem-sanh-01.jpg` | Sảnh / không gian chung | 1600 × 1200 px |
| 04 / Dự án 05 | `thuong-hieu-dia-diem-tien-ich-01.jpg` | Bể bơi, breakfast, spa, bếp... | 1600 × 1200 px |
| 04 / Dự án 06 | `thuong-hieu-dia-diem-ngoai-canh-01.jpg` | Mặt tiền / cảnh quan | 1600 × 1200 px |

Ví dụ, với ảnh `hotel-trung-gia-phat-ha-noi-phong-deluxe-01.jpg`, thay placeholder tương ứng bằng:

```html
<img src="../assets/hotel-trung-gia-phat-ha-noi-phong-deluxe-01.jpg"
     alt="Phòng Deluxe nhiều ánh sáng tự nhiên tại Hotel Trung Gia Phát, Hà Nội">
```

## 4. Alt text

Alt mô tả nội dung ảnh tự nhiên, khác filename và không nhồi từ khoá.

Ví dụ: `Phòng Deluxe nhiều ánh sáng tự nhiên tại Hotel Trung Gia Phát, Hà Nội`.

## 5. Cách tải lên GitHub

1. Trong repo GitHub, mở thư mục `dist/assets/`.
2. Chọn **Add file** → **Upload files**.
3. Kéo ảnh JPG vào, kiểm tra tên file trước khi commit.
4. Chọn **Commit changes** vào nhánh `main`.
5. Cloudflare Pages tự deploy. Sau đó nhắn mình tên file; mình sẽ thay placeholder bằng ảnh và thêm alt text đúng vị trí.

