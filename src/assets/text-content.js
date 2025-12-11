import { Project } from './class-project';


const linkedinAccount = 'https://linkedin.com/in/javier-josé-díaz-borboa-33a7682';

const preplyLink = 'https://preply.in/JAVIER7EN1403644';

const certificate = 'https://preply-tutors-academy.thinkific.com/certificates/igbfievue0';

const project1 = new Project('lang1');
project1.titleAbout = "Conheça Javier";
project1.textContentAboutMe = 'Javier Diaz é um professor de espanhol com mais de cinco anos de experiência em ensino on-line.';
project1.headContactMe = 'Contacte-me';
project1.textContactMe = 'Se você acha que sou o tutor certo para você, entre em contato comigo.';
project1.projectName = 'Mais de 6000 aulas para alunos de todo o mundo';
project1.projectDescription1 =
  'Reconhecido pela sua abordagem prática, clareza e dedicação, Javier tem atraído especialmente profissionais brasileiros e falantes de inglês, todos eles buscando melhorar as suas oportunidades de emprego através do domínio da língua espanhola.';
project1.projectDescription2 =
  'Javier tem mais de 42 avaliações 5 estrelas que comprovam a qualidade de seu ensino. Suas aulas são 100% on-line, flexíveis e personalizadas de acordo com os objetivos e o ritmo de cada aluno. Em contextos profissionais reais, ajudando os alunos a se expressarem com confiança em reuniões, entrevistas e apresentações.';
project1.projectDescription3a =
  'Seu nível intermediário/avançado de inglês lhe permitiu atrair alunos da Europa e de países de língua inglesa. Ele também possui o certificado ';
project1.projectDescription3b =
  ' concedido pela Preply em reconhecimento ao seu treinamento em pedagogia de idiomas.';

project1.language = 'português';

const project2 = new Project('lang2');
project2.titleAbout = "Meet Javier";
project2.textContentAboutMe = 'Javier Diaz is a Spanish tutor with more than five years of online teaching experience.';
project2.headContactMe = 'Contact Me';
project2.textContactMe = 'If you think I am the right tutor for you, please contact me.';
project2.projectName = 'More than 6000 lessons to students from all over the world';
project2.projectDescription1 =
  'Recognized for his practical approach, clarity, and dedication, Javier has attracted Brazilian professionals and English speakers in particular, all of whom are seeking to improve their employment opportunities through mastery of the Spanish language.';
project2.projectDescription2 =
  'Javier has more than 42 reviews of 5 stars that endorse the quality of his teaching. His classes are 100% online, flexible, and personalized according to the goals and pace of each student. Within real professional contexts, helping students to express themselves confidently in meetings, interviews and presentations.';
project2.projectDescription3a =
  'His intermediate/advanced level English proficiency has allowed him to attract students from Europe and English speaking countries. He also has the certificate';
project2.projectDescription3b =
  ' certificate awarded by Preply as a support to his language pedagogy training.';

project2.language = 'english';

const project3 = new Project('lang3');
project3.titleAbout = "Conoce a Javier";
project3.textContentAboutMe = 'Javier Díaz es un profesor de español con más de cinco años de experiencia en la enseñanza online.';
project3.headContactMe = 'Contáctame';
project3.textContactMe = 'Si crees que soy el tutor adecuado para ti, ponte en contacto conmigo.';
project3.projectName = 'Más de 6000 lecciones para estudiantes de todo el mundo';
project3.projectDescription1 =
  'Reconocido por su enfoque práctico, claridad y dedicación, Javier ha atraído especialmente a profesionales brasileños y angloparlantes,  todos ellos con el objetivo de mejorar sus oportunidades laborales mediante el dominio del español.';
project3.projectDescription2 =
  'Javier tiene más de 42 reseñas de 5 estrellas que demuestran la calidad de su enseñanza. Sus clases son 100% online, flexibles y personalizadas según los objetivos y el ritmo de cada alumno. En contextos profesionales reales, ayudando a los estudiantes a expresarse con confianza en reuniones, entrevistas y presentaciones.';
project3.projectDescription3a =
  'Su dominio del inglés a nivel intermedio/avanzado le ha permitido atraer a estudiantes de Europa y de países de habla inglesa. Además, cuenta con el certificado ';
project3.projectDescription3b =
  ' otorgado por Preply como respaldo a su formación en pedagogía lingüística.';

project3.language = 'español';

const arrayProjects = [
  project1,
  project2,
  project3,
];

export {
  arrayProjects,
  linkedinAccount,
  preplyLink,
  certificate,
};
