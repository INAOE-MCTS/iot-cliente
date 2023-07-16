import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import("../../components/maps"), {
    ssr: false
});

export default function Consumo() {

    const geolocations = [{ latitude: 19.360848, longitude: -99.156782 }]

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <p className="fixed ml-6 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        CONSUMO DE DATOS DE POSICION GEOGRAFICA
                    </p>
                </div>
            </div>
            <div id="map" className='px-8 py-8' style={{ height: "100%", width: "100%" }}>
                <MapWithNoSSR data={geolocations} />
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://github.com/INAOE-MCTS"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Conoce mas{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Revisa el proyecto de seguridad implementado.
                    </p>
                </a>
            </div>
        </main>
    )
}