import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1
    ,'image' : 'https://www.pixiv.net/artworks/110244448'
    ,'name' : '홍길'
    ,'birthday' : '123456'
    ,'gender' : '남자다'
    ,'job' : '대학생'
  }
  ,{
    'id' : 2
    ,'image' : 'https://www.pixiv.net/artworks/110243899'
    ,'name' : '순댕'
    ,'birthday' : '123456'
    ,'gender' : '여자'
    ,'job' : '소녀단'
  }
  ,{
    'id' : 3
    ,'image' : 'https://www.pixiv.net/artworks/110039865'
    ,'name' : '엽기'
    ,'birthday' : '123456'
    ,'gender' : '양성'
    ,'job' : '누구'
  }
]


function App() {
  return (
    /*
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Lsets develop management system!</h2>
    </div>
    */

    <div>
        {
          customers.map( c => {
            return (
              <Customer
                key = {c.id} //필수
                id={c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              />)
          })
        }
    </div>
    
  );
}

export default App;

