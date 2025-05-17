"use client";
import { Contact2, TelescopeIcon } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
      <div className="max-w-2xl mx-auto shadow-lg rounded-xl bg-white p-8">
        {/* Centered Darulkubra message */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-2 text-blue-700 tracking-tight">
            Darulkubra Academy
          </h2>
          <p className="text-gray-600 max-w-lg mb-6">
            Welcome to Darulkubra Academy!
            <br />
            Explore modern, ready-to-use UI snippets for your next project.
            <br />
            Crafted with Tailwind CSS for seamless integration.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-900 transition"
            >
              Go to whatsapp
            </a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Reset background
            </button>
          </div>
        </div>
        {/* Social links and forward */}
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <p className="text-lg text-gray-700 font-medium">
            Join our community for updates and discussions!
          </p>
          <div className="flex gap-8 justify-center">
            <a
              href="https://t.me/yourtelegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-3xl"
              aria-label="Telegram"
            >
              <TelescopeIcon />
            </a>
            <a
              href="https://facebook.com/yourfacebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-3xl"
              aria-label="Facebook"
            >
              <Contact2 />
            </a>
            <a
              href="https://your-forward-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-lg underline flex items-center font-semibold"
            >
              Forward &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
