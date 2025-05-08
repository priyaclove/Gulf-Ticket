// app/components/Footer.jsx
import { Youtube, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1C1C1C] text-white px-4 md:px-10 pt-10 pb-6 text-sm">
            <div className="flex flex-col items-center">
                <img src="/foot-logo.png" alt="Gulf Ticket" className="h-30 mb-4" />
                <nav className="flex flex-wrap justify-center gap-6 font-medium text-white text-xl mb-6">
                    <a href="#">About Us</a>
                    <a href="#">Participate Responsibly</a>
                    <a href="#">Game Rules</a>
                    <a href="#">Legal</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">FAQs</a>
                    <a href="#">News Letter</a>
                </nav>
                <div className="flex gap-4 mb-6">
                    <button className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition">Contact Us</button>
                    <button className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition">Feedback</button>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-2">
                <p>© 2024 Gulf Ticket. All rights reserved.</p>
                <p>Amounts in currencies other than AED are approximate and update hourly.</p>
            </div>
            <div className="mt-6 flex justify-end gap-4 pr-4 md:pr-10">
                <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-lg hover:text-gray-300 cursor-pointer">
                    <Youtube />
                </div>
                <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-lg hover:text-gray-300 cursor-pointer">
                    <Facebook />
                </div>
                <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-lg hover:text-gray-300 cursor-pointer">
                    <Twitter />
                </div>
                <div className="border border-white rounded-full w-10 h-10 flex items-center justify-center text-lg hover:text-gray-300 cursor-pointer">
                    <Instagram />
                </div>
            </div>
        </footer>
    );
}
