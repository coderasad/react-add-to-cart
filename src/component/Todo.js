import React, {useState} from 'react';
import '../app.css'
const Todo = () => {
    const [lists, setLists] = useState([]);
    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target)
    }

    return (
        <>
            <h2>CRUD REACT</h2>
            <form>
                <input name='list'  type="text" placeholder='Write here...'/>
                <input onClick={ (ele)=> handleChange(ele) } type="submit" value='submit'/>
            </form>
            <hr/>
            <ol>
                <li><a href="">Demo Text <span>Delete</span></a></li>
                <li><a href="">Demo Text <span>Delete</span></a></li>
                <li><a href="">Demo Text <span>Delete</span></a></li>
            </ol>
        </>
    );
};

export default Todo;