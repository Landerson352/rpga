// import { assign, map, remove } from 'lodash';
// import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
//
// import base from '../base';
// import paths from '../paths';
// import { characterSpec } from '../specs';
// import ContentLoader from './ContentLoader';
// import Icon from './Icon';
// import Portrait from './Portrait';
//
// class Characters extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       characters: [],
//       isLoading: true,
//     };
//
//     this.deleteCharacter = this.deleteCharacter.bind(this);
//   }
//   componentDidMount(){
//     const { uid } = this.context.user;
//
//     this.ref = base.bindToState(`users/${uid}/characters`, {
//       context: this,
//       state: 'characters',
//       asArray: true,
//       keepKeys: true,
//       queries: {
//         orderByChild: 'name',
//         //limitToFirst: 2,
//       },
//       then: () => {
//         this.setState({ isLoading: false });
//       },
//     });
//   }
//   componentWillUnmount(){
//     base.removeBinding(this.ref);
//   }
//   deleteCharacter(key) {
//     const { uid } = this.context.user;
//     base.remove(`users/${uid}/characters/${key}`);
//   }
//   render() {
//     const { characters, isLoading } = this.state;
//
//     return (
//       <div>
//         <h1>Characters</h1>
//         <ContentLoader isLoading={isLoading} align="center">
//           <ul className="characterlist">
//             <li>
//               <Link to={ paths.characterCreate() } className="characterlistitem">
//                 <div className="characterlistitem__portrait portrait">
//                   <Icon name="plus"/>
//                 </div>
//                 <div className="characterlistitem__name">New Character</div>
//               </Link>
//             </li>
//             {map(characters, (character) => {
//               const { key, imageFile, name, power } = characterSpec(character);
//               return (
//                 <li key={key}>
//                   <Link to={ paths.character(key) } className="characterlistitem">
//                     <Portrait imageFile={imageFile} />
//                     <div className="characterlistitem__name">{ name }</div>
//                   </Link>
//                   {/*<button className="btn btn-sm btn-danger" onClick={ () => { this.deleteCharacter(key) } }>delete</button>*/}
//                 </li>
//               )
//             })}
//           </ul>
//         </ContentLoader>
//
//     </div>
//     );
//   }
// }
//
// Characters.contextTypes = {
//   user: PropTypes.object.isRequired,
// };
//
// export default Characters
