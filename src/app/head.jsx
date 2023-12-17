import Script from 'next/script.js';
import Metrics from '@/shared/Metrics.jsx';

const title = 'Музей Минералов МГРИ';
const url = 'https://mineralmuseum.vercel.app/';
const description =
  'Интерактивная выставка геологических экспонатов МГРИ с трёхмерной визуализацией';
const author = 'Михаил Могильников';
const keywords =
  'Музей минералов, интерактивный музей, 3д минералы, МГРИ, Михаил Могильников';

export default function Head() {
  return (
    <>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(95833812, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });`}
      </Script>
      <Metrics />
      <meta name="yandex-verification" content="762d947f19fccd82" />
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="russian" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/*
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="site" />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content="/icons/share.png" /> */}
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1.0"
      />
      <meta name="theme-color" content="#000" />
    </>
  );
}
