import '../../styles/navegador/redessociales.css';
function RedesSociales(){
    return(
        <div className="redes-sociales">
            <p style={{color:'white'}} className="visitanos-redes">
                VISITANOS EN NUESTRAS REDES SOCIALES
            </p>
            <div>
                <p onClick={
                    () => {
                        window.open('https://www.facebook.com/Direcci%C3%B3n-De-Postgrado-Universidad-Aut%C3%B3noma-Tom%C3%A1s-Fr%C3%ADas-100465489541145','_blank');
                    }
                } style={{
                    //degradado facebook
                    background: 'linear-gradient(to right, #3b5998, #192f6a)',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-facebook"></ion-icon>
                </p>
                <p onClick={
                    () => {
                        window.open('https://twitter.com/postgrado_UATF','_blank');
                    }
                } style={{
                    //degradado twitter
                    background: 'linear-gradient(to right, #00acee, #0077b5)',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-twitter"></ion-icon>
                </p>
                <p onClick={
                    () => {
                        window.open('https://www.instagram.com/uatf_postgrado_oficial/','_blank');
                    }
                }
                 style={{
                    //degradado instagram
                    background: 'linear-gradient(to right, #e1306c, #9b2244)',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </p>
                <p onClick={
                    () => {
                        window.open('https://www.youtube.com/channel/UC3FUMFLc24yI9ezTWgCFMEg','_blank');
                    }
                }
                 style={{
                    //degradado youtube
                    background: 'linear-gradient(to right, #ff0000, #cc0000)',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-youtube"></ion-icon>
                </p>
                <p
                onClick={
                    () => {
                        window.open('https://www.linkedin.com/in/postgrado-potosi-a9736723b/','_blank');
                    }
                }
                 style={{
                    //color linkedin
                    background: '#0077b5',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </p>
                <p
                onClick={
                    () => {
                        window.open('https://www.tiktok.com/@postgradopotosiuatf?is_from_webapp=1&sender_device=pc','_blank');
                    }
                }
                 style={{
                    //tiktok
                    background: 'linear-gradient(to right, #000000, #000000)',
                    border: '1px solid white',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-tiktok"></ion-icon>
                </p>
                
                {/*<p style={{
                    background: 'linear-gradient(to right, #25d366, #128c7e)',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '15px',
                    cursor: 'pointer',
                }}>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </p>
                <p style={{
                    //color telegram
                    background: '#0088cc',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.3)',
                    height: '30px',
                    width: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '15px',
                    cursor: 'pointer',
                }}>
                    <i className="fa-brands fa-telegram"></i>
                </p>
                */}
            </div>
        </div>
    );
}
export default RedesSociales;