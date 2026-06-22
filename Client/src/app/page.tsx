import Image from 'next/image'
import Logo from './IMG/Logo.jpeg'

export default function Home() {
  return (
    <div>
        <nav className="bg-[#1B3D2B] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-lg font-bold">
                <Image src={Logo} alt="Logo" width={60} height={60} className="inline-block mr-2 rounded-full" />
                MyApp
            </div>
            <div>
                <a href="#" className="px-3 py-2 hover:bg-blue-700 rounded">Home</a>
                <a href="#" className="px-3 py-2 hover:bg-blue-700 rounded">About</a>
                <a href="#" className="px-3 py-2 hover:bg-blue-700 rounded">Contact</a>
            </div>
        </div>
        </nav>

    </div>
  )
}
