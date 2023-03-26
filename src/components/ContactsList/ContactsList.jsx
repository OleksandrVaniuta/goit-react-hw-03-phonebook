import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactsItem from 'components/ContactsItem/ContatsItem';
function ContactsList({ contactData, onDeletContact }) {
  return (
    <ul className={css.list}>
      {contactData.map(({ id, name, number }) => {
        return (
          <ContactsItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeletContact={onDeletContact}
          />
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contactData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactsList;
