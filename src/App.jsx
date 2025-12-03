import React, { useState } from "react";
import Card from './components/Card';
import TransactionForm from "./components/TransactionForm";

import logoUrl from './assets/fafas.webp';
import pulsaImg from './assets/pulsa2.webp';
import dataImg from './assets/data.webp';
import emoneyImg from './assets/emoney.webp';
import gamesImg from './assets/topup.webp';
import telkomImg from './assets/telkom.webp';
import indosatImg from './assets/indosat.webp';
import xlImg from './assets/xl.webp';
import smartfrenImg from './assets/smartfren.webp';
import danaImg from './assets/dana.webp';
import ovoImg from './assets/ovo.webp';
import gopayImg from './assets/gopay.webp';
import shopepayImg from './assets/shopepay.webp';
import mlbbImg from './assets/mlbb.webp';
import pubgImg from './assets/pubg.webp';
import genshinImg from './assets/genshin.webp';
import ffImg from './assets/frefire.webp';
import datagameImg from './assets/datagame.webp';
import datasosmedImg from './assets/datasosmed.webp';

export default function App() {
  const [service, setService] = useState("pulsa");
  const [target, setTarget] = useState(null);
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("");
  const [selected, setSelected] = useState(null);
  const [packageType, setPackageType] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState("");

  const YOUR_WHATSAPP_NUMBER = "6285117265708";

  const allProducts = {
    pulsa: [
      // Telkomsel
      { id: "p1", label: "Rp 5.000", price: 8000, target: "Telkomsel" },
      { id: "p2", label: "Rp 10.000", price: 13000, target: "Telkomsel" },
      { id: "p3", label: "Rp 15.000", price: 18000, target: "Telkomsel" },
      { id: "p4", label: "Rp 20.000", price: 23000, target: "Telkomsel" },
      { id: "p5", label: "Rp 25.000", price: 28000, target: "Telkomsel" },
      { id: "p6", label: "Rp 30.000", price: 33000, target: "Telkomsel" },
      { id: "p7", label: "Rp 35.000", price: 38000, target: "Telkomsel" },
      { id: "p8", label: "Rp 40.000", price: 43000, target: "Telkomsel" },
      { id: "p9", label: "Rp 45.000", price: 48000, target: "Telkomsel" },
      { id: "p10", label: "Rp 53.000", price: 53000, target: "Telkomsel" },
      // Indosat
      { id: "p11", label: "Rp 5.000", price: 8000, target: "Indosat" },
      { id: "p12", label: "Rp 10.000", price: 13000, target: "Indosat" },
      { id: "p13", label: "Rp 12.000", price: 15000, target: "Indosat" },
      { id: "p14", label: "Rp 15.000", price: 18000, target: "Indosat" },
      { id: "p15", label: "Rp 20.000", price: 23000, target: "Indosat" },
      { id: "p16", label: "Rp 25.000", price: 28000, target: "Indosat" },
      { id: "p17", label: "Rp 30.000", price: 33000, target: "Indosat" },
      { id: "p18", label: "Rp 40.000", price: 43000, target: "Indosat" },
      { id: "p19", label: "Rp 50.000", price: 53000, target: "Indosat" },
      // XL/Axis
      { id: "p20", label: "Rp 5.000", price: 8000, target: "XL/Axis" },
      { id: "p21", label: "Rp 10.000", price: 13000, target: "XL/Axis" },
      { id: "p22", label: "Rp 12.000", price: 15000, target: "XL/Axis" },
      { id: "p23", label: "Rp 15.000", price: 18000, target: "XL/Axis" },
      { id: "p24", label: "Rp 20.000", price: 23000, target: "XL/Axis" },
      { id: "p25", label: "Rp 25.000", price: 28000, target: "XL/Axis" },
      { id: "p26", label: "Rp 30.000", price: 33000, target: "XL/Axis" },
      { id: "p27", label: "Rp 40.000", price: 43000, target: "XL/Axis" },
      { id: "p28", label: "Rp 50.000", price: 53000, target: "XL/Axis" },
      // Smartfren
      { id: "p29", label: "Rp 5.000", price: 8000, target: "Smartfren" },
      { id: "p30", label: "Rp 10.000", price: 13000, target: "Smartfren" },
      { id: "p33", label: "Rp 15.000", price: 18000, target: "Smartfren" },
      { id: "p34", label: "Rp 20.000", price: 23000, target: "Smartfren" },
      { id: "p35", label: "Rp 25.000", price: 28000, target: "Smartfren" },
      { id: "p36", label: "Rp 30.000", price: 33000, target: "Smartfren" },
      { id: "p37", label: "Rp 35.000", price: 38000, target: "Smartfren" },
      { id: "p38", label: "Rp 40.000", price: 43000, target: "Smartfren" },
      { id: "p39", label: "Rp 45.000", price: 48000, target: "Smartfren" },
      { id: "p40", label: "Rp 53.000", price: 53000, target: "Smartfren" },
    ],

    data: [

      // Telkomsel
      { id: "d1", label: "1GB 1 HARI", price: 8000, target: "Telkomsel", type: "harian" },
      { id: "d2", label: "3GB 1 HARI", price: 14000, target: "Telkomsel", type: "harian" },
      { id: "d3", label: "6GB 1 HARI", price: 24000, target: "Telkomsel", type: "harian" },
      { id: "d4", label: "1GB 3 HARI", price: 11000, target: "Telkomsel", type: "harian" },
      { id: "d5", label: "2GB 3 HARI", price: 14000, target: "Telkomsel", type: "harian" },
      { id: "d6", label: "3GB 3 HARI", price: 28000, target: "Telkomsel", type: "harian" },
      { id: "d7", label: "1GB 7 HARI", price: 14000, target: "Telkomsel", type: "harian" },
      { id: "d8", label: "3GB 7 HARI", price: 24000, target: "Telkomsel", type: "harian" },
      { id: "d9", label: "5GB 7 HARI", price: 28000, target: "Telkomsel", type: "harian" },

      { id: "d13", label: "1GB 30 HARI", price: 14000, target: "Telkomsel", type: "bulanan" },
      { id: "d14", label: "2GB 30 HARI", price: 24000, target: "Telkomsel", type: "bulanan" },
      { id: "d15", label: "3GB 30 HARI", price: 26000, target: "Telkomsel", type: "bulanan" },
      { id: "d16", label: "5GB 30 HARI", price: 38000, target: "Telkomsel", type: "bulanan" },
      { id: "d17", label: "6GB 30 HARI", price: 44000, target: "Telkomsel", type: "bulanan" },
      { id: "d18", label: "7GB 30 HARI", price: 48000, target: "Telkomsel", type: "bulanan" },
      { id: "d19", label: "8GB 30 HARI", price: 52000, target: "Telkomsel", type: "bulanan" },

      // Indosat
      { id: "di1", label: "1.5GB 1 HARI", price: 8000, target: "Indosat", type: "harian" },
      { id: "di2", label: "2GB 1 HARI", price: 9000, target: "Indosat", type: "harian" },
      { id: "di3", label: "3GB 1 HARI", price: 10000, target: "Indosat", type: "harian" },
      { id: "di4", label: "5GB 1 HARI", price: 11000, target: "Indosat", type: "harian" },
      { id: "di5", label: "1GB 2 HARI", price: 8000, target: "Indosat", type: "harian" },
      { id: "di6", label: "15GB 3 HARI", price: 30000, target: "Indosat", type: "harian" },
      { id: "di7", label: "8GB 4 HARI", price: 20000, target: "Indosat", type: "harian" },
      { id: "di8", label: "1.5GB 5 HARI", price: 10000, target: "Indosat", type: "harian" },
      { id: "di9", label: "2GB 5 HARI", price: 14000, target: "Indosat", type: "harian" },
      { id: "di10", label: "2.5GB 5 HARI", price: 15000, target: "Indosat", type: "harian" },
      { id: "di11", label: "3GB 5 HARI", price: 16000, target: "Indosat", type: "harian" },
      { id: "di12", label: "3.5GB 5 HARI", price: 17000, target: "Indosat", type: "harian" },
      { id: "di13", label: "4GB 5 HARI", price: 18000, target: "Indosat", type: "harian" },
      { id: "di14", label: "5GB 5 HARI", price: 20000, target: "Indosat", type: "harian" },
      { id: "di15", label: "8GB 5 HARI", price: 26000, target: "Indosat", type: "harian" },
      { id: "di16", label: "9GB 5 HARI", price: 34000, target: "Indosat", type: "harian" },
      { id: "di17", label: "10GB 5 HARI", price: 35000, target: "Indosat", type: "harian" },
      { id: "di18", label: "1GB 7 HARI", price: 7000, target: "Indosat", type: "harian" },
      { id: "di19", label: "3GB 7 HARI", price: 15000, target: "Indosat", type: "harian" },
      { id: "di20", label: "5GB 7 HARI", price: 16000, target: "Indosat", type: "harian" },
      { id: "di21", label: "7GB 7 HARI", price: 26000, target: "Indosat", type: "harian" },
      { id: "di22", label: "12GB 7 HARI", price: 35000, target: "Indosat", type: "harian" },
      { id: "di23", label: "15GB 7 HARI", price: 31000, target: "Indosat", type: "harian" },
      { id: "di24", label: "2GB 15 HARI", price: 23000, target: "Indosat", type: "harian" },

      { id: "di25", label: "3GB 30 HARI", price: 20000, target: "Indosat", type: "bulanan" },
      { id: "di26", label: "4GB 30 HARI", price: 25000, target: "Indosat", type: "bulanan" },
      { id: "di27", label: "5GB 30 HARI", price: 30000, target: "Indosat", type: "bulanan" },
      { id: "di28", label: "6GB 30 HARI", price: 34000, target: "Indosat", type: "bulanan" },
      { id: "di29", label: "7GB 30 HARI", price: 40000, target: "Indosat", type: "bulanan" },
      { id: "di30", label: "8GB 30 HARI", price: 44000, target: "Indosat", type: "bulanan" },
      { id: "di31", label: "9GB 30 HARI", price: 49000, target: "Indosat", type: "bulanan" },
      { id: "di32", label: "10GB 30 HARI", price: 57000, target: "Indosat", type: "bulanan" },

      // XL/Axis
      { id: "dxb1", label: "2GB + 500MB APPS 30 hari", price: 17000, target: "XL/Axis", type: "bulanan" },
      { id: "dxb2", label: "3GB + 500MB APPS 30 hari", price: 25000, target: "XL/Axis", type: "bulanan" },
      { id: "dxb3", label: "6GB 28 hari", price: 30000, target: "XL/Axis", type: "bulanan" },
      { id: "dxb4", label: "10GB 28 hari", price: 36000, target: "XL/Axis", type: "bulanan" },
      { id: "dxb5", label: "15GB 28 hari", price: 40000, target: "XL/Axis", type: "bulanan" },
      { id: "dxb6", label: "20GB 28 hari", price: 50000, target: "XL/Axis", type: "bulanan" },

      { id: "dxh1", label: "2GB-3GB 3 HARI", price: 11000, target: "XL/Axis", type: "harian" },
      { id: "dxh2", label: "5GB-7GB 3 HARI", price: 15000, target: "XL/Axis", type: "harian" },
      { id: "dxh3", label: "2.5GB-4GB 5 HARI", price: 14000, target: "XL/Axis", type: "harian" },
      { id: "dxh4", label: "3.5GB-5.5GB 5 HARI", price: 16000, target: "XL/Axis", type: "harian" },
      { id: "dxh5", label: "6GB-9GB 5 HARI", price: 20000, target: "XL/Axis", type: "harian" },
      { id: "dxh6", label: "2.5GB-3.5GB 7 HARI", price: 15000, target: "XL/Axis", type: "harian" },
      { id: "dxh7", label: "3.5GB-5GB 7 HARI", price: 18000, target: "XL/Axis", type: "harian" },
      { id: "dxh8", label: "5GB-8GB 7 HARI", price: 22000, target: "XL/Axis", type: "harian" },
      { id: "dxh9", label: "7GB-12GB 7 HARI", price: 27000, target: "XL/Axis", type: "harian" },

      { id: "dxg1", label: "1GB Game 30 Hari", price: 7000, target: "XL/Axis", type: "game" },
      { id: "dxg2", label: "2GB Game 30 Hari", price: 12000, target: "XL/Axis", type: "game" },
      { id: "dxg3", label: "500MB Utama + 500MB Game 30 Hari", price: 8000, target: "XL/Axis", type: "game" },
      { id: "dxg4", label: "1GB Utama + 1GB Game 30 Hari", price: 14000, target: "XL/Axis", type: "game" },
      { id: "dxg5", label: "1.5GB Utama + 1.5GB Game 30 Hari", price: 18000, target: "XL/Axis", type: "game" },
      { id: "dxg6", label: "2GB Utama + 2GB Game 30 Hari", price: 24000, target: "XL/Axis", type: "game" },
      { id: "dxg7", label: "3GB Utama + 3GB Game 30 Hari", price: 32000, target: "XL/Axis", type: "game" },
      { id: "dxg8", label: "4GB Utama + 4GB Game 30 Hari", price: 42000, target: "XL/Axis", type: "game" },

      // Smartfren
      { id: "dsh1", label: "1GB 3 HARI", price: 8000, target: "Smartfren", type: "harian" },
      { id: "dsh2", label: "2GB 3 HARI", price: 10000, target: "Smartfren", type: "harian" },
      { id: "dsh3", label: "3GB 5 HARI", price: 15000, target: "Smartfren", type: "harian" },

      { id: "dsb1", label: "DATA 3GB+4GB MLM+3GB CHAT 30 HARI", price: 22000, target: "Smartfren", type: "bulanan" },
      { id: "dsb2", label: "DATA 6GB+10GB MLM+6GB CHAT 30 HARI", price: 28000, target: "Smartfren", type: "bulanan" },
      { id: "dsb3", label: "DATA 10GB+20GB MLM 30 HARI", price: 70000, target: "Smartfren", type: "bulanan" },

      { id: "dtk1", label: "1.1GB Tiktok 1 HARI", price: 8000, target: "Smartfren", type: "media" },
      { id: "dtk2", label: "3.5GB Tiktok 3 HARI", price: 12000, target: "Smartfren", type: "media" },
      { id: "dtk3", label: "8GB Tiktok 7 HARI", price: 19000, target: "Smartfren", type: "media" },
      { id: "dty1", label: "1.1GB YouTube 1 HARI", price: 8000, target: "Smartfren", type: "media" },
      { id: "dty2", label: "3.5GB YouTube 3 HARI", price: 12000, target: "Smartfren", type: "media" },
      { id: "dty3", label: "8GB YouTube 7 HARI", price: 19000, target: "Smartfren", type: "media" },

    ],
    emoney: [
    ],
    games: [
      // MLBB
      { id: "gml1", label: "5 Diamond", price: 3500, target: "MLBB" },
      { id: "gml2", label: "28 Diamond", price: 9000, target: "MLBB" },
      { id: "gml3", label: "44 Diamond", price: 13000, target: "MLBB" },
      { id: "gml4", label: "82 Diamond", price: 25000, target: "MLBB" },
      { id: "gml5", label: "86 Diamond", price: 26000, target: "MLBB" },
      { id: "gml6", label: "170 Diamond", price: 52000, target: "MLBB" },
      { id: "gml7", label: "257 Diamond", price: 78000, target: "MLBB" },
      { id: "gml8", label: "344 Diamond", price: 105000, target: "MLBB" },
      { id: "gml9", label: "514 Diamond", price: 155000, target: "MLBB" },
      { id: "gml10", label: "706 Diamond", price: 210000, target: "MLBB" },
      { id: "gml11", label: "875 Diamond", price: 255000, target: "MLBB" },

      // Free Fire
      { id: "g34", label: "5 Diamond", price: 2000, target: "Free Fire" },
      { id: "g35", label: "12 Diamond", price: 3500, target: "Free Fire" },
      { id: "g36", label: "20 Diamond", price: 4500, target: "Free Fire" },
      { id: "g37", label: "30 Diamond", price: 7000, target: "Free Fire" },
      { id: "g38", label: "50 Diamond", price: 8000, target: "Free Fire" },
      { id: "g39", label: "70 Diamond", price: 12000, target: "Free Fire" },
      { id: "g40", label: "100 Diamond", price: 15000, target: "Free Fire" },
      { id: "g41", label: "140 Diamond", price: 20000, target: "Free Fire" },
      { id: "g42", label: "200 Diamond", price: 29000, target: "Free Fire" },
      { id: "g43", label: "280 Diamond", price: 39000, target: "Free Fire" },
      { id: "g44", label: "360 Diamond", price: 50000, target: "Free Fire" },
      { id: "g45", label: "500 Diamond", price: 69000, target: "Free Fire" },
      { id: "g46", label: "720 Diamond", price: 96000, target: "Free Fire" },
      { id: "g47", label: "1000 Diamond", price: 132000, target: "Free Fire" },
      { id: "g48", label: "1440 Diamond", price: 187000, target: "Free Fire" },

      // Genshin Impact
      { id: "gg1", label: "60 Genesis Crystal", price: 14000, target: "Genshin Impact" },
      { id: "gg2", label: "330 Genesis Crystal", price: 62000, target: "Genshin Impact" },
      { id: "gg3", label: "1090 Genesis Crystal", price: 182000, target: "Genshin Impact" },
      { id: "gg4", label: "2240 Genesis Crystal", price: 390000, target: "Genshin Impact" },
      { id: "gg5", label: "3880 Genesis Crystal", price: 600000, target: "Genshin Impact" },
      { id: "gg6", label: "8080 Genesis Crystal", price: 1197000, target: "Genshin Impact" },

      // PUBG
      { id: "gp1", label: "60 UC", price: 18000, target: "PUBG" },
      { id: "gp2", label: "180 UC", price: 47000, target: "PUBG" },
      { id: "gp3", label: "325 UC", price: 77000, target: "PUBG" },
      { id: "gp4", label: "445 UC", price: 108000, target: "PUBG" },
      { id: "gp5", label: "660 UC", price: 150000, target: "PUBG" },
      { id: "gp6", label: "840 UC", price: 197000, target: "PUBG" },
      { id: "gp7", label: "1105 UC", price: 256000, target: "PUBG" },
      { id: "gp8", label: "1320 UC", price: 300000, target: "PUBG" },
      { id: "gp9", label: "1500 UC", price: 340000, target: "PUBG" },
      { id: "gp10", label: "1800 UC", price: 370000, target: "PUBG" },
      { id: "gp11", label: "1980 UC", price: 420000, target: "PUBG" },
      { id: "gp12", label: "2125 UC", price: 450000, target: "PUBG" },
      { id: "gp13", label: "2460 UC", price: 518000, target: "PUBG" },
      { id: "gp14", label: "2785 UC", price: 596000, target: "PUBG" },
    ],
  };

  const serviceImageUrls = {
    pulsa: pulsaImg,
    data: dataImg,
    emoney: emoneyImg,
    games: gamesImg,
    dana: danaImg,
    ovo: ovoImg,
    gopay: gopayImg,
    shopepay: shopepayImg,
    mlbb: mlbbImg,
    pubg: pubgImg,
    genshin: genshinImg,
    frefire: ffImg,
    datagame: datagameImg,
    datasosmed: datasosmedImg,
  };

  const serviceTargets = {
    pulsa: ['Telkomsel', 'Indosat', 'XL/Axis', 'Smartfren'],
    data: ['Telkomsel', 'Indosat', 'XL/Axis', 'Smartfren'],
    emoney: ['DANA', 'OVO', 'GoPay', 'ShopePay'],
    games: ['MLBB', 'PUBG', 'Genshin Impact', 'Free Fire'],
  };

  const targetIcons = {
    'Telkomsel': telkomImg, 'Indosat': indosatImg, 'XL/Axis': xlImg, 'Smartfren': smartfrenImg,
    'DANA': danaImg, 'OVO': ovoImg, 'GoPay': gopayImg, 'ShopePay': shopepayImg,
    'MLBB': mlbbImg, 'PUBG': pubgImg, 'Genshin Impact': genshinImg, 'Free Fire': ffImg,
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
    setPackageType(null);
    setCustomAmount("");
    setOperator('');
  };

  const handleTargetChange = (newTarget) => {
    setTarget(newTarget);
    setSelected(null);
    setPackageType(null);
    setCustomAmount("");
    if (service === 'pulsa' || service === 'data') {
      setOperator(newTarget);
    }
  };

  const handlePackageTypeChange = (type) => {
    setPackageType(type);
    setSelected(null);
  };

  const currentProducts = allProducts[service]?.filter(p => {
    if (service === 'data') return p.target === target && p.type === packageType;
    return p.target === target;
  }) || [];

  const getLabelText = () => {
    if (service === 'pulsa' || service === 'data') return "Nomor Handphone Tujuan";
    if (service === 'emoney') return "Nomor Akun / ID E-Money";
    return "ID Game / User ID Tujuan";
  };

  const getPlaceholderText = () => {
    if (service === 'pulsa' || service === 'data') return "Contoh: 0812xxxxxx";
    if (service === 'emoney') return "Contoh: 0812xxxxxx";
    if (service === 'games' && target === 'MLBB') return "Contoh: 123456789(Server ID)";
    return "Contoh: 1234567 (User ID)";
  };

  async function onBuy(e) {
    e.preventDefault();

    let finalSelected = selected;
    const ADMIN_FEE = 2000;

    if (service === 'emoney') {
      const amount = parseInt(customAmount);
      if (!amount || amount < 1000) {
        setMessage("Masukkan nominal minimal Rp 1.000.");
        return;
      }
      finalSelected = {
        label: `Top Up Rp ${priceFormatted(amount)}`,
        price: amount + ADMIN_FEE,
      };
    }

    if (!finalSelected) {
      if (service === 'emoney') {
        setMessage("Masukkan nominal terlebih dahulu.");
      } else {
        setMessage("Pilih produk terlebih dahulu.");
      }
      return;
    }

    if (!phone) {
      setMessage("Masukkan Nomor HP / ID tujuan.");
      return;
    }

    const serviceName = service.charAt(0).toUpperCase() + service.slice(1).replace('emoney', 'E-Money').replace('pulsa', 'Pulsa').replace('data', 'Paket Data').replace('games', 'Top Up Game');
    const itemDetail = finalSelected.label;
    const cost = priceFormatted(finalSelected.price);

    let textMessage = `*PESANAN BARU VIA WEBSITE*\n\n`;
    textMessage += `Kategori: ${serviceName}\n`;
    textMessage += `Target: ${target}\n`;
    textMessage += `Produk: ${itemDetail} (Rp ${cost})\n`;
    textMessage += `${getLabelText()}: ${phone}\n`;

    if (note) {
      textMessage += `Catatan: ${note}\n`;
    }
    if (service === 'emoney') {
      textMessage += `Biaya Admin: Rp ${priceFormatted(ADMIN_FEE)}\n`;
    }

    textMessage += `\n*Total Harga: Rp ${cost}*\n`;
    textMessage += `\nTerima kasih banyak sudah melakukan pemesanan. Pesanan Anda sedang kami proses. Mohon tunggu sebentar yaa 🙏`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodedMessage}`;

    setMessage("Mengarahkan ke WhatsApp untuk konfirmasi pesanan...");

    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      setMessage("Pesanan Anda sudah dibuat. Mohon tunggu admin merespone.");
    }, 500);
  }

  const TargetSelectionGrid = () => (
    <div className="p-6 sm:p-8 rounded-2xl shadow-2xl bg-slate-50 dark:bg-slate-900 border-t-4 border-purple-500">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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

  const PackageTypeSelectionGrid = () => (
    <div className="p-6 sm:p-8 rounded-2xl shadow-2xl bg-slate-50 dark:bg-slate-900 border-t-4 border-purple-500">
      <h2 className="text-xl font-extrabold text-purple-800 dark:text-purple-400 mb-2">
        <button
          onClick={() => handleTargetChange(null)}
          className="text-indigo-500 hover:text-indigo-700 mr-2 transition"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        Pilih Jenis Paket Data
      </h2>
      <p className="text-sm mb-6 text-slate-600 dark:text-slate-400">Provider: <span className="font-extrabold text-purple-600">{target}</span></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card
          title="Paket Harian"
          subtitle="Masa aktif singkat"
          icon={datasosmedImg}
          onClick={() => handlePackageTypeChange('harian')}
        />
        <Card
          title="Paket Bulanan"
          subtitle="Masa aktif 30 hari"
          icon={datasosmedImg}
          onClick={() => handlePackageTypeChange('bulanan')}
        />
        {target === 'XL/Axis' && (
          <Card
            title="Kuota Game"
            subtitle="Games FF, MLBB, PUBG, dan AOV"
            icon={datagameImg}
            onClick={() => handlePackageTypeChange('game')}
          />
        )}

        {target === 'Smartfren' && (
          <Card
            title="Kuota Sosmed"
            subtitle="Streaming Tiktok dan YouTube"
            icon={datasosmedImg}
            onClick={() => handlePackageTypeChange('media')}
          />
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md dark:shadow-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={logoUrl}
                alt="Sabycell Logo"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/4F46E5/FFFFFF?text=TP'; }}
              />
            </div>
            <div>
              <div className="text-xl font-extrabold text-indigo-700 dark:text-indigo-400">Sabycell</div>
              <div className="text-xs text-slate-500 hidden sm:block">Pulsa • Data • E-Money • Top up Game</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition font-medium">Beranda</a>
            <a href={`https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm transition shadow-lg shadow-green-500/30 font-bold">
              <i className="fab fa-whatsapp mr-1"></i> Chat Admin
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">

        <section className="mb-12 p-6 sm:p-8 rounded-2xl shadow-2xl bg-slate-50 dark:bg-slate-900 border-t-4 border-purple-500">
          <h3 className="text-2xl font-extrabold mb-6 text-center text-indigo-800 dark:text-indigo-400">Pilih Kategori Layanan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card title="Pulsa" subtitle="Isi ulang Pulsa" icon={serviceImageUrls.pulsa} onClick={() => handleServiceChange('pulsa')} isActive={service === 'pulsa'} />
            <Card title="Paket Data" subtitle="Internet harian/bulanan" icon={serviceImageUrls.data} onClick={() => handleServiceChange('data')} isActive={service === 'data'} />
            <Card title="E-Money" subtitle="Dana, Ovo, GoPay, ShopePay" icon={serviceImageUrls.emoney} onClick={() => handleServiceChange('emoney')} isActive={service === 'emoney'} />
            <Card title="Top Up Game" subtitle="Diamond, UC, Genesis Crystal" icon={serviceImageUrls.games} onClick={() => handleServiceChange('games')} isActive={service === 'games'} />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-8 py-4">

          {target === null ? (
            <div className="lg:col-span-3">
              <TargetSelectionGrid />
            </div>
          ) : service === 'data' && packageType === null ? (
            <div className="lg:col-span-3"><PackageTypeSelectionGrid /></div>
          ) : (
            <>
              <TransactionForm
                target={target}
                service={service}
                phone={phone}
                note={note}
                selected={selected}
                operator={operator}
                message={message}
                currentProducts={currentProducts}
                onBuy={onBuy}
                onPhoneChange={onPhoneChange}
                setNote={setNote}
                setSelected={setSelected}
                customAmount={customAmount}
                setCustomAmount={setCustomAmount}
                setTarget={setTarget}
                setPackageType={setPackageType}
                getLabelText={getLabelText}
                getPlaceholderText={getPlaceholderText}
                priceFormatted={priceFormatted}
              />

              <div className="lg:col-span-1 p-6 sm:p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 space-y-6 self-start">
                <h2 className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400 border-b pb-3 border-indigo-200 dark:border-slate-700">Keunggulan Sabycell</h2>
                <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex gap-3"><span className="text-2xl text-indigo-600">🔒</span><div><span className="font-bold">Aman via WhatsApp.</span> Transaksi langsung dengan Admin.</div></li>
                  <li className="flex gap-3"><span className="text-2xl text-purple-600">💰</span><div><span className="font-bold">Harga Terbaik.</span> Harga jujur, terjangkau, dan transparan.</div></li>
                  <li className="flex gap-3"><span className="text-2xl text-yellow-600">💳</span><div><span className="font-bold">Banyak Metode Bayar.</span> Tersedia QRIS, E-Wallet, Paylater, Cash.</div></li>
                </ul>
              </div>
            </>
          )}
        </section>

      </main>

      <footer className="mt-12 py-8 border-t-4 border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-6xl mx-auto px-4">
          <div>
            <div className="font-extrabold text-xl text-indigo-700 dark:text-indigo-400">Sabycell</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Layanan Top-Up Terpercaya.</div>
            <div className="text-xs text-slate-400 dark:text-slate-500 mt-3">© 2025 Sabycell.</div>
          </div>

          <div className="mt-6 md:mt-0 text-sm text-slate-500 dark:text-slate-400 space-y-2 md:text-right">
            <a href="#" className="block hover:text-indigo-600 transition">Amanah</a>
            <a href="#" className="block hover:text-indigo-600 transition">Terpercaya</a>
            <a href={`https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block text-green-600 font-semibold hover:text-green-800 transition">Hubungi Admin ({YOUR_WHATSAPP_NUMBER})</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
