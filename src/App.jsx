import { useState } from "react"
import ModalWindow from "./ModalWindow"
// import AllGallery from "./allGallery"
// import Landings from "./Landings"
// import Multipages from "./Multipages"
// import SpApplications from "./SpApplications"
import Carousel from "./Carousel"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')


  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <header>
        <div className="navigation">
            <div className="menu">
              <a href="#me">Обо мне</a>
              <a href="#services">Услуги</a>
              <a href="#portfolio">Портфолио</a>
              <a href="#reviews">Отзывы</a>
            </div>
            <div className="header-buttons">
                <button onClick={handleOpenModal} className="btn">Связаться</button>
              
              <a href="http://t.me/atirama" target="_blank"
                    className="icon telegram"/>
                    <a href="https://vk.com/ama.riita" target="_blank"
                    className="icon vkontakte"/>
            </div>
        </div>
      </header>

      <ModalWindow show = {showModal} onClose = {handleCloseModal} >
        <h2 style={{ color: "#32a2e7", fontSize: "40px"}}>Контакты</h2>
        <p style={{fontSize: "22px"}} >Вы можете связаться со мной в Telegram <br/> или Вконтакте </p>
      </ModalWindow>


      <div id="me" className="welcome-block">
          <div className="first-block">
            <h1 className="main-title">Frontend-разработчик <br/> <span className="title">Рита Яковлева</span></h1>
            <h2 style={{ marginBottom: "7%", marginTop: "7%",  }}>
              Превращаю макеты в живые, <br/> работающие <span style={{color: "#32a2e7"}}>web-проекты</span> <br/> 
              под Ваши запросы
            </h2>
          </div>
          <div className="app-image-box">
              <img className="image-layer" src="./images/1-round.png" draggable="false"/>
          </div>
      </div>

      <div id="services" className="service-block" draggable="false">
        <h1 className="main-title">Услуги</h1>
        <p style={{ fontSize: "27px" }}>Разработка <span style={{color: "#32a2e7"}}>сайтов и приложений:</span></p>
        <div style={{ display:"flex" }}>
            <p className="tag"><span className="tag-icon">Лендинги(одностраничные сайты)</span></p>
            <p className="tag"><span className="tag-icon">Многостраничные сайты</span></p>
            <p className="tag"><span className="tag-icon">Веб-приложения (SPA)</span></p>
        </div>
        <p style={{ fontSize: "27px" }}>Детально готова обсудить при <span style={{color: "#32a2e7", cursor: "pointer"}} onClick={handleOpenModal}>личной переписке</span>.</p>
      </div>
      <div id="portfolio" className="portfolio-block">
        <div className="first-block">
          <div className="titleAndArray">
            <h1 className="main-title">Портфолио</h1>          
            <div className ="array-icon" draggable="false"></div>
          </div>
            <div className="portCategory">
              <p className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('All')}>
                Все работы
              </p>
              <p className={`tag ${selectedCategory === 'Landings' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('Landings')}>
                Лендинги
              </p>
              <p className={`tag ${selectedCategory === 'Multipages' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('Multipages')}>
                Многостраничные сайты
              </p>
              <p className={`tag ${selectedCategory === 'SpApplications' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('SpApplications')}>
                Веб-приложения
              </p>
            </div>

            <div className="content">
                <Carousel selectedCategory={selectedCategory} />
            </div>

        </div>
      </div>

      <div id="reviews" >
      <h1 className="main-title">Отзывы</h1>
       <p style={{color:"#32a2e7", fontSize: "50px"}} >Отзывов пока нет</p> 
      </div>

      <div className="footer"> 
        <p>©amarita</p>
        </div>

      

    </>
  )
}

export default App
