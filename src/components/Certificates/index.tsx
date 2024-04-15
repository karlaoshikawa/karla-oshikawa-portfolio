import CertificateBox from "../CertificateBox";
import certificatesList from "@/data/certificatesList";
import { Certificate } from "@/data/certificatesList";
import style from "./certificates.module.scss"

interface CertificatesProps {
  lang: string;
}

const Certificates: React.FC<CertificatesProps> = ({ lang }) => {
  let trybeCertificates: Certificate[] = [];
  let rocketCertificates: Certificate[] = [];
  let dioCertificates: Certificate[] = [];
  let mixCertificates: Certificate[] = [];

  certificatesList.forEach((certificate) => {
    switch (certificate.school) {
      case "trybe":
        trybeCertificates.push(certificate);
        break;
      case "Dio.me":
        dioCertificates.push(certificate);
        break;
      case "Rocketseat":
        rocketCertificates.push(certificate);
        break;
      default:
        mixCertificates.push(certificate);
        break;
    }
  });

  return (
    <div className={style.certificates_container}>
      <CertificateBox certificates={mixCertificates} />
      <CertificateBox certificates={rocketCertificates} />
      <CertificateBox certificates={dioCertificates} />
      <CertificateBox certificates={trybeCertificates} />
    </div>
  );
};

export default Certificates;
