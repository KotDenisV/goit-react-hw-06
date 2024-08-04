import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContscts } from '../../redux/selectors';
import { deleteContacts } from '../../redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(selectContscts);
  const dispatch = useDispatch();
    return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact data={contact} onDelete={dispatch(deleteContacts(contact.id))} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;