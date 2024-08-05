import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts, selectFilter } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(selectContacts) || [];  
  const filter = useSelector(selectFilter) || '';
  const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  
    return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;