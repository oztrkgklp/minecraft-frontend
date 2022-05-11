import React from "react";
import Box from "@mui/material/Box";
import yakut from "../../assets/yakut.png";
import altin from "../../assets/altin.png";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/slices/balanceSlice";
import { useEffect } from "react";
import { routes } from "../../routes/routes";

// Exports the default user balances.
const UserBalances = () => {
  // Select the balance of the current balance.
  const dispatch = useDispatch();
  let balance = useSelector((state) => state.balance.value);

  // Dispatch a balance of id.
  useEffect(() => {
    dispatch(getBalance(1));
  }, []);
  return (
    <Box className="user-balances">
      <span>Bakiyeniz</span>
      {}
      <span>{parse(`<img src=${yakut} alt="">${balance.amountDiamond} / Rc</img>`)}</span>
      <span>{parse(`<img src=${altin} alt="">${balance.amountGold} / Rc</img>`)}</span>

      <div className="actions">
        <Link to={routes.PurchaseRv} className="primary-btn normal-shadow">
          RV YÜKLE
        </Link>
      </div>
    </Box>
  );
};

export default UserBalances;
