import { nanoid } from 'nanoid';

const List = ({ props }) => {
    return <>
        {
            props.map(item => (
                <li key={ nanoid(5) }>
                    { item }
                </li>
            ))
        }
    </>;
};

export default List;