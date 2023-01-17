import Logo1 from '../../images/fautapo.webp';
import Logo2 from '../../images/uemc.webp';
import '../../styles/footer/footer.css';
import UatfPostgrado from '../../images/uatfpostgrado.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Footer(){
    const fautapo=()=>{
        window.open('https://maestrias.fautapoinnovando.org/');
    }
    const uemc=()=>{
        window.open('https://www.uemc.es/');
    }
    return (
        <footer className="footer">
            <div className='convenio'>
                <h2>CONVENIOS</h2>
                <div className='conveniocuerpo'>
                    <LazyLoadImage src={Logo1} alt="logo1" className='logoconvenio1' onClick={()=>fautapo()} style={{cursor:'pointer'}} effect="blur"/>
                    <LazyLoadImage src={Logo2} alt="logo2" className='logoconvenio2' onClick={()=>uemc()} style={{cursor:'pointer'}} effect="blur"/>
                </div>
            </div>
            <div className='direccionfooter'>
                <div className="footermapa">
                    <h2>
                        UBICANOS EN EL MAPA
                    </h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!4v1667435693306!6m8!1m7!1sbnyrVsDkljExA4XVcO692Q!2m2!1d-19.58199942437185!2d-65.75678697496572!3f322.7558344005499!4f4.43841737284437!5f0.4000000000000002" 
                        style={{border:'0'}} 
                        allowFullScreen={true}
                        loading={"lazy"} 
                        title={'mapa'}
                        className={'mapa'}
                    ></iframe>
                </div>
                <div className="footercontacto">
                    <h2>
                        <LazyLoadImage src={UatfPostgrado} alt="fondoPostgrado" effect="blur"/>
                        CONTÁCTANOS
                    </h2>
                    <div className="contactoCuerpo" >
                        <p>
                            <i className="fas fa-map-marker-alt"></i>
                            <span style={{
                                marginLeft:'15px'
                            }}>Av. Arce (Fac. de Minas 2do Bloque), Ciudad de Potosí, Bolivia.</span>
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i>
                            <span style={{
                                marginLeft:'15px'
                            }}>
                                <a href="mailto:postgrado.uatf.potosi@gmail.com">
                                postgrado.uatf.potosi@gmail.com
                                </a>
                            </span>
                        </p>
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            <span style={{
                                marginLeft:'15px'
                            }}>
                                <a href="tel:+59126228248">+591(2) 6228248</a>
                            </span>
                        </p>
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            <span style={{
                                marginLeft:'15px'
                            }}>
                                <a href="tel:+59126227317">+591(2) 6227317</a>
                            </span>
                        </p>
                        
                        <p>
                            <i className="fas fa-phone-alt"></i>
                            <span style={{
                                marginLeft:'15px'
                            }}>
                                <a href="tel:+59126228248">+591(2) 62 2 8248 (fax)</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;