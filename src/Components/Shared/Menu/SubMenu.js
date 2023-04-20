import MenuItem from "./MenuItem";

function SubMenu({ item }) {
  return (
    <ul className="sub-menu">
      {item.children.map((childMenu) => (
        <MenuItem type='line-camp' key={childMenu.id} data={childMenu} />
      ))}
    </ul>
  );
}

export default SubMenu;
