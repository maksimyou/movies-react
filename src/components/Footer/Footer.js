import './Footer.css';

function Footer() {

    return (
        <div className='footer_container'>
            <div className='footer_contant'>
                <div className='footer_logo'>Movies React</div>
                <div className="footer_initial">Ашмарин Максим © {new Date().getFullYear()}</div>
            </div>
        </div>

    );

}
export default Footer;