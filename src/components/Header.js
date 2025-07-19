import chefLogo from '../images/chefLogo.png'

export default function Header() {
    return (
        <header className='header'>
            <img className='header-logo' src={chefLogo} alt='Chef Logo' />
            <h1>Chef AI</h1>
        </header>
    )
}