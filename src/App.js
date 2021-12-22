import React, { Component } from 'react';


import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      members: [
        {
          name: "Andreia Traila",
          title:"Soprano",
          age: 27,
          passion:"fancyness",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/244432978_4459886244076436_3637556022008222010_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=2MVJjL3CzSgAX-2Iee2&_nc_ht=scontent.fotp3-3.fna&oh=00_AT98fAtjLI2Kom0eM40NzziSldBgbE2Pjj2ABfTgGkJd7Q&oe=61C810EE"
        },
        {
          name: "Andra Calota",
          title:"Soprano",
          age: 20,
          passion:"don't know",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/267756448_6940729929301095_6939772929544682285_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ezvrz7L4Cg4AX_ut8Cg&tn=o_cWoslPjHKuQU54&_nc_ht=scontent.fotp3-2.fna&oh=00_AT_Nu6f_hSvidaXTlzjOkQKOdqGRrlL8LFV5mpPqHeq9Yw&oe=61C76915"
        },
        {
          name: "Ileana Ciutan",
          title:"Soprano",
          age: 32,
          passion:"editing stuff",
          photo: "https://scontent.fotp3-1.fna.fbcdn.net/v/t1.6435-9/c0.247.640.640a/s851x315/118817923_3629492070407779_6490574448313150128_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=da31f3&_nc_ohc=0rRF8cEsu2gAX--K0G5&_nc_ht=scontent.fotp3-1.fna&oh=00_AT8XEhhvkxjDcbSIHHmhTwHro-bAyMrDRhRRGIWQknuJ9w&oe=61E9EC02"
        },
        {
          name: "Larisa Nae",
          title:"Soprano",
          age: 30,
          passion:"being rich",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/s851x315/185807532_3897065913663713_5281345008755686465_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=AKzJ1hnDCpgAX8T9Cud&_nc_ht=scontent.fotp3-3.fna&oh=00_AT8FLBCzbiUnmveL21SkV9-3evrOGbMxJiBjwV0c6GAwrA&oe=61E96641"
        },
        {
          name: "Lorena Pavel",
          title:"Soprano",
          age: 21,
          passion:"fashion",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t31.18172-8/c0.228.1356.1356a/s851x315/21753402_548645118815289_7372096116202250348_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=chMR8kYDinAAX80906w&_nc_ht=scontent.fotp3-2.fna&oh=00_AT9LenXp8etbgfNV7kvsmFZHzssIHUtODmBDvLdPYjWuLw&oe=61E730B5"
        },
        {
          name: "Rebeca Romas",
          title:"Soprano",
          age: 27,
          passion:"being a diva",
          photo: "https://scontent.fotp3-1.fna.fbcdn.net/v/t1.6435-9/187478398_5433073256734260_6920062483493697540_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=M7XOQJtg6HQAX8l9RCs&tn=o_cWoslPjHKuQU54&_nc_ht=scontent.fotp3-1.fna&oh=00_AT_XJ2vEz8Cb-crm5nQq71B2ErRTNyCP2k0iRitR0fIudQ&oe=61E90DA0"
        },
        {
          name: "Amalia Marzac",
          title:"Alto",
          age: 28,
          passion:"writing",
          photo:"https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/c342.0.1365.1365a/s851x315/269118414_10221712267500316_5699217625414165981_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=o_7hp4mz3zMAX_w47tO&_nc_ht=scontent.fotp3-3.fna&oh=00_AT_XIfSk-rgq-abYY2_bPazo1fcDLOvxMGLjCWCZ-QIRUg&oe=61C8604E"
        },
        {
          name: "Ebriana Matei",
          title:"Alto",
          age: 24,
          passion:"flowers",
          photo:"https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/48380533_1967834869966025_6049828205148241920_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=drAjhrUwQ0oAX_DB0mR&_nc_ht=scontent.fotp3-3.fna&oh=00_AT_rl41_4DZU-p9MMRzOqAEWxox4KE3XT4KET5QvzU187g&oe=61EA7011"
        },
        {
          name: "Florentina Mageri",
          title:"Alto",
          age: 28,
          passion:"design",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t1.18169-9/13226948_1035835146484300_8897058685535233047_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=uKFWuMzlAWcAX-JhZ87&_nc_ht=scontent.fotp3-2.fna&oh=00_AT-_50vnbo3yF82oWVcQyFfKcQbnFtC7p_6TYReWf6Ja9g&oe=61E7984F"
        },
        {
          name: "Magdalena Cojocaru",
          title:"Alto",
          age: 29,
          passion:"order",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/218003466_7785136061511494_4427524014408677775_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=9CLf_ijwMT4AX-yOIln&_nc_ht=scontent.fotp3-3.fna&oh=00_AT-iWPaJCDH8fGLc5JgZ2kf1wzQB1JpxNjvv0MMUx6AORA&oe=61C8C85F"
        },
        {
          name: "Maria Chira",
          title:"Alto",
          age: 27,
          passion:"relationships",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/248908732_4686952124689172_7540099719192780251_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EDTwMmSxNXQAX_9Et65&_nc_ht=scontent.fotp3-3.fna&oh=00_AT_AryWAPymNQ3fN2tM8QzeaV_VecGsnuUl88L2inA7fDg&oe=61C7C6F1"
        },
        {
          name: "Adrian Butuc",
          title:"Tenor",
          age: 29,
          passion:"being smart",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/s851x315/213651131_4274810585916450_7902461128312149005_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=JLttbPe7uO4AX8YVy9r&_nc_ht=scontent.fotp3-3.fna&oh=00_AT_kM8cRGwlhX_lIhjvQuyd1Vq4tticVq8C5yqC4Ys9_cA&oe=61C80158"
        },
        {
          name: "Beniamin Traila",
          title:"Tenor",
          age: 30,
          passion:"sephora and stuff",
          photo: "https://scontent.fotp3-1.fna.fbcdn.net/v/t39.30808-6/s851x315/263559730_6683935001648299_5353862330550421927_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_ohc=egwf2STsDG8AX81G-kG&_nc_ht=scontent.fotp3-1.fna&oh=00_AT9Eqrk8a8AYHFqANInfTBGypo17Mw6bCQRoPWo08Q3XUQ&oe=61C810FF"
        },
        {
          name: "Bogdan Delea",
          title:"Tenor",
          age: 29,
          passion:"'Vindecatorul'",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t31.18172-8/c0.225.1365.1365a/s851x315/18620882_1555909141109923_4763288568795126229_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=3Nv4q7qcdcAAX8dmr1J&_nc_ht=scontent.fotp3-2.fna&oh=00_AT9vf0D0CdjECc5adk0IhEFKy71h5ChCojei5NonN-xmuQ&oe=61E96DE6"
        },
        {
          name: "Alex David",
          title:"Bass",
          age: 26,
          passion:"being 'autista'",
          photo: "https://scontent.fotp3-1.fna.fbcdn.net/v/t1.18169-9/11169805_468533523294108_5307631295722116845_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=309344kP_q4AX8P6xYG&_nc_ht=scontent.fotp3-1.fna&oh=00_AT8hbZhHqVy2POy19b8OfVKKDhzr7vSxzXnZahy1941UJQ&oe=61E8B031"
        },
        {
          name: "David Romas",
          title:"Bass",
          age: 29,
          passion:"tennis, Simona Halep",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t39.30808-6/c0.106.640.640a/s851x315/217473618_4051811101538938_7174797599131499622_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=da31f3&_nc_ohc=wE9bCmTqr38AX9NTgpe&tn=o_cWoslPjHKuQU54&_nc_ht=scontent.fotp3-2.fna&oh=00_AT99hLzYcpw0Bx9U7uSZ89ddo3sl-dnpVgXDnqUXwIggAA&oe=61C786B7"
        },
        {
          name: "George Tihan",
          title:"Bass",
          age: 35,
          passion:"being rich and looking young",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t31.18172-8/470317_370178719709117_1041934710_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=wslqHVXh034AX9rTgp8&_nc_ht=scontent.fotp3-2.fna&oh=00_AT_Ca5-Oaxgk_6dcoLcqYY6c7x1HmqMHe32MY4OHqYa7jw&oe=61E79F17"
        },
        {
          name: "Narcis Micu",
          title:"Bass",
          age: 23,
          passion:"being cool",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t1.6435-9/s851x315/131098693_3515947351825777_3761094004642134193_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=da31f3&_nc_ohc=zHo85kGT_poAX8caMcQ&_nc_ht=scontent.fotp3-2.fna&oh=00_AT-L4KuCnYEo2VIBPGZUwqrWw--dOXSsHYAlyxkzgh_4Yw&oe=61E7E4DA"
        },
        {
          name: "Robert Chirita",
          title:"Bass",
          age: 27,
          passion:"games with unisong",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/140819796_220598779694800_7056106049793204514_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qVpGHy5fROcAX9L_Z38&_nc_ht=scontent.fotp3-3.fna&oh=00_AT9fAKKNFJL3ZyfwjBE7V-MYVDFNzNVCAnQ6euhdjW_1dQ&oe=61E73E92"
        },
        {
          name: "Abigail Tucmeanu",
          title:"Pianist",
          age: 27,
          passion:"people",
          photo: "https://scontent.fotp3-1.fna.fbcdn.net/v/t1.6435-9/50663772_2320285257991103_6346148732022554624_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=84a396&_nc_ohc=OxjihddsXOsAX_SaSWQ&_nc_ht=scontent.fotp3-1.fna&oh=00_AT9nkc_KsgfVrbXXOe970cKlcjFE7yHjrjtd6SqTsxzjog&oe=61E7AC15"
        },
        {
          name: "Beniamin Chira",
          title:"Choir master",
          age: 28,
          passion:"thinking",
          photo: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.6435-9/c297.0.1455.1455a/s851x315/130714262_999520057205141_9117906963270723717_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=tQKXb10UmecAX81w6nr&_nc_ht=scontent.fotp3-3.fna&oh=00_AT83ddwHutU9IFAZwVj3tHurtryZkC-muIpc7ZwsKb9Jag&oe=61E91651"
        },
        {
          name: "Claudiu Tucmeanu",
          title:"Guitarist",
          age: 23,
          passion:"being nice to every person alive",
          photo: "https://scontent.fotp3-2.fna.fbcdn.net/v/t1.6435-9/74880697_2620176144670335_2969308735098322944_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FnsYqkekvugAX9z0moj&_nc_ht=scontent.fotp3-2.fna&oh=00_AT_5epQn5QPhvLmn8WXy1IQRXJcw_k4188P4VaOzWpwqXQ&oe=61EA7392"
        }
        
      ],
      searchField: ''
    };

  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({members: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  };

  render() {
    const { members, searchField } = this.state;
    const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Members UniSong</h1>
        <SearchBox placeholder="search member" handleChange={this.handleChange}/>
      <CardList members={filteredMembers}></CardList>
    </div>
  );
}
}

export default App;
