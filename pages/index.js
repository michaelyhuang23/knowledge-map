import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [subject, setSubject] = useState("Physics");
  return (
    <>
      <Header subject={subject} setSubject={setSubject}/>
      <Map />
      <Resources />
    </>
  )
}