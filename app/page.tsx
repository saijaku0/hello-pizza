import { TopBar, Container, Title, Filters } from "@/components/shared";
import { ProductGroupList } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="flex mt-10 gh-14 gap-[50px]">
        <div className="flex gap-[80px]">
          <div className="w-[260px]">
            <Filters />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductGroupList
              title={"Pizza"}
              products={[
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={0}
            />
            <ProductGroupList
              title={"Combo"}
              products={[
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
                {
                  id: 1,
                  name: "Pizza test 1",
                  imageUrl: "https://placehold.co/40x40",
                  price: 20,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
