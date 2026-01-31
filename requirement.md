Spec Bisnis, Desain, Teknis, Data

Buatkan saya website berbasis ReactJs terbaru dengan vite versi javascript untuk brand parfume bernama "Men Parfume" dimana dia menyediakan produk parfume yang beda dari yang lain dan mempunyai karakter. Dalam website ini atau landing page ini gunakan copywriting yang baik sehingga bisa menarik konsumen dalam mengklik tombol beli.

Dalam prinsipnya gunakan teknik AIDA.

Gunakan flat desaign dalam css di web ini dengan basic warna {coklat dan turunannya} dengan color pallete yang sesuai. Gunakan icon dari fontawesome, jangan gunakan emoji web.

Dalam struktur web ini gunakan section seperti:

- Hero
- Why
- Product List
- CTA (Tombol ini mengarah ke prefill text whatsapp ke nomor 081923147651)
- Social Proof
- Dan section lain yang relevan dalam konsep AIDA.
Catatan: Jangan terlalu banyak section sehingga membuat orang lama berfikir, mungkin max 6 saja.

Pada produk list silahkan consume data dari Contentful CMS, gunakan library contentful yang sudah proven, jangan membuat fetch sendiri. GUnakan credentials:

- Spaces ID t14ak2yf7cm9
- Access Token bmOg17Ja29GheyUNIFx-4cvJhRPnArasrXVea73leQc
- Content Type "studiKasusDevHandal2026Parfumes"

Field yang digunakan dalam consume API ini adalah:
- name
- description
- price
- category
- image
- featured

jangan ambil field lain karena tidak ada, ikuti yang tertulis saja.