import { useDispatch } from "react-redux";
import { removeReservation } from "../features/resarvationSlice";

interface ResevationCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ResevationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}
