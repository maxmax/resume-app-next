import React from 'react';

export default async function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="test-dev min-h-screen">
      <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:max-w-none px-4 sm:px-6 lg:px-8">
        {children}
      </div>
      <div className="page-footer pb-12">
        <p className="text-gray-700 text-center">
          This resume is generated automatically using public information from the developers GitHub account.
        </p>
      </div>
    </div>
  );
}
