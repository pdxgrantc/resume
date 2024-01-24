// components
import { OutsideLink } from "../Lib";

// icons
import { SiGithub as GitHubLogo } from "react-icons/si";
import { FaLinkedinIn as LinkedLogo } from "react-icons/fa";
import { IoIosMail as MailLogo } from "react-icons/io";

export default function Footer() {
  return (
    <diV className="bg-footer w-full mt-20 mb-[1000px]">
      <div className="w-fit mx-auto flex flex-col gap-4">
        <div className="h-16"></div>
        <div className="flex gap-8">
          <OutsideLink link="https://www.github.com/pdxgrantc">
            <GitHubLogo className="h-[4rem] w-auto py-2 mx--auto text-button hover:text-button_hover" />
          </OutsideLink>
          <OutsideLink link="mailto:pdxgrantc@gmail.com">
            <MailLogo className="h-[4rem] py-0 w-auto text-button hover:text-button_hover" />
          </OutsideLink>
          <OutsideLink link="https://www.linkedin.com/in/pdxgrantc">
            <LinkedLogo className="h-[3.5rem] w-auto text-button hover:text-button_hover" />
          </OutsideLink>
        </div>
        <div className="mx-auto w-fit">
          <p className="w-fit">Grant Conklin @2024</p>
        </div>
        <div className="h-16"></div>
      </div>
    </diV>
  );
}
