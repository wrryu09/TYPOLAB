import Script from "next/script";

const GA = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="script_for_ga"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  );
};

export default GA;
