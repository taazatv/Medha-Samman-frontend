import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBars,
  faPhone,
  faRocket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="flex w-screen items-center justify-around gap-16 bg-[#dd1f58] px-8 py-4 text-white"
    >
      <div className="flex gap-4 py-2 text-3xl font-bold">
        {/* <FontAwesomeIcon icon={faChessQueen} className="text-primary" />
        <div>Youngotsav</div> */}
        <img src={"/taaza-tv.png"} className="h-16" />
      </div>

      <div className="[&_*]:hover:text-primary flex items-center gap-8 text-xl font-semibold [&_*]:not-hover:text-white">
        <a className="max-md:hidden" href="#gallery">
          Gallery
        </a>
        <Drawer>
          <DrawerTrigger className="cursor-pointer text-white">
            <FontAwesomeIcon icon={faBars} />
          </DrawerTrigger>
          <DrawerContent
            data-vaul-drawer-direction="right"
            className="dark space-y-4 p-8 text-white"
          >
            <DrawerHeader className="border-b-2">
              <DrawerClose className="absolute top-4 right-4">
                <Button variant={"ghost"}>
                  <FontAwesomeIcon icon={faXmark} className="text-white" />
                </Button>
              </DrawerClose>
              <img src={"/Medha-logo.png"} className="-mb-4 w-full" />
            </DrawerHeader>
            <div className="text-xl font-bold">About Us</div>
            <div>
              Taaza TV the only National Hindi News Channel from Eastern India
              in a motive to interact with public holds a significant number of
              mass activations in the form of events at various cities.
              Combining broadcasting with events, brands and participants get an
              extraordinary exposure.
            </div>
            <div className="text-xl font-bold">Contacts</div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faRocket} className="text-primary" />
              37 Shakespeare Sarani, Kolkata-17
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              +91 9831669987
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faAt} className="text-primary" />
              events@taazatv.com
            </div>
            <div className="flex w-full justify-center gap-2 text-white">
              <a
                target="_blank"
                href="https://www.instagram.com/taazatv.events?igsh=bGNoNTFvczQyd3lo"
                className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full not-hover:[&*]:text-white hover:[&*]:text-black"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </DrawerContent>
        </Drawer>
        <a
          target="_blank"
          href="https://www.instagram.com/taazatv.events?igsh=bGNoNTFvczQyd3lo"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        {/* <a target="_blank" href="https://taazatv.com/"> */}
        {/* <img className="h-12 max-md:hidden" src="/taaza-tv.png" /> */}
        {/* </a> */}
      </div>
    </section>
  );
}
