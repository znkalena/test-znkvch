import React from "react";
import Input from "./input";
import searchIcon from "../img/S.svg";
import Button from "./button";
import VacationsList from "./vacations";

const url = 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password';
const secretKey = 'GEU4nvd3rej*jeh.eqp';

const params = new URLSearchParams();
params.append('login', 'sergei.stralenia@gmail.com');
params.append('password', 'paralect123');
params.append('client_id', '2356');
params.append('client_secret', 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948');
params.append('hr', '0');

class Section extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        searchText: "Введите название вакансии",
        vacations: [{
        id:1,
        profession:'Менеджер-дизайнер',
        firm_name:'sss',
        towntitle:'new urengoy',            
        type_of_worktitle :'full day',
        payment_to:'7000',
        payment_from:'',
        currency:''
    },
    {
        id:2,
        profession:'Ведущий графический дизайнер НЕ УДАЛЕННО',
        firm_name:'vvv',
        towntitle:'moskow',            
        type_of_worktitle :'full day',
        payment_to:'',
        payment_from:'8000',
        currency:''
    }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
}

    componentDidMount() {
    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-secret-key': secretKey
        },
        body: params
    })
        .then(response => response.json())
        .then(data => {
        console.log(data)
        this.setState({ vacations: [...data] });
        })
        .catch(error => {
        console.error(error);
        });
}

handleChange(event) {
    this.setState({ searchText: event.target.value });
}

handleSearch(event) {
    event.preventDefault();
    const searchText = this.state.searchText;
    const filteredVacations = this.state.vacations.filter(vacation => {
    const profession = vacation.profession.toLowerCase();
    const firmName = vacation.firm_name.toLowerCase();
    const searchQuery = searchText.toLowerCase();
    return profession.includes(searchQuery) || firmName.includes(searchQuery);
    });
    this.setState({ vacations: filteredVacations });
    
}

handleClick() {
    this.setState({ searchText: '' });
}

render() {
    return (
        <section>
        <div className="wrapper__search">
            <label htmlFor="Input">
            <img src={searchIcon} alt="search icon" />
            </label>
            <Input
            type="search"
            className="search__input"
            placeholder={this.state.searchText}
            onChange={this.handleChange}
            onClick={this.handleClick}
            value={this.state.searchText}
            />
            <Button className="search__btn" onClick={this.handleSearch} type="button">
            Поиск
            </Button>
        </div>
        <VacationsList vacations={this.state.vacations} />
        </section>
    );
}
}

        export default Section

        