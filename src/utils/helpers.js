export const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const generateWalink = (productName = "") => {
  const phone = "6281923147651";
  const message = productName
    ? `Halo Men Parfume, saya tertarik untuk memesan parfume ${productName}. Apakah stok tersedia?`
    : `Halo Men Parfume, saya ingin konsultasi mengenai varian parfume yang cocok untuk saya.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
