// Big Inversion
import React from "react";

const PersonCard = (props) => {
  return (
    <div>
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <hr/>
    </div>
  );
};
export default PersonCard;

// class PersonCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Age: this.props.age,
//     };
//   }
//   anotherYear = () => {
//     this.state.Age += 1;
//     this.setState({ Age: this.state.Age });
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.props.lastName}, {this.props.firstName}
//         </h1>
//         <p>Age: {this.state.Age}</p>
//         <p>Hair Color: {this.props.hair}</p>
//         <button onClick={this.anotherYear}>
//           Birthday Button for {this.props.firstName} {this.props.lastName}
//         </button>
//         <hr />
//       </div>
//     );
//   }
// }

// export default PersonCard;
