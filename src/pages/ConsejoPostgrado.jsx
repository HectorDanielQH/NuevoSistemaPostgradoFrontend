import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Directiva from '../images/directiva1.webp';
import Organigrama from '../images/organigrama.webp';
import '../styles/secciones/ConsejoPostgrado/ConsejoPostgrado.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ConsejoPostgrado() {
    useEffect(() => {
        AOS.init( {duration: 1000} );
        AOS.refresh();
      }, []);
    return (
        <div className='consejopostgrado'>
            <h1 className='tituloconsejo' data-aos="zoom-in">CONSEJO DIRECTIVO DE POSTGRADO</h1>
            <p className='contenidoconsejo'  data-aos="zoom-in">
                El Consejo de Postgrado es la máxima autoridad colegiada responsable de establecer políticas generales, organizar y promover el Sistema de Estudios de Posgrado. Conoce y opina sobre los asuntos que, de acuerdo con las normas y disposiciones establecidas en el Reglamento General de Estudios de Posgrado, le son sometidos.Sus funciones generales son formular y proponer ante las instancias competentes las políticas, los lineamientos generales y estrategias que fortalezcan la articulación y operación del Sistema de Estudios de Posgrado de la UATF. Tiene además funciones de asesoría y evaluación, vinculación, aprobación, fiscalización y administración.
            </p>
            
            <h1 className='tituloconsejo' data-aos="zoom-in">UNIDADES DE POSTGRADO FACULTATIVAS</h1>

            <div className='contenedorimagen'>
                <LazyLoadImage src={Directiva} data-aos="zoom-in" alt="directiva" effect="blur"
                placeholderSrc={Directiva}
                />
            </div>
            
            <h1 className='tituloconsejo' data-aos="zoom-in">ESTRUCTURA ORGÁNICA</h1>

            <div className='contenedorimagen'>
                <LazyLoadImage src={Organigrama} data-aos="zoom-in" alt="directiva" effect="blur"
                placeholderSrc={Organigrama}
                />
            </div>
        </div>
    );
}
export default ConsejoPostgrado;