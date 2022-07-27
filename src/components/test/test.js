import { useSelector } from 'react-redux';
import {  useState } from 'react';
import { setUser} from 'redux/reducer';
import { useDispatch} from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import Calendar from 'react-calendar'
import UserMenu from 'components/UserMenu';


import s from './test.module.css';
import {
  useAuthorizeUserMutation,
  useRegisterUserMutation,
  useLazyAuthGoogleUserQuery,
  useAddExpenseMutation,
  useAddIncomeMutation,
  useLazyGetExpenseQuery,
  useLazyGetIncomeQuery,
  useDeleteTransactionMutation,
  useLazyGetPeriodDataQuery,
  useLazyGetUserDataQuery,
  useGetIncomeCategoriesQuery,
  useGetExpenseCategoriesQuery,
  useChangeBalanceMutation
} from '../../redux/kapustaAPI';




export default function Test() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);

  const [registerUser] = useRegisterUserMutation();
  const [authorizeUser] = useAuthorizeUserMutation();
  const [loginGoogle] = useLazyAuthGoogleUserQuery();

  const [getUserData] = useLazyGetUserDataQuery();

  const [addExpense] = useAddExpenseMutation();
  const [addIncome] =useAddIncomeMutation();
  const [getExpense] = useLazyGetExpenseQuery();
  const [getIncome] = useLazyGetIncomeQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();


//   const {data:incomeCategories } = useGetIncomeCategoriesQuery();
//   const {data:expenseCategories } = useGetExpenseCategoriesQuery()
  

  const [getPeriodData] = useLazyGetPeriodDataQuery();

  const [changeBalance] = useChangeBalanceMutation();


//   useEffect(()=>{
    
//     if(window.innerWidth<=768){
        
//         console.log('mobile')
//         // console.log('resized to: ', window.innerWidth, 'x')
//         dispatch(setWidth({width:'mobile'}))
//     }
//     if(window.innerWidth>768){
//         console.log('tablet')
//         // console.log('resized to: ', window.innerWidth, 'x')
//         dispatch(setWidth({width:'tablet'}))
//     }
//   },[dispatch, ])




  const onRegSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userReg = {
      email,
      password,
    };
    registerUser(userReg)
      .unwrap()
      .then(() =>
        authorizeUser(userReg)
          .unwrap()
          .then(data => {
            dispatch(
              setUser({
                email: data.userData.email,
                token: data.accessToken,
                refreshToken: data.refreshToken,
                sid: data.sid,
              })
            );
          })
      ).then(() =>
      getUserData()
        .unwrap()
        .then(data =>
          dispatch(
            setUser({
              email: data.email,
              balance: data.balance
            })
          )
        )
    );;
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
          email: data.userData.email,
          token: data.accessToken,
          refreshToken: data.refreshToken,
          sid: data.sid,
        })
      );
    }).then(() =>
    getUserData()
      .unwrap()
      .then(data =>
        dispatch(
          setUser({
            email: data.email,
            balance: data.balance
          })
        )
      )
  );;
  };
  const googleAuth = () => {
    loginGoogle().then(console.log);
  };

 

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
  const addIncomeTransaction = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = Number(e.target.amount.value); 
    const date = e.target.date.value;

    const data = {
      description,
      amount,
      date,
    };
    addIncome(data).then(console.log);
  };
  const getExpenseTransaction = async () => {
    const data = await getExpense();
    console.log(data);
  };
  const getIncomeTransaction = async () => {
    const data = await getIncome();
    console.log(data);
  };
  const delTransaction = e => {
    e.preventDefault();
    const id = e.target.id.value;
    deleteTransaction(id);
  };
  const getTransactionsByData = () => {
    const date = '2019-06';
    getPeriodData(date).then(console.log);
  };
 
  return (
    <div>
       {isLoggedIn && <UserMenu/>}
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
        <button type="button" onClick={googleAuth}>
          GoogleAuth
        </button>
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

        <button type="button" onClick={getExpenseTransaction}>
          getExpenseTransaction
        </button>

        <form onSubmit={delTransaction}>
          <label htmlFor="id">TransactionId</label>
          <input type="text" id="id" name="id" />
          <button type="submitt">Submit</button>
        </form>
      </div>
      <button type="button" onClick={getTransactionsByData}>
        getTransactionsByData
      </button>
      <form onSubmit={e=>{e.preventDefault(); changeBalance(Number(e.target.balance.value))}}>
          <label htmlFor="balance">Balance</label>
          <input type="number" id="balance" name="balance" />
          <button type="submitt">Submit</button>
        </form>
        <Calendar defaultView={'month'} next2Label={null} prev2Label={null} onActiveStartDateChange={({ action, activeStartDate, value, view }) => console.log(activeStartDate)} />
    </div>
  );
}
