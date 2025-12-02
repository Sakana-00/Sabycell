import React from 'react';

export default function TransactionForm({
    target,
    service,
    phone,
    note,
    selected,
    operator,
    message,
    currentProducts,
    onBuy,
    onPhoneChange,
    customAmount,      // Prop baru
    setCustomAmount,   // Prop baru
    setNote,
    setSelected,
    setTarget,
    getLabelText,
    getPlaceholderText,
    priceFormatted,
}) {
    return (
        <form onSubmit={onBuy} className="lg:col-span-2 p-6 sm:p-8 rounded-2xl shadow-2xl bg-white dark:bg-slate-900 border-t-4 border-purple-500 space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-xl font-extrabold text-purple-800 dark:text-purple-400">
                        Isi Detail Transaksi
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Layanan Aktif: <span className="font-bold text-purple-600 capitalize">{target}</span>
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setTarget(null)}
                    className="text-sm text-indigo-500 hover:text-indigo-700 font-semibold"
                >
                    &larr; Ganti Layanan
                </button>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">
                    {getLabelText()}
                </label>
                <div className="relative">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                        placeholder={getPlaceholderText()}
                        value={phone}
                        onChange={(e) => onPhoneChange(e.target.value)}
                        required
                    />
                    {operator && (service === 'pulsa' || service === 'data') && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-600 bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded">
                            {operator}
                        </span>
                    )}
                </div>
            </div>

            <div>
                {service === 'emoney' ? (
                    <div>
                        <label htmlFor="custom-amount" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                            Masukkan Nominal Top Up
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                                Rp
                            </span>
                            <input
                                type="number"
                                id="custom-amount"
                                name="custom-amount"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                className="w-full pl-8 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                                placeholder="Minimal 1.000"
                                min="1000"
                            />
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                            Total harga akan ditambahkan biaya admin Rp 2.000.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h3 className="text-md font-bold mb-3 text-slate-700 dark:text-slate-300">Pilih Nominal:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {currentProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => setSelected(product)}
                                    className={`p-3 rounded-lg border-2 cursor-pointer transition text-center ${selected?.id === product.id ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 ring-2 ring-purple-500' : 'border-slate-300 dark:border-slate-700 hover:border-purple-400'}`}
                                >
                                    <div className="font-bold text-slate-800 dark:text-slate-100">{product.label}</div>
                                    <div className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Rp {priceFormatted(product.price)}</div>
                                </div>
                            ))}
                        </div>
                        {currentProducts.length === 0 && service !== 'emoney' && (
                            <p className="text-sm text-center py-4 text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-lg">Tidak ada produk yang tersedia untuk pilihan ini.</p>
                        )}
                    </div>
                )}
            </div>

            <div>
                <label htmlFor="note" className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300">
                    Catatan untuk Admin (Opsional)
                </label>
                <input
                    type="text"
                    id="note"
                    name="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="Contoh: Kirim ke nomor kedua jika gagal" />
            </div>

            {message && <p className="text-sm text-center font-semibold text-red-500 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">{message}</p>}
            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed" disabled={(!selected && service !== 'emoney') || !phone}>
                Beli Sekarang
            </button>
        </form>
    );
}