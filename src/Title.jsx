const Title = ({text}) => {
  return (
    <section className="title">
        <h3>{text || "Default"}</h3>
        <div className="title-underline" style={{marginBottom:20
        }}></div>
    </section>
  )
}
export default Title