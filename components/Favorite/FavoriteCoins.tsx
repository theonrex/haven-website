import { decrement, increment } from "@/storeConfig/count";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function FavoriteCoins() {
  // const [count, setCount] = useState(0);

  // const { count } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>count is {count}</h1> */}

      {/* <button onClick={() => dispatch(increment())}> increase</button>
      <button onClick={() => dispatch(decrement())}> decrease</button> */}
    </div>
  );
}
