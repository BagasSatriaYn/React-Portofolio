import HeroImage from "/assets/pasfotosat.jpeg";

const Image = {
  HeroImage,
};

export default Image;
// --- IMPORT ASSETS ---
import HTMLIcon from "/assets/tools/html.jpg";
import CSSIcon from "/assets/tools/css.svg";
import JSIcon from "/assets/tools/js.png";
import PHPIcon from "/assets/tools/php.svg";
import JavaIcon from "/assets/tools/java.png"; // Tambahan baru
import DartIcon from "/assets/tools/dart.png"; // Tambahan baru

// Frameworks & Mobile
import ReactIcon from "/assets/tools/reactjs.png";
import LaravelIcon from "/assets/tools/laravel.jfif";
import TailwindIcon from "/assets/tools/tailwind.png";
import BootstrapIcon from "/assets/tools/bootstrap.png";
import FlutterIcon from "/assets/tools/flutter.png"; // Tambahan baru
import NodeIcon from "/assets/tools/nodejs.png";
import ViteIcon from "/assets/tools/vite.png";

// Tools & Database
import MySQLIcon from "/assets/tools/mysql.png"; 
import PostmanIcon from "/assets/tools/postman.png"; 
import VSCodeIcon from "/assets/tools/vscode.png";
import GithubIcon from "/assets/tools/github.png";
import FigmaIcon from "/assets/tools/figma.png";
import CanvaIcon from "/assets/tools/canva.png";

export const listTools = [
  // 1. Languages (Fundamentals)
  // 1. Languages (Fundamentals)
  { id: 1, gambar: HTMLIcon, nama: "HTML 5", ket: "Language", dad: "100" },
  { id: 2, gambar: CSSIcon, nama: "CSS 3", ket: "Language", dad: "200" },
  { id: 3, gambar: JSIcon, nama: "Javascript", ket: "Language", dad: "300" },
  { id: 4, gambar: PHPIcon, nama: "PHP", ket: "Language", dad: "400" },
  { id: 5, gambar: JavaIcon, nama: "Java", ket: "Language", dad: "500" },
  { id: 6, gambar: DartIcon, nama: "Dart", ket: "Language", dad: "600" },

  // 2. Frameworks & Mobile
  { id: 7, gambar: ReactIcon, nama: "React JS", ket: "Framework", dad: "700" },
  { id: 8, gambar: LaravelIcon, nama: "Laravel", ket: "Framework", dad: "800" },
  { id: 9, gambar: FlutterIcon, nama: "Flutter", ket: "Framework", dad: "900" },
  { id: 10, gambar: TailwindIcon, nama: "Tailwind CSS", ket: "Framework", dad: "1000" },
  { id: 11, gambar: BootstrapIcon, nama: "Bootstrap", ket: "Framework", dad: "1100" },
  { id: 12, gambar: NodeIcon, nama: "Node JS", ket: "Javascript Runtime", dad: "1200" },
  { id: 13, gambar: ViteIcon, nama: "Vite", ket: "Build Tool", dad: "1300" },

  // 3. Workflow, Database & Apps
  { id: 14, gambar: MySQLIcon, nama: "MySQL", ket: "Database", dad: "1400" },
  { id: 15, gambar: PostmanIcon, nama: "Postman", ket: "API Testing", dad: "1500" },
  { id: 16, gambar: VSCodeIcon, nama: "Visual Studio Code", ket: "Code Editor", dad: "1600" },
  { id: 17, gambar: GithubIcon, nama: "Github", ket: "Repository", dad: "1700" },
  { id: 18, gambar: FigmaIcon, nama: "Figma", ket: "Design App", dad: "1800" },
  { id: 19, gambar: CanvaIcon, nama: "Canva", ket: "Design App", dad: "1900" },
];

import Proyek1 from "/assets/proyek/proyek7.png";
import Proyek2 from "/assets/proyek/proyek8.png";
import Proyek3 from "/assets/proyek/proyek9.jpeg";
import Proyek4 from "/assets/proyek/proyek1.jpeg";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Bebas Tanggungan",
    desk: "Mengembangkan website Sistem Bebas Tanggungan  Dengan Menerapkan teknologi front-end (HTML, CSS, Bootstrap, JavaScript) dan back-end (PHP, SQL Server).",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap", "PHP", "SQL Server"],
    dad: "200",
    link: "https://github.com/BagasSatriaYn/PBL_Sibeta",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Sistem Akreditasi Jurusan",
    desk: "Mengembangkan website sistem informasi akreditasi jurusan menggunakan framework Laravel (PHP) dengan template Bootstrap.",
    tools: ["HTML", "CSS", "Javascript", "Laravel", "PHP", "MySQL"],
    dad: "300",
    link: "https://github.com/BagasSatriaYn/SISTEM_AKREDITASI"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Mobile App HRIS",
    desk: "Pengembangan aplikasi manajemen SDM berbasis mobile yang mencakup fitur presensi real-time, pengajuan cuti, dan slip gaji digital yang terintegrasi dengan dashboard admin.",
    tools: ["Flutter", "Dart", "Laravel", "php", "MySQL"],
    dad: "400",
    link: "https://github.com/BagasSatriaYn/PBL_HRISKel3"

  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Portofolio",
    desk: "Platform showcase pribadi yang dibangun menggunakan Vite dan Tailwind CSS, mengintegrasikan fitur looping data dinamis serta sistem pre-loader untuk pengalaman browsing yang profesional.a",
    tools: ["Vite", "ReactJS", "TailwindCSS", "javascript", "NodeJS"],
    dad: "500",
    link: ""  
  },
];

import Sertifikat1 from "/assets/sertifikat/revou.png";
import Sertifikat2 from "/assets/sertifikat/ap.png";
import Sertifikat3 from "/assets/sertifikat/ukk-smktelkom.png";
import Sertifikat4 from "/assets/sertifikat/gbp.png";

export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1,
    nama: "Sertifikat RevoU Data Analytics",
    // Fokus pada pengolahan data dan visualisasi (Online Course)
    desk: "Menyelesaikan kursus intensif Data Analytics, mempelajari pengolahan dataset besar, teknik pembersihan data, serta visualisasi data untuk pengambilan keputusan bisnis.",
    tools: ["Excel", "SQL", "Tableau", "Python", "Google Looker Studio"],
    dad: "200",
    link: "https://drive.google.com/file/d/1_bzLgm1VGH046YoAgXcxtyUnR088KeHe/view?usp=drive_link"
  },
  {
    id: 2,
    gambar: Sertifikat2,
    nama: "Sertifikat Magang PT. Angkasa Pura I - Juanda",
    // Fokus pada Airport Technology Section
    desk: "Melaksanakan magang di bagian Airport Technology, berkontribusi dalam pemeliharaan infrastruktur IT bandara dan mendukung sistem informasi operasional penerbangan.",
    tools: ["Networking", "Troubleshooting", "Hardware Maintenance", "System Monitoring"],
    dad: "300",
    link: "https://drive.google.com/file/d/1Mh2iVTLlNWabMDPeeF4i3qFoOdfyYXRR/view?usp=drive_link"
  },
  {
    id: 3,
    gambar: Sertifikat3,
    nama: "Sertifikat UKK SMK Telkom Malang x PT. Beon Intermedia",
    // Fokus pada Cloud Computing (TKJ)
    desk: "Sertifikasi Uji Kompetensi Keahlian di bidang Cloud Computing, melakukan konfigurasi server, manajemen hosting, dan implementasi layanan cloud berbasis Linux.",
    tools: ["Linux Server", "Cloud Computing", "Nginx", "Web Server", "Networking"],
    dad: "400",
    link: "https://drive.google.com/file/d/12oYCch6NRSA1nufMc73LVBcXlE8orNP9/view?usp=drive_link"
  },
  {
    id: 4,
    gambar: Sertifikat4,
    nama: "Sertifikat Relawan Generasi Bebas Plastik x ParagonCorp",
    // Fokus pada aktivitas relawan/sosial
    desk: "Berpartisipasi aktif sebagai relawan lingkungan dalam program sosial ParagonCorp, berfokus pada kampanye pengurangan limbah plastik dan edukasi keberlanjutan.",
    tools: ["Communication", "Teamwork", "Public Awareness", "Social Campaign"],
    dad: "500",
    link: "https://drive.google.com/file/d/11B9JRJqAnnb52yFYvmHx_UGbxhYQJumr/view?usp=drive_link"
  },
];
