import { nanoid } from 'nanoid';

const ImageList = ({ props }) => {
    return <>
        {
            props.map(item => (
                <li key={ nanoid(5) }>
                    <img src={ item } />
                </li>
            ))
        }
    </>;
};

export default ImageList;