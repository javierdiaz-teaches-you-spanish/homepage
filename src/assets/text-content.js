import screenshot1 from './img/screenshot-project2.png';
import screenshot2 from './img/screenshot-project2.png';
import screenshot3 from './img/screenshot-project3.png';

import { Project } from './class-project';

const titleAbout = "Conheça Javier / Meet Javier";
const textContentAboutMe =
  'Javier Diaz é um professor de espanhol com mais de cinco anos de experiência em ensino on-line.\nJavier Diaz is a Spanish tutor with more than five years of online teaching experience.';

  /*document.write(address.replace(/\n/g, "<br>")); */
const textContentContactMe =
  'Se você acha que meu trabalho se encaixa no que você precisa, escreva para mim.\nIf you think my work fits what you need, write to me.';
/* const phoneText = '123-4567-890'; */
const mailText = 'jjdiazb2@gmail.com';

const linkedinAccount = 'linkedin.com/in/javier-josé-díaz-borboa-33a7682';

const project1 = new Project('project1');
project1.projectName = 'Mais de 5400 aulas para alunos de todo o mundo';
project1.projectDescription1 =
  'Reconhecido por sua abordagem prática, clareza e dedicação, Javier tem atraído especialmente profissionais brasileiros que buscam melhorar suas oportunidades de trabalho por meio do domínio do idioma espanhol.';
project1.projectDescription2 =
  'Javier tem 42 avaliações 5 estrelas que comprovam a qualidade de seu ensino. Suas aulas são 100% on-line, flexíveis e personalizadas de acordo com os objetivos e o ritmo de cada aluno. Em contextos profissionais reais, ajudando os alunos a se expressarem com confiança em reuniões, entrevistas e apresentações.';
project1.projectDescription3 =
  'Seu nível intermediário de inglês lhe permitiu atrair alunos da Europa e de países de língua inglesa. Ele também possui o certificado "How to Teach a Language" concedido pela Preply em reconhecimento ao seu treinamento em pedagogia de idiomas.';
project1.screenshotProjectSource = screenshot1;
project1.linkedinHref = '#';
/* project1.projectNewWindow = '#'; */

const project2 = new Project('project2');
project2.projectName = 'More than 5400 lessons to students from all over the world';
project2.projectDescription1 =
  'Recognized for his practical approach, clarity and dedication, Javier has particularly attracted Brazilian professionals looking to improve their job opportunities by mastering the Spanish language.';
project2.projectDescription2 =
  'Javier has 42 reviews of 5 stars that endorse the quality of his teaching. His classes are 100% online, flexible, and personalized according to the goals and pace of each student. Within real professional contexts, helping students to express themselves confidently in meetings, interviews and presentations.';
project2.projectDescription3 =
  'His intermediate level English proficiency has allowed him to attract students from Europe and English speaking countries. He also has the "How to Teach a Language" certificate awarded by Preply as a support to his language pedagogy training.';
project2.screenshotProjectSource = screenshot2;
project2.linkedinHref = '#';
/* project2.projectNewWindow = '#'; */

const project3 = new Project('project3');
project3.projectName = 'Más de 5400 lecciones para estudiantes de todo el mundo';
project3.projectDescription1 =
  'Reconocido por su enfoque práctico, claridad y dedicación, Javier ha atraído especialmente a profesionales brasileños que buscan mejorar sus oportunidades laborales dominando el idioma español.';
project3.projectDescription2 =
  'Javier tiene 42 reseñas de 5 estrellas que demuestran la calidad de su enseñanza. Sus clases son 100% online, flexibles y personalizadas según los objetivos y el ritmo de cada alumno. En contextos profesionales reales, ayudando a los estudiantes a expresarse con confianza en reuniones, entrevistas y presentaciones.';
project3.projectDescription3 =
  'Su dominio del inglés a nivel intermedio le ha permitido atraer a estudiantes de Europa y de países de habla inglesa. Además, cuenta con el certificado "How to Teach a Language" otorgado por Preply como respaldo a su formación en pedagogía lingüística.';
project3.screenshotProjectSource = screenshot3;
project3.linkedinHref = '#';
/* project3.projectNewWindow = '#'; */

const arrayProjects = [
  project1,
  project2,
  project3,
];

export {
  titleAbout,
  textContentAboutMe,
  arrayProjects,
  textContentContactMe,
  mailText,
  linkedinAccount,
};
