import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

const imageModules = import.meta.glob('../images/image*.{png,jpg,jpeg,webp,JPG}', { eager: true });

const images = Object.values(imageModules).map((mod) => mod.default);

function Gallery() {
    return (
        <div className="min-h-screen flex flex-col bg-linear-to-b from-emerald-50/20 to-white font-sans antialiased">
            <Header />

            <main className="flex-grow container mx-auto px-6 py-12 max-w-6xl">
                
                <div className="text-center mb-10 space-y-2">
                    <h2 className="text-2xl font-semibold text-emerald-800 tracking-wide">
                        Galería de Recuerdos
                    </h2>
                    <p className="text-sm text-emerald-800/60 max-w-md mx-auto">
                        Momentos memorables de la Familia Garzón a lo largo de los años.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imageSrc, index) => (
                        <div 
                            key={index} 
                            className="overflow-hidden rounded-2xl border border-emerald-100/50 shadow-xs hover:shadow-md transition-all duration-300 bg-white group"
                        >
                            <img 
                                src={imageSrc} 
                                alt={`Foto del encuentro ${index + 1}`} 
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy" 
                            />
                        </div>
                    ))}
                </div>
                
            </main>

            <Footer />
        </div>
    );
}

export default Gallery;