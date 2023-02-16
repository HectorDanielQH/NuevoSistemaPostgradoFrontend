import ImagenFondo from '../images/fondoAzul.webp';
import '../styles/secciones/home/seccion1.css';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import AlertaUno from '../components/alerts/alertuno';
import ReactHowler from 'react-howler'
import Audio from '../audio/bienvenida.mp3'

function Home(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return(
        <div>
            <ReactHowler
                src={Audio}
                playing={true}
                loop={false}
                volume={0.5}
            />
            {
                <AlertaUno />
                ||
                <Skeleton
                    height={300} 
                    width={300} 
                />
            }
            <div className='AlertaUno' style={
                show ? {display: 'flex'} : {display: 'none'}
            }>
                <div className='AlertaUnoCuerpo'>
                    <button className='AlertaUnoCuerpoCabecera' onClick={()=>setShow(false)}>
                        <ion-icon name="close-circle"></ion-icon>
                    </button>
                    <div className='AlertaUnoCuerpoBody'>
                        <h1>OBJETIVO</h1>
                        <p>
                            Los programas de postgrado de la UATF tienen por finalidad actualizar, profundizar y complementar conocimientos, mejorar habilidades y destrezas mediante el desarrollo de competencias así como generar conocimientos-académicos, científicos que respondan a las necesidades y problemas de la sociedad.
                        </p>
                    </div>
                </div>
            </div>


            <div className='AlertaUno' style={
                show2 ? {display: 'flex'} : {display: 'none'}
            }>
                <div className='AlertaUnoCuerpo'>
                    <button className='AlertaUnoCuerpoCabecera' onClick={()=>setShow2(false)}>
                        <ion-icon name="close-circle"></ion-icon>
                    </button>
                    <div className='AlertaUnoCuerpoBody'>
                        <h1>MISIÓN</h1>
                        <p>
                            La Dirección de Postgrado de la UATF es una comunidad académica que brinda una formación flexible e interdisciplinaria de excelencia a nivel de postgrado. Contribuyendo, a partir de la investigación, especialización e innovación, al avance en la producción de conocimiento y su aplicación a la sociedad.
                        </p>
                    </div>
                </div>
            </div>



            <div className='AlertaUno' style={
                show3 ? {display: 'flex'} : {display: 'none'}
            }>
                <div className='AlertaUnoCuerpo'>
                    <button className='AlertaUnoCuerpoCabecera' onClick={()=>setShow3(false)}>
                        <ion-icon name="close-circle"></ion-icon>
                    </button>
                    <div className='AlertaUnoCuerpoBody'>
                        <h1>VISIÓN</h1>
                        <p>
                        La Dirección de Postgrado de la UATF es un referente cada vez más importante en la formación, investigación e innovación, tanto en el ámbito nacional como internacional. Gracias a su constante diálogo con el entorno, se convierte en un espacio de reflexión a nivel de posgrado que contribuye con el desarrollo de los pueblos y del país.
                        </p>
                    </div>
                </div>
            </div>



            <div className='AlertaUno' style={
                show4 ? {display: 'flex'} : {display: 'none'}
            }>
                <div className='AlertaUnoCuerpo'>
                    <button className='AlertaUnoCuerpoCabecera' onClick={()=>setShow4(false)}>
                        <ion-icon name="close-circle"></ion-icon>
                    </button>
                    <div className='AlertaUnoCuerpoBody'>
                        <h1 >HACIA UNA CULTURA DE CALIDAD</h1>
                        <p >
                            La Dirección de Postgrado tiene el propósito de garantizar que la oferta formativa responda de manera óptima 
                            a las necesidades de la sociedad.Para ello, orienta sus esfuerzos y recursos a la formación de personas con
                            las más altas capacidades profesionales. <br /> En ese sentido, se cuenta con un sistema de calidad que 
                            desarrolla:
                            <ul>
                                <li style={{
                                    listStyle: 'inside',
                                }}>
                                Procedimientos de evaluación y seguimiento de la calidad académica y administrativa de sus programas.
                                </li>
                                <li style={{
                                    listStyle: 'inside',
                                }}>
                                Plantea estrategias para la mejora continua permanente.
                                </li>
                                <li style={{
                                    listStyle: 'inside',
                                }}>
                                Viene construyendo su identidad propia mediante sus actividades para cumplir los estándares de calidad correspondientes a un postgrado de excelencia.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>



            {
                <LazyLoadImage src={ImagenFondo}
                    className='imagenFondo'
                    effect="blur"
                    alt="imagen" 
                    placeholderSrc={ImagenFondo}
                    width='100%'  
                />
                ||
                <Skeleton />
            }
            <div className='seccion1'>
                <div className='seccion12'>
                    <iframe 
                        className='video' 
                        src="https://www.youtube.com/embed/upcizU49o9U" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading='lazy'
                        allowfullscreen
                        width='100%'
                        height='100%'
                    ></iframe>
                    <div className='seccionGrid'>
                        <div className='card' onClick={
                            () => setShow(true)
                        }>
                            <p><ion-icon name="ribbon-outline" style={{
                                fontSize: '2.5rem',
                                margin:'.6rem'
                            }}></ion-icon>
                            
                            </p>
                            <h1>OBJETIVO</h1>
                        </div>
                        <div className='card' onClick={
                            () => setShow2(true)
                        }>
                            <p><ion-icon name="school-outline" style={{
                                fontSize: '2.5rem',
                                margin:'.6rem'
                            }}></ion-icon></p>
                            <h1>MISIÓN</h1>
                        </div>
                        <div className='card' onClick={
                            () => setShow3(true)
                        }
                        >
                            <ion-icon name="eye" style={{
                                fontSize: '2.5rem',
                                margin:'.6rem'
                            }}></ion-icon>
                            <h1>VISIÓN</h1>
                        </div>
                        <div className='card' onClick={
                            () => setShow4(true)
                        }>
                            <ion-icon name="rocket" style={{
                                fontSize: '2.5rem',
                                margin:'.6rem'
                            }}></ion-icon>
                            <h1>HACIA UNA CULTURA DE CALIDAD</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;