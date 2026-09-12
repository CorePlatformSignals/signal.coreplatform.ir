import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://signal.coreplatform.ir"),
  title: "Core Signal — Turn noise into signal",
  description:
    "Core Signal is the signal layer of Core Platform: a focused surface for turning streams of operational data into meaningful signals and action.",
  openGraph: {
    title: "Core Signal",
    description: "Turn noise into signal. Route what matters into action.",
    url: "https://signal.coreplatform.ir",
    siteName: "Core Signal",
    type: "website",
  },
  alternates: { canonical: "https://signal.coreplatform.ir" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
