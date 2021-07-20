import { Orders } from "../../services/orders";

export interface IOrderCardStyledProps {
  isOpened: boolean;
}

export interface IOrderCardProps {
  orders: Orders | undefined;
}
