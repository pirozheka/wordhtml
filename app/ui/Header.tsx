import { BsFillFileEarmarkWordFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {

    return (
        <header className="fixed top-0 w-full h-10">
            <div className="bg-darkblue mx-auto">
                <div className="h-full w-full flex p-4 justify-between items-center">
                    <BsFillFileEarmarkWordFill
                        size={60}
                        color="var(--accent)"
                    />
                    <div className="flex justify-between items-center gap-8">
                        <Link href={'/'}>
                            HTML Converter
                        </Link>
                        <Link href={'/translit'}>
                            Translit
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;