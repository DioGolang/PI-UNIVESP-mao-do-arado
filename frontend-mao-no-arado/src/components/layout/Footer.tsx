
export default function Footer() {
    return (
        <>
            <footer className={`w-full flex flex-col bg-gray-900 text-white`}>
                <div className={`flex flex-col md:flex-row flex-wap justify-around mt-10`}>
                <div className={`m-5`}>LOGOTIPO</div>
                <div className={`m-5`}>Links úteis</div>
                <div className={`m-5`}>Contato</div>
                <div className={`m-5`}>Newsletter</div>
                </div>
                <div className={`flex flex-col md:flex-row flex-wap justify-around border-t-1 border-gray-800 m-10`}>
                    <div className={`m-5`}>direitos reservados</div>
                    <div className={`m-5`}>
                        <ul className={`flex flex-wap space-x-6 list-none  `}>
                            <li>face</li>
                            <li>insta</li>
                            <li>you</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}