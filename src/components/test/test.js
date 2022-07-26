import { useState, useEffect } from 'react';
import { setUser } from 'redux/reducer';
import { useDispatch } from 'react-redux';

import s from './test.module.css';
import {
  useAuthorizeUserMutation,
  useRegisterUserMutation,
  useLogOutUserMutation,
  useRefreshUserMutation,
  useLazyAuthGoogleUserQuery,
  useAddExpenseMutation,
  useLazyGetExpenseQuery,
  useDeleteTransactionMutation
} from '../../redux/kapustaAPI';

export default function Test() {
  const dispatch = useDispatch();
  const [userReg, setUserReg] = useState({});
  const [userAuth, setUserAuth] = useState({});
  const [registerUser] = useRegisterUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();
  const [addExpense] = useAddExpenseMutation();
  const [getExpense]= useLazyGetExpenseQuery()
  const [deleteTransaction]= useDeleteTransactionMutation()
  const onRegSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setUserReg({
      email,
      password,
    });
  };
  const onAuthSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setUserAuth({
      email,
      password,
    });
  };

  useEffect(() => {
    userReg?.email &&
      registerUser(userReg)
        .unwrap()
        .then(() =>
          authorizeUser(userReg)
            .unwrap()
            .then(({ data }) => {
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
  }, [authorizeUser, dispatch, registerUser, userReg]);

  useEffect(() => {
    userAuth?.email &&
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
  }, [authorizeUser, dispatch, userAuth]);
    

   const addTransaction=e=> {
    e.preventDefault()
       const description = e.target.description.value;
       const amount = Number(e.target.amount.value);
    //    const category = e.target.category.value;
       const date = e.target.date.value;
    
       const data={
        description,
        amount,
        category: "Продукты",
        date
       }
       addExpense(data).then(console.log)
  }  
const getTransaction =async()=>{
    const data = await getExpense();
    console.log(data)
} 
const delTransaction =e=>{
    e.preventDefault()
    const id = e.target.id.value;
    deleteTransaction(id);
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
      </div>
          <div>
              <h2>addTransaction</h2>
        <form onSubmit={addTransaction}>
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
        <button type='button' onClick={getTransaction}>getTransaction</button>
        <form onSubmit={delTransaction}>
          <label htmlFor="id">description</label>
          <input type="text" id="id" name="id" />

          <button type="submitt">Submit</button>
        </form>
      </div>
    </div>
  );
}