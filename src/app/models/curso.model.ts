import {Material} from './material.model'
import {Alumno}   from './alumno.model'
import {Tema}     from './tema.model'

export class Curso {
	id?: number;
	tema?: Tema;
	fecha_inicio?: string;
	id_docente?: number;
	materiales?: Material[];
	alumnos?: Alumno[];
}
