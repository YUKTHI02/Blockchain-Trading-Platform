
import NavBar from '../components/NavBar';
import { exo2, orbitron } from './fonts';
import '@/app/globals.css';

export const metadata = {
  title: {
    default: 'Cryptocurrancy',
    template: '%s | Cryptocurrancy',
  },
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-red-50 flex flex-col px-4 py-2 min-h-screen">
       
        <header>
          <NavBar />
        </header>
        
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
           Courtesy By: Cryptocurrencies Trading Platform
        
        </footer>
      </body>
    </html>
  );
}