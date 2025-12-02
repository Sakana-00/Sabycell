import React from 'react';

// Komponen Card yang sudah dipisahkan
export default function Card({ title, subtitle, icon, onClick, isActive = false }) {
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