import Link from 'next/link'
import { slide as Burger } from 'react-burger-menu'
import Menu, { SubMenu, MenuItem } from 'rc-menu'
import 'rc-menu/assets/index.css';

const MobileMenu = ({menuopen,setMenuOpen,menu}) => {
  return (

    <Burger onClose={() => setMenuOpen(false)}  isOpen={menuopen}>
    <Menu className="myrc"  mode="inline">
  <MenuItem >
  <Link href="/">Αρχική</Link>
  </MenuItem>

  <SubMenu title="Άρθρα">
  {menu.categoryArthras.map((catarticle) => {
    return (
      <MenuItem key={catarticle.title}>
      <Link href={`/blog/category/${catarticle.url_key}`}>{catarticle.title}</Link>
      </MenuItem>
    )
  })}
  </SubMenu>

  <SubMenu title="Περιστέρια">
  {menu.breeders.map((breeder) => {
    return (
      <SubMenu key={breeder.breeder_name} title={breeder.breeder_name}>
       {breeder.breeds.map((breed) => {
         return (

           <MenuItem key={breed.breed}>
           <Link href={`/pigeons/breed/${breed.urlkey}`}>{breed.breed}</Link>
           </MenuItem>

         )
       })}

      </SubMenu>
    )
  })}

  </SubMenu>
  <MenuItem >
  <Link href="/contact">Επικοινωνία</Link>
  </MenuItem>

  <MenuItem >
  <Link href="/about">Σχετικά με εμάς</Link>
  </MenuItem>
</Menu>
  </Burger>

  )
}

export default MobileMenu
