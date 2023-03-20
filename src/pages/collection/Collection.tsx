import { useParams } from "react-router-dom";
import { mockApi } from "../../data/mockApi";
import { Tokenlist } from "./Tokenlist";

export const Collection = () => {
  const params = useParams<{ id: string }>();
  const collection = mockApi.getCollectionByName(params.id!);

  return (
    <>
      {/* banner */}
      <div className="relative h-60 w-full bg-gray-200 lg:h-80">
        <img src={collection.banner_image} alt="colllection banner image" className="h-full w-full object-cover" />
      </div>
      <div className="container mx-auto">
        {/* logo image */}
        <div className="relative ml-5 -mt-24 h-32 w-32 overflow-hidden rounded-2xl border-4 bg-white shadow md:-mt-32 md:h-40 md:w-40">
          <img src={collection.logo_image} alt="collection logo image" className="object-cover" />
        </div>

        {/* collection details */}

        <div className="px-0 py-8 sm:px-4 md:px-6 md:py-12">
          <div className="ml-8 lg:ml-0">
            <h1 className="text-3xl outline-none" tabIndex={-1}>
              {collection.display_name}
            </h1>
            <h2>By xxx</h2>

            <div className="hidden lg:block">
              <p className="mt-3 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quasi earum quos, id sed harum quisquam
                laudantium quis cumque! Sapiente tempore quo inventore dolorum magni doloribus earum fugit id omnis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum vero quod assumenda repellat,
                debitis delectus labore doloremque culpa totam eius vitae nulla corporis rerum voluptatem tenetur rem
                inventore dolorem!
              </p>
            </div>

            {/* token list */}
            <section className="mt-5 flex flex-row">
              <Tokenlist collectionId={collection.id} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
