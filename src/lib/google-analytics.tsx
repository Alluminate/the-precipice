import Script from "next/script";

export const GoogleAnalytics = () => {
  if (!process.env.NEXT_PUBLIC_GA4_TRACKING_ID || process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', '${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}');
       `
      }}>
      </Script>
    </>
  );
};
