import React, { Component } from 'react';

import './App.css';
import Collection from './components/Collection'
import Navbar from './components/Navbar'


let filterEmployees

class App extends Component {

  state = {
    search: '',
    searchBy: '',
    orderBy: '',
    employeeData: [],
    employeeDisplayData: []
  }



  handleInputChangeSearch = event => {
    this.setState({ search: event.target.value })
  }

  handleFormSearch = event => {
    event.preventDefault()

    if ((this.state.search !== null) || (this.state.search !== '') || (this.state.search.length > 0)) {

      switch (parseInt(this.state.searchBy)) {
        case 1: // Department
          console.log('Department')
          filterEmployees = this.state.employeeData.filter(
            (element) => {
              return element.department.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
          break;
        case 2: // Title
          filterEmployees = this.state.employeeData.filter(
            (element) => {
              return element.job_title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
          break;
        case 3: // Employee Last Name
          filterEmployees = this.state.employeeData.filter(
            (element) => {
              return element.last_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
          break
        case 4: // Employee First Name
          filterEmployees = this.state.employeeData.filter(
            (element) => {
              return element.first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
          break
        default:
          filterEmployees = this.state.employeeData.filter(
            (element) => {
              return element.department.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
          break
      }


      //Now Sort by
      switch (parseInt(this.state.orderBy)) {
        case 1: // Department
          filterEmployees.sort((a, b) => (a.department > b.departement) ? 1 : -1)
          break;
        case 2: // Title
          filterEmployees.sort((a, b) => (a.job_title > b.job_title) ? 1 : -1)
          break;
        case 3: // Employee Last Name
          filterEmployees.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
          break
        case 4: // Employee First Name
          filterEmployees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
          break
        default:
          filterEmployees.sort((a, b) => (a.department > b.departement) ? 1 : -1)
          break;
      }

      this.setState({
        employeeDisplayData: filterEmployees
      })

    }
    else {
      this.setState({
        employeeDisplayData: this.state.employeeData
      })

    }
  }



  handleInputChangeSearchBy = event => {
    this.setState({
      searchBy: event.target.value
    })
  }

  handleInputChangeOrderBy = event => {
    this.setState({
      orderBy: event.target.value
    })
  }

  //Load the employeeData
  componentDidMount() {

    let employees = [{ "id": 1, "first_name": "Staffard", "last_name": "Whacket", "email": "swhacket0@discovery.com", "gender": "Male", "username": "swhacket0", "department": "Sales", "job_title": "Budget/Accounting Analyst I" },
    { "id": 2, "first_name": "Carole", "last_name": "Wedge", "email": "cwedge1@tamu.edu", "gender": "Female", "username": "cwedge1", "department": "Legal", "job_title": "Business Systems Development Analyst" },
    { "id": 3, "first_name": "Goldina", "last_name": "Bonavia", "email": "gbonavia2@cnn.com", "gender": "Female", "username": "gbonavia2", "department": "Sales", "job_title": "Staff Accountant I" },
    { "id": 4, "first_name": "Merwyn", "last_name": "Croser", "email": "mcroser3@zdnet.com", "gender": "Male", "username": "mcroser3", "department": "Legal", "job_title": "VP Quality Control" },
    { "id": 5, "first_name": "Bartel", "last_name": "Trustey", "email": "btrustey4@example.com", "gender": "Male", "username": "btrustey4", "department": "Training", "job_title": "VP Quality Control" },
    { "id": 6, "first_name": "Harlin", "last_name": "Venn", "email": "hvenn5@ucoz.com", "gender": "Male", "username": "hvenn5", "department": "Business Development", "job_title": "Nurse Practicioner" },
    { "id": 7, "first_name": "Cherice", "last_name": "Manoelli", "email": "cmanoelli6@ovh.net", "gender": "Female", "username": "cmanoelli6", "department": "Legal", "job_title": "Marketing Assistant" },
    { "id": 8, "first_name": "Sarina", "last_name": "Abelson", "email": "sabelson7@zimbio.com", "gender": "Female", "username": "sabelson7", "department": "Product Management", "job_title": "Registered Nurse" },
    { "id": 9, "first_name": "Jesse", "last_name": "Escoffier", "email": "jescoffier8@odnoklassniki.ru", "gender": "Female", "username": "jescoffier8", "department": "Accounting", "job_title": "Marketing Assistant" },
    { "id": 10, "first_name": "Gale", "last_name": "Marsy", "email": "gmarsy9@hud.gov", "gender": "Female", "username": "gmarsy9", "department": "Product Management", "job_title": "Financial Analyst" },
    { "id": 11, "first_name": "Humberto", "last_name": "Pietruszewicz", "email": "hpietruszewicza@amazon.com", "gender": "Male", "username": "hpietruszewicza", "department": "Sales", "job_title": "Mechanical Systems Engineer" },
    { "id": 12, "first_name": "Humfrey", "last_name": "Carmichael", "email": "hcarmichaelb@edublogs.org", "gender": "Male", "username": "hcarmichaelb", "department": "Legal", "job_title": "Automation Specialist IV" },
    { "id": 13, "first_name": "Sollie", "last_name": "Dignan", "email": "sdignanc@xing.com", "gender": "Male", "username": "sdignanc", "department": "Services", "job_title": "Account Executive" },
    { "id": 14, "first_name": "Rey", "last_name": "Hailston", "email": "rhailstond@columbia.edu", "gender": "Female", "username": "rhailstond", "department": "Support", "job_title": "Help Desk Technician" },
    { "id": 15, "first_name": "Ami", "last_name": "Korneev", "email": "akorneeve@guardian.co.uk", "gender": "Female", "username": "akorneeve", "department": "Research and Development", "job_title": "Internal Auditor" },
    { "id": 16, "first_name": "Edvard", "last_name": "Bleiman", "email": "ebleimanf@mozilla.com", "gender": "Male", "username": "ebleimanf", "department": "Research and Development", "job_title": "Sales Representative" },
    { "id": 17, "first_name": "Layton", "last_name": "Paten", "email": "lpateng@telegraph.co.uk", "gender": "Male", "username": "lpateng", "department": "Engineering", "job_title": "Automation Specialist I" },
    { "id": 18, "first_name": "Nicko", "last_name": "Jayes", "email": "njayesh@ustream.tv", "gender": "Male", "username": "njayesh", "department": "Legal", "job_title": "Programmer III" },
    { "id": 19, "first_name": "Guthry", "last_name": "Cloy", "email": "gcloyi@weibo.com", "gender": "Male", "username": "gcloyi", "department": "Training", "job_title": "Information Systems Manager" },
    { "id": 20, "first_name": "Delbert", "last_name": "Jobe", "email": "djobej@bing.com", "gender": "Male", "username": "djobej", "department": "Product Management", "job_title": "Software Consultant" },
    { "id": 21, "first_name": "Rolland", "last_name": "Sykora", "email": "rsykorak@123-reg.co.uk", "gender": "Male", "username": "rsykorak", "department": "Marketing", "job_title": "Analog Circuit Design manager" },
    { "id": 22, "first_name": "Friedrich", "last_name": "Junkin", "email": "fjunkinl@tinypic.com", "gender": "Male", "username": "fjunkinl", "department": "Research and Development", "job_title": "Software Engineer IV" },
    { "id": 23, "first_name": "Carce", "last_name": "Tomasek", "email": "ctomasekm@washingtonpost.com", "gender": "Male", "username": "ctomasekm", "department": "Business Development", "job_title": "Executive Secretary" },
    { "id": 24, "first_name": "Yasmin", "last_name": "Dielhenn", "email": "ydielhennn@soup.io", "gender": "Female", "username": "ydielhennn", "department": "Engineering", "job_title": "Senior Cost Accountant" },
    { "id": 25, "first_name": "Sergei", "last_name": "Piggot", "email": "spiggoto@sitemeter.com", "gender": "Male", "username": "spiggoto", "department": "Marketing", "job_title": "Senior Financial Analyst" },
    { "id": 26, "first_name": "Shayne", "last_name": "Jaquest", "email": "sjaquestp@amazon.co.uk", "gender": "Male", "username": "sjaquestp", "department": "Research and Development", "job_title": "Senior Editor" },
    { "id": 27, "first_name": "Hyman", "last_name": "Hostan", "email": "hhostanq@xrea.com", "gender": "Male", "username": "hhostanq", "department": "Legal", "job_title": "Web Designer I" },
    { "id": 28, "first_name": "Penny", "last_name": "Andrey", "email": "pandreyr@tumblr.com", "gender": "Female", "username": "pandreyr", "department": "Business Development", "job_title": "Geologist I" },
    { "id": 29, "first_name": "Andy", "last_name": "Haldon", "email": "ahaldons@macromedia.com", "gender": "Male", "username": "ahaldons", "department": "Business Development", "job_title": "Desktop Support Technician" },
    { "id": 30, "first_name": "Cirillo", "last_name": "Babalola", "email": "cbabalolat@about.com", "gender": "Male", "username": "cbabalolat", "department": "Sales", "job_title": "Software Engineer I" },
    { "id": 31, "first_name": "Mildrid", "last_name": "Ponsford", "email": "mponsfordu@skype.com", "gender": "Female", "username": "mponsfordu", "department": "Support", "job_title": "Programmer Analyst I" },
    { "id": 32, "first_name": "Sara-ann", "last_name": "Lavin", "email": "slavinv@imageshack.us", "gender": "Female", "username": "slavinv", "department": "Engineering", "job_title": "General Manager" },
    { "id": 33, "first_name": "Sandye", "last_name": "Penny", "email": "spennyw@nsw.gov.au", "gender": "Female", "username": "spennyw", "department": "Research and Development", "job_title": "Nuclear Power Engineer" },
    { "id": 34, "first_name": "Devon", "last_name": "Cowan", "email": "dcowanx@goo.gl", "gender": "Female", "username": "dcowanx", "department": "Support", "job_title": "Database Administrator II" },
    { "id": 35, "first_name": "Bernetta", "last_name": "Gobert", "email": "bgoberty@amazon.co.jp", "gender": "Female", "username": "bgoberty", "department": "Human Resources", "job_title": "Statistician I" },
    { "id": 36, "first_name": "Sashenka", "last_name": "Eslemont", "email": "seslemontz@cbc.ca", "gender": "Female", "username": "seslemontz", "department": "Support", "job_title": "Senior Cost Accountant" },
    { "id": 37, "first_name": "Gerald", "last_name": "Reding", "email": "greding10@barnesandnoble.com", "gender": "Male", "username": "greding10", "department": "Accounting", "job_title": "Senior Financial Analyst" },
    { "id": 38, "first_name": "Leoine", "last_name": "Brideoke", "email": "lbrideoke11@mayoclinic.com", "gender": "Female", "username": "lbrideoke11", "department": "Business Development", "job_title": "Physical Therapy Assistant" },
    { "id": 39, "first_name": "Denney", "last_name": "Tythacott", "email": "dtythacott12@thetimes.co.uk", "gender": "Male", "username": "dtythacott12", "department": "Engineering", "job_title": "GIS Technical Architect" },
    { "id": 40, "first_name": "Carleton", "last_name": "Gosz", "email": "cgosz13@state.tx.us", "gender": "Male", "username": "cgosz13", "department": "Marketing", "job_title": "Product Engineer" },
    { "id": 41, "first_name": "Kylie", "last_name": "Bouskill", "email": "kbouskill14@ft.com", "gender": "Female", "username": "kbouskill14", "department": "Business Development", "job_title": "Staff Accountant IV" },
    { "id": 42, "first_name": "Domenic", "last_name": "Papen", "email": "dpapen15@google.it", "gender": "Male", "username": "dpapen15", "department": "Business Development", "job_title": "Recruiter" },
    { "id": 43, "first_name": "Timofei", "last_name": "Basilone", "email": "tbasilone16@pcworld.com", "gender": "Male", "username": "tbasilone16", "department": "Services", "job_title": "Graphic Designer" },
    { "id": 44, "first_name": "Adolf", "last_name": "Scannell", "email": "ascannell17@reddit.com", "gender": "Male", "username": "ascannell17", "department": "Product Management", "job_title": "Senior Sales Associate" },
    { "id": 45, "first_name": "Sly", "last_name": "Burk", "email": "sburk18@domainmarket.com", "gender": "Male", "username": "sburk18", "department": "Training", "job_title": "Assistant Manager" },
    { "id": 46, "first_name": "Carlyle", "last_name": "Law", "email": "claw19@wix.com", "gender": "Male", "username": "claw19", "department": "Sales", "job_title": "Cost Accountant" },
    { "id": 47, "first_name": "Kelcie", "last_name": "Giffen", "email": "kgiffen1a@issuu.com", "gender": "Female", "username": "kgiffen1a", "department": "Sales", "job_title": "Human Resources Assistant I" },
    { "id": 48, "first_name": "Scot", "last_name": "Schollar", "email": "sschollar1b@illinois.edu", "gender": "Male", "username": "sschollar1b", "department": "Legal", "job_title": "Actuary" },
    { "id": 49, "first_name": "Dorey", "last_name": "Flohard", "email": "dflohard1c@free.fr", "gender": "Female", "username": "dflohard1c", "department": "Human Resources", "job_title": "Budget/Accounting Analyst I" },
    { "id": 50, "first_name": "Terri-jo", "last_name": "Caird", "email": "tcaird1d@cam.ac.uk", "gender": "Female", "username": "tcaird1d", "department": "Marketing", "job_title": "Teacher" }]
    this.setState({ employeeData: employees })
    this.setState({ employeeDisplayData: employees })
  }

  render() {
    return (
      <>
        <Navbar keyItem={0}
          handleKey={this.handleFormSearch}
          searchValue={this.state.search}
          handleInputChangeSearch={this.handleInputChangeSearch}
          handleInputChangeSearchBy={this.handleInputChangeSearchBy
          }
          handleInputChangeOrderBy={this.handleInputChangeOrderBy}
        />

        <div id='SearchResults'>
          <Collection employeeDisplay={this.state.employeeDisplayData} />
        </div>
      </>
    )
  }
}
export default App;
