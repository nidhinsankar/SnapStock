import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface AddProductProps {
  image: File;
  title: string;
  description: string;
  price: number;
  category: string;
  count: number;
  rate: number;
}

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      Add product
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3 bg-blue-200 w-[30%]"
      >
        <label htmlFor="image">
          image
          <input type="file" {...register("image")} />
        </label>
        <label htmlFor="title">
          title
          <input type="text" {...register("title")} />
        </label>
        <label htmlFor="description">
          description
          <input type="text" {...register("description")} />
        </label>
        <label htmlFor="price">
          price
          <input type="number" {...register("price")} />
        </label>
        <label htmlFor="category">
          category
          <input type="text" {...register("category")} />
        </label>
        <label htmlFor="rating">
          rating
          <input type="number" {...register("count")} /> -{" "}
          <input type="number" {...register("rate")} />
        </label>
      </form>
    </div>
  );
};

export default AddProduct;
