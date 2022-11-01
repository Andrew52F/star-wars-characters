import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
  return (
    <ul className={styles.list_container}>
    {people.map(({id, name, imgUrl}) => 
    <li key={id} className={styles.list_item}>
      <a href="#">
        <img src={imgUrl} alt={name}  className={styles.person_photo}/>
        <p className={styles.person_label}>{name}</p>
      </a>
    </li>
    )}
    </ul>
  )
}
export default PeopleList;