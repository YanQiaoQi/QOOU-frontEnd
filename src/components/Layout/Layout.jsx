import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';
import { combineClassNames } from '../../utils/common';
import styles from './Layout.less';

function Layout({ children, className, style }) {
	let hasSider = false;
	let childrenArr = children;
	if (
		childrenArr !== undefined &&
		!Array.isArray(children)
	) {
		childrenArr = [children];
	}
	if (childrenArr.length > 0) {
		childrenArr.forEach((element) => {
			if (element.type === Sider) {
				hasSider = true;
			}
		});
	}

	let basicClassName = "myDesign-layout";
	let layoutClassName = styles[basicClassName];
	if (className !== undefined) {
		if (typeof className === "string") {
			layoutClassName = combineClassNames(
				layoutClassName,
				className
			);
		} else {
			console.error("类名应为字符串");
		}
	}
	if (hasSider) {
		layoutClassName = combineClassNames(
			layoutClassName,
			styles[`${basicClassName}-has-sider`]
		);
	}

	return (
		<section className={layoutClassName} style={style}>
			{childrenArr}
		</section>
	);
}
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
