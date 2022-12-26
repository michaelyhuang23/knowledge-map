import Header from '../components/Header';
import Map from '../components/Map';
import Resources from '../components/Resources';
import styles from '../styles/Home.module.css';
import { useState } from "react";


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