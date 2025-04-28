"use client";

import {FiInstagram, FiFacebook, FiTwitter, FiShare2, FiYoutube} from "react-icons/fi";
import { useState } from "react";

export default function ShareIcons() {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row space-x-4 mt-4 text-blue-600 text-2xl">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FiInstagram className="hover:text-pink-500 transition duration-200" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FiFacebook className="hover:text-blue-700 transition duration-200" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FiTwitter className="hover:text-sky-500 transition duration-200" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FiYoutube className="hover:text-sky-500 transition duration-200" />
                </a>
                <button
                    onClick={handleCopyLink}
                    title="Copiar link"
                    className="hover:text-gray-800 transition duration-200"
                >
                    <FiShare2 />
                </button>
            </div>
            {copied && <span className="text-sm text-green-600 mt-2">Link copiado!</span>}
        </div>
    );
}
