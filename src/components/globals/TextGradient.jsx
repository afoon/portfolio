import styles from './TextGradient.module.css'
const TextGradient = ({children}) => {
  return (
<span class={styles.textGradient}>
    {children}
</span>
  )
}

export default TextGradient