import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig, projects } from "@/data/site-data";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressBar } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { CommandPalette } from "@/components/layout/command-palette";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { KeyboardShortcuts } from "@/components/layout/keyboard-shortcuts";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Python Full-Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      jobTitle: "Python Full-Stack Developer",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tiruchirapalli",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [
        `https://github.com/${siteConfig.github}`,
        `https://linkedin.com/in/${siteConfig.linkedin}`,
      ],
      knowsAbout: [
        "Python",
        "Django",
        "PostgreSQL",
        "REST API",
        "Full Stack Development",
        "Backend Development",
        "Stripe API",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SRM TRP Engineering College",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      author: { "@id": `${siteConfig.url}/#person` },
    },
    ...projects.map((project) => ({
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      programmingLanguage: "Python",
      author: { "@id": `${siteConfig.url}/#person` },
      codeRepository: project.githubUrl,
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <LoadingScreen />
            <KeyboardShortcuts />
            <CustomCursor />
            <ScrollProgressBar />
            <ReadingProgress />
            <Navbar />
            <CommandPalette />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTop />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
