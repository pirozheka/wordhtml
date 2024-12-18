import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";



export const metadata: Metadata = {
  title: "Текстовый редактор и конвертер онлайн",
  description: "Онлайн-переводчик форматированного текста в HTML разметку. Конвертер Word в HTML онлайн. Функциональный текстовый редактор",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      > 
      <Header />
        {children}
      </body>
    </html>
  );
}
