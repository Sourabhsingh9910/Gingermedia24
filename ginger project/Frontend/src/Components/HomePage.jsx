import './HomePage.css';
const HomePage=()=>{
    return<>
        <section className="home-container">
                <div className="left-content">
                    <p className='font'>"Shaping Stories, Inspiring Minds."</p>
                    <p>
                    "Discover captivating content curated just for you. Dive into our diverse array of stories, news, and entertainment."
                    </p>
                    <a href="https://www.gingermediagroup.com/contact-us" className="learnmore" target='_blank'>Lear More &gt;</a>
                </div>
                <div className="right-content">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CiG5k9aY9HSahtq-uY_Wk4Lz5V_ewwyuMg&usqp=CAU'></img>
                    
                </div>
        </section>
    </>
}
export default HomePage;