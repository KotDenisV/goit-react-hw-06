import s from './SearchBox.module.css'

function SearchBox({ value, onSearch }) {
    return (
      <div className={s.searchWrapper}> 
        <label className={s.label}>
            <span>Finde contacts by name</span>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </label>
      </div>       
    );
}

export default SearchBox;