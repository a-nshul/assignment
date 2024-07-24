import Image from 'next/image';
import MagnifyingGlass from '../components/MagnifyingGlass'; // Adjust the import path if needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-300">
      <MagnifyingGlass />
    </main>
  );
}
