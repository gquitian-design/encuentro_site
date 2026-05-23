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
            <Footer />
        </div>
    );
}

export default HomePage;