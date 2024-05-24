import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundColor: '#feffed'}}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex space-x-8 basis-1/3">
          <a
            className="basis-1/9"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            className="basis-1/9"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Experience
          </a>
          <a
            className="basis-1/9"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </div>
      </div>
      
        <div className="grid grid-cols-2 gap-4 lg:max-w-5xl">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-8xl font-bold text-left">
              Hello!
            </h1>
            <p className="text-3xl">
              Welcome to Hussam's Developer Hub
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/developer-pic.webp"
              alt="Developer Pic"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  );
}
