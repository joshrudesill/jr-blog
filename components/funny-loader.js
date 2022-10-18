import '../styles/Home.module.css'

const Loader = () => {
    return (
        <div className='box'>
            <div className='columns'>
                <div className='column is-narrow'>
                    <div className="loaderc"></div>
                </div>
                <div className='column'>
                    <span className='is-size-4'>Figuring out how to log you in..</span>
                </div>
            </div>
        </div>
    )
}

export default Loader;