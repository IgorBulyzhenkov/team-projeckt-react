import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDeleteTransactionMutation } from '../../redux/kapustaAPI';

export default function TransactionItem({
  description,
  category,
  amount,
  date,
  id,
  expenses,
}) {
  const [deleteTransaction] = useDeleteTransactionMutation();
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td style={expenses ? { color: '#e7192e' } : { color: '#407946' }}>
        {amount}.00 грн.
      </td>
      <td>
        <IconButton
          onClick={() => deleteTransaction(id)}
          aria-label="button delete"
          component="label"
        >
          <DeleteOutline />
        </IconButton>
      </td>
    </tr>
  );
}

TransactionItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
