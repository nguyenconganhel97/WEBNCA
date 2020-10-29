//Import kết nối tới react-redux
import { connect } from 'react-redux'
//Import action dùng để dispatch
// import { actAddNote } from '../../actions/index.js'
// import React, { useState, useRef } from 'react';
import { createStore } from 'redux';

//step 1 : Define a reducer
//Thuc hien xy ly cac action
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
};
//Khong co cach nao thay doi State trong reducer ngoai viec goi dispatch

//step 2 : Init store
//Lay du lieu ma ham cua reducer tra ve -- Lien ket voi ong do
let store = createStore(counter);

//step 3 : Gui state den UI

// store.subscribe(() => {
//   console.log("LOG1", store.getState())
// });



function onChangeRedux() {
  store.dispatch({
    type: "INCREMENT"
  });
  console.log("LOGCA",store.getState());
}

function appRedux(props) {

  return (
    <div>
      <h1>Nguyen cong Anh</h1>
      <button onClick={onChangeRedux.bind(this)}>Change Redux</button>

    </div>

  );
}

//Export component với két nối redux.
export default appRedux;
// export default connect(mapStateToProps, mapDispatchToProps)(appRedux)