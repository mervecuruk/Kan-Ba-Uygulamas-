export const initialState = {
    persons: [],
    categories: [],
    search: "",
    selectedBloodGroup: "All Persons",
    selectedPerson: "",
    personImage: "",
    personName: "",
    personSurname: "",
    personBirthdate: "",
    personEposta: "",
    personPhoneNumber: "",
    personCity: "City of Donor",
    personBloodGroup: "Select a Blood Group",
    personDescription: "",
    donationCount: 0,
    lastDonationDate: "",
    previousDonationDates: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        //case-1
        case "GetPersons":
            return {
                ...state,
                persons: action.payload
            }

        //case-2
        case "GetCategories":
            return {
                ...state,
                categories: action.payload
            }

        //case-3
        case "formReset":
            return {
                ...state,
                personImage: "",
                personName: "",
                personSurname: "",
                personBirthdate: "",
                personEposta: "",
                personPhoneNumber: "",
                personCity: "City of Donor",
                personBloodGroup: "Select a Blood Group",
                personDescription: "",
                donationCount: 0,
                lastDonationDate: "",
                previousDonationDates: []
            }

        //case-4
        case "personName":
            return {
                ...state,
                personName: action.payload
            }
        //case-5
        case "personSurname":
            return {
                ...state,
                personSurname: action.payload
            }
        //case-6
        case "personBirthdate":
            return {
                ...state,
                personBirthdate: action.payload
            }


        //case-7
        case "personImage":
            return {
                ...state,
                personImage: action.payload
            }

        //case-8
        case "personEposta":
            return {
                ...state,
                personEposta: action.payload
            }

        //case-9
        case "personPhoneNumber":
            return {
                ...state,
                personPhoneNumber: action.payload
            }
        //case-10
        case "personCity":
            return {
                ...state,
                personCity: action.payload
            }

        //case-11
        case "personBloodGroup":
            return {
                ...state,
                personBloodGroup: action.payload
            }
        //case-12
        case "personDescription":
            return {
                ...state,
                personDescription: action.payload
            }
        //case-13
        case "donationCount":
            return {
                ...state,
                donationCount: action.payload
            }

        //case-14
        case "lastDonationDate":
            return {
                ...state,
                lastDonationDate: action.payload
            }

        //case-15
        case "previousDonationDates":
            return {
                ...state,
                previousDonationDates: action.payload
            }

        //case-16
        case "selectedPersonBloodGroup":
            return {
                ...state,
                selectedBloodGroup: action.payload
            }
        //case-17
        case "search":
            return {
                ...state,
                search: action.payload
            }

        //case-18
        case "selectedPerson":
            const choosen=action.person;
            console.log(choosen);
            
            return{
                ...state,
                selectedPerson:choosen,
                personImage: choosen.image,
                personName: choosen.name,
                personSurname: choosen.surname,
                personBirthdate: choosen.birthdate,
                personEposta: choosen.eposta,
                personPhoneNumber: choosen.phoneNumber,
                personCity: choosen.city,
                personBloodGroup: choosen.bloodGroup,
                personDescription: choosen.description,
                donationCount: choosen.donationCount,
                lastDonationDate: choosen.lastDonationDate,
                previousDonationDates: choosen.previousDonationDates //!buna tekrar bir bak.dizi olduğu için çalışmayabilir
                //selectedPerson ? [...selectedPerson.previousDonationDates, lastDonationDate] : previousDonationDates 

            }

        //case-19
        case "AddPerson":
            const newDonors=[...state.persons,action.newPerson]
            return{
                ...state,
                persons:newDonors
            }

        //case-20
        case "DeletePerson":
            const DeleteDonor=state.persons.filter(item=>item.id!==action.id);
            return{
                ...state,
                persons:DeleteDonor
            }
            
        //case-21
        case "EditPerson":
            const EdittedPerson=state.persons.map(item=>{
                if(item.id===state.selectedPerson.id){
                    return{...action.newPerson}
                }
                else{
                    return {...item}
                }
            })
            return{
                ...state,
                persons:EdittedPerson,
                selectedPerson:""
            }

    }
}