import React, { useState } from "react";

// --- PENGGUNAAN ASSET DI VITE (LOKAL) ---
const LOGO_URL = "/fafas.webp";
const ICON_PLACEHOLDER_BASE = 'https://placehold.co/48x48';


// Menggabungkan seluruh logika aplikasi ke dalam satu komponen utama bernama App
export default function App() {
  // States utama
  const [service, setService] = useState("pulsa");
  const [target, setTarget] = useState(null);
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("");
  const [selected, setSelected] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Catatan: Logika Dark Mode manual (isDarkMode state, toggleTheme, useEffect) telah dihapus.
  // Aplikasi sekarang mengandalkan fitur 'dark:' bawaan Tailwind CSS yang otomatis mengikuti preferensi OS.

  // Nomor WA Anda dalam format internasional
  const YOUR_WHATSAPP_NUMBER = "6285117265708";

  // Data Produk (Sama seperti sebelumnya)
  const allProducts = {
    pulsa: [
      { id: "p1", label: "Rp 5.000", price: 5200, target: "Telkomsel" },
      { id: "p2", label: "Rp 10.000", price: 10200, target: "Telkomsel" },
      { id: "p3", label: "Rp 25.000", price: 25200, target: "Telkomsel" },
      { id: "p4", label: "Rp 50.000", price: 50200, target: "Telkomsel" },

      { id: "p5", label: "Rp 5.000", price: 5300, target: "Indosat" },
      { id: "p6", label: "Rp 10.000", price: 10300, target: "Indosat" },
      { id: "p7", label: "Rp 25.000", price: 25300, target: "Indosat" },

      { id: "p8", label: "Rp 10.000", price: 10100, target: "XL/Axis" },
      { id: "p9", label: "Rp 25.000", price: 25100, target: "XL/Axis" },
    ],
    data: [
      { id: "d1", label: "1 GB (24 jam)", price: 8000, target: "Telkomsel" },
      { id: "d2", label: "3 GB (7 hari)", price: 20000, target: "Telkomsel" },
      { id: "d3", label: "1 GB (24 jam)", price: 7500, target: "Indosat" },
      { id: "d4", label: "10 GB (30 hari)", price: 65000, target: "Indosat" },
      { id: "d5", label: "5 GB (30 hari)", price: 35000, target: "XL/Axis" },
    ],
    emoney: [
      { id: "e1", label: "Rp 50.000", price: 50500, target: "DANA" },
      { id: "e2", label: "Rp 100.000", price: 100500, target: "DANA" },
      { id: "e3", label: "Rp 50.000", price: 51000, target: "OVO" },
      { id: "e4", label: "Rp 100.000", price: 101000, target: "OVO" },
      { id: "e5", label: "Rp 50.000", price: 50700, target: "GoPay" },
    ],
    games: [
      { id: "g1", label: "Diamond 50", price: 12000, target: "MLBB" },
      { id: "g2", label: "Diamond 100", price: 24000, target: "MLBB" },
      { id: "g3", label: "UC 80", price: 25000, target: "PUBG" },
      { id: "g4", label: "Genesis Crystal 300", price: 75000, target: "Genshin Impact" },
      { id: "g5", label: "Voucher 100k", price: 100000, target: "Free Fire" },
    ],
  };

  const serviceImageUrls = {
    pulsa: `/src/assets/pulsa2.webp`,
    data: `/src/assets/data.webp`,
    emoney: `/src/assets/emoney.webp`,
    games: `/src/assets/topup.webp`,
  };

  const serviceTargets = {
    pulsa: ['Telkomsel', 'Indosat', 'XL/Axis', 'Smartfren'],
    data: ['Telkomsel', 'Indosat', 'XL/Axis', 'Smartfren'],
    emoney: ['DANA', 'OVO', 'GoPay', 'LinkAja'],
    games: ['MLBB', 'PUBG', 'Genshin Impact', 'Free Fire'],
  };

  function priceFormatted(p) {
    return p.toLocaleString("id-ID");
  }

  function detectOperator(number) {
    const n = number.replace(/[^0-9]/g, "");
    if (!n) return "";
    if (/^08(11|12|13|14|21|22|23|51|52|53)/.test(n)) return "Telkomsel";
    if (/^08(15|16|55|56|57|58|9)/.test(n)) return "Indosat";
    if (/^08(17|18|19|59|7)/.test(n)) return "XL/Axis";
    if (/^088/.test(n)) return "Smartfren";
    return "Operator Lain";
  }

  function onPhoneChange(v) {
    setPhone(v);
    setSelected(null);
    setOperator(detectOperator(v));
  }

  const handleServiceChange = (newService) => {
    setService(newService);
    setTarget(null);
    setSelected(null);
    setPhone('');
    setOperator('');
  };

  const handleTargetChange = (newTarget) => {
    setTarget(newTarget);
    setSelected(null);
    if (service === 'pulsa' || service === 'data') {
      setOperator(newTarget);
    }
  };

  const currentProducts = allProducts[service]?.filter(p => p.target === target) || [];

  const getLabelText = () => {
    if (service === 'pulsa' || service === 'data') return "Nomor Handphone Tujuan";
    if (service === 'emoney') return "Nomor Akun / ID E-Money";
    return "ID Game / User ID Tujuan";
  };

  const getPlaceholderText = () => {
    if (service === 'pulsa' || service === 'data') return "Contoh: 08123456789";
    if (service === 'emoney') return "Contoh: 0812xxxxxx (Nomor Akun DANA/OVO/GoPay)";
    return "Contoh: 1234567 (User ID)";
  };

  async function onBuy(e) {
    e.preventDefault();

    if (!selected) {
      setMessage("Pilih nominal terlebih dahulu.");
      return;
    }

    if (!phone) {
      setMessage("Masukkan Nomor HP / ID tujuan.");
      return;
    }

    const serviceName = service.charAt(0).toUpperCase() + service.slice(1).replace('emoney', 'E-Money').replace('pulsa', 'Pulsa').replace('data', 'Paket Data').replace('games', 'Top Up Game');
    const itemDetail = selected.label;
    const cost = priceFormatted(selected.price);

    let textMessage = `*PESANAN BARU VIA WEBSITE TOP-UP*\n\n`;
    textMessage += `Kategori: ${serviceName}\n`;
    textMessage += `Target: ${target}\n`;
    textMessage += `Produk: ${itemDetail} (Rp ${cost})\n`;
    textMessage += `${getLabelText()}: ${phone}\n`;

    if (email) {
      textMessage += `Email/Catatan: ${email}\n`;
    }

    textMessage += `\n*Total Harga: Rp ${cost}*\n`;
    textMessage += `\nMohon diproses, Kak. Saya tunggu instruksi pembayarannya.`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodedMessage}`;

    setMessage("Mengarahkan ke WhatsApp untuk konfirmasi pesanan...");

    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setMessage("Pesanan Anda sudah dibuat. Silakan selesaikan transaksi di WhatsApp.");
    }, 500);
  }

  // --- Komponen Pembantu Card & Testi ---
  function Card({ title, subtitle, icon, onClick, isActive = false }) {
    const isImageUrl = icon && (icon.startsWith('http') || icon.startsWith('data:image') || icon.startsWith('/') || icon.startsWith('./'));
    const iconContent = isImageUrl ? (
      <img
        src={icon}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/48x48/6366F1/FFFFFF?text=X'; }}
      />
    ) : (
      icon || title[0]
    );

    return (
      <button
        className={`p-4 rounded-xl shadow-md transition duration-200 flex items-center gap-3 w-full text-left 
          ${isActive
            ? 'bg-indigo-50 border-2 border-indigo-600 dark:bg-slate-700 dark:border-indigo-400'
            : 'bg-white dark:bg-slate-800 border-2 border-transparent hover:shadow-lg dark:hover:bg-slate-700'}`
        }
        onClick={onClick}
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-md overflow-hidden">
          {iconContent}
        </div>
        <div className="text-slate-800 dark:text-slate-200">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</div>
        </div>
      </button>
    );
  }

  function Testi({ name, text }) {
    return (
      <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
        <div className="text-sm italic text-slate-700 dark:text-slate-300">"{text}"</div>
        <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">— {name}</div>
      </div>
    );
  }
  // ----------------------------------------

  const targetIcons = {
    'Telkomsel': '/src/assets/telkom.webp', 'Indosat': '/src/assets/indosat.webp', 'XL/Axis': '/src/assets/xl.webp', 'Smartfren': '/src/assets/smartfren.webp',
    'DANA': '💸', 'OVO': '🟣', 'GoPay': '🟢', 'LinkAja': '🔵',
    'MLBB': '⚔️', 'PUBG': '🔫', 'Genshin Impact': '✨', 'Free Fire': '🎮'
  };


  // --- Render Sub-Menu / Target Selection ---
  const TargetSelectionGrid = () => (
    <div className="p-6 sm:p-8 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 border-t-4 border-purple-500">
      <h2 className="text-xl font-extrabold text-purple-800 dark:text-purple-400 mb-2">
        <button
          onClick={() => handleServiceChange(service)}
          className="text-indigo-500 hover:text-indigo-700 mr-2 transition"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        Pilih {service.replace('emoney', 'E-Wallet').replace('pulsa', 'Operator').replace('data', 'Operator').replace('games', 'Game/Platform')}
      </h2>
      <p className="text-sm mb-6 text-slate-600 dark:text-slate-400">Layanan Aktif: <span className="font-extrabold text-purple-600 capitalize">{service.replace('emoney', 'E-Money').replace('pulsa', 'Pulsa').replace('data', 'Paket Data').replace('games', 'Top Up Game')}</span></p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {serviceTargets[service].map((t) => (
          <Card
            key={t}
            title={t}
            subtitle={`Layanan Top Up ${t}`}
            icon={targetIcons[t]}
            onClick={() => handleTargetChange(t)}
            isActive={target === t}
          />
        ))}
      </div>
    </div>
  );

  // --- Render Form Transaksi & Produk ---
  const TransactionForm = () => (
    <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 border-t-4 border-indigo-500">
      <h1 className="text-2xl font-extrabold text-indigo-800 dark:text-indigo-400 mb-2">
        <button
          onClick={() => setTarget(null)}
          className="text-indigo-500 hover:text-indigo-700 mr-2 transition text-lg"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        Detail Pembelian ({target})
      </h1>
      <p className={`text-sm mb-6 font-medium text-slate-600 dark:text-slate-400`}>
        Kategori: <span className="font-extrabold text-indigo-600 capitalize">{service.replace('emoney', 'E-Money').replace('pulsa', 'Pulsa').replace('data', 'Paket Data').replace('games', 'Top Up Game')}</span> | Target: <span className="font-extrabold text-indigo-600">{target}</span>
      </p>

      <form onSubmit={onBuy} className="space-y-6">

        {/* Input Nomor/ID */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
            {getLabelText()}
          </label>
          <input
            id="phone"
            type="text"
            inputMode="numeric"
            className="w-full rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3 transition shadow-inner"
            placeholder={getPlaceholderText()}
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value.replace(/[^0-9]/g, ''))}
            required
          />
          {(service === 'pulsa' || service === 'data') && phone && (
            <div className="text-xs mt-2 p-2 rounded bg-indigo-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-indigo-100 dark:border-slate-700">
              {operator !== target
                ? <span className="text-red-600 font-bold">⚠️ Operator tidak sesuai dengan target yang dipilih ({target})</span>
                : `Deteksi Operator: ${operator}`
              }
            </div>
          )}
        </div>

        {/* Daftar Produk */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Pilih Nominal / Produk</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentProducts.length > 0 ? (
              currentProducts.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p)}
                  className={`text-left p-4 rounded-xl border-2 transition duration-150 shadow-sm
                    ${selected?.id === p.id
                      ? "border-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 ring-2 ring-indigo-300 dark:ring-indigo-700"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                    }`}
                >
                  <div className="text-base font-bold text-slate-800 dark:text-slate-200">{p.label}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Harga: <span className="font-extrabold text-green-700 dark:text-green-500">Rp {priceFormatted(p.price)}</span>
                  </div>
                </button>
              ))
            ) : (
              <div className="col-span-full p-4 text-center bg-yellow-100 dark:bg-yellow-900/50 rounded-lg text-yellow-800 dark:text-yellow-300">
                Produk untuk **{target}** saat ini tidak tersedia. Silakan pilih target lain.
              </div>
            )}
          </div>
        </div>

        {/* Input Email/Catatan (Opsional) */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Catatan Tambahan (Opsional)
          </label>
          <input
            id="email"
            type="text"
            className="w-full rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3 transition shadow-inner"
            placeholder="Contoh: ID Customer / Catatan untuk Admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Tombol Beli & Total Harga */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-base font-bold text-slate-800 dark:text-slate-200 md:w-1/2 w-full">
            Total Bayar: <br className="md:hidden" />
            <span className="text-3xl font-extrabold text-red-600 dark:text-red-400 ml-1">Rp {priceFormatted(selected?.price || 0)}</span>
          </div>
          <button
            type="submit"
            disabled={!selected || !phone}
            className={`md:w-1/2 w-full px-6 py-3 rounded-full font-extrabold text-lg transition duration-200 shadow-xl 
              ${!selected || !phone
                ? "bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white shadow-green-500/50 transform hover:scale-[1.02]"
              }`}
          >
            <i className="fab fa-whatsapp mr-2"></i> Konfirmasi & Bayar
          </button>
        </div>

        {/* Message Box */}
        {message && (
          <div className={`text-sm p-4 rounded-xl mt-4 border font-medium transition duration-300 
            ${message.includes('selesai')
              ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800'
              : 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-800 animate-pulse'}`}>
            {message}
          </div>
        )}

        <div className="mt-6 text-xs text-slate-500 dark:text-slate-400 border-t dark:border-slate-700 pt-4">
          *Pastikan {getLabelText()} dan Target ({target}) sudah benar.
        </div>
      </form>
    </div>
  );


  // Render utama
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md dark:shadow-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="/fafas.webp"
                alt="TopPay Logo"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/4F46E5/FFFFFF?text=TP'; }}
              />
            </div>
            <div>
              <div className="text-xl font-extrabold text-indigo-700 dark:text-indigo-400">TopPay</div>
              <div className="text-xs text-slate-500 hidden sm:block">Pulsa • Data • E-Money • Top up Game</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            {/* TOMBOL TOGGLE DARK MODE DENGAN LOGIKA MANUAL SUDAH DIHAPUS DARI SINI */}

            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition font-medium">Beranda</a>
            <a href={`https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm transition shadow-lg shadow-green-500/30 font-bold">
              <i className="fab fa-whatsapp mr-1"></i> Chat Admin
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* Kategori Produk */}
        <section className="mb-12">
          <h3 className="text-2xl font-extrabold mb-6 text-center text-indigo-800 dark:text-indigo-400">Pilih Kategori Layanan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="Pulsa" subtitle="Isi ulang instan" icon={serviceImageUrls.pulsa} onClick={() => handleServiceChange('pulsa')} isActive={service === 'pulsa'} />
            <Card title="Paket Data" subtitle="Internet harian/bulanan" icon={serviceImageUrls.data} onClick={() => handleServiceChange('data')} isActive={service === 'data'} />
            <Card title="E-Money" subtitle="Dana, Ovo, GoPay" icon={serviceImageUrls.emoney} onClick={() => handleServiceChange('emoney')} isActive={service === 'emoney'} />
            <Card title="Top Up Game" subtitle="Diamond, UC, Voucher" icon={serviceImageUrls.games} onClick={() => handleServiceChange('games')} isActive={service === 'games'} />
          </div>
        </section>

        {/* Transaction Flow */}
        <section className="grid lg:grid-cols-3 gap-8 py-4">

          {/* Kolom Kiri: Target Selection / Transaction Form */}
          {target === null ? (
            <div className="lg:col-span-3">
              <TargetSelectionGrid />
            </div>
          ) : (
            <>
              {/* Form Tampil jika Target sudah dipilih */}
              <TransactionForm />

              {/* Keunggulan & Info - Kolom Kanan */}
              <div className="lg:col-span-1 p-6 sm:p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 space-y-6 self-start">
                <h2 className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400 border-b pb-3 border-indigo-200 dark:border-slate-700">Keunggulan TopPay</h2>
                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3"><span className="text-2xl text-indigo-600">🔒</span><div><span className="font-bold">Aman via WhatsApp.</span> Transaksi langsung dengan Admin.</div></li>
                  <li className="flex gap-3"><span className="text-2xl text-purple-600">💰</span><div><span className="font-bold">Harga Terbaik.</span> Harga jujur, terjangkau, dan transparan.</div></li>
                  <li className="flex gap-3"><span className="text-2xl text-yellow-600">💳</span><div><span className="font-bold">Banyak Metode Bayar.</span> Tersedia QRIS, E-Wallet.</div></li>
                </ul>
              </div>
            </>
          )}
        </section>

        {/* Testimoni */}
        <section className="py-12">
          <h3 className="text-2xl font-extrabold mb-8 text-center text-indigo-800 dark:text-indigo-400">Ulasan Pelanggan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Testi name="Sakana." text="Belum ada ulasan! jika anda ingin memberikan ulasan bisa chat atau kirim email ke admin ya termiakasih!" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-6xl mx-auto px-4">
          <div>
            <div className="font-extrabold text-xl text-indigo-700 dark:text-indigo-400">TopPay</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Layanan Top-Up Terpercaya.</div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-3">© 2025 TopPay. Hak Cipta Dilindungi.</div>
          </div>

          <div className="mt-6 md:mt-0 text-sm text-slate-500 dark:text-slate-400 space-y-2 md:text-right">
            <a href="#" className="block hover:text-indigo-600 transition">Kebijakan Privasi</a>
            <a href="#" className="block hover:text-indigo-600 transition">Syarat & Ketentuan</a>
            <a href={`https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block text-green-600 font-semibold hover:text-green-800 transition">Hubungi Admin ({YOUR_WHATSAPP_NUMBER})</a>
          </div>
        </div>
      </footer>
    </div>
  );
}