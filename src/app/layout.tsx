import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from '@/Store/Provider'
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/next";

const poppin = Poppins({
  weight: ['100', '400'],
  subsets: ['latin'],
})


export const metadata = {
  title: "ElectroMart Kenya - Affordable Electronics in Nairobi",
  description:
    "Shop the latest electronics online at ElectroMart Kenya. Find smartphones, laptops, TVs, home appliances, and more at unbeatable prices in Nairobi and across Kenya.",
  keywords: [
    "electronics Nairobi",
    "buy electronics online Kenya",
    "smartphones Kenya",
    "laptops Nairobi",
    "TVs Nairobi",
    "home appliances Kenya",
    "affordable electronics Kenya",
    "online electronics store Kenya",
    "electronics delivery Nairobi",
    "gaming consoles Kenya",
    "kitchen appliances Nairobi",
    "ElectroMart Kenya",
    "trusted electronics shop Nairobi",
  ],
  openGraph: {
    type: "website",
    url: "https://www.electromartkenya.co.ke/",

    title: "website - ElectroMart Kenya - Online Electronics Store",
    description:
      "Explore top electronics including smartphones, laptops, TVs, and appliances at ElectroMart Kenya. Fast delivery across Nairobi and Kenya.",
    // siteName: "ElectroMart Kenya",
    images: [
      {
        url: "https://www.electromartkenya.co.ke/og-electronics.png", // ensure this exists in /public folder
        
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    url: "https://www.electromartkenya.co.ke",
    title: "Dancah Technology – Smart Property Solutions",
    description:
      "Explore top electronics including smartphones, laptops, TVs, and appliances at ElectroMart Kenya. Fast delivery across Nairobi and Kenya.",
    images: [
      "https://www.electromartkenya.co.ke/og-electronics.png",
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>

    </html>
  )
}
