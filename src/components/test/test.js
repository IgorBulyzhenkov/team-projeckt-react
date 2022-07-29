import {
  useAddExpenseMutation,
  useAddIncomeMutation,
  // useLazyGetExpenseQuery,
  // useLazyGetIncomeQuery,
  useDeleteTransactionMutation,
  useLazyGetPeriodDataQuery,
  useChangeBalanceMutation,
  // useGetIncomeCategoriesQuery,
  // useGetExpenseCategoriesQuery,
} from '../../redux/kapustaAPI';
import { useDispatch } from 'react-redux';
import { setBalance } from 'redux/reducer';
import DateSwiper from 'components/DateSwiper';

export default function Test() {
  const dispatch = useDispatch();
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  // const [getExpense] = useLazyGetExpenseQuery();
  // const [getIncome] = useLazyGetIncomeQuery();
  const [deleteTransaction] = useDeleteTransactionMutation();

  //   const { data: incomeCategories } = useGetIncomeCategoriesQuery();
  //   const { data: expenseCategories } = useGetExpenseCategoriesQuery();

  const [getPeriodData] = useLazyGetPeriodDataQuery();

  const [changeBalance] = useChangeBalanceMutation();

  const addExpenseTransaction = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const amount = Number(e.target.amount.value);
    //    const category = e.target.category.value;
    const date = e.target.date.value;

    const data = {
      description,
      amount,
      category: 'Развлечения',
      date,
    };
    addExpense(data)
      .unwrap()
      .then(data => dispatch(setBalance(data.newBalance)));
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
      <DateSwiper changeDate={console.log} />
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

        {/* <button type="button" onClick={getExpenseTransaction}>
          getExpenseTransaction
        </button> */}

        <form onSubmit={delTransaction}>
          <label htmlFor="id">TransactionId</label>
          <input type="text" id="id" name="id" />
          <button type="submitt">Submit</button>
        </form>
      </div>
      <button type="button" onClick={getTransactionsByData}>
        getTransactionsByData
      </button>
      <form
        onSubmit={e => {
          e.preventDefault();
          changeBalance(Number(e.target.balance.value));
        }}
      >
        <label htmlFor="balance">Balance</label>
        <input type="number" id="balance" name="balance" />
        <button type="submitt">Submit</button>
      </form>
    </div>
  );
}
