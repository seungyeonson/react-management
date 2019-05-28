import React, {Component} from 'react';
import './App.css';
import Student from './components/Student'

const student = {
  'name': '홍길동',
  'birthday': '961112',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component{
  render(){
    return (
      <Student
        name={student.name}
        birthday={student.birthday}
        gender={student.gender}
        job={student.job}
      />
    );
  }
}

export default App;
