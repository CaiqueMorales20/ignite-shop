import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Uma loja de ecommerce que oferece uma ampla seleção de camisetas relacionadas à programação. Encontre camisetas com estampas divertidas e criativas que celebram o mundo da programação. Nossas camisetas são feitas com materiais de alta qualidade e oferecem conforto e estilo. Explore nossa coleção exclusiva de camisetas e mostre seu amor pela programação com estilo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
