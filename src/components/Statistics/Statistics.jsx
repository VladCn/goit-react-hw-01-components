import styled, { css } from 'styled-components'


export function Statistics({ title = 'Upload stats', stats }){
const newStats = stats
  .filter(item => item.label === ".pdf" && item.label)
  // .reduce((acc, item) => acc + item, {})
console.log(newStats)

  console.log("121212")


return (
  <section className="statistics">
    <h2 className="title">{title}</h2>

  <ul classNames="stat-list">
    {stats.map(item => (
      <li className="item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}</span>
      </li>
    ))}

  </ul>
</section>
)
}
