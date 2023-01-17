import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import '../styles/secciones/HistoriaPostgrado/historiapostgrado.css';
import Imagen from '../images/uatfpostgrado.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Historiapostgrado(){
    useEffect(() => {
        AOS.init( {duration: 1000} );
        AOS.refresh();
      }, []);
    return (
        <div className="historiapostgrado" data-aos="zoom-in">
            <h1 className='titulohistoria' data-aos="zoom-in">HISTORIA DE POSTGRADO</h1>
            <div className='imagencontenedor'>
                <div className='bordehistoria'></div>
                <LazyLoadImage src={Imagen} alt="logo" className='imagenhistoriapostgrado' effect="blur"
                placeholderSrc={Imagen}
                />
            </div>
            <p className='contenidohistoria' data-aos="zoom-in-up">
                Con 28 años de trayectoria, la Dirección de Postgrado de la UATF brinda magnificas oportunidades de especialización a los académicos y profesionales del país y del extranjero.A solicitud de la Facultad de Ingeniería Minera para organizar un curso de Postgrado en dicha Facultad y por Resolución del Honorable Consejo Universitario del 14 de agosto de 1989, fue designado con carácter temporal por su grado académico y en forma interina el Dr. Ing. Carlos Serrano Bravo como Director de Postgrado de la Facultad de Ingeniería Minera. De esta manera nace el Postgrado en nuestra Universidad y gracias al empuje de este profesional se desarrollaron las primeras actividades del postgrado. A partir de 1992, se inician los primeros cursos de actualización o especialización de corta duración, en diversos campos del conocimiento científico tecnológico, efectuándose entre 1992 a 1998, 43 cursos.En el mes de octubre de 1996 se conforma la Comisión Pedagógica y gracias a un convenio con la Universidad Enrique José Varona de la Habana - Cuba se inicia la Primera Maestría en Educación Superior, dirigida a docentes de nuestra Universidad en la perspectiva de cualificar la formación profesional para el desempeño de las funciones docentes con mayor excelencia y contribuir al mejoramiento de la calidad de la educación superior.Luego del alejamiento del Dr. Serrano en diciembre de 1998 y de una acefalia prolongada de 8 meses del cargo de Director, a través de un Concurso de Méritos en fecha 8 de septiembre de 1999 se hace cargo el M.Sc. Ing. Willy Vargas Enríquez como nuevo Director de Postgrado, con un plan ambicioso, cuyo programa fundamental radicaba en el desarrollo y el fortalecimiento del Postgrado de nuestra Universidad con la implementación sobre todos de cursos de especialidad en los diferentes campos y áreas facultativas.Durante la gestión 2003, del M.Sc. Ing. Germán Vacaflor, se aprueba el primer reglamento de postgrado de la Universidad, documento que orienta el desarrollo de programas de postgrado con mejor planificación.En la gestión 2004 se inicia el primer doctorado en Ciencias de la Educación, en convenio con la Universidad Enrique José Varona de la Habana - Cuba.
            </p>
        </div>
    );
}
export default Historiapostgrado;