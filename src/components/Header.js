import { Button } from "./Button";

const Header = ({ title, onAdd, showAdd }) => {

    // const onClick = () => {
    //     console.log('clicks')
    // };

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'red' : '#1b692b'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

// const headingStyle = {
//     color : 'red', backgroundColor: 'black'
// };

export default Header