import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

import mainPic from '../images/main_pic.jpeg';

function HomePage() {
    return(
        <div className="min-h-screen flex flex-col bg-white transition-colors">
            <Header />

            <div className="flex-grow flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-6 py-12 gap-8 font-sans antialiased">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img 
                        className="h-80 w-auto object-cover rounded-2xl shadow-sm border border-emerald-100/60 transition-transform duration-300 hover:scale-[1.01]" 
                        src={mainPic} 
                        alt="main site pic" 
                    />
                </div>
    
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-emerald-800 leading-snug">
                        Bienvenidos al sitio oficial del <br />
                        <span className="text-emerald-600 font-bold">XVII Encuentro de la Familia Garzón</span>
                    </h2>
        
                    <p className="text-sm md:text-base font-medium text-emerald-800/70 tracking-wide max-w-md leading-relaxed">
                        Una oportunidad única de compartir con nuestros seres queridos y crear momentos inolvidables.
                    </p>

                </div>
            </div>

            <div className='text-sm md:text-base font-medium text-emerald-800/70 p-5'>
                <p>Nuestro XVIII Encuentro se llevará a cabo entre el 9 y el 12 de Octubre de 2026 en la ciudad de Chinauta Cundinamarca.</p>
                <p className='pt-2'>Desde ya estamos recibiendo sus pagos anticipados en la cuenta de Bancolombia <span className='font-bold'>24688135326</span> o desde cualquier otro banco con la llave bre-b jcquitiang@hotmail.com, recuerda enviar junto con el comprobante de pago, los nombres de las personas que están haciendo el aporte, al whatsapp <span className='font-bold'>(315)621-5590</span> de Mónica Quitián</p>
                <p className='font-bold pt-4'>Recibimos también pagos con tu tarjeta de crédito, por favor comunicarte por whatsapp al (315)621-5590 de Mónica Quitián, para darte las instrucciones, de forma múy fácil y segura</p>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;