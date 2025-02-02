import { decrement, increment } from "./action";
import { useSelector, useDispatch} from "react-redux";

function Counter(){
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Dec</button>
        </div>
    );
}

export default Counter;