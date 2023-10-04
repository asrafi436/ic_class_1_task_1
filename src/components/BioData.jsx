import React from 'react';

import Interests from "./Interests";
import PersonalInfo from  "./PersonalInfo";
import   Skills  from "./Skills";

// props = {
//     name: 'Rashed',
//     age: 20,
//     gender: 'Male',
//     email: 'rashed@gmail.com',
//     phone: '023135145123',
//     address: 'Dhaka, 1215',
//     country: 'BD',
//     skills: ['React', 'Redux', 'NodeJs', 'JS', 'WP'],
//     interests: ['Music', 'Plugin Development']
// }



const BioData = (props ) => {

    const {
      name,
      age,
      gender,
      email,
      phone,
      address,
      country,
      skills,
      interests,
    } = props;

    return (
      <div className="bio-data">
        <PersonalInfo
          name={name}
          age={age}
          gender={gender}
          email={email}
          phone={phone}
          address={address}
          country={country}
        />

        <Skills skills={skills} />

        <Interests interests={interests} />
      </div>
    );
}

// function add (a, b) {
//     return a + b
// }
// add(10, 20)
// add(200, 300)
export default BioData;