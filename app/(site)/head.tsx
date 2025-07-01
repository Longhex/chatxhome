export default function Head() {
  return (
    <>
      <title> Solid | Next.js Template for Startup and SaaS</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Built with Next.js and TypeScript" />
      <link rel="icon" href="/images/favicon.ico" />
      <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s7zguy3slv");
            `,
          }}
        ></script>
    </>
  );
}
