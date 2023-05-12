import Image from 'next/image';

export default function Home () {
  return (
    <main className="gradient flexS flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
      <h1 className="title mt-20">BlueBank</h1>
      <h1 className="subtitle text-white">transforma tus finanzas</h1>
    </main>
  );
}
