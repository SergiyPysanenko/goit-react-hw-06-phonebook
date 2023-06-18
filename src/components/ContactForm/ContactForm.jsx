import PropTypes from "prop-types";
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state.name, this.state.number);
  //   this.reset();
  // };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  const reset = () => {
    setName('');
    setNumber('');
    };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  return (
    <div>
    <form className={styles.form} onSubmit={handleSubmit}>
    <label className={styles.label}>
    Name
    <input className={styles.inpyt}
             type="text"
             name="name"
             value={name}
             onChange={handleChange}
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
           />
    </label>
    <label className={styles.label}>
    Number
    <input className={styles.label}
             type="tel"
             name="number"
             value={number}
             onChange={handleChange}
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
    </label>
    <button className={styles.button} type="submit">Add contacts</button>
    </form>
    </div>
    );
    };
    
    ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };
    
export default ContactForm;  

//   render() {
//     // const { contacts,filter } = this.state;

//     return (
//       <div>
//         <form className={styles.form} onSubmit={this.handleSubmit}>
//           <label className={styles.label}>
//             Name
//             <input className={styles.inpyt}
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label className={styles.label}>
//             Number
//             <input className={styles.label}
//               type="tel"
//               name="number"
//               value={this.state.number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button className={styles.button} type="submit">Add contacts</button>
//         </form>
//       </div>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;