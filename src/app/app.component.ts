import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'airbnbProject';
  recommendations = [
    {
      source: 'https://a0.muscache.com/im/pictures/998b4270-25d7-4850-8ccf-4350b9a5ab05.jpg',
      name: 'Paris',
      price: 7565
    },
    {
      source: 'https://a0.muscache.com/im/pictures/60145c65-7c36-4ac5-8129-6ae9a0d27a81.jpg',
      name: 'Tokyo',
      price: 6036
    },
    {
      source: 'https://a0.muscache.com/im/pictures/6729455e-af21-4dc3-bfdf-332393d407a8.jpg',
      name: 'London',
      price: 7565
    },
    {
      source: 'https://a0.muscache.com/im/pictures/82af5bc4-ed5b-44d9-9209-ac0f2fbf8986.jpg',
      name: 'Los Angeles',
      price: 6000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/6db93b37-3d4b-49c0-af00-c184a9dd6305.jpg',
      name: 'Barcelona',
      price: 9065
    },
    {
      source: 'https://a0.muscache.com/im/pictures/2767347c-00af-47aa-acca-c8430fcc3c17.jpg',
      name: 'New York',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/bd5f6088-b8e9-4c56-aae7-272fe1a5d7a3.jpg',
      name: 'San Francisco',
      price: 7565
    }
  ];
  luxes = [
    {
      source: 'https://a0.muscache.com/im/pictures/b3f62384-b0a0-4e8a-b667-0352247a5c88.jpg',
      name: 'Seminyak',
      desc: 'SEMINYAK Villa Samuan · Modern Balinese villa near Seminyak Beach',
      price: 700000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/985d58e5-2ebb-4324-87fe-48d209b15b52.jpg',
      name: 'Monteroni D arbia',
      desc: 'Podere Panico Hilltop Romanesque villa just outside Siena',
      price: 700000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/0042e1d7-0b34-4599-b893-eb1f96b10ce5.jpg',
      name: 'St. James',
      desc: 'Atelier House Gated modern villa above the sea',
      price: 700000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/105cce75-93b4-485f-bfb9-579d49bbd3ae.jpg',
      name: 'PUNTA MITA',
      desc: 'Casa Koko Contemporary craft architecture on the beach',
      price: 700000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/dfe1151c-a246-487e-a141-c2403d1a6677.jpg',
      name: 'Peninsula de Papagayo',
      desc: 'El Alma Zen contemporary villa above the Pacific',
      price: 700000
    }
  ];
  places = [
    {
      source: 'https://a0.muscache.com/im/pictures/10833886/1edf8559_original.jpg',
      title: 'The best position in Hvar!',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg',
      title: 'The Joshua Tree House',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/ac9e3d82-e064-4111-bd88-e9abb697ef1f.jpg',
      title: 'The Cozy Place',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/4ea/air/v2/pictures/7ea52b34-8177-45ab-b5ad-d1cb83b6f006.jpg',
      title: 'Modern, Chic Penthouse with Mountain, City & Sea Views',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/21611933/43f6de69_original.jpg',
      title: 'Secluded Intown Treehouse',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/26003118/06bf6fed_original.jpg',
      title: 'Unique Cob Cottage',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/39635618/efd17c53_original.jpg',
      title: 'Private Studio in Sol, Madrid',
      price: 5000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/75266944/7a903102_original.jpg',
      title: 'Vacation house in etno-eco village Humac',
      price: 5000
    }
  ];
  beaches = [
    {
      source: 'https://a0.muscache.com/im/pictures/ab1c393b-17a9-4180-bfb1-c043ad2c3e0a.jpg',
      name: 'San Diego',
      price: 10000
    },
    {
      source: 'https://a0.muscache.com/im/pictures/2d81fac2-0df0-4129-b6a2-af760f049a76.jpg',
      name: 'Cabo San Lucas',
      price: null
    },
    {
      source: 'https://a0.muscache.com/im/pictures/c38037af-6913-4ddf-9950-48d56cdedbcf.jpg',
      name: 'Riviera Maya',
      price: null
    },
    {
      source: 'https://a0.muscache.com/im/pictures/ef121077-18d9-4949-88b3-0a6f8bb84e96.jpg',
      name: 'Puerto Vallarta',
      price: 9900
    },
    {
      source: 'https://a0.muscache.com/im/pictures/89d213eb-1904-44c9-b8ae-815e9935a52a.jpg',
      name: 'Dominican Republic',
      price: 8400
    },
    {
      source: 'https://a0.muscache.com/im/pictures/7988894b-dd0f-4f83-a898-57055dce50fe.jpg',
      name: 'Puerto Rico',
      price: 8000
    }
  ];
  experiences = [
    {
      source:'https://a0.muscache.com/im/pictures/943d0233-e522-40fe-ac16-d39efd49a0eb.jpg',
      name:'This is SINTRA - a Day to Remember !',
      price:5051
    },
    {
      source:'https://a0.muscache.com/im/pictures/cadad952-2ecf-41ad-b8b4-e9cf192d4f88.jpg',
      name:'Sunrise + Secret pool + wild beaches!',
      price:5051
    },
    {
      source:'https://a0.muscache.com/im/pictures/e4ddf168-4042-4db0-b909-55e2c54c52b6.jpg',
      name:'Hot Spring Sanctuary For Two',
      price:5051
    },
    {
      source:'https://a0.muscache.com/im/pictures/610804da-99d8-4f23-bbe5-198e6e12cb03.jpg',
      name:'⭐Magic CENOTES + Hacienda',
      price:5051
    },
    {
      source:'https://a0.muscache.com/im/pictures/45a7e80e-aadf-4cc4-bfaa-361034b85218.jpg',
      name:'Thai Traditional Yantra Tattoo.',
      price:5051
    },
    {
      source:'https://a0.muscache.com/im/pictures/98447a0a-c924-419b-afb8-e2eb9f1407c3.jpg',
      name:'Hot Spring Sunset for Two',
      price:5051
    }
  ]
  spotlightExpericens = [
    {
      source:'https://a0.muscache.com/pictures/b5ca14ba-87c5-4c44-8dbc-35fe514f0746.jpg',
      name:'Airbnb Adventures',
      desc:'Hosted journeys to extraordinary places—all you have to do is show up.',
    },
    {
      source:'https://a0.muscache.com/pictures/9ae4202f-3ab6-4684-8fa8-59af00320dba.jpg',
      name:'Food tours',
      desc:'Sink your teeth into cities around the world with tours led by culinary experts.',
    },
    {
      source:'https://a0.muscache.com/pictures/276de555-5ce7-4300-9080-fb8deee9cb88.jpg',
      name:'History tours',
      desc:'Learn the legends behind landmarks and the secret lives of city streets.',
    },
    {
      source:'https://a0.muscache.com/pictures/52aa45c1-d168-41d5-9149-445c8787358f.jpg',
      name:'Cooking classes',
      desc:'Sample local flavors and take home new skills with hands-on cooking classes by local experts.',
    },
    {
      source:'https://a0.muscache.com/pictures/90fec8f3-d925-4dcc-8688-3f1cebc8addd.jpg',
      name:'Social impact',
      desc:'Try something new while supporting a cause—100% of what you pay goes to a nonprofit.',
    },
    {
      source:'https://a0.muscache.com/pictures/4e8700d7-49f3-4165-b685-0c59524a1186.jpg',
      name:'Concerts',
      desc:'Feel the rhythm with intimate shows in unique spaces and listen to live music like never before.',
    },
    {
      source:'https://a0.muscache.com/pictures/bbaee069-8069-459d-aebd-f527b9ed72e8.jpg',
      name:'Surfing',
      desc:'Catch a wave with experiences hand-picked by the World Surf League.',
    }
  ]
}
