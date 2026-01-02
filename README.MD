## Anggota Kelompok 
  - Nama Anggota Kelompok (NPM)
  - Nama Anggota Kelompok (NPM)
  - Nama Anggota Kelompok (NPM)


# Cloud Notes Application

Cloud Notes adalah aplikasi **berbasis cloud** sederhana untuk menyimpan, menampilkan, dan menghapus catatan.  
Aplikasi ini dibangun menggunakan **arsitektur serverless AWS** sebagai bagian dari tugas proyek mata kuliah Cloud Computing.

---
## link Access ✅
  - http://note-cloud-app.s3-website-us-east-1.amazonaws.com/
---

## 📌 Tujuan Proyek
- Mengimplementasikan aplikasi berbasis cloud
- Mengintegrasikan minimal **3 layanan cloud AWS**
- Melakukan deployment, monitoring, dan dokumentasi sistem
- Menyediakan demo aplikasi dan presentasi

---

## ☁️ Layanan Cloud yang Digunakan

| Layanan AWS | Fungsi |
|------------|--------|
| Amazon API Gateway | REST API endpoint |
| AWS Lambda | Backend logic (serverless) |
| Amazon DynamoDB | Database NoSQL |
| Amazon S3 | Hosting frontend statis |

---

## 🏗️ Arsitektur Sistem

Alur sistem:
1. User mengakses aplikasi frontend (HTML + JavaScript)
2. Frontend mengirim request ke API Gateway
3. API Gateway meneruskan request ke AWS Lambda
4. Lambda memproses logika dan mengakses DynamoDB
5. Data dikembalikan ke frontend

Diagram arsitektur tersedia di folder:
