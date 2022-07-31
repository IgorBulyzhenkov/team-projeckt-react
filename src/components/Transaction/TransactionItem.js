import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

export default function TransactionItem({
  description,
  category,
  amount,
  date,
  id,
  expenses,
  handleClick,
  themeStyle,
}) {
  return (
    <tr >
      <td style={themeStyle}>{date}</td>
      <td style={themeStyle}>{description}</td>
      <td style={themeStyle}>{category}</td>
      <td
        style={
          expenses
            ? {
                color: '#e7192e',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '14px',
              }
            : {
                color: '#407946',
                fontWeight: '700',
                fontSize: '12px',
                lineHeight: '14px',
              }
        }
      >
        {amount}.00 грн.
      </td>
      <td style={themeStyle}>
        <IconButton
          onClick={e => handleClick(e)}
          aria-label="button delete"
          component="label"
          id={id}
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
