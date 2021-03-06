// import { find, map } from 'lodash';
// import React, { Component, PropTypes } from 'react';
// import cn from 'classnames';
//
// import base from '../base';
// import { ItemSlots } from '../constants';
// import DraggableItem from './DraggableItem';
// import GenericDropTarget from './GenericDropTarget';
//
// class PaperDoll extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       itemSlots: map(ItemSlots, (s) => s),
//       isLoading: true,
//     };
//
//     this.getItemInSlot = this.getItemInSlot.bind(this);
//     this.handleDrop = this.handleDrop.bind(this);
//   }
//   componentDidMount(){
//     const { characterKey, uid } = this.props;
//
//     this.ref = base.bindToState(`users/${uid}/characters/${characterKey}/items`, {
//       context: this,
//       state: 'items',
//       asArray: true,
//       keepKeys: true,
//       then: () => {
//         this.setState({isLoading: false})
//       },
//     });
//   }
//   componentWillUnmount(){
//     base.removeBinding(this.ref);
//   }
//   handleDrop(data, slot) {
//     const { characterKey, uid } = this.props;
//     const { item } = data;
//     if(item.slot !== slot) {
//       // unequip old item
//       const oldItem = this.getItemInSlot(slot);
//       if(oldItem) {
//         base.remove(`users/${uid}/characters/${characterKey}/items/${oldItem.key}/slot`);
//       }
//       // equip item
//       base.update(`users/${uid}/characters/${characterKey}/items/${item.key}`, {
//         data: { slot }
//       });
//     }
//   }
//   getItemInSlot(slot) {
//     return find(this.state.items, { slot });
//   }
//   render() {
//     const { itemSlots } = this.state;
//
//     return (
//       <div className="pane">
//         <div className="pane__heading">Equipment</div>
//         <div className="pane__content">
//           <div className="paperdoll">
//             {itemSlots.map(({ accepts, slot }, index) => {
//               const item = this.getItemInSlot(slot);
//               return (
//                 <GenericDropTarget
//                   key={slot}
//                   className={cn('itemslot', `is-${slot}`)}
//                   accepts={accepts}
//                   onDrop={data => this.handleDrop(data, slot)}
//                 >
//                   { item ? (
//                     <DraggableItem item={item} />
//                   ) : null }
//                 </GenericDropTarget>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// PaperDoll.propTypes = {
//   uid: PropTypes.string.isRequired,
//   characterKey: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.string,
//   ]).isRequired,
// };
//
// export default PaperDoll;
