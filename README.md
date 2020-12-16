
# Bài tập lớn Nhập môn Công nghệ phần mềm - Nhóm 18

## Ứng dụng web: Hệ thống quản lý kiến nghị, phản ánh  
- Với người dân, ứng dụng cho phép gửi kiến nghị và xem phản hồi dễ dàng, nhanh chóng 
- Với tổ trưởng, ứng dụng giúp tiếp nhận, giải quyết và phản hồi kiến nghị hiệu quả và nhanh chóng hơn, ngoài ra cho phép thống kê số lượng kiến nghị theo trạng thái giải quyết. 


## Mục lục
[1. Lý do chọn đề tài](#1-Lý-do-chọn-đề-tài)  
[2. Tính năng chính](#2-Tính-năng-chính)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.1. Đăng nhập](#21-Đăng-nhập)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.2. Gửi kiến nghị - phản ánh mới](#22-Gửi-kiến-nghị---phản-ánh-mới)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.3. Xem danh sách kiến nghị đã gửi](#23-Xem-danh-sách-kiến-nghị-đã-gửi)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.4. Xem phản hồi từ tổ trưởng](#24-Xem-phản-hồi-từ-tổ-trưởng)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.5. Phản hồi kiến nghị](#25-Phản-hồi-kiến-nghị)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2.6. Thống kê kiến nghị](#26-Thống-kê-kiến-nghị)   
[3. Hướng dẫn cài đặt](#3)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3-1 Cài đặt Node.js](#31-cài-đặt-nodejs)   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3.2 Cài đặt dependences](#32-tải-và-cài-đặt-các-dependences-cần-thiết)   
[4. Chạy chương trình](#4-chạy-chương-trình)

## 1. Lý do chọn đề tài  
Tại mỗi khu dân cư, tổ dân phố, hàng ngày đều có rất nhiều hoạt động sinh hoạt diễn ra, và trong đó sẽ xuất hiện những sự cố, bất cập (như vấn đề điện, nước, thu gom rác thải…). Khi đó, người dân sẽ gửi phản ánh, kiến nghị của mình với tổ trưởng tổ dân phố, và thường là gặp mặt trực tiếp trình bày để được giải quyết. Điều này làm mất thời gian, công sức của cả cư dân và tổ trưởng, và có thể không đảm bảo tính cấp bách của vấn đề. Bên cạnh đó, với những khu tổ dân phố có địa bàn rộng, dân cư đông, phức tạp (như có các sinh viên thuê trọ, các gia đình nơi khác đến thuê nhà làm kinh doanh dịch vụ…), việc quản lý cũng như giải quyết phản ánh, kiến nghị sẽ gặp nhiều khó khăn.  

## 2. Tính năng chính
### 2.1. Đăng nhập
Cho phép người dùng lựa chọn đăng nhập với tư cách "Người dân" hoặc "Tổ trưởng"
<p align="center">
  <img src="https://www.linkpicture.com/q/sign-in-user.png" width=800 alt="Màn hình Đăng nhập dành cho người dân"><br>
  Đăng nhập dành cho người dân<br><br>
</p>
<p align="center">
  <img src="https://www.linkpicture.com/q/sign-in-admin.png" width=800 alt="Màn hình Đăng nhập dành cho tổ trưởng"><br>
  Đăng nhập dành cho tổ trưởng<br><br>
</p>

### 2.2. Gửi kiến nghị - phản ánh mới
<p align="center">
  <img src="https://www.linkpicture.com/q/send-new-request.png" width=800 alt="Màn hình Gửi kiến nghị - phản ánh mới">
</p>

### 2.3. Xem danh sách kiến nghị đã gửi
<p align="center">
  <img src="https://www.linkpicture.com/q/list-request.png" width=800 alt="Màn hình Xem danh sách kiến nghị đã gửi">
</p>

### 2.4. Xem phản hồi từ tổ trưởng
<p align="center">
  <img src="https://www.linkpicture.com/q/feedback.png" width=800 alt="Màn hình xem phản hồi từ tổ trưởng">
</p>

### 2.5. Phản hồi kiến nghị
<p align="center">
  <img src="https://www.linkpicture.com/q/feedback-request.png" width=800 alt="Màn hình phản hồi kiến nghị">
</p>

### 2.6. Thống kê kiến nghị
<p align="center">
  <img src="https://www.linkpicture.com/q/statistic.png" width=800 alt="Màn hình Thống kê kiến nghị">
</p>

## 3. Hướng dẫn cài đặt
### 3.1. Cài đặt Node.js
Tải Node.js [tại đây](https://nodejs.org/en/download/) và tiến hành cài đặt

### 3.2. Tải và cài đặt các dependences cần thiết
Đơn giản chỉ cần gõ lệnh:  
```bash
npm install
```
## 4. Chạy chương trình
Gõ lệnh:
```bash
npm run start
```
Mở browser và truy cập vào http://localhost:8080/
