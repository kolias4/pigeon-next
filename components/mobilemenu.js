import Link from 'next/link'
import { slide as Burger } from 'react-burger-menu'
import Menu, { SubMenu, MenuItem } from 'rc-menu'
import 'rc-menu/assets/index.css';

const MobileMenu = ({menuopen,setMenuOpen,menu}) => {
  return (

    <Burger onClose={() => setMenuOpen(false)}  isOpen={menuopen}>
    <div id="nav-wrapper" class="mob-visible">
	<nav class="navbar navbar-homepage">
   <div id="navbar" className="navbar-collapse">
    <ul id="menu-main-menu" className="nav navbar-nav">
    <li id="menu-item-2104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2093 current_page_item menu-item-2104"><a href="http://senorcavallo.just-themes.com/"><span>Home</span></a></li>
  <li id="menu-item-2547" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2547"><a href="#"><span>About Us</span></a>
    <ul className="sub-menu">
      <li id="menu-item-2548" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2548"><a href="http://senorcavallo.just-themes.com/about-club/"><span>About Club</span></a></li>
      <li id="menu-item-750" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-750"><a href="http://senorcavallo.just-themes.com/team/"><span>Our Team</span></a></li>
      <li id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"><a href="http://senorcavallo.just-themes.com/testimonials/"><span>Testimonials</span></a></li>
    </ul>
  </li>
  <li id="menu-item-59" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59"><a><span>Blog</span></a>
    <ul className="sub-menu">
      <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43"><a href="http://senorcavallo.just-themes.com/blog-one-column/"><span>Blog One Column</span></a></li>
      <li id="menu-item-45" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-45"><a href="http://senorcavallo.just-themes.com/blog-two-columns/"><span>Blog Two Columns</span></a></li>
      <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="http://senorcavallo.just-themes.com/blog-three-columns/"><span>Blog Three Columns</span></a></li>
    </ul>
  </li>
  <li id="menu-item-60" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-60"><a><span>Gallery</span></a>
    <ul className="sub-menu">
      <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a href="http://senorcavallo.just-themes.com/gallery-2-columns/"><span>Gallery 2-columns</span></a></li>
      <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="http://senorcavallo.just-themes.com/gallery-3-columns/"><span>Gallery 3-columns</span></a></li>
      <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="http://senorcavallo.just-themes.com/gallery-4-columns/"><span>Gallery 4-columns</span></a></li>
    </ul>
  </li>
  <li id="menu-item-619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-619"><a href="#"><span>Shop</span></a>
    <ul className="sub-menu">
      <li id="menu-item-623" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a href="http://senorcavallo.just-themes.com/shop/"><span>Shop</span></a></li>
      <li id="menu-item-622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-622"><a href="http://senorcavallo.just-themes.com/cart/"><span>Cart</span></a></li>
      <li id="menu-item-621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-621"><a href="http://senorcavallo.just-themes.com/checkout/"><span>Checkout</span></a></li>
      <li id="menu-item-620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-620"><a href="http://senorcavallo.just-themes.com/my-account/"><span>My account</span></a></li>
    </ul>
  </li>
  <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46"><a href="http://senorcavallo.just-themes.com/contacts/"><span>Contacts</span></a></li>
  <li id="menu-item-61" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-has-mega-menu menu-item-61"><a><span>Elements</span></a><div className="mega-menu">
      <ul className="sub-menu mega-menu-row">
        <li id="menu-item-783" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-783"><a><span>Typography</span></a>
          <ul className="sub-menu sub-menu-has-icons">
            <li id="menu-item-597" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-597"><a href="http://senorcavallo.just-themes.com/headers/" className="fa fa-font"><span>Headers</span></a></li>
            <li id="menu-item-579" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-579"><a href="http://senorcavallo.just-themes.com/text/" className="fa fa-align-left"><span>Text</span></a></li>
            <li id="menu-item-594" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-594"><a href="http://senorcavallo.just-themes.com/text_columns/" className="fa fa-columns"><span>Text Columns</span></a></li>
            <li id="menu-item-643" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-643"><a href="http://senorcavallo.just-themes.com/table/" className="fa fa-table"><span>Table</span></a></li>
            <li id="menu-item-588" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-588"><a href="http://senorcavallo.just-themes.com/separators/" className="fa fa-arrows-h"><span>Separators</span></a></li>
          </ul>
        </li>
        <li id="menu-item-784" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-784"><a><span>Form Elements</span></a>
          <ul className="sub-menu sub-menu-has-icons">
            <li id="menu-item-555" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-555"><a href="http://senorcavallo.just-themes.com/buttons/" className="fa fa-mouse-pointer"><span>Buttons</span></a></li>
            <li id="menu-item-705" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-705"><a href="http://senorcavallo.just-themes.com/forms/" className="fa fa-edit"><span>Forms</span></a></li>
          </ul>
        </li>
        <li id="menu-item-785" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-785"><a><span>Shortcodes</span></a>
          <ul className="sub-menu sub-menu-has-icons">
            <li id="menu-item-527" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-527"><a href="http://senorcavallo.just-themes.com/accordions/" className="fa fa-list"><span>Accordions</span></a></li>
            <li id="menu-item-538" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-538"><a href="http://senorcavallo.just-themes.com/alert/" className="fa fa-exclamation-triangle"><span>Alerts</span></a></li>
            <li id="menu-item-568" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-568"><a href="http://senorcavallo.just-themes.com/tabs/" className="fa fa-th-large"><span>Tabs</span></a></li>
            <li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-56"><a href="http://senorcavallo.just-themes.com/shortcodes/" className="fa fa-caret-square-o-right"><span>Shortcodes</span></a></li>
          </ul>
        </li>
        <li id="menu-item-786" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mega-menu-col menu-item-786"><a href="#"><span>Lists</span></a>
          <ul className="sub-menu sub-menu-has-icons">
            <li id="menu-item-675" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-675"><a href="http://senorcavallo.just-themes.com/icons-page/" className="fa fa-gratipay"><span>Icons</span></a></li>
            <li id="menu-item-562" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-icon menu-item-562"><a href="http://senorcavallo.just-themes.com/list/" className="fa fa-twitter"><span>Lists and Social Icons</span></a></li>
          </ul>
        </li>
      </ul>
    </div>
    </li>
</ul>
</div>
</nav>
</div>


  </Burger>

  )
}

export default MobileMenu
