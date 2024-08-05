import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContacts } from '../../redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(selectContacts) || [];
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter) || '';
  const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };
    return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;