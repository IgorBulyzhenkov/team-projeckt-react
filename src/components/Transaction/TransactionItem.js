import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

export default function TransactionItem({
  description,
  category,
  amount,
  date,
  id,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount} грн.</td>
      <td>
        <IconButton aria-label="button delete" component="label">
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
