import { FaDoorOpen, FaCar, FaIdCard, FaCamera } from 'react-icons/fa';
import { GiSecurityGate } from "react-icons/gi";

export const cardData = [
  {
    id: 1,
    icon: <FaDoorOpen />,
    title: "Otomatik Kapı Sistemleri",
    description: "En güncel teknolojik altyapı ile Konya'da otomatik kapı sistemleri kurulumunu gerçekleştiriyoruz.",
    path: "otomatikkapisistemleri",
  },
  {
    id: 2,
    icon: <FaCar />,
    title: "Otomatik Geçiş Sistemleri",
    description: "Uzaktan kumandalara elveda. Otomatik geçiş sistemleri ile yetkilendirilen araçlar beklemeden giriş yapar.",
    path: "otomatikgecissistemleri",
  },
  {
    id: 3,
    icon: <FaCamera />,
    title: "Plaka Tanıma Sistemleri",
    description: "Plaka tanıma sistemi sayesinde, davetsiz misafirler için özel güvenlik, yetkilendirilmiş araçlar için pratik geçiş sağlıyoruz.",
    path: "plakatanimasistemleri",
  },
  {
    id: 4,
    icon: <FaIdCard />,
    title: "Kartlı Geçiş Sistemleri",
    description: "Kartlı geçiş sistemleri ile güvenliğiniz emin ellerde. Kart yetkilendirmesi ile istenmeyen girişleri engelleyin.",
    path: "kartligecissistemleri",
  },
  {
    id: 5,
    icon: <GiSecurityGate />,
    title: "Turnike Geçiş Sistemleri",
    description: "Yüksek güvenlikli alanlarda giriş-çıkışı düzenlemek için turnike geçiş sistemleri ile personel ve ziyaretçi takibini kolayca yönetin.",
    path: "turnikegecissistemleri",
  }
];