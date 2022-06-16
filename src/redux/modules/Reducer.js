// Card.js  [버킷 리스트 모듈 만드는 방법] 모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import {db} from '../../firebase'
import {
    collection,
    getDocs,
    addDoc
  } from "firebase/firestore";
// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const LOAD = 'Card/LOAD';
const CREATE = 'Card/CREATE';


const initialState = { list: [ {
    img:"https://firebasestorage.googleapis.com/v0/b/ins-magazine.appspot.com/o/images%2F%EB%AF%B8%EC%A7%80%EC%88%98.png?alt=media&token=aa4c8603-5173-4c6b-8cec-a2c180889f25",
    title:"사진아 나와줘",
} ] }





// Action Creators      --> 액션 생성 함수
export function loadCard(CardData){
    return{type:LOAD,CardData}
}

export function createCard(title){
    return{type:CREATE,title}
}





// middleware --> 미들웨어 
export const loadCardFB = () => {
    return async function (dispatch) {
        const Card_Data = await getDocs(collection(db,"images"))
        let Card_list = [];
        Card_Data.forEach((Card)=>{
            Card_list.push({...Card.data()});
            // console.log(Card_list)
        });
        dispatch(loadCard(Card_list));
    }
}


export const addCardFB = (Card) =>{
    return async function (dispatch) {
      const docRef = await addDoc(collection(db, "images"),Card);
      console.log(docRef)
      const CardDB = {...Card}  // ok
      console.log(CardDB)
      dispatch(createCard(CardDB.title));
    }
}









// Reducer
export default function reducer(state = initialState, action = {}){     // state의 기본값을 지정
    switch (action.type){
        case 'Card/LOAD' : {
            return {list: action.CardData};
        }
        case 'Card/CREATE' : {
            const new_AddCard = [  ...state.list,{title: action.title} ];
            return { list : new_AddCard  }
        }
        default: return state;
    }
}
