import scss from "./Footer.module.scss";
import { RxInstagramLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className={scss.footer}>
			<hr />

			<div className={scss.content}>
				<p>Copyright © 2023. All rights are reserved</p>
				<p>Built with 🫀 by Mustafa</p>
				<div className={scss.icons}>
					<span>
						<Link
							className={scss.span}
							to={"https://www.instagram.com/sultanov_11_/"}>
							<RxInstagramLogo />
						</Link>
					</span>
					<span>
						<Link className={scss.span} to={"https://github.com/SultanovMusa"}>
							<BsGithub />
						</Link>
					</span>
				</div>
			</div>

			<hr />
		</footer>
	);
};

export default Footer;
