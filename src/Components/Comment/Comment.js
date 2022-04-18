import React, { useContext } from 'react';
// import { useContext } from 'react';
import { ThemeColorContext } from '../../containers/store/ThemeColor';


const Comment = (props) => {
    const colorContext = useContext(ThemeColorContext);
    return (

        <div  className='Comment'>
            {props}
        </div>

    );

}

export default Comment;