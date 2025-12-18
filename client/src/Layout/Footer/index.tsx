import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif tracking-wider">VINSGR</h2>
          </div>

          <div>
            <h3 className="text-amber-500 text-sm tracking-widest mb-8 font-light">
              MAIN LINKS
            </h3>
            <div className="h-px bg-linear-to-r from-amber-500/50 to-transparent mb-8"></div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Winery tour
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-500 text-sm tracking-widest mb-8 font-light">
              QUICK LINKS
            </h3>
            <div className="h-px bg-linear-to-r from-amber-500/50 to-transparent mb-8"></div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-500 text-sm tracking-widest mb-8 font-light">
              FOLLOW US
            </h3>
            <div className="h-px bg-linear-to-r from-amber-500/50 to-transparent mb-8"></div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                  <span>Linkedin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              Designed by{" "}
              <a
                href="#"
                className="text-white hover:text-amber-500 transition-colors"
              >
                Radiant Templates
              </a>
              . Powered by{" "}
              <a
                href="#"
                className="text-white hover:text-amber-500 transition-colors"
              >
                Webflow
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                License
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
