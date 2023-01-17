import { useParams } from "react-router";
import {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/contenedorprograma/detalle.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Imagen from '../images/uatfpostgrado.webp';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function DetallePrograma(){
    const {id,tipoprograma}=useParams();
    const [curso, setCurso] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://administrativos.uatfpostgrado.edu.bo/api/'+tipoprograma+'/'+id)
        .then((response) => {
            setCurso(response.data[0]);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [
        id,
        tipoprograma
    ]);
    return(
        
        <div className="contenedordetalleprograma">
            {
                !loading ?
                <div className="contenedordescripcionprograma">
                    <h1>INFORMACIÓN DEL PROGRAMA</h1>
                    <h1>
                        {curso.nombrePrograma}
                    </h1>
                    <div className="cuerpodedetalle">
                        <div className="cabeceracuerpodetalle">
                            <LazyLoadImage src={
                                'https://administrativos.uatfpostgrado.edu.bo/'+curso.imagen
                            } alt="imagen" effect="blur" 
                            placeholderSrc={
                                <Imagen />
                            }
                            />
                            <div className="cabeceracuerpodetalletitulo">
                                <h2>
                                    {
                                        curso.modalidadDiplomado==='AMBOS'?
                                            'PUEDEN INSCRIBIRSE ESTUDIANTES Y PROFESIONALES'
                                            :
                                            curso.modalidadDiplomado==='SI'?
                                                'PUEDEN INSCRIBIRSE SOLO ESTUDIANTES'
                                                :
                                                curso.modalidadDiplomado==='NO'?
                                                    'PUEDEN INSCRIBIRSE SOLO PROFESIONALES'
                                                    :
                                                    'CONSULTE A POSTGRADO SI PUEDEN INSCRIBIRSE'
                                    }
                                </h2>
                                <div className="botonesinscripciondetalle">
                                    {
                                        curso.tipoPrograma_id===3?
                                            <div>
                                                <a href={'https://www.google.com/maps/@-19.5819994,-65.756787,3a,90y,322.76h,94.44t/data=!3m6!1e1!3m4!1sbnyrVsDkljExA4XVcO692Q!2e0!7i13312!8i6656'} target='_blank' rel="noreferrer">
                                                    {'¡¡SI DESEAS INSCRIBIRTE DEBES APERSONARTE A OFICINAS DE POSTGRADO PARA TU INSCRIPCIÓN!!'}
                                                </a>
                                            </div>
                                        :
                                        curso.modalidadDiplomado==='AMBOS'?
                                            <div>
                                                <a href={"https://administrativos.uatfpostgrado.edu.bo/registroprofesional/"+curso.id} target="_blank" rel="noreferrer">
                                                    {'¡¡INSCRIPCIONES PARA PROFESIONALES!!'}
                                                    <ion-icon name="arrow-forward"></ion-icon>
                                                </a>
                                                <a href={"https://administrativos.uatfpostgrado.edu.bo/registroestudiante/"+curso.id} target="_blank" rel="noreferrer">
                                                    {'¡¡INSCRIPCIONES PARA ESTUDIANTES!!'}
                                                    <ion-icon name="arrow-forward"></ion-icon>
                                                </a>
                                            </div>
                                            :
                                            curso.modalidadDiplomado==='SI'?
                                                <div>
                                                    <a href={"https://administrativos.uatfpostgrado.edu.bo/registroestudiante/"+curso.id} target="_blank" rel="noreferrer">
                                                    {'¡¡INSCRIPCIONES PARA ESTUDIANTES!!'}
                                                    <ion-icon name="arrow-forward"></ion-icon>
                                                    </a>
                                                </div>
                                                :
                                                curso.modalidadDiplomado==='NO'?
                                                    <div>
                                                        <a href={"https://administrativos.uatfpostgrado.edu.bo/registroprofesional/"+curso.id} target="_blank" rel="noreferrer">
                                                            {'¡¡INSCRIPCIONES PARA PROFESIONALES!!'}
                                                            <ion-icon name="arrow-forward"></ion-icon>
                                                        </a>
                                                    </div>
                                                    :
                                                    <h1>CONSULTE A POSTGRADO SI PUEDEN INSCRIBIRSE</h1>
                                    }
                                </div>
                                <div className="redessocialesprogramadetalle">
                                    <a style={{
                                        color: 'black'
                                    }} href={curso.facebook} target="_blank" rel="noreferrer">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                    <a style={{
                                        color: 'black'
                                    }} href={curso.instagram} target="_blank" rel="noreferrer">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                    <a style={{
                                        color: 'black'
                                    }} href={curso.twitter } target="_blank" rel="noreferrer">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                    <a style={{
                                        color: 'black'
                                    }} href={'https://api.whatsapp.com/send?phone=591'+curso.consultorwhatsapp+'&text=Hola%20quisiera%20mas%20informacion%20sobre%20un%20programa%20de%20postgrado'} target="_blank" rel="noreferrer">
                                        <ion-icon name="logo-whatsapp"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*SECCION DEL CUERPO PRESENTACION*/}
                        <div className="presentaciondetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                PRESENTACIÓN DEL PROGRAMA
                            </h1>
                            <p>
                                {curso.presentacion}
                            </p>
                        </div>
                        {/*SECCION DEL CUERPO DETALLE OBJETIVOS*/}
                        <div className="objetivodetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                OBJETIVOS DEL PROGRAMA
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                            </h1>
                            <p>
                                {curso.objetivos}
                            </p>
                        </div>
                        
                        {/*SECCION DEL PERFIL DEL ESTUDIANTE*/}
                        <div className="perfilestudiantedetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                PERFIL DEL PARTICIPANTE
                            </h1>
                            <p>
                                {curso.perfilEstudiante}
                            </p>
                        </div>

                        {/*SECCION DEL PERFIL DEL EGRESADO DEL PROGRAMA*/}
                        <div className="perfilegresadodetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                PERFIL DEL EGRESADO DEL PROGRAMA
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                            </h1>
                            <p>
                                {curso.perfilGraduado}
                            </p>
                        </div>
                        
                        {/*REQUISITOS DE ADMINISION*/}
                        <div className="requisitosadmisiondetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                                REQUISITOS DE ADMISIÓN
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: curso.requisitos}} />
                        </div>

                        {/*REQUISITOS DE ADMINISION*/}
                        <div className="plandeestudiosdetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                PLAN DE ESTUDIOS
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                            </h1>

                            <p dangerouslySetInnerHTML={{__html: curso.planEstudio}} />
                        </div>
                        {/*REQUISITOS DE INVERSIÓN*/}
                        <div className="inversiondetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                <span>
                                    {/*icono dolar*/}
                                    <ion-icon name="cash-outline"></ion-icon>
                                 </span>
                                INVERSIÓN
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: curso.inversion}} />
                        </div>
                        {/*SECCION DEL TITULO QUE OTORGA*/}
                        <div className="titulootorgadetalleprograma">
                            <h1 style={{
                                color: '#C80000'
                            }}>
                                TITULO QUE OTORGA
                                <span>
                                    {/*icono graduacion*/}
                                    <ion-icon name="school-outline"></ion-icon>
                                </span>
                            </h1>
                            <p>
                                {curso.tituloOtorga}
                            </p>
                        </div>
                    </div>
                    <div className="tarjetanuevedetalleprograma">
                        <div className="tarjeta1">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Modalidad</h1>
                            <p>{curso.modalidad}</p>
                        </div>
                        <div className="tarjeta2">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Plazas</h1>
                            <p>{curso.cantidadPlazas}</p>
                        </div>
                        <div className="tarjeta3">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Organización</h1>
                            <p>{curso.organizacionCurso }</p>
                        </div>
                        <div className="tarjeta4">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Duración</h1>
                            <p>{curso.duracion}</p>
                        </div>
                        <div className="tarjeta5">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Horas Académicas</h1>
                            <p>{curso.horasAcademicas}</p>
                        </div>
                        <div className="tarjeta6">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Créditos</h1>
                            <p>{curso.creditos}</p>
                        </div>
                        <div className="tarjeta7">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Horarios</h1>
                            <p>{curso.horarios}</p>
                        </div>
                        <div className="tarjeta8">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Becas</h1>
                            <p>{curso.becas}</p>
                        </div>
                        <div className="tarjeta9">
                            <ion-icon name="school-outline" className="iconotarjetadetalle"></ion-icon>
                            <h1>Mayor Información</h1>
                            <p dangerouslySetInnerHTML={{__html: curso.mayoresInformes}} />
                        </div>
                    </div>
                </div>
                :
                <div className='cargandoprograma'>
                    <div className='cargandoprograma'>
                            <div className="spinner">
                                <div className="dot1"></div>
                                <div className="dot2"></div>
                            </div>
                    </div>
                </div>
                ||
                <Skeleton />
            }
        </div>
    );
}
export default DetallePrograma;