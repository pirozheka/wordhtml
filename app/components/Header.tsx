import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {

    return (
        <header className="bg-darkblue fixed top-0 w-full h-22 z-50">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="h-full w-full flex p-4 justify-between items-center">
                    <BsFillFileEarmarkWordFill
                        size={60}
                        color="var(--accent)"
                    />
                    <div className="flex justify-between items-center gap-8 ">
                        <Link href={'/'} className="hover:text-accent">
                            HTML Конвертер
                        </Link>
                        <Link href={'/translit'} className="hover:text-accent">
                            Транслитерация
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;