import styled from 'styled-components'
import Icon from './Icon'
import { NavLink } from 'react-router-dom'

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      a {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #ff6f06;
          .icon {
            fill: #ff6f06;
          }
        }
      }
    }
  }
`

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink
            to="/tags"
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >
            <Icon name="tag"></Icon>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/money"
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >
            <Icon name="money"></Icon>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >
            <Icon name="statistics"></Icon>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
