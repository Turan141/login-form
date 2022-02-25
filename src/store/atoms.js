import { atom } from 'recoil'


const userNameState1 = atom({
  key: 'userNameState1',
  default: 'Turan',
})

const userNameState2 = atom({
  key: 'userNameState2',
  default: 'Narut',
})

const userNameState3 = atom({
  key: 'userNameState3',
  default: 'Barut',
})

export {
  userNameState3,
  userNameState2,
  userNameState1,
}