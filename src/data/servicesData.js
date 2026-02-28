/**
 * treaemos todos los datos de los servicios de kinesica para el apartado del scroll
 */

import zapIcon from "@/assets/icons/zapIcon.vue"
import ActivityIcon from "@/assets/icons/ActivityIcon.vue"
import ClockIcon from "@/assets/icons/ClockIcon.vue"
import { FaceSmileIcon } from "@heroicons/vue/24/outline"

export const servicesData = [
	{
		id : 1,
		title : 'Qué es la <span class="text-main-400">Presoterapia</span>',
		description : 'Tecnología de compresión avanzada que estimula el sistema linfático y mejora la circulación. Beneficios estéticos y terapéuticos: recuperación muscular, reducción de líquidos, disminución de inflamaciones.',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/presoterapia.webp',
		characteristics : [
			{
				icon : zapIcon,
				title : 'Estimulacion 1',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ActivityIcon,
				title : 'Estimulacion 2',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ClockIcon,
				title : 'Estimulacion 3',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : FaceSmileIcon,
				title : 'Estimulacion 4',
				description : 'Activacion de la circulacion sanguinea'
			},
		]
	},
	{
		id : 2,
		title : 'Qué es la <span class="text-main-400">Fisioterapia</span>',
		description : 'La fisioterapia es una disciplina del área de la salud enfocada en la prevención, tratamiento y recuperación de lesiones y trastornos del movimiento mediante técnicas físicas, sin recurrir principalmente a medicamentos o cirugía',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/fisioterapia.webp',
		characteristics : [
			{
				icon : zapIcon,
				title : 'Estimulacion 1',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ActivityIcon,
				title : 'Estimulacion 2',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ClockIcon,
				title : 'Estimulacion 3',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : FaceSmileIcon,
				title : 'Estimulacion 4',
				description : 'Activacion de la circulacion sanguinea'
			},
		]
	},
	{
		id : 3,
		title : 'Qué es la <span class="text-main-400">masoterapia</span>',
		description : 'La masoterapia es una técnica terapéutica basada en la aplicación de masajes con fines clínicos, cuyo objetivo es aliviar el dolor, reducir la tensión muscular y mejorar la circulación.',
		uri: '',
		textButton: 'Agendar Sesión',
		img: '/assets/servicios/masoterapia.webp' ,
		characteristics : [
			{
				icon : zapIcon,
				title : 'Estimulacion 1',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ActivityIcon,
				title : 'Estimulacion 2',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : ClockIcon,
				title : 'Estimulacion 3',
				description : 'Activacion de la circulacion sanguinea'
			},
			{
				icon : FaceSmileIcon,
				title : 'Estimulacion 4',
				description : 'Activacion de la circulacion sanguinea'
			},
		]
	}
]
