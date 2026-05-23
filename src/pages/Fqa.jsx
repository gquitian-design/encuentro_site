import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

function Fqa() {
    return (
        <div className="min-h-screen flex flex-col bg-linear-to-b from-emerald-50/20 to-white font-sans antialiased">
            <Header />

            <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
                
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-3xl font-semibold text-emerald-800 tracking-wide">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-sm text-emerald-800/60 max-w-md mx-auto">
                        Todo lo que necesitas saber sobre nuestro próximo encuentro familiar.
                    </p>
                </div>

                <div className="space-y-6">
                    
                    <div className="p-6 bg-white rounded-2xl border border-emerald-100/60 shadow-xs hover:shadow-md transition-all duration-300">
                        <h3 className="text-base font-semibold text-emerald-800 mb-2 tracking-wide">
                            ¿Luego de consignar el dinero de la estadía y si por alguna razón no puedo viajar se devolverá lo consignado?
                        </h3>
                        <p className="text-sm font-medium text-emerald-800/70 leading-relaxed">
                            Sí, se devolverá el dinero, con una fecha límite máxima del <span className="text-emerald-600 font-semibold">30 de Septiembre de 2026</span>.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-emerald-100/60 shadow-xs hover:shadow-md transition-all duration-300">
                        <h3 className="text-base font-semibold text-emerald-800 mb-2 tracking-wide">
                            ¿En qué ciudad es el encuentro?
                        </h3>
                        <p className="text-sm font-medium text-emerald-800/70 leading-relaxed">
                            La familia se reunirá entre el <span className="text-emerald-600 font-semibold">9 y 12 de Octubre de 2026</span> en <span className="text-emerald-600 font-semibold">Chinauta</span>, a 80 km al sur de Bogotá. Altitud 1250 msnm.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-emerald-100/60 shadow-xs hover:shadow-md transition-all duration-300">
                        <h3 className="text-base font-semibold text-emerald-800 mb-2 tracking-wide">
                            ¿Se pueden llevar mascotas?
                        </h3>
                        <p className="text-sm font-medium text-amber-800/80 bg-amber-50/40 p-3 rounded-xl border border-amber-100/50 leading-relaxed">
                            Desafortunadamente, por restricciones del sitio, <strong>no es posible</strong> llevar ningún tipo de mascotas.
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Fqa;