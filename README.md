# UD-TMDT

## Portfolio DOAN Industries

Website portfolio hư cấu của Thư Đoàn, nhà sáng lập và tổng giám đốc DOAN Industries. Dự án phục vụ mục đích giáo dục, được xây dựng bằng HTML, CSS và JavaScript thuần, có thể triển khai miễn phí bằng GitHub Pages.

## Chạy website trên máy

Mở `index.html` bằng trình duyệt hoặc dùng tiện ích **Live Server** trong VS Code. Dự án không cần cài gói hay chạy bước build.

## Cấu trúc dự án

```text
index.html
css/style.css
js/script.js
assets/
  images/
  icons/
```

## Tùy chỉnh website

- Chỉnh nội dung và đường dẫn ảnh trong `index.html`.
- Đổi màu sắc, khoảng cách và kiểu chữ trong `css/style.css`. Bảng màu được khai báo ở phần `:root` gần đầu file.
- Cách hoạt động của menu điện thoại nằm trong `js/script.js`.
- Ảnh minh họa hiện được tải từ Unsplash. Để thay ảnh, thêm ảnh của bạn vào `assets/images/` rồi cập nhật thuộc tính `src` thành đường dẫn tương đối, ví dụ `assets/images/chan-dung.jpg`. Ảnh được cắt vừa khung bằng `object-fit: cover`, không bị kéo méo.
- Website dùng font Be Vietnam Pro để hiển thị tiếng Việt rõ ràng; cần kết nối Internet để tải font từ Google Fonts.

## Đưa website lên GitHub Pages

Trong repository trên GitHub, mở **Settings → Pages**, chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó lưu. GitHub Pages sẽ xuất bản trang `index.html` ở thư mục gốc.

> Toàn bộ nhân vật, tổ chức, thành tựu, số liệu và dự án trên website này đều là hư cấu, được xây dựng phục vụ mục đích giáo dục.
