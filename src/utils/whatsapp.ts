export const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp aktif UMKM

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
