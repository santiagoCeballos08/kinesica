/**
 * treaemos todos los datos de los servicios de kinesica para el apartado del scroll
 */

import zapIcon from "@/assets/icons/zapIcon.vue"
import ActivityIcon from "@/assets/icons/ActivityIcon.vue"
import ClockIcon from "@/assets/icons/ClockIcon.vue"
import { FaceSmileIcon } from "@heroicons/vue/24/outline"

import { Dumbbell, Users, BicepsFlexed, ListCheck, ClipboardPlus, HeartPulse
} from "lucide-vue-next"
import EdemaIcon from "@/assets/icons/EdemaIcon.vue"
import RelaxIcon from "@/assets/icons/RelaxIcon.vue"
import SpaIcon from "@/assets/icons/SpaIcon.vue"
import BodyIcon from "@/assets/icons/BodyIcon.vue"


export const servicesData = [
	{
		id : 1,
		title : 'Entrnamiento <span class="text-main-400">Funcional</span>',
		description : `Un espacio donde el ejercicio se adapta a tu condición física y objetivos. Activa todo tu cuerpo con entrenamientos dinámicos que combinan peso corporal, pesas, bandas elásticas y TRX, para que cada sesión sea efectiva, motivadora y transformadora.  <br><br> <strong>cada sesion incluye:</strong>   <br> 15 min de calentamiento aeróbico
						<br> 35 min de entrenamiento mediante diferentes tipos de ejercicios los cuales se realizan por estaciones o bases.
						<br>
						10 min de vuelta a la calma y flexibilidad.`,
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/entrenamientoFuncional.webp',
		characteristics : [
			{
				icon : Dumbbell,
				title : 'Tonificacion',
				description : 'Ayuda a bajar de peso y tonificar'
			},
			{
				icon : ActivityIcon,
				title : 'Reduccion de estrés',
				description : 'Reducción de stres y ansiedad'
			},
			{
				icon : BicepsFlexed,
				title : 'Mejoramiento de energia',
				description : 'Aumento de energía y resistencia'
			},
			{
				icon : Users,
				title : 'Campañamiento',
				description : 'Acompañamiento en todas las sesiones'
			},
		]
	},
	{
		id : 3,
		title : 'Qué es la <span class="text-main-400">Fisioterapia</span>',
		description : 'Es un proceso de acompañamiento y recuperación que ayuda a aliviar el dolor, recuperar el movimiento y volver a realizar las actividades de la vida diaria con mayor seguridad y confianza. Es un espacio donde un profesional evalúa tu condición física, diseña un plan personalizado y te guía paso a paso para mejorar tu calidad de vida.',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/fisioterapia.webp',
		characteristics : [
			{
				icon : ListCheck,
				title : 'Evalucación',
				description : 'Evaluación integral'
			},
			{
				icon : ClipboardPlus,
				title : 'Tratamiento',
				description : 'Tratamiento personalizado'
			},
			{
				icon : EdemaIcon,
				title : 'Disminución de edemas',
				description : 'Disminución de edema y retención de líquidos'
			},
			{
				icon : HeartPulse,
				title : 'Herramienta Principal',
				description : 'Movimiento como herramienta principal'
			},

		]
	},
	{
		id : 2,
		title : 'Qué es la <span class="text-main-400">Presoterapia</span>',
		description : 'Tecnología de compresión avanzada que estimula el sistema linfático y mejora la circulación. Beneficios estéticos y terapéuticos: recuperación muscular, reducción de líquidos, disminución de inflamaciones.',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/presoterapia.webp',
		characteristics : [
			{
				icon : zapIcon,
				title : 'Disminucion de piernas cansadas',
				description : 'Disminución en la sensación de piernas cansadas'
			},
			{
				icon : HeartPulse,
				title : 'Mejoramiento',
				description : 'Mejoramiento de la insuficiencia venosa'
			},
			{
				icon : ClockIcon,
				title : 'Recuperacion',
				description : 'Recuperación post entrenamiento'
			},
			{
				icon : EdemaIcon,
				title : 'Disminución',
				description : 'Disminución de edema y retención de líquidos'
			},
		]
	},

	{
		id : 4,
		title : 'Qué es la <span class="text-main-400">masoterapia</span>',
		description : ' La masoterapia es el uso terapéutico de diferentes técnicas de masaje para mejorar la circulación, como el masaje descontracturante con ventosas, masaje deportivo y drenaje linfático con el fin de disminuir el dolor, relajar la musculatura y favorecer el bienestar físico y emocional.',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/masoterapia.webp' ,
		characteristics : [
			{
				icon : BicepsFlexed,
				title : 'Disminución',
				description : 'Disminución de sobrecarga muscular'
			},
			{
				icon : RelaxIcon,
				title : 'Reduce',
				description : 'Reduce el stres y la ansiedad'
			},
			{
				icon : SpaIcon,
				title : 'Activación Circular',
				description : 'Activación de la circulacion sanguinea'
			},
			{
				icon : BodyIcon,
				title : 'Activación',
				description : 'Activación de la circulacion sanguinea'
			},
		]
	}
]
