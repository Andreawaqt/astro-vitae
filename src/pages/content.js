
import Andrea from '../data/data.json';

export const name = Andrea.personal.nom
export const designation = Andrea.personal.rol
export const location = Andrea.personal.adreça
export const pronouns = Andrea.personal.pronoms
export const website = "---"
export const foto = Andrea.personal.foto

// About
export const about = "Una chica energica y alegre, inteligente y apasionada por su trabajo"

// Work Experience --> #work section
export const work = Andrea.laboral;

// Projects --> #project section
export const projects = Andrea.aficions;

// Education --> #education section
export const education = Andrea.academic;

// Contact --> #contact section
export const contact = [
	{
		source_name: "Email",
		source: "Andreawaqt@gmail.com",
	},
	{
		source_name: "Twitter",
		source: "https://twitter.com/",
	},
	{
		source_name: "LinkedIn",
		source: "https://www.linkedin.com/in/",
	},
]