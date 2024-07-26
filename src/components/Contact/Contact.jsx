import { useDispatch } from 'react-redux';

import { HiUser } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi2';
import { deleteContact } from '../../redux/contactsOps';

import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.user}>
          <HiUser size={'20px'} title="contact icon" />
          <span>{contact.name}</span>
        </div>

        <div className={styles.phone}>
          <HiPhone size={'20px'} title="phone icon" />
          <span>{contact.phone}</span>
        </div>
      </div>

      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
}
