import {} from '../styles/header.css';

export const Header = () => {
     const imagem= "src/componentes/img-usar/WhatsApp Image 2026-01-21 at 7.27.54 PM.jpeg"
     const imagem2= "src/componentes/img-usar/ChatGPT Image 10_09_2026, 22_26_45.png"
     const imagem3= "src/componentes/img-usar/WhatsApp Image 2026-05-02 at 13.39.39 (2).jpeg"
    return (
        <div id="container">
            <header>
                
                <nav>
                    <div className="name-logo"><div className="logo-icon"></div>
        <div className="logo-text">Mybusiness <span>AO</span></div></div>
                    <a href="">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
              
            </header>
        

        
        </div>
    );
}