import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://safehomenest.com.au"),
  title: {
    default: "Safe Homenest Care — Care That Feels Like Home",
    template: "%s | Safe Homenest Care",
  },
  description: "Safe Homenest Care provides personalised NDIS support and home care services in Perth, WA. Person-centred disability support that honours your independence, dignity, and comfort.",
  keywords: [
    "NDIS support services",
    "disability support Perth",
    "home care Perth WA",
    "NDIS provider",
    "personal care",
    "support coordination",
    "community participation",
    "domestic assistance",
    "disability care",
    "Safe Homenest Care",
    "Aveley Perth",
    "person-centred care",
    "travel transportation support NDIS",
    "life skills development",
  ],
  authors: [{ name: "Safe Homenest Care" }],
  creator: "Safe Homenest Care",
  publisher: "Safe Homenest Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://safehomenest.com.au",
    siteName: "Safe Homenest Care",
    title: "Safe Homenest Care — Care That Feels Like Home",
    description: "Personalised NDIS support and home care services in Perth, WA. Person-centred disability support promoting independence, dignity, and comfort.",
    images: [
      {
        url: "/homelogo.png",
        width: 800,
        height: 600,
        alt: "Safe Homenest Care Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Homenest Care — Care That Feels Like Home",
    description: "Personalised NDIS support and home care services in Perth, WA.",
    images: ["/homelogo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://safehomenest.com.au",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Safe Homenest Care",
    description: "Personalised NDIS support and home care services in Perth, WA. Person-centred disability support promoting independence, dignity, and comfort.",
    url: "https://safehomenest.com.au",
    telephone: "+61493012435",
    email: "info@safehomenest.com.au",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aveley",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: "Perth",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [],
    logo: "https://safehomenest.com.au/homelogo.png",
    image: "https://safehomenest.com.au/homelogo.png",
    priceRange: "$$",
    serviceType: [
      "NDIS Support Services",
      "Disability Support",
      "Home Care",
      "Support Coordination",
      "Community Participation",
      "Domestic Assistance",
      "Personal Care",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
