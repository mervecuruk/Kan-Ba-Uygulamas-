import React, { useContext, useEffect } from 'react'
import '../assets/styles/person-detail.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import DefaultPersonImage from '../assets/img/DefaultPerson1.png';
import DataContext from '../context/DataContext';


const PersonDetailPage = () => {

  const { personId } = useParams(); // URL parametresinden id'yi alıyoruz
  const { state } = useContext(DataContext);
  // const [Person, setPersons] = useState([]);
const {persons}=state;
  let person;
  //sayfayı yenilediğinde de gelmesi için bir metot lazım
  // const GetPersons = async () => {
  //   const url = "http://localhost:3005/persons";
  //   const response = await fetch(url);
  //   const persons = await response.json();
  //   setPersons(persons);
  // }


  // useEffect(()=>{

  // if(persons.length>0){
  //    person = persons.find(p => p.id === personId);
  //  console.log(person);
  //  console.log(personId);

  // }
  // },[persons])




  return (
    <div className='back'>
      <div className="person-detail">
        <div className="person-header">
          <img src={persons[personId - 1].image || DefaultPersonImage} alt={persons[personId - 1].name} className="person-image" />
          <div className="person-name">
            <h1>{persons[personId - 1].name} {persons[personId - 1].surname}</h1>
            <p>{persons[personId - 1].bloodGroup}</p>
          </div>
        </div>

        <div className="person-info">
          <div className="info-section">
            <h2>Kişisel Bilgiler</h2>
            <p><strong>Doğum Tarihi:</strong> {persons[personId - 1].birthdate || "Bilgi yok"}</p>
            <p><strong>Açıklama:</strong> {persons[personId - 1].description || "Herhangi bir açıklama yok."}</p>
          </div>

          <div className="info-section">
            <h2>İletişim Bilgileri</h2>
            <p><strong>E-Posta:</strong> {persons[personId - 1].eposta || "Bilgi yok"}</p>
            <p><strong>Telefon:</strong> {persons[personId - 1].phoneNumber || "Bilgi yok"}</p>
            <p><strong>Şehir:</strong> {persons[personId - 1].city || "Bilgi yok"}</p>
          </div>

          <div className="info-section">
            <h2>Kan Bağışı Bilgileri</h2>
            <p><strong>Bağış Sayısı:</strong> {persons[personId - 1].donationCount || "0"}</p>
            <p><strong>Son Bağış Tarihi:</strong> {persons[personId - 1].lastDonationDate || "Bilgi yok"}</p>
            <p><strong>Önceki Bağış Tarihleri:</strong> {persons[personId - 1].previousDonationDates && Array.isArray(persons[personId - 1].previousDonationDates)
              ? persons[personId - 1].previousDonationDates.join(" || ")
              : "Bilgi yok"}</p>
          </div>
        </div>
      </div>
      <Link to="/donors">
        <div className='back' >Back to donors</div>
      </Link>
    </div>



  );
}


export default PersonDetailPage