interface Props{
  title: string;
  image: string;
}

const CategoryCard = ({title, image}: Props) => {
  return (
    <div className="category_card">
      <div className="category_title">{title}</div>
      <img src={image} alt="" />
    </div>
  )
}

export default CategoryCard