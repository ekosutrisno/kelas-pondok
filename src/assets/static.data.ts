import type { PricingTier } from "@/types/common.types";

export const homePricingPlan: PricingTier[] = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: 'https://app.kelaspondok.com/',
        priceMonthly: 'IDR0',
        description: "Paket gratis untuk mencoba dan melihat fitur-fitur kami.",
        features: ['1 madrasah/sekolah', '1 kelas', 'Penyimpanan data terbatas', 'Dukungan komunitas'],
        featured: false,
    },
    {
        name: 'Standar',
        id: 'tier-standard',
        href: 'https://app.kelaspondok.com/',
        priceMonthly: 'IDR50K',
        description: "Paket yang sempurna untuk sekolah atau yayasan yang baru memulai.",
        features: ['2 madrasah/sekolah', 'Hingga 500 siswa per madrasah', 'Analitik lanjutan', 'Waktu respons dukungan 24 jam'],
        featured: false,
    },
    {
        name: 'Premium',
        id: 'tier-premium',
        href: 'https://app.kelaspondok.com/',
        priceMonthly: 'IDR100K',
        description: 'Dukungan khusus dan infrastruktur untuk sekolah atau yayasan Anda.',
        features: [
            'Produk tak terbatas',
            'Siswa tak terbatas',
            'Analitik lanjutan',
            'Perwakilan dukungan khusus',
            'Otomasi pemasaran',
            'Integrasi khusus',
        ],
        featured: true,
    },
]