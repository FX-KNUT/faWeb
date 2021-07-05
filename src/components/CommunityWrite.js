import { useState } from 'react';

const CommunityWrite = ({idx}) => {

    const [title, setTitle] =useState('');
    const [content, setContent] = useState('');

    return (
        <div className='community_write'>
            <form action='' method='post' onSubmit={}>

            </form>
        </div>
    )
}

export default CommunityWrite;