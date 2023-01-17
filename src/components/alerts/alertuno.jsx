import '../../styles/alerta/alertauno.css';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ImagenDescarga from '../../images/descargar.webp';
import Apk from '../../apk/Postgrado.apk';
function AlertaUno() {
    return(
        <div className='alertapropaganda'>
            <div className='alertapropagandacabecera'>
                <button
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        /*destruir*/
                        document.querySelector('.alertapropaganda').style.display = 'none';
                    }}
                    className='alertapropagandacabeceraicono'
                >
                    <ion-icon name="close-circle" style={{
                        marginRight: '1rem'
                    }}></ion-icon>
                    CERRAR
                </button>
                <LazyLoadImage
                    effect='blur'
                    src={ImagenDescarga}
                    alt='UATF'
                    width='100%'
                    height='100%'
                    placeholderSrc={<Skeleton width='100%' height='100%' />}
                />
                <a
                    className='alertapropagandacabeceraboton' 
                    target={'_blank'}
                    href={Apk}
                    download
                    rel='noreferrer noopener'
                >
                    <ion-icon name="download-outline" style={{
                        marginRight: '1rem'
                    }}></ion-icon>
                    Descargar
                </a>
            </div>
        </div>
    );    
}
export default AlertaUno;