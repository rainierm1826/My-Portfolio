import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Header } from "@/components/Header";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} px-2`}>
        <ThemeProvider>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
