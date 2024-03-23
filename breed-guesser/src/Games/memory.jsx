import style from "./style.module.css";
import Cards from "../Components/cards";

const Memory = ({ newData }) => {
  return (
    <div className={style.memoryContainer}>
      <div>
        <h1 className={style.h1}>Match the Doggy Pair</h1>
        <div className={style.container}>
          <Cards newData={newData} />
        </div>
      </div>
    </div>
  );
};

export default Memory;
