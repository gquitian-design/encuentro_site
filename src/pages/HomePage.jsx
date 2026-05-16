import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomePage() {
    return(
        <div className="min-h-screen flex flex-col bg-white transition-colors">
            <Header />

            <Footer />
        </div>
    );
}

export default HomePage;