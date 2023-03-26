import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

function ContactsItem({ id, name, number, onDeletContact }) {
  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => onDeletContact(id)}
        className={css.button}
      >
        delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactsItem;
