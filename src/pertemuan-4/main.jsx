import { createRoot } from "react-dom/client";
import "./tailwind.css"
import FrameworkList from "./frameWorkList";
import FrameworkListFilter from "./frameWorkListSearchFilter";
import Responsif from "./Responsif";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListFilter/> */}
            <Responsif/>
        </div>
    )