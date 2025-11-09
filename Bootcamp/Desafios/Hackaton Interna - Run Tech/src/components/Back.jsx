import { FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function BotaoVoltar() {
    const router = useRouter()

    return (
        <div className="flex items-center px-4 pt-2">
            <FaArrowLeft
                className="w-6 h-6 text-[#FF7043] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => router.push('/home')}
            />
        </div>
    )
}