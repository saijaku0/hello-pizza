type Props = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params: { id } }: Props) {
  return <p>Product {id}</p>;
}
