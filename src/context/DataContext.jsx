import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import Swal from 'sweetalert2';
import DefaultPersonImage from '../assets/img/DefaultPerson1.png';
import { initialState, reducer } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  //App'teki state ve metotlar 
  // const [persons, setPersons] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [search, setSearch] = useState("");
  // const [selectedBloodGroup, setSelectedBloodGroup] = useState("All Persons");
  // const [selectedPerson, setSelectedPerson] = useState("");

  // const [personImage, setPersonImage] = useState("");
  // const [personName, setPersonName] = useState("");
  // const [personSurname, setPersonSurname] = useState("");
  // // const [personAge, setPersonAge] = useState("");
  // const [personBirthdate, setPersonBirthdate] = useState("");
  // const [personEposta, setPersonEposta] = useState("");
  // const [personPhoneNumber, setPersonPhoneNumber] = useState("");
  // const [personCity, setPersonCity] = useState("City of Donor");
  // const [personBloodGroup, setPersonBloodGroup] = useState("Select a Blood Group");
  // const [personDescription, setPersonDescription] = useState("");

  // const [donationCount, setDonationCount] = useState(0); // Bağış sayısı
  // const [lastDonationDate, setLastDonationDate] = useState(""); // Son bağış tarihi
  // const [previousDonationDates, setPreviousDonationDates] = useState([]); // Önceki bağış tarihleri

  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedPerson, persons } = state;

  //!Kişi Ekleme
  const AddPerson = async (newPerson) => {
    let url = "http://localhost:3005/persons";
    if (!selectedPerson) {
      //Frontend te ekleme(pasif)
      // setPersons([...persons, newPerson]);
      newPerson.id = (Number(persons[persons.length - 1].id) + 1).toString();

      //!case-19
      dispatch({ type: "AddPerson", newPerson });
      // setPersons(prev => [...prev, newPerson]);

      //Backend te ekleme(aktif)
      const response = await axios.post(url, newPerson);
      console.log("Eklenen kitap", response.data);

    }
    else  //kitap düzenleme kısmı
    {
      //Backend te düzenleme
      url += `/${selectedPerson.id}`;
      const repsonse = await axios.put(url, newPerson);

      //Frontend te düzenleme
      newPerson.id = selectedPerson.id;

      //!case-21
      dispatch({ type: "EditPerson", newPerson })
      // setPersons(prev => prev.map(person => {
      //   if (person.id === selectedPerson.id) {
      //     return { ...newPerson };
      //   }
      //   else {
      //     return { ...person };
      //   }
      // }))
      // setSelectedPerson("");

    }

  }

  //!Kişi Silme
  const DeletePerson = async (id) => {
    //frontend silme(pasif silme)
    // setPersons(persons.filter(statePerson => statePerson.id !== id))

    //!case-20
    dispatch({ type: "DeletePerson", id });
    // setPersons(prev => prev.filter(statePerson => statePerson.id != id));

    //backend silme(aktif silme)
    const url = `http://localhost:3005/persons/${id}`;
    // const response =await axios.delete(url);       //!aktif silmedir.Tehlikelidir
    const response = await axios.patch(url, { isDeleted: true });

  }

  //!api ile json dan kişileri görüntüleme
  const GetPersons = async () => {
    const url = "http://localhost:3005/persons";
    const response = await fetch(url);
    const persons = await response.json();

    //!case-1
    dispatch({ type: "GetPersons", payload: persons });
    // setPersons(persons);
  }

  //!Api den categorileri getirme
  const getCategories = async () => {
    const url = "http://localhost:3005/bloodGroup";
    const response = await axios.get(url);
    const categories = await response.data;

    //!case-2
    dispatch({ type: "GetCategories", payload: categories });
    // setCategories(categories);

  }


  //!USEEFFECT kullanma
  useEffect(() => {
    GetPersons();
    getCategories();
  }, [])


  //Form'daki state ve metotlar
  const cities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan",
    "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu",
    "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne",
    "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari",
    "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman",
    "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli",
    "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir",
    "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa",
    "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
  ];



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPerson) {
      const existPerson = persons.find(
        person =>
          person.eposta.toLowerCase() === state.personEposta.toLowerCase()
      );


      if (existPerson) {
        alert("A contact with this name and email already exists!");

        return;

      }

    }


    AddPerson({
      name: state.personName,
      surname: state.personSurname,
      birthdate: state.personBirthdate,
      eposta: state.personEposta,
      phoneNumber: state.personPhoneNumber,
      city: state.personCity,
      bloodGroup: state.personBloodGroup,
      description: state.personDescription,
      image: state.personImage ? state.personImage : DefaultPersonImage,
      donationCount: state.donationCount,  // Bağış sayısı
      lastDonationDate: state.lastDonationDate,  // Son bağış tarihi
      previousDonationDates: state.selectedPerson ? [...selectedPerson.previousDonationDates, state.lastDonationDate] : state.previousDonationDates  // Önceki bağış tarihleri

    });


    //!Form resetleme işlemi
    dispatch({ type: "formReset" })
    // setPersonName("");
    // setPersonSurname("");
    // setPersonBirthdate("");
    // setPersonEposta("");
    // setPersonPhoneNumber("");
    // setPersonCity("City of Donor");
    // setPersonBloodGroup("Select a Blood Group");
    // setPersonImage("");
    // setPersonDescription("");
    // setDonationCount(0); // sıfırlama
    // setLastDonationDate(""); // sıfırlama
    // setPreviousDonationDates("");
  }

  // useEffect(() => {
  //   if (selectedPerson) {
  //     setPersonName(selectedPerson.name);
  //     setPersonSurname(selectedPerson.surname);
  //     // setPersonAge(selectedPerson.age);
  //     setPersonBirthdate(selectedPerson.birthdate);
  //     setPersonEposta(selectedPerson.eposta);
  //     setPersonPhoneNumber(selectedPerson.phoneNumber);
  //     setPersonCity(selectedPerson.city);
  //     setPersonBloodGroup(selectedPerson.bloodGroup);
  //     setPersonImage(selectedPerson.image);
  //     setPersonDescription(selectedPerson.description);
  //     setDonationCount(selectedPerson.donationCount); // mevcut bağış sayısı
  //     setLastDonationDate(selectedPerson.lastDonationDate); // son bağış tarihi
  //     setPreviousDonationDates([...selectedPerson.previousDonationDates, lastDonationDate]);   // Önceki bağış tarihlerini güncelle
  //     console.log(selectedPerson.previousDonationDates);


  //   }
  // }, [selectedPerson])



  useEffect(() => {
    if (state.personImage) {
      Swal.fire({
        title: "Resim Önizleme",
        text: "Girdiğiniz URL'ye ait resim:",
        imageUrl: state.personImage,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Girdiğiniz resim"
      });
    }
  }, [state.personImage]);


  return <DataContext.Provider value={{
    DeletePerson, handleSubmit,cities, state, dispatch
  }}>
    {children}

  </DataContext.Provider>


}

export default DataContext;