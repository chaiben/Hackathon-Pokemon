import style from './style.module.css'

const Input = (props) => {

  return (
    <input type="text" className={style.Input} {...props} />
  )
}

export default Input;