import { MenuIcon } from "@heroicons/react/outline";
import Logo from "../icons/Logo";
import { useNavState } from "../src/useNavState";
import { getLanguage } from "../src/language";
export const SideBarToggler = ({
  lang
}: { lang?: string; }) => {
  const { expandSideNav, setExpandSideNav } = useNavState();
  const languageToken = getLanguage();
  return (
    <>
      <button
        className="sidebar-toggler"
        onClick={() => {
          setExpandSideNav(!expandSideNav);
        }}
      >
        <MenuIcon className="icon menu" />
      </button>
      <a href={`/${lang ? lang + "/" : (languageToken ? languageToken + "/" : "")}`}>
        <Logo width={100} height={80} />
      </a>
    </>
  );
};
