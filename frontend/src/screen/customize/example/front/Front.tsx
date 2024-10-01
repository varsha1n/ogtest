import man from "../../../assets/grid/customModel.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Front = () => {
  return (
    <div style={{ margin: "auto auto", position: "relative" }}>
      <img useMap="#work" src={man} style={{ position: "relative" }} />
      <map name="work">
        <area shape="circle" coords="150,300,20" alt="sleeves" />
        <area shape="circle" coords="210,500,20" alt="button" />
        <area shape="circle" coords="300,350,20" alt="pocket" />
      </map>
      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "150px",
          width: "15px",
          height: "15px",
          translate: "-50% -50%",
          borderRadius: "50%",
          backgroundColor: "gray",
          outlineColor: "lightgray",
          outlineWidth: "1px",
          outlineOffset: "5px",
          outlineStyle: "auto",
          cursor: "pointer",
        }}
        id="jacket"
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              translate: "-20% -20%",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "50%",
            }}
          ></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Shleeves</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Notched</DropdownMenuItem>
            <DropdownMenuItem>Peak</DropdownMenuItem>
            <DropdownMenuItem>Shawl</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        style={{
          position: "absolute",
          top: "500px",
          left: "210px",
          width: "15px",
          height: "15px",
          translate: "-50% -50%",
          borderRadius: "50%",
          backgroundColor: "gray",
          outlineColor: "lightgray",
          outlineWidth: "1px",
          outlineOffset: "5px",
          outlineStyle: "auto",
          cursor: "pointer",
        }}
        id="jacket"
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              translate: "-20% -20%",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "50%",
            }}
          ></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Button</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Notched</DropdownMenuItem>
            <DropdownMenuItem>Peak</DropdownMenuItem>
            <DropdownMenuItem>Shawl</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        style={{
          position: "absolute",
          top: "350px",
          left: "300px",
          width: "15px",
          height: "15px",
          translate: "-50% -50%",
          borderRadius: "50%",
          backgroundColor: "gray",
          outlineColor: "lightgray",
          outlineWidth: "1px",
          outlineOffset: "5px",
          outlineStyle: "auto",
          cursor: "pointer",
        }}
        id="jacket"
      >
        <DropdownMenu>
          <DropdownMenuTrigger
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              translate: "-20% -20%",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "50%",
            }}
          ></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Button</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Notched</DropdownMenuItem>
            <DropdownMenuItem>Peak</DropdownMenuItem>
            <DropdownMenuItem>Shawl</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Front;
