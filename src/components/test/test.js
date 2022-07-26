import { useState, useEffect } from 'react';
import { setUser, resetUser} from 'redux/reducer';
import { useDispatch,useSelector } from 'react-redux';

import s from './test.module.css';
import {
  useAuthorizeUserMutation,
  useRegisterUserMutation,
  useLogOutUserMutation,
  useRefreshUserMutation,
  useLazyAuthGoogleUserQuery,
  useAddExpenseMutation,
  useLazyGetExpenseQuery,
  useDeleteTransactionMutation,
  useLazyGetPeriodDataQuery
} from '../../redux/kapustaAPI';
import { getSid } from 'redux/selectors';

export default function Test() {
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();
  const [logOutUser] = useLogOutUserMutation()
    const [loginGoogle]= useLazyAuthGoogleUserQuery();



  const [addExpense] = useAddExpenseMutation();
  const [getExpense]= useLazyGetExpenseQuery()
  const [deleteTransaction]= useDeleteTransactionMutation();
  const [refreshUser] = useRefreshUserMutation();
  const [getPeriodData] = useLazyGetPeriodDataQuery()
    const sid = useSelector(getSid)



  const onRegSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userReg ={
      email,
      password,
    };
    registerUser(userReg)
        .unwrap()
        .then(() =>
          authorizeUser(userReg)
            .unwrap()
            .then((data) => {
              dispatch(
                setUser({
                  user: { id: data.userData.id, email: data.userData.email },
                  token: data.accessToken,
                  refreshToken: data.refreshToken,
                  sid: data.sid,
                })
              );
            })
        );
  };
  const onAuthSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userAuth = {
      email,
      password,
    };
    authorizeUser(userAuth).then(({ data }) => {
        dispatch(
          setUser({
            user: { id: data.userData.id, email: data.userData.email },
            token: data.accessToken,
            refreshToken: data.refreshToken,
            sid: data.sid,
          })
        );
      });
  };
  const googleAuth=()=>{
    loginGoogle().then(console.log)
  }
  const onLogOutUser=()=>{
    logOutUser().unwrap().then(()=>dispatch(resetUser()))
  }
  const refreshUserOnClick =()=>{
    refreshUser(sid).unwrap().then((data ) => {console.log(data)
        dispatch(
          setUser({
            token: data.newAccessToken,
            refreshToken: data.newRefreshToken,
            sid: data.newSid,
          })
        );
      })

}


   const addExpenseTransaction = e => {
     e.preventDefault();
     const description = e.target.description.value;
     const amount = Number(e.target.amount.value);
     //    const category = e.target.category.value;
     const date = e.target.date.value;

     const data = {
       description,
       amount,
       category: 'Продукты',
       date,
     };
     addExpense(data).then(console.log);
   };
   const getExpenseTransaction = async () => {
     const data = await getExpense();
     console.log(data);
   };
   const delTransaction = e => {
     e.preventDefault();
     const id = e.target.id.value;
     deleteTransaction(id);
   };
   const getTransactionsByData =()=>{
    const date = '2019-06'
    getPeriodData(date).then(console.log)
   } 
    

  return (
    <div>
      <div>
        <h2>Регистрация</h2>
        <form onSubmit={onRegSubmit}>
          <label htmlFor="regEmail">Email</label>
          <input type="email" id="regEmail" name="email" />
          <label htmlFor="authPassword">Password</label>
          <input type="password" id="regPassword" name="password" />
          <button type="submitt">Submit</button>
        </form>
        <h2>Авторизация</h2>
        <form onSubmit={onAuthSubmit}>
          <label htmlFor="authEmail">Email</label>
          <input type="email" id="authEmail" name="email" />
          <label htmlFor="authPassword">Password</label>
          <input type="password" id="authPassword" name="password" />
          <button type="submitt">Submit</button>
        </form>
        <button type='button' onClick={googleAuth}>GoogleAuth</button>
        <button type='button' onClick={onLogOutUser}>logOut</button>
        <button type='button' onClick={refreshUserOnClick}>refreshUser</button>
      </div>
          <div>
              <h2>addExpenseTransaction</h2>
        <form onSubmit={addExpenseTransaction}>
          <label htmlFor="description">description</label>
          <input type="text" id="description" name="description" />

          <label htmlFor="amount">amount</label>
        <input type="number" id="amount" name="amount" />

            <label htmlFor="date">date</label>
          <input type="date" id="date" name="date" />

          <label htmlFor="category">category</label>
          <input type="text" id="category" name="category" />
          <button type="submitt">Submit</button>
        </form>

        <button type='button' onClick={getExpenseTransaction}>getExpenseTransaction</button>

        <form onSubmit={delTransaction}>
          <label htmlFor="id">description</label>
          <input type="text" id="id" name="id" />
          <button type="submitt">Submit</button>
        </form>
      </div>
      <button type='button' onClick={getTransactionsByData}>getTransactionsByData</button>
    </div>
  );
}