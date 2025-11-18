import React from "react";
import { Facebook, Twitter,  Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-white">F.K Recruitment</div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} F.K Recruitment. All rights reserved.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/f.k_jobs_bharuch/?hl=en"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a href="#" aria-label="twitter">
            <Twitter />
          </a>
          <a href="#" aria-label="linkedin">
            <Facebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
