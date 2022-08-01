import Link from "next/link";

const Menus = ({ menus }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-3xl font-bold mb-3 text-slate-700">
        {menus &&
          menus.data.map((menu) => {
            return (
              <li key={menu.id}>
                <Link href={`menu/` + menu.id}>{menu.attributes.Name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Menus;
