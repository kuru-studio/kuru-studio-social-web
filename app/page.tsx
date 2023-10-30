import Image from "next/image";
import ConstructionImage from "./_assets/illustrations/construction.png";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-3 items-center my-10">
      <div>
        <Image
          src={ConstructionImage}
          width={500}
          height={500}
          alt="Under Construction"
        />
      </div>
      <div>
        Under Construction
      </div>
    </div>
  );
}
