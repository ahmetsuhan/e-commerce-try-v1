import { useHistory } from "react-router-dom";
import CustomButton from "../CustomButton/index";
import CartItem from "../cartItem/index";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cartSelector";
import { toggleCartHidden } from "../../redux/Cart/cartActions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cartDropdown.style";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push("/check-out");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
