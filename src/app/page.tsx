import Image from 'next/image';

export default function Home() {
  return (
    // When you're ready to build, replace the code with <div></div>
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <Image src="/images/next-logo.png" alt="Next.js logo" width={400} height={400} />
      <h2 className="text-xl text-gray-600">See the readme to get started.</h2>
    </div>
  );
}
