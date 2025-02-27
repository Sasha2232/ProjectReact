import './index.css'
import React, {useState} from 'react'
import ModalWindow from './ModalWindow'
import Cards from './Cards'
import FeedbackCard from './FeedbackCard';
import FeedbackForm from './FeedbackForm';
import './App.css'


const App = () => {
  const [showModal, setShowMOdal] = useState(false);
  
  const handleOpenModel = () => {
    setShowMOdal(true);
  };
  const handleCloseModel = () => {
    setShowMOdal(false);
  }

  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (name, text) => {
    const newFeedback = { id: Date.now(), name, text };
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
  };

  const toBlock = (height) => {
    window.scrollTo({top: height, left: 0, behavior: "smooth"})
  }

  return (
    <div>
      <div className='header-div'>
      <header>
        <div className="menu">
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="0" style={{fontSize: "32px"}}>Обо мне</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700" style={{fontSize: "32px"}}>Знания</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1230" style={{fontSize: "32px"}}>Портфолио</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1920" style={{fontSize: "32px"}}>Автобиография</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2600" style={{fontSize: "32px"}}>Пожелания</a>
        </div>

        <button onClick={handleOpenModel} className="btn">Связаться</button>
        
        <ModalWindow show={showModal} onClose={handleCloseModel}>
          <h2 style={{color: "#e0e0e0", fontSize: "40px" }}>Контакты</h2>
          <p style={{fontSize: "22px"}}>По Соц сетям вы моежете заказать ваши сайты или дизайны</p>
        </ModalWindow>

        <a href="https://ofont.ru/category/29/page/11" target="_blank" className="icon inst"/>
        <a href="https://ofont.ru/category/29/page/11" target="_blank" className="icon tg"/>

        {/* <div className="switch">
          <div className="theme light"></div>
        </div>       */}
      </header>
      </div>
      <div className='welcome-block'>
        <div className='first-block'>
          <h1 style={{color:"#e0e0e0"}} className='razr'> Разработчик <span className='title'> Frontend и Backend</span>
          </h1>
          <h2 style={{color:"#e0e0e0", marginBottom: "7%", marginTop: "7%", fontSize: "65px"}}>
            Создаю <span style={{color:"#7e0606", fontSize: "65px"}}>продаваемый</span><br/>
            и<span style={{color:"#7e0606", fontSize: "65px"}}> уникальный </span>
             дизайн <br/>под ваши запросы, так же  <br/>пишу back для сайтов</h2>
          <h3 style={{color:"#e0e0e0", fontSize: "65px"}}>Занимаюсь программированием<br/>
          на протяжении <span style={{ color: "#7e0606"}}>2 лет</span></h3>
        </div>
        
        <div className='image-box'>
        </div>
      </div>

      <div className='service-block' draggable='false'>
        <h1 style={{fontSize: "52px", color:"#000000"}}>Знания</h1>
        <p style={{fontSize:"27px", color:"#000000"}}>Знаю
          <span style={{color:"#000000"}}> такия 
            языки </span> как:</p>
      <div style={{display:"flex"}}>
        <p className='tag'><p className='tag-icon'/>
        Swift</p>
        <p className='tag'><p className='tag-icon'/>
        Python</p>
        <p className='tag'><p className='tag-icon'/>
        Java-Script</p>
        <p className='tag'><p className='tag-icon'/>
        SQL</p>        <p className='tag'>
        <p className='tag-icon'/>
        Html</p>
        <p className='tag'><p className='tag-icon'/>
        React</p>  
      </div>
   

      <p style={{fontSize: "27px", color:"#000000", fontWeight: "1000px"}}>Открыт для обсуждения
        создателя дизайна и по другим направлениям. <br/>
        Детальней готов обсудить программированием
        <span style={{color: "#000000", cursor: "pointer"}}
        onClick={handleOpenModel}> личной переписка</span>.</p>
      </div>

      <div className='portfolio-block'>
        <div className='first-block'>
          <h1 className='main-title'>Портфолио</h1>
        </div>
      </div>
      <div>
        <Cards/>
      </div>

      <div className='guardtees-block'>
              <h1 style={{fontSize: "100px", paddingBottom: "20px"}} className='tees'>  Моя автобиография</h1>
              <div className='ol-div'>
              <ol className='guardtees-points'>
                <p className='poin'>
                Меня зовут Тен Александр, я учусь в 11 классе школы 
                  <span style={{color: "rgb(252, 49, 49)"}}> Престиж</span>. Родился я в Ташкенте, жил там семь лет и закончил первый класс. Я учился в таких школах Алматы,  <br/>как 105-я гимназия, NGS и Престиж.
                </p>
                <p className='poin'>
                Увлёкся программированием в конце 2022 года, поступив в 
                  <span style={{color: "rgb(252, 49, 49)"}}> Академию Шаг</span> по рекомендации друга, который уже учился там. Я начал с курса по языку Swift, который длился полгода. Почти сразу после этого я продолжил обучение на курсе, который длится полтора года.
                </p>
                <p className='poin'>
                За это время я окончательно понял, что хочу заниматься 
                  <span style={{color: "rgb(252, 49, 49)"}}> программированием</span> и зарабатывать на этом себе на жизнь. Писал проекты по всем этим языкам, но некоторые из них были утеряны. <br/> Я знаю такие языки программирования, как Python, Swift, JavaScript, React, SQL, Django и HTML.
                </p>
              </ol>
              </div>
        </div>
            <div className='Footer' style={{fontSize:"40px"}}>Ten.A</div>

    <div className="container-otz">
      <div className='block-otz'>
      <h1>Пожелания</h1>
      <FeedbackForm onAddFeedback={addFeedback} />
      </div>
    </div>
          <div className="content-otz">
            {feedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                name={feedback.name}
                text={feedback.text}/>
            ))}
            </div>
            
  </div>
  );
}

export default App;
