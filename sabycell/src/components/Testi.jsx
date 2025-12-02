import React from 'react';

// Komponen Testi yang sudah dipisahkan
export default function Testi({ name, text }) {
    return (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-sm italic text-slate-700 dark:text-slate-300">"{text}"</div>
            <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">— {name}</div>
        </div>
    );
}
