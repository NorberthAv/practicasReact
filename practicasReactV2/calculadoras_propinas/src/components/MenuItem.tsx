import { MenuItems } from "../types"

type MenuItemsProps = {
    menuItems: MenuItems
    addItem: (item: MenuItems) => void
}


const MenuItem = ({addItem, menuItems }: MenuItemsProps) => {
  return (
    <button className="border-2 p-3 border-teal-400 hover:bg-teal-200 w-full flex justify-between rounded-md">
    <p>{menuItems.name}</p>
    <p className="font-black">Bs.{menuItems.price}</p>
    </button>
  )
}

export default MenuItem
