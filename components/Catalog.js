import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { motion } from "framer-motion";

const Catalog = () => {
  const { t } = useTranslation("common");
  const [showPreview, setShowPreview] = useState(false);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="cont">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-inter font-black text-4xl md:text-5xl text-[#863A20] mb-6">
            {t("catalog.title") || "Minis Catalog"}
          </h2>
          
          {/* <p className="text-xl text-[#863A20] max-w-2xl mb-8">
            {t("catalog.description") || "Download our product catalog to explore our full range of offerings."}
          </p> */}
          
          <div className="flex gap-4 mb-8">
            <button
              onClick={togglePreview}
              className="flex items-center gap-2 bg-white border-2 border-[#FBCB00] px-8 py-3 rounded-md text-[#5E2A2B] font-bold hover:[box-shadow:2px_4px_0px_0px_#5E2917] transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
              {t("catalog.previewButton") || "Preview Catalog"}
            </button>
            
            <Link 
              href="/catalogs/minis-catalog.pdf" 
              target="_blank"
              className="flex items-center gap-2 bg-[#FBCB00] px-8 py-3 rounded-md text-[#5E2A2B] font-bold hover:[box-shadow:2px_4px_0px_0px_#5E2917] transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 16 16"
              >
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
              </svg>
              {t("catalog.downloadButton") || "Download Catalog"}
            </Link>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-5xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-xl text-[#863A20]">{t("catalog.previewTitle") || "Minis Catalog Preview"}</h3>
              <button 
                onClick={togglePreview}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>
            <div className="flex-1 p-4">
              <iframe 
                src="/catalogs/minis-catalog.pdf" 
                className="w-full h-full border-0"
                title="Minis Catalog"
              ></iframe>
            </div>
            <div className="p-4 border-t flex justify-end">
              <Link 
                href="/catalogs/minis-catalog.pdf" 
                target="_blank"
                className="flex items-center gap-2 bg-[#FBCB00] px-6 py-2 rounded-md text-[#5E2A2B] font-bold hover:[box-shadow:2px_4px_0px_0px_#5E2917] transition-all"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
                {t("catalog.download") || "Download"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalog; 