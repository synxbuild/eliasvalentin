import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Tus resultados no van a cambiar hasta que cambies la versión de ti que los está creando. Masterclass gratuita en vivo con Elías Valentín, domingo 15 de noviembre, 6:00 PM de Puerto Rico.";

export const metadata: Metadata = {
  title: "Masterclass gratis con Elías Valentín | 15 de noviembre",
  description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "es_LA",
    siteName: "Elías Valentín",
    title: "Masterclass gratis con Elías Valentín | 15 de noviembre",
    description,
    images: [{ url: "/images/og-original.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a08",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${bodoni.variable} ${hanken.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">{children}</body>
    </html>
  );
}
