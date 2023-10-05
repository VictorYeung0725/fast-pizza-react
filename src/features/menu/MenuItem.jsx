import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentyQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdatedItemQuantity from '../cart/UpdatedItemQuantity';

// eslint-disable-next-line react/no-typos
function MenuItem({ pizza }) {
  // const addItem = useSelector((state) => state.cart.addItem);
  const dispatch = useDispatch();
  // eslint-disable-next-line react/no-typos
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  //get the quantity of current item quantity by useSelector from the cartSlice
  const getCurrentQuantity = useSelector(getCurrentyQuantityById(id));
  console.log(getCurrentQuantity);

  const isInCart = getCurrentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdatedItemQuantity
                pizzaId={id}
                currentQuantity={getCurrentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
