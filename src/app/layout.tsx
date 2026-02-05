import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vintage & Class - Barbearia Premium",
  description: "A melhor experiência de barbearia premium da cidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
