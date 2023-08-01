import tvbox from "../../../assets/products/smart box.png";
import iptv from "../../../assets/products/smartiptv.png";
import forever from "../../../assets/products/forever pack.png";

import "./filterList.css";

const FilterList = () => {
  return (
    <div className="filterList">
      <h4>Category</h4>
      <ul>
        <li className="activeList">
          <div></div>
          All
        </li>
        <li>
          <img src={iptv} alt="" />
          IPTV
        </li>
        <li>
          <img src={forever} alt="" />
          Sat server
        </li>
        <li>
          <img src={tvbox} alt="" />
          TV BOX
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default FilterList