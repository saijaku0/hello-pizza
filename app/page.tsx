import { TopBar, Container, Title, Filters } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="flex mt-10 gh-14">
        <div className="flex gap-[60px]">
          <div className="w-[260px]">
            <Filters />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">List item</div>
        </div>
      </Container>
    </>
  );
}
