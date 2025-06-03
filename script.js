const text = `Sayangku,

Kamu mungkin lebih dulu dewasa dariku, lebih jauh melangkah dalam hidup. Tapi sejak aku mengenalmu, aku tahu… hatimu jauh lebih muda dari usiamu, dan cintamu jauh lebih besar dari apa pun yang pernah aku bayangkan.

Aku tahu jalan kita tidak selalu mudah. Ada banyak hal yang masih harus aku kejar, masih banyak hal yang belum bisa aku berikan. Tapi kamu… kamu tetap di sana. Memilih menunggu. Memilih percaya.

Aku kagum padamu — atas kesabaranmu, atas keteguhanmu, dan atas cintamu yang tak pernah lelah menuntunku untuk tumbuh.

Setiap hari bersamamu membuatku ingin menjadi lebih baik, bukan karena kamu memaksa… tapi karena aku ingin pantas berdiri di sampingmu, suatu hari nanti — sebagai pasangan hidupmu.

Terima kasih karena memilih menungguku, bukan karena kamu tidak punya pilihan… tapi karena kamu yakin, bahwa aku adalah tujuan.

Aku tahu belum bisa membalas semuanya sekarang, tapi aku janji… suatu hari nanti, aku akan genggam tanganmu di pelaminan, dan mengatakan: “Ini adalah jawaban dari semua kesabaran dan cintamu.”

Aku mencintaimu dengan segenap hati, dan aku akan terus berjuang, hingga waktunya tiba. Dan saat hari itu datang… kamu tak perlu menunggu lagi, karena aku akan menetap — bersamamu. Selamanya.`;

let index = 0;
const speed = 35;
const typedText = document.getElementById('typed-text');

function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
