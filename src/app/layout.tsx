import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ExternalLink from "@/components/external-link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Dale Chang | Software Engineer",
  description: "Software Engineer excelling JavaScript/TypeScript stacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <main className="flex flex-col min-h-screen justify-between lg:w-full lg:grid lg:grid-cols-2">

          <div className="flex flex-col items-center md:pt-12 md:px-12 lg:px-0 lg:grid lg:grid-cols-2 lg:col-span-2">
            {children}
          </div>

          <footer className="footer footer-center p-6 bg-base-200 text-base-content lg:p-10 lg:bg-transparent lg:grid-cols-1 lg:col-span-2 lg:flex lg:flex-row lg:justify-center lg:bg-base-200">
            <div className="w-80 flex flex-col gap-8 lg:col-start-2">
              <aside>
                <p className="">Scaffolded with <ExternalLink externalLink="https://nextjs.org" displayText="Next.js" />, styled with <ExternalLink externalLink="https://tailwindcss.com" displayText="Tailwind CSS" />, written in <ExternalLink externalLink="https://www.typescriptlang.org" displayText="TypeScript" /> and <ExternalLink externalLink="https://code.visualstudio.com" displayText="VSCode" /></p>
              </aside>
              <aside>
                <div className="flex flex-row items-center gap-4">
                  <a className="external-link text-slate-700 dark:text-slate-100 hover:underline hover:text-slate-400" href="https://github.com/eloquia" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.75 36" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M33.2 8.9a17.7 17.7 0 0 0-6.5-6.5 17.4 17.4 0 0 0-9-2.4A17.4 17.4 0 0 0 9 2.4a17.7 17.7 0 0 0-6.5 6.5A17.4 17.4 0 0 0 0 17.8a17.3 17.3 0 0 0 3.4 10.4 17.4 17.4 0 0 0 8.8 6.4 1 1 0 0 0 .9-.1 1 1 0 0 0 .3-.7v-1.3-2h-.6a6.8 6.8 0 0 1-1.3.2 9.8 9.8 0 0 1-1.6-.2 3.6 3.6 0 0 1-1.5-.7 3 3 0 0 1-1-1.4l-.3-.6a5.8 5.8 0 0 0-.7-1.1 2.8 2.8 0 0 0-1-1h-.2a1.7 1.7 0 0 1-.3-.3 1.3 1.3 0 0 1-.2-.3l.1-.3a1.5 1.5 0 0 1 .7-.1H6a3.4 3.4 0 0 1 1.1.6 3.7 3.7 0 0 1 1.1 1.2A4 4 0 0 0 9.5 28a2.7 2.7 0 0 0 1.5.5 6.6 6.6 0 0 0 1.4-.1 4.6 4.6 0 0 0 1-.4 3.8 3.8 0 0 1 1.1-2.4 15.8 15.8 0 0 1-2.3-.4 9.4 9.4 0 0 1-2.2-.9A6.2 6.2 0 0 1 8 22.8 7.5 7.5 0 0 1 7 20.3a11.6 11.6 0 0 1-.5-3.4A6.8 6.8 0 0 1 8.3 12a6.2 6.2 0 0 1 .1-4.7 3.2 3.2 0 0 1 2 .3 14 14 0 0 1 2 .9l1 .6a16.7 16.7 0 0 1 8.8 0l.9-.6a12.5 12.5 0 0 1 2.1-1 3 3 0 0 1 1.9-.2 6.2 6.2 0 0 1 .2 4.7 6.8 6.8 0 0 1 1.8 4.8 11.7 11.7 0 0 1-.5 3.4 7.2 7.2 0 0 1-1.2 2.5 6.5 6.5 0 0 1-1.9 1.5 9.5 9.5 0 0 1-2.1.9 15.8 15.8 0 0 1-2.4.4 4.1 4.1 0 0 1 1.2 3.3v4.9a1 1 0 0 0 .3.7 1 1 0 0 0 .9.1 17.4 17.4 0 0 0 8.8-6.4 17.3 17.3 0 0 0 3.3-10.4 17.4 17.4 0 0 0-2.3-9z"
                      data-name="Path 291"
                    />
                  </svg>
                  </a>
                  <a className="external-link text-slate-700 dark:text-slate-100 hover:underline hover:text-slate-400" href="https://www.linkedin.com/in/dale-chang-112827157" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  <a className="external-link text-slate-700 dark:text-slate-100 hover:underline hover:text-slate-400" href="https://twitter.com/EloquiaTech" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"></path>
                    </svg>
                  </a>

                  <a className="external-link text-slate-700 dark:text-slate-100 hover:underline hover:text-slate-400" href="https://www.xing.com/profile/Dale_Chang" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 31" data-xds="LogoXINGLogoDuo" className="h-5 w-5">
                      <path fill="currentColor" d="m1.805 5.984 3.635 6.479L0 22.018h6.491l5.4-9.555-3.634-6.48z"></path>
                      <path fill="currentColor" d="m21.122 0-10.49 18.642L17.396 31h6.582l-6.88-12.358L27.6 0z"></path>
                    </svg>
                  </a>
                </div>
              </aside> 
              <aside>
                <p>Copyright © 2024 - Dale Chang</p>
              </aside>
              <aside>
                Looking for the <a className="external-link text-violet-700 dark:text-slate-100 hover:underline hover:text-slate-400" href="https://github.com/eloquia/dalechang-me" target="_blank" rel="noopener noreferrer">first version</a> of this website?
              </aside>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
