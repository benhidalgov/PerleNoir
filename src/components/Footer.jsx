import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <img src="/logo.png" alt="Perle Noire" className="footer__logo" />
                    <span className="footer__name">Perle Noire</span>
                </div>

                <div className="footer__divider" />

                <div className="footer__socials">
                    <a href="#" className="footer__social-link">Instagram</a>
                    <a href="#" className="footer__social-link">Pinterest</a>
                    <a href="#" className="footer__social-link">Behance</a>
                </div>

                <p className="footer__copy">
                    © {year} Perle Noire. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
