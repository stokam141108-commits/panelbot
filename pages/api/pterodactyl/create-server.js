import fs from 'fs';
import path from 'path';

// Fungsi untuk membaca konfigurasi Pterodactyl dari environment variables
function getPterodactylConfig() {
  // const filePath = path.resolve('.', 'data/pterodactyl-config.json'); // Tidak digunakan lagi
  try {
    // const jsonData = fs.readFileSync(filePath, 'utf-8'); // Tidak digunakan lagi
    // return JSON.parse(jsonData); // Tidak digunakan lagi
    return {
      pterodactylDomain: process.env.PTERO_PANEL_URL || "panz.xyzraa.biz.id",
      pterodactylApiKeyPTLA: process.env.PTLA_API_KEY || "ptla_8nuYzBlXmnCBdOVOsPWg5cYI4sQpNhUZDDzNJXaUrQc", // Gunakan API key asli
      pterodactylApiKeyPTLC: process.env.PTLC_API_KEY || "ptlc_nh3M6lA7jmsHgaGms4GLmtkVzgTdQWrlPLHRNBQeJXj", // Gunakan API key asli
      defaultLocationId: process.env.DEFAULT_LOCATION_ID || "1",
      defaultEggId: process.env.DEFAULT_EGG_ID || "15",
      defaultNestId: process.env.DEFAULT_NEST_ID || "5",
      apiWrapperUrl: process.env.WRAPPER_API_URL || ""
    };
  } catch (error) {
    console.error("[API Route - Create Server] Error preparing Pterodactyl config from environment variables:", error);
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader('Allow', []); // Tidak ada method yang diizinkan
  res.status(405).json({ 
    error: true, 
    message: 'Endpoint ini tidak lagi digunakan secara langsung. Pembuatan server dilakukan setelah pembayaran berhasil melalui alur yang ditentukan.' 
  });
} 
