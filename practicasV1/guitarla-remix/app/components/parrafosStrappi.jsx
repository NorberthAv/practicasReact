
const Parrafos = ({ text, bold, underline }) => {
  return (
    <p style={{ fontWeight: bold ? 'bold' : 'normal', textDecoration: underline ? 'underline' : 'none' }}>
    {text}
    </p>
  )
}

export default Parrafos
